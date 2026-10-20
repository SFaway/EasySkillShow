/** Import Codex output as local catalog drafts. No external Skill code is executed. */
import {readFile,writeFile,mkdir,copyFile} from 'node:fs/promises';
import {resolve,basename} from 'node:path';
import {fileURLToPath} from 'node:url';
import {validate} from './validate-data.mjs';

const ROOT=resolve(fileURLToPath(new URL('..',import.meta.url)));
const TARGET=resolve(ROOT,'data/skills.json');
const IS_MAIN=process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url);

export const PROTECTED_UPDATE_FIELDS=new Set([
  'reviewStatus','demoStatus','sourceCheckedOn','licenseStatus','featured','screenshots',
  'platforms','sourceUrl','repositoryUrl','installCommand','installNote','stats','license',
  'compatibility','runtimeRequirements','securityRisks','name','category','categoryId','subcategoryId',
  'audiences','collections'
]);

const arrayFields=['scenarios','boundaries','tags','keywords','screenshots','platforms','audiences','collections'];

function withSafeShape(row){
  const shaped={...row};
  for(const field of arrayFields)if(shaped[field]!==undefined&&!Array.isArray(shaped[field]))shaped[field]=[];
  return shaped;
}

export function prepareNewRow(row){
  const shaped=withSafeShape(row);
  return {
    ...shaped,
    reviewStatus:'pending',
    demoStatus:'illustrative',
    sourceCheckedOn:'',
    licenseStatus:'unchecked',
    featured:false,
    screenshots:[],
    platforms:Array.isArray(shaped.platforms)?shaped.platforms:[],
    tags:Array.isArray(shaped.tags)?shaped.tags:[],
    keywords:Array.isArray(shaped.keywords)?shaped.keywords:[],
    scenarios:Array.isArray(shaped.scenarios)?shaped.scenarios:[],
    boundaries:Array.isArray(shaped.boundaries)?shaped.boundaries:[],
    audiences:Array.isArray(shaped.audiences)?shaped.audiences:[],
    collections:Array.isArray(shaped.collections)?shaped.collections:[],
    safetyNote:shaped.safetyNote||'该条目由 Codex 草拟，尚未完成来源和安全审核。',
    detailZh:shaped.detailZh||{overview:'',workflow:[],requirements:[]},
    exampleDetails:shaped.exampleDetails||{context:'',steps:[],expectedFiles:[],notes:''},
  };
}

function sameValue(left,right){return JSON.stringify(left)===JSON.stringify(right)}

export function prepareExistingUpdate(existing,incoming,{updateMetadata=false}={}){
  const ignoredFields=[];
  if(updateMetadata){
    const merged=withSafeShape({...existing,...incoming});
    return {
      row:{
        ...merged,
        reviewStatus:'pending',
        demoStatus:'illustrative',
        sourceCheckedOn:'',
        licenseStatus:'unchecked',
        featured:false,
        screenshots:[],
        platforms:Array.isArray(incoming.platforms)?incoming.platforms:(Array.isArray(existing.platforms)?existing.platforms:[]),
      },
      ignoredFields
    };
  }

  const contentUpdate={};
  for(const [key,value] of Object.entries(incoming)){
    if(PROTECTED_UPDATE_FIELDS.has(key)){
      if(!sameValue(existing[key],value))ignoredFields.push(key);
      continue;
    }
    contentUpdate[key]=value;
  }
  return {row:withSafeShape({...existing,...contentUpdate}),ignoredFields};
}

export function mergeCatalog(db,incomingRows,{allowUpdate=false,updateMetadata=false}={}){
  const ids=new Set(db.map(row=>row.id));
  const toAdd=incomingRows.filter(row=>!ids.has(row.id)).map(prepareNewRow);
  const duplicates=incomingRows.filter(row=>ids.has(row.id)).map(row=>row.id);
  const incomingMap=new Map(incomingRows.filter(row=>ids.has(row.id)).map(row=>[row.id,row]));
  const ignoredById=new Map();
  let updated=0;
  const merged=db.map(existing=>{
    if(!allowUpdate||!incomingMap.has(existing.id))return existing;
    const result=prepareExistingUpdate(existing,incomingMap.get(existing.id),{updateMetadata});
    if(result.ignoredFields.length)ignoredById.set(existing.id,result.ignoredFields);
    updated++;
    return result.row;
  });
  return {nextCatalog:[...merged,...toAdd],toAdd,duplicates,updated,ignoredById};
}

if(IS_MAIN){
  const filename=process.argv[2];
  const isWrite=process.argv.includes('--write');
  const allowUpdate=process.argv.includes('--update-existing');
  const updateMetadata=process.argv.includes('--update-metadata');
  if(!filename){console.error('Usage: npm run import:skill -- staging/skill.json [--update-existing] [--update-metadata] [--write]');process.exit(2)}
  if(updateMetadata&&!allowUpdate){console.error('--update-metadata requires --update-existing');process.exit(2)}

  const source=resolve(process.cwd(),filename);
  const parsed=JSON.parse(await readFile(source,'utf8'));
  const incomingRows=Array.isArray(parsed)?parsed:[parsed];
  const db=JSON.parse(await readFile(TARGET,'utf8'));
  const result=mergeCatalog(db,incomingRows,{allowUpdate,updateMetadata});
  const errs=validate(result.nextCatalog);
  if(errs.length){console.error('Validation failed:\n'+errs.join('\n'));process.exit(1)}

  console.log(`Incoming ${incomingRows.length}, add ${result.toAdd.length}, update ${result.updated}, skip existing ${allowUpdate?0:result.duplicates.length}.`);
  if(result.duplicates.length&&!allowUpdate)console.log('Skipped existing (use --update-existing to explicitly update): '+result.duplicates.join(', '));
  for(const [id,fields] of result.ignoredById)console.log(`Preserved reviewed metadata for ${id}: ${fields.join(', ')}. Use --update-metadata to replace it and reset review state.`);
  if(updateMetadata&&result.updated)console.log('Metadata update mode: affected existing records were reset to pending review.');
  if(!isWrite){console.log('Dry-run only. Add --write to save.');process.exit(0)}

  await mkdir(resolve(ROOT,'data/backups'),{recursive:true});
  const backup=resolve(ROOT,'data/backups/skills-'+new Date().toISOString().replace(/[:.]/g,'-')+'.json');
  await copyFile(TARGET,backup);
  await writeFile(TARGET,JSON.stringify(result.nextCatalog,null,2)+'\n','utf8');
  console.log(`Saved ${result.toAdd.length} new and ${result.updated} updated rows. Backup: ${basename(backup)}`);
}
