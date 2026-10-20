import {readFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=resolve(fileURLToPath(new URL('..',import.meta.url)));
export const REQUIRED=['id','name','nameZh','category','summaryZh','explanationZh','audience','inputExample','outputExample','sourceUrl','repositoryUrl'];
export function validate(items){
 const errors=[], ids=new Set();
 if(!Array.isArray(items))return ['Catalog is not an array'];
 for(const [i,item] of items.entries()){
  if(!item||typeof item!=='object'){errors.push(`[${i}] Not an object`);continue;}
  for(const key of REQUIRED)if(typeof item[key]!=='string'||!item[key].trim())errors.push(`[${i}] missing/invalid ${key}`);
  if(item.id&&ids.has(item.id))errors.push(`[${i}] duplicate ${item.id}`);
  ids.add(item.id);
  for(const key of ['sourceUrl','repositoryUrl'])if(item[key]){
    try{const u=new URL(item[key]);if(u.protocol!=='https:')errors.push(`[${i}] ${key} must be https`)}
    catch{errors.push(`[${i}] invalid ${key}`)}
  }
  for(const key of ['scenarios','boundaries','tags','keywords','screenshots','platforms','audiences','collections']){
    if(!Array.isArray(item[key]))errors.push(`[${i}] ${key} must be an array`);
  }
  if(typeof item.categoryId!=='string'||!item.categoryId.trim())errors.push(`[${i}] missing/invalid categoryId`);
  if(typeof item.subcategoryId!=='string'||!item.subcategoryId.trim())errors.push(`[${i}] missing/invalid subcategoryId`);
  if(item.detailZh!==undefined){
    const d=item.detailZh;
    if(!d||typeof d!=='object'||Array.isArray(d))errors.push(`[${i}] detailZh must be an object`);
    else {
      if(typeof d.overview!=='string')errors.push(`[${i}] detailZh.overview must be string`);
      for(const key of ['workflow','requirements'])if(!Array.isArray(d[key])||!d[key].every(x=>typeof x==='string'))errors.push(`[${i}] detailZh.${key} must be string[]`);
    }
  }
  if(item.exampleDetails!==undefined){
    const d=item.exampleDetails;
    if(!d||typeof d!=='object'||Array.isArray(d))errors.push(`[${i}] exampleDetails must be an object`);
    else {
      for(const key of ['context','notes'])if(typeof d[key]!=='string')errors.push(`[${i}] exampleDetails.${key} must be string`);
      for(const key of ['steps','expectedFiles'])if(!Array.isArray(d[key])||!d[key].every(x=>typeof x==='string'))errors.push(`[${i}] exampleDetails.${key} must be string[]`);
    }
  }
  if(item.stats!==undefined){
    const s=item.stats;
    if(!s||typeof s!=='object'||Array.isArray(s))errors.push(`[${i}] stats must be an object`);
    else {
      if(!(s.githubStars===null||(Number.isInteger(s.githubStars)&&s.githubStars>=0)))errors.push(`[${i}] stats.githubStars must be a non-negative integer or null`);
      if(typeof s.githubRepo!=='string'||!s.githubRepo.includes('/'))errors.push(`[${i}] stats.githubRepo must be owner/repo`);
      if(!(s.installs===null||(Number.isInteger(s.installs)&&s.installs>=0)))errors.push(`[${i}] stats.installs must be a non-negative integer or null`);
      if(!(s.installsSource===null||typeof s.installsSource==='string'))errors.push(`[${i}] stats.installsSource must be string or null`);
      if(!(s.lastCheckedAt===null||(typeof s.lastCheckedAt==='string'&&!Number.isNaN(Date.parse(s.lastCheckedAt)))))errors.push(`[${i}] stats.lastCheckedAt must be an ISO date string or null`);
    }
  }
  if(typeof item.featured!=='boolean')errors.push(`[${i}] featured must be boolean`);
  if(!['source-checked','pending'].includes(item.reviewStatus))errors.push(`[${i}] invalid reviewStatus`);
  if(!['illustrative','verified','none'].includes(item.demoStatus))errors.push(`[${i}] invalid demoStatus`);
  if(!(item.installCommand===null||typeof item.installCommand==='string'))errors.push(`[${i}] installCommand must be string or null`);
  if(typeof item.installCommand==='string'&&!item.installCommand.startsWith('npx skills add '))errors.push(`[${i}] unsupported install command; check manually`);
 }
 return errors;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const target=process.argv[2]||resolve(ROOT,'data/skills.json');
 const rows=JSON.parse(await readFile(target,'utf8'));
 const errors=validate(rows);
 if(errors.length){console.error(errors.join('\n'));process.exitCode=1}
 else console.log(`OK: ${rows.length} Skill records, unique IDs and required fields verified.`);
}
