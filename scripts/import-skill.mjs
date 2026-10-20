/** Import reviewed-or-unreviewed Codex output as local catalog drafts. No external code is executed. */
import {readFile,writeFile,mkdir,copyFile} from 'node:fs/promises';
import {resolve,basename} from 'node:path';
import {fileURLToPath} from 'node:url';
import {validate} from './validate-data.mjs';
const ROOT=resolve(fileURLToPath(new URL('..',import.meta.url)));
const filename=process.argv[2];
const isWrite=process.argv.includes('--write');
const allowUpdate=process.argv.includes('--update-existing');
if(!filename){console.error('Usage: npm run import:skill -- staging/skill.json [--update-existing] [--write]');process.exit(2)}
const target=resolve(ROOT,'data/skills.json');
const source=resolve(process.cwd(),filename);
const parsed=JSON.parse(await readFile(source,'utf8'));
const newRows=(Array.isArray(parsed)?parsed:[parsed]).map(r=>({
  ...r,
  reviewStatus:'pending',
  demoStatus:'illustrative',
  sourceCheckedOn:'',
  licenseStatus:'unchecked',
  featured:false,
  screenshots:[],
  platforms:Array.isArray(r.platforms)?r.platforms:[],
  tags:Array.isArray(r.tags)?r.tags:[],
  keywords:Array.isArray(r.keywords)?r.keywords:[],
  scenarios:Array.isArray(r.scenarios)?r.scenarios:[],
  boundaries:Array.isArray(r.boundaries)?r.boundaries:[],
  safetyNote:r.safetyNote||'该条目由 Codex 草拟，尚未完成来源和安全审核。',
  detailZh:r.detailZh||{overview:'',workflow:[],requirements:[]},
  exampleDetails:r.exampleDetails||{context:'',steps:[],expectedFiles:[],notes:''},
}));
const db=JSON.parse(await readFile(target,'utf8'));
const ids=new Set(db.map(r=>r.id));
const toAdd=newRows.filter(row=>!ids.has(row.id));
const duplicates=newRows.filter(row=>ids.has(row.id)).map(x=>x.id);
const updateMap=new Map(allowUpdate?newRows.filter(row=>ids.has(row.id)).map(row=>[row.id,row]):[]);
const merged=db.map(old=>updateMap.has(old.id)?{...old,...updateMap.get(old.id)}:old);
const nextCatalog=[...merged,...toAdd];
const errs=validate(nextCatalog);
if(errs.length){console.error('Validation failed:\n'+errs.join('\n'));process.exit(1)}
console.log(`Incoming ${newRows.length}, add ${toAdd.length}, update ${updateMap.size}, skip existing ${allowUpdate?0:duplicates.length}.`);
if(duplicates.length&&!allowUpdate)console.log('Skipped existing (use --update-existing to explicitly update): '+duplicates.join(', '));
if(!isWrite){console.log('Dry-run only. Add --write to save.');process.exit(0)}
await mkdir(resolve(ROOT,'data/backups'),{recursive:true});
const backup=resolve(ROOT,'data/backups/skills-'+new Date().toISOString().replace(/[:.]/g,'-')+'.json');
await copyFile(target,backup);
await writeFile(target,JSON.stringify(nextCatalog,null,2)+'\n','utf8');
console.log(`Saved ${toAdd.length} new and ${updateMap.size} updated pending-review rows. Backup: ${basename(backup)}`);
