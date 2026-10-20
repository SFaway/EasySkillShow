import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {setTimeout as wait} from 'node:timers/promises';
import {toggleCategory,subcategoryView} from '../public/navigation-logic.mjs';
const PORT=Number(process.env.TEST_PORT||44173);
const BASE=`http://127.0.0.1:${PORT}`;
const child=spawn(process.execPath,['server.mjs'],{env:{...process.env,PORT:String(PORT)},stdio:'pipe'});
async function get(route){const r=await fetch(BASE+route);return {status:r.status,data:await r.json()}}
try{
 const opened=toggleCategory({category:'全部分类',expandedCategory:'',subcategory:''},'设计与内容');
 assert.equal(opened.expandedCategory,'设计与内容');
 const closed=toggleCategory(opened,'设计与内容');
 assert.equal(closed.category,'设计与内容');assert.equal(closed.expandedCategory,'');
 const many=Array.from({length:8},(_,index)=>({id:`sub-${index+1}`,name:`子分类 ${index+1}`,count:1}));
 const limited=subcategoryView(many,'sub-8',false,5);
 assert.equal(limited.items.length,5);assert.ok(limited.items.some(item=>item.id==='sub-8'));assert.equal(limited.hiddenCount,3);
 const expanded=subcategoryView(many,'sub-8',true,5);
 assert.equal(expanded.items.length,8);assert.equal(expanded.hiddenCount,0);
 let ok=false;
 for(let i=0;i<30;i++){
  try{let r=await get('/api/v1/health');if(r.status===200){ok=true;break}}catch{}
  await wait(100);
 }
 assert.ok(ok,'Server startup timed out');
 const navigationAsset=await fetch(BASE+'/navigation-logic.mjs');
 assert.equal(navigationAsset.status,200);assert.match(navigationAsset.headers.get('content-type')||'',/text\/javascript/);
 const categories=await get('/api/v1/categories');
 assert.equal(categories.status,200);
 assert.ok(categories.data.data.some(x=>x.name==='文档办公'));
 assert.equal(categories.data.data.length,8,'Expected all + 7 fixed top-level categories');
 const officeCategory=categories.data.data.find(x=>x.name==='文档办公');
 assert.ok(officeCategory.subcategories.some(x=>x.name==='PPT'));
 const all=await get('/api/v1/skills');
 assert.equal(all.status,200);assert.ok(all.data.meta.total>=10);
 const ppt=await get('/api/v1/skills?q='+encodeURIComponent('制作 PPT'));
 assert.ok(ppt.data.data.some(x=>x.name==='pptx'),'Expected PPT skill');
 const ads=await get('/api/v1/skills?q='+encodeURIComponent('广告文案'));
 assert.ok(ads.data.data.some(x=>x.name==='ad-creative'));
 const onlyOffice=await get('/api/v1/skills?category='+encodeURIComponent('文档办公'));
 assert.ok(onlyOffice.data.data.length>0);
 assert.ok(onlyOffice.data.data.every(x=>x.category==='文档办公'));
 const taxonomy=await get('/api/v1/taxonomy');
 assert.equal(taxonomy.status,200);assert.equal(taxonomy.data.data.collections.length,5);
 const studentCollection=await get('/api/v1/skills?collection=student-essential');
 assert.ok(studentCollection.data.data.some(x=>x.name==='study-flashcards'));
 const paperSubcategory=await get('/api/v1/skills?subcategory=paper-reading');
 assert.ok(paperSubcategory.data.data.every(x=>x.subcategoryId==='paper-reading'));
 const detail=await get('/api/v1/skills/'+encodeURIComponent('anthropics/skills/pptx'));
 assert.equal(detail.data.data.id,'anthropics/skills/pptx');
 const missing=await get('/api/v1/skills/'+encodeURIComponent('fake/repo/skill'));
 assert.equal(missing.status,404);
 const post=await fetch(BASE+'/api/v1/skills',{method:'POST'});
 assert.equal(post.status,405);
 const candidateList=await get('/api/v1/skills?mode=student-candidates');
 assert.equal(candidateList.status,200);assert.equal(candidateList.data.meta.total,8);
 assert.ok(candidateList.data.data.some(x=>x.name==='study-flashcards'));
 const candidateCategories=await get('/api/v1/categories?mode=student-candidates');
 assert.ok(candidateCategories.data.data.some(x=>x.name==='课程学习'));
 const candidateDetail=await get('/api/v1/skills/'+encodeURIComponent('microsoft/cat-agent-skills/study-flashcards')+'?mode=student-candidates');
 assert.equal(candidateDetail.data.data.name,'study-flashcards');
 assert.equal(candidateDetail.data.data.candidateReview.compatibility.codex,'unverified');
 console.log('PASS: health, formal catalog, staging candidate preview, search, detail, 404, read-only policy');
}catch(error){console.error(error);process.exitCode=1}finally{child.kill('SIGTERM')}
