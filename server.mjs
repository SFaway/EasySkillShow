/** EasySkillShow MVP: zero-dependency local HTTP server + shared read-only API. */
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)));
const PUBLIC = resolve(ROOT, 'public');
const DATA = resolve(ROOT, 'data/skills.json');
const TAXONOMY = resolve(ROOT, 'data/taxonomy.json');
const STUDENT_CANDIDATES = resolve(ROOT, 'staging/student-skill-candidates.json');
const PORT = Number(process.env.PORT || 4173);
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg':'image/svg+xml', '.png':'image/png' };

function json(res, status, content) {
  res.writeHead(status, { 'Content-Type':'application/json; charset=utf-8', 'Cache-Control':'no-store', 'X-Content-Type-Options':'nosniff' });
  res.end(JSON.stringify(content));
}
const norm = value => String(value ?? '').normalize('NFKC').toLocaleLowerCase('zh-CN').trim();
const GROUPS = [
 ['ppt','幻灯片','演示文稿','课件','powerpoint','pptx','slides'],
 ['word','docx','论文','文档','报告'],
 ['pdf','扫描','阅读','ocr'],
 ['网页','前端','网站','ui','web','界面'],
 ['广告','宣传','营销','推广','文案','marketing'],
 ['找','查询','搜索','发现','查找','find','search'],
 ['流程图','可视化','图示','diagram','架构'],
 ['说明','解释','讲解','explain','科普'],
];
function queryAliases(text) {
  const query = norm(text);
  const aliases = new Set([query]);
  for (const g of GROUPS) if(g.some(word=>query.includes(word))) g.forEach(x=>aliases.add(x));
  return [...aliases].filter(x=>x.length>0);
}
function score(record, query) {
  if (!query) return record.featured ? 5 : 1;
  const aliases = queryAliases(query);
  const name = norm([record.name, record.nameZh].join(' '));
  const tags = norm([...(record.tags||[]),...(record.keywords||[]),...(record.audiences||[]),...(record.platforms||[])].join(' '));
  const body = norm([record.summaryZh, record.explanationZh, record.audience, ...(record.scenarios||[])].join(' '));
  const q = norm(query);
  let value = name.includes(q) ? 28 : 0;
  value += tags.includes(q) ? 18 : 0;
  value += body.includes(q) ? 9 : 0;
  for (const word of aliases) {
    if (word.length < 2) continue;
    if (name.includes(word)) value += 6;
    else if (tags.includes(word)) value += 4;
    else if (body.includes(word)) value += 1;
  }
  return value;
}
async function readCatalog() {
  const parsed = JSON.parse(await readFile(DATA,'utf8'));
  if (!Array.isArray(parsed)) throw new Error('data/skills.json must be an array');
  return parsed;
}
async function readTaxonomy() {
  const parsed = JSON.parse(await readFile(TAXONOMY, 'utf8'));
  if (!Array.isArray(parsed.categories) || !Array.isArray(parsed.collections)) throw new Error('data/taxonomy.json is invalid');
  return parsed;
}
function candidateToCatalogItem(candidate) {
  const detail = candidate.detailZh || {};
  const install = candidate.install || {};
  const compatibility = candidate.compatibility || {};
  const license = candidate.license || {};
  return {
    id: candidate.id,
    name: candidate.name,
    nameZh: candidate.nameZh,
    category: candidate.category,
    recommendationRank: candidate.recommendationRank,
    summaryZh: candidate.summaryZh,
    explanationZh: detail.overview || candidate.summaryZh,
    audience: candidate.audience,
    scenarios: candidate.scenarios || detail.suitableScenarios || [],
    inputExample: candidate.inputExample,
    outputExample: candidate.outputExample,
    boundaries: candidate.boundaries || [],
    tags: [candidate.category, ...(detail.coreCapabilities || []).slice(0, 2)],
    keywords: [candidate.name, candidate.nameZh, ...(candidate.scenarios || [])],
    sourceUrl: candidate.sourceUrl,
    repositoryUrl: candidate.repositoryUrl,
    stats: candidate.stats,
    installCommand: install.command || null,
    installNote: install.command
      ? '安装命令来自已核对的来源页面，执行前仍需检查仓库内容。'
      : install.notes || '当前没有已核实的 Codex 安装命令，请查看来源说明。',
    reviewStatus: 'pending',
    demoStatus: 'illustrative',
    safetyNote: (candidate.securityRisks || []).join(''),
    featured: Number(candidate.recommendationRank) <= 4,
    screenshots: [],
    platforms: compatibility.confirmedPlatforms || [],
    licenseStatus: license.status || 'unchecked',
    sourceCheckedOn: '2026-10-18',
    detailZh: {
      overview: detail.overview || '',
      workflow: [...(detail.workflow || []), ...(detail.usageSteps || []).map(step => `使用时：${step}`)],
      requirements: [...(detail.requirements || []), ...(candidate.runtimeRequirements || []).map(item => `运行条件：${item}`)]
    },
    exampleDetails: {
      context: candidate.audience || '',
      steps: detail.usageSteps || [],
      expectedFiles: detail.expectedArtifacts || [],
      notes: '演示性示例，尚未实际运行验证。实际结果取决于 AI 工具、输入材料和运行环境。'
    },
    candidateReview: {
      status: candidate.status,
      recommendationRank: candidate.recommendationRank,
      priority: candidate.priority,
      compatibility,
      license,
      runtimeRequirements: candidate.runtimeRequirements || [],
      securityRisks: candidate.securityRisks || [],
      installBarrier: install.barrier || 'unknown'
    }
  };
}
async function readStudentCandidates() {
  const parsed = JSON.parse(await readFile(STUDENT_CANDIDATES, 'utf8'));
  if (!Array.isArray(parsed.candidates)) throw new Error('staging student candidates must contain candidates[]');
  return parsed.candidates.map(candidateToCatalogItem);
}
async function readCatalogFor(url) {
  return url.searchParams.get('mode') === 'student-candidates' ? readStudentCandidates() : readCatalog();
}
function listSkills(data, url) {
  const q = (url.searchParams.get('q') || '').trim().slice(0,200);
  const category = url.searchParams.get('category') || '全部分类';
  const subcategory = url.searchParams.get('subcategory') || '';
  const collection = url.searchParams.get('collection') || '';
  const sortBy = url.searchParams.get('sort') || 'recommended';
  const onlyFeatured = url.searchParams.get('featured') === 'true';
  const page = Math.max(1,Math.min(10000,Number(url.searchParams.get('page'))||1));
  const limit = Math.max(1,Math.min(100,Number(url.searchParams.get('limit'))||50));
  let result = data.map(item=>({...item, _score:score(item,q)}))
    .filter(item=>(!q || item._score>0)
      && (category==='全部分类'||item.category===category||item.categoryId===category)
      && (!subcategory||item.subcategoryId===subcategory)
      && (!collection||(item.collections||[]).includes(collection))
      && (!onlyFeatured || item.featured));
  result.sort((a,b)=>sortBy==='name'
    ? a.nameZh.localeCompare(b.nameZh,'zh-CN')
    : sortBy==='category'
      ? a.category.localeCompare(b.category,'zh-CN')||a.nameZh.localeCompare(b.nameZh,'zh-CN')
      : b._score-a._score || (a.recommendationRank??999)-(b.recommendationRank??999) || Number(b.featured)-Number(a.featured) || a.nameZh.localeCompare(b.nameZh,'zh-CN'));
  const total = result.length;
  result = result.slice((page-1)*limit,page*limit).map(({_score,...rest})=>rest);
  return { data:result, meta:{q,category,subcategory,collection,sort:sortBy,page,limit,total,hasMore:page*limit<total,dataMode:'local-curated'} };
}
function handler(req,res) {
  (async()=>{
    if (!['GET','HEAD'].includes(req.method)) return json(res,405,{error:'method_not_allowed',message:'Read-only MVP API'});
    const url = new URL(req.url,`http://127.0.0.1:${PORT}`);
    const pathname = url.pathname;
    if (pathname==='/api/v1/health') return json(res,200,{ok:true,version:'0.2.0',dataMode:'local-curated'});
    if (pathname==='/api/v1/categories') {
      const data=await readCatalogFor(url);
      if (url.searchParams.get('mode')==='student-candidates') {
        const categoryNames=[...new Set(data.map(item=>item.category))];
        return json(res,200,{data:[{id:'all',name:'全部分类',count:data.length},...categoryNames.map(name=>({id:name,name,count:data.filter(s=>s.category===name).length,subcategories:[]}))]});
      }
      const taxonomy=await readTaxonomy();
      const rows=taxonomy.categories.map(category=>({
        ...category,
        count:data.filter(item=>item.categoryId===category.id).length,
        subcategories:category.subcategories.map(subcategory=>({
          ...subcategory,
          count:data.filter(item=>item.categoryId===category.id&&item.subcategoryId===subcategory.id).length
        }))
      }));
      return json(res,200,{data:[{id:'all',name:'全部分类',icon:'grid',count:data.length,subcategories:[]},...rows]});
    }
    if (pathname==='/api/v1/taxonomy') {
      const taxonomy=await readTaxonomy();
      return json(res,200,{data:taxonomy});
    }
    if (pathname==='/api/v1/skills') return json(res,200,listSkills(await readCatalogFor(url),url));
    if (pathname.startsWith('/api/v1/skills/')) {
      let id;
      try {id=decodeURIComponent(pathname.slice('/api/v1/skills/'.length));}catch{return json(res,400,{error:'invalid_id'})}
      const entry=(await readCatalogFor(url)).find(s=>s.id===id);
      return entry ? json(res,200,{data:entry}) : json(res,404,{error:'not_found',message:'Skill is not in the local directory'});
    }
    if(pathname.startsWith('/api/')) return json(res,404,{error:'not_found',message:'Endpoint not implemented'});
    let requested;
    try {requested=decodeURIComponent(pathname);}catch{return json(res,400,{error:'invalid_path'})}
    let full=resolve(PUBLIC, '.'+requested);
    if(full!==PUBLIC && !full.startsWith(PUBLIC+sep)) return json(res,403,{error:'forbidden'});
    try {
      let stats=await stat(full);
      if(stats.isDirectory()) {full=resolve(full,'index.html'); stats=await stat(full);}
      if(!stats.isFile()) throw new Error('not_file');
      const buffer=await readFile(full);
      res.writeHead(200,{ 'Content-Type':MIME[extname(full)]||'application/octet-stream', 'X-Content-Type-Options':'nosniff', 'Cache-Control':'no-cache' });
      return res.end(req.method==='HEAD'?undefined:buffer);
    }catch {
      if(!extname(requested)) {
        const html=await readFile(resolve(PUBLIC,'index.html'));
        res.writeHead(200,{'Content-Type':MIME['.html']}); return res.end(html);
      }
      return json(res,404,{error:'not_found'});
    }
  })().catch(err=>{console.error(err); if(!res.headersSent) json(res,500,{error:'server_error',message:'Unable to load local catalog'});});
}
const server=http.createServer(handler);
server.listen(PORT,'127.0.0.1',()=>console.log(`EasySkillShow running: http://localhost:${PORT}`));
