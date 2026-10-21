import {createHash} from 'node:crypto';
import {readFile, readdir, writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT=resolve(fileURLToPath(new URL('..',import.meta.url)));
const STAGING=resolve(ROOT,'staging');
const REVIEWED_AT=new Date().toISOString();
const inputName=(await readdir(ROOT)).find(name=>name.includes('110')&&name.endsWith('.txt'));
if(!inputName)throw new Error('Candidate list containing "110" was not found');

const sourceText=await readFile(resolve(ROOT,inputName),'utf8');
const catalog=JSON.parse(await readFile(resolve(ROOT,'data/skills.json'),'utf8'));

function clean(value=''){return value.replace(/\s+/g,' ').trim()}
function norm(value=''){return clean(value).toLowerCase().replace(/https?:\/\/(www\.)?/g,'').replace(/[^\p{L}\p{N}]+/gu,'')}
function idSlug(value=''){return clean(value).toLowerCase().replace(/[^a-z0-9._-]+/g,'-').replace(/^-+|-+$/g,'')}
function canonicalUrl(value=''){return value.replace(/\/$/,'').replace('/blob/main/','/blob/HEAD/').replace('/tree/main/','/tree/HEAD/').toLowerCase()}
function sha256(value){return createHash('sha256').update(value).digest('hex')}
function bigrams(value){const n=norm(value);return new Set(Array.from({length:Math.max(0,n.length-1)},(_,i)=>n.slice(i,i+2)))}
function similarity(a,b){const aa=bigrams(a),bb=bigrams(b);if(!aa.size||!bb.size)return 0;let hit=0;for(const token of aa)if(bb.has(token))hit++;return (2*hit)/(aa.size+bb.size)}

function parseCandidates(text){
 const flat=text.replace(/\r?\n/g,' ');
 const regex=/(?:^|\s)(\d{1,3})\s*\|\s*(.*?)(https:\/\/github\.com\/\S+)/g;
 const rows=[];let match;
 while((match=regex.exec(flat))){
  const number=Number(match[1]);
  if(number<1||number>110)continue;
  const fields=match[2].split('|').map(clean).filter(Boolean);
  const url=match[3].replace(/[),.;]+$/,'');
  rows.push(number<=15
   ? {number,name:fields[0],functionDescription:fields[0],categoryClaim:'通用大学生场景',licenseClaim:fields[1]||'未核实',sourceUrl:url}
   : {number,name:fields[0],functionDescription:fields[1]||fields[0],categoryClaim:fields[1]||'科研学术',licenseClaim:fields[2]||'未核实',sourceUrl:url});
 }
 if(rows.length!==110||new Set(rows.map(row=>row.number)).size!==110)throw new Error(`Expected 110 candidates, parsed ${rows.length}`);
 return rows.sort((a,b)=>a.number-b.number);
}

function parseGitHubUrl(sourceUrl){
 const url=new URL(sourceUrl);const parts=url.pathname.split('/').filter(Boolean);
 const [owner,repo]=parts;let ref='HEAD',path='';
 if(parts[2]==='blob'||parts[2]==='tree'){ref=parts[3]||'HEAD';path=parts.slice(4).map(part=>decodeURIComponent(part)).join('/')}
 const isFile=/\/SKILL\.md$/i.test('/'+path);
 const directory=isFile?path.replace(/\/?SKILL\.md$/i,''):path;
 const skillPath=isFile?path:[directory,'SKILL.md'].filter(Boolean).join('/');
 const fallbackSlug=(directory.split('/').filter(Boolean).pop()||repo).toLowerCase();
 return {owner,repo,ref,path,directory,skillPath,fallbackSlug,repositoryUrl:`https://github.com/${owner}/${repo}`};
}

function rawUrl(location,path){return `https://raw.githubusercontent.com/${location.owner}/${location.repo}/${location.ref}/${path.split('/').map(encodeURIComponent).join('/')}`}
const fetchCache=new Map();
async function fetchText(url){
 if(fetchCache.has(url))return fetchCache.get(url);
 const promise=(async()=>{
  let lastError='';
  for(let attempt=1;attempt<=3;attempt++){
   try{
    const response=await fetch(url,{headers:{'user-agent':'EasySkillShow-source-audit/0.2'},signal:AbortSignal.timeout(25000)});
    if(response.status===404)return {url,exists:false,status:404,bytes:0,sha256:null,text:''};
    if(!response.ok){lastError=`HTTP ${response.status}`;if(response.status<500&&response.status!==429)break}
    else{
     const text=await response.text();
     if(text.length>2_000_000)return {url,exists:false,status:response.status,bytes:text.length,sha256:null,text:'',error:'file-too-large'};
     return {url,exists:true,status:response.status,bytes:Buffer.byteLength(text),sha256:sha256(text),text};
    }
   }catch(error){lastError=error.name==='TimeoutError'?'timeout':error.message}
   await new Promise(resolveDelay=>setTimeout(resolveDelay,attempt*500));
  }
  return {url,exists:false,status:null,bytes:0,sha256:null,text:'',error:lastError||'fetch-failed'};
 })();
 fetchCache.set(url,promise);return promise;
}

async function firstExisting(urls){
 const checked=[];
 for(const url of urls){const result=await fetchText(url);checked.push({url,status:result.status,error:result.error});if(result.exists)return {...result,checked}}
 return {...(await fetchText(urls[0])),checked};
}

function publicEvidence(result){
 return {url:result.url,exists:result.exists,status:result.status,bytes:result.bytes,sha256:result.sha256,error:result.error||null,checkedUrls:result.checked};
}

function frontmatterName(text){const match=text.match(/^---\s*[\r\n]+([\s\S]*?)[\r\n]+---/);if(!match)return null;return clean(match[1].match(/^name:\s*["']?([^\r\n"']+)/mi)?.[1]||'')||null}
function detectLicense(text){
 const value=text.toLowerCase();
 if(/apache license[\s\S]{0,80}version 2\.0/.test(value))return 'Apache-2.0';
 if(/mit no attribution|mit-0|permission is hereby granted, free of charge[\s\S]{0,500}the software is provided "as is"[\s\S]{0,300}without restriction/.test(value))return 'MIT-0';
 if(/permission is hereby granted, free of charge/.test(value))return 'MIT';
 if(/bsd 2-clause|redistribution and use in source and binary forms[\s\S]{0,600}neither the name/.test(value))return /non-endorsement|neither the name/.test(value)?'BSD-3-Clause':'BSD-2-Clause';
 if(/gnu lesser general public license[\s\S]{0,100}version 3/.test(value))return 'LGPL-3.0';
 if(/gnu general public license[\s\S]{0,100}version 3/.test(value))return 'GPL-3.0';
 if(/mozilla public license[\s\S]{0,100}2\.0/.test(value))return 'MPL-2.0';
 return null;
}
function claimedLicense(value){
 const text=value.toLowerCase();
 if(text.includes('apache-2.0'))return 'Apache-2.0';if(text.includes('mit-0'))return 'MIT-0';if(/\bmit\b/.test(text))return 'MIT';
 if(text.includes('bsd-2'))return 'BSD-2-Clause';if(text.includes('bsd-3'))return 'BSD-3-Clause';if(text.includes('lgpl-3'))return 'LGPL-3.0';if(text.includes('gpl-3'))return 'GPL-3.0';return null;
}
const dependencyRules=[
 ['API Key/凭证',/api[_ -]?key|access token|credentials?|oauth|secret key/i],['外部联网',/https?:\/\/|internet access|network access|web search|download/i],
 ['浏览器或浏览器 MCP',/browser(?:base)?|playwright|puppeteer|chrome|浏览器|browser mcp/i],['MCP 服务',/\bmcp\b|model context protocol/i],
 ['Python/pip/uv',/\bpython\b|\bpip(?:3)? install\b|\buv\b|conda/i],['Node/npm',/\bnode(?:\.js)?\b|\bnpm\b|\bnpx\b|pnpm|yarn/i],
 ['R 环境',/\brscript\b|\br package\b|install\.packages|\bcran\b/i],['Docker/容器',/\bdocker\b|container/i],
 ['LaTeX/TeX',/\blatex\b|\btexlive\b|\bpdflatex\b|\bxelatex\b/i],['GPU/模型训练',/\bgpu\b|cuda|model training|fine-tun/i],
 ['外部 CLI/二进制',/command[- ]line|\bcli\b|binary|executable|brew install|apt(?:-get)? install/i]
];
function detectDependencies(text){return dependencyRules.filter(([,pattern])=>pattern.test(text)).map(([label])=>label)}
function detectRisks(text,description){
 const values=[];const combined=`${text}\n${description}`;
 if(/\brm\s+-rf\b|\bsudo\b|curl[^\n|]{0,120}\|\s*(?:sh|bash)|powershell[^\n]{0,80}(?:iex|invoke-expression)/i.test(combined))values.push('包含高风险或提权型命令，需要逐条人工审查');
 if(/subprocess|child_process|exec\(|shell command|run command|执行命令/i.test(combined))values.push('可能执行本地命令或脚本');
 if(/write (?:to )?file|modify files?|delete files?|filesystem|文件读写|覆盖文件/i.test(combined))values.push('可能读取、写入或修改本地文件');
 if(/api[_ -]?key|access token|credentials?|oauth|secret key/i.test(combined))values.push('涉及 API Key、令牌或其他凭证');
 if(/https?:\/\/|web search|browser|download|联网|网络/i.test(combined))values.push('可能联网、下载内容或访问外部服务');
 if(/medical|clinical|patient|genomic|bioinformatics|chemical|drug|医学|临床|基因|化学/i.test(combined))values.push('专业或高风险领域输出不能替代专家审核');
 if(/personal data|personally identifiable|privacy|location|geospatial|访谈|问卷|隐私|经纬度/i.test(combined))values.push('可能处理个人、研究参与者或位置数据');
 if(/gpu|cuda|model training|fine-tun|强化学习|训练/i.test(combined))values.push('可能消耗大量算力、存储或云服务费用');
 return [...new Set(values)];
}
function compatibility(skillText,readmeText,location){
 const text=`${skillText}\n${readmeText}`;
 if(/\bcodex\b|openai codex/i.test(text))return {sourceStatus:'source-declared',assessment:'来源文本提到 Codex，但本项目未实际安装或运行验证',codexTestStatus:'not-tested'};
 if(/claude code hook|\.claude\/|claude-specific|only works with claude/i.test(text)||location.directory.includes('.claude/'))return {sourceStatus:'adaptation-required',assessment:'包含 Claude 专用路径、钩子或工作流，迁移到 Codex 前需要人工适配',codexTestStatus:'not-tested'};
 return {sourceStatus:'portable-unverified',assessment:'SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测',codexTestStatus:'not-tested'};
}

const parsed=parseCandidates(sourceText).map(row=>({...row,location:parseGitHubUrl(row.sourceUrl)}));
const catalogIds=new Map(catalog.map(item=>[norm(item.id),item]));
const catalogRepos=new Map();
for(const item of catalog){const key=canonicalUrl(item.repositoryUrl||'');if(!catalogRepos.has(key))catalogRepos.set(key,[]);catalogRepos.get(key).push(item)}

async function mapLimit(items,limit,mapper){
 const output=new Array(items.length);let cursor=0;
 async function worker(){while(cursor<items.length){const index=cursor++;output[index]=await mapper(items[index],index)}}
 await Promise.all(Array.from({length:limit},worker));return output;
}

const reusableAudit=process.argv.includes('--reuse-audit')
 ? JSON.parse(await readFile(resolve(STAGING,'student-skill-candidates-110-audit.json'),'utf8')).candidates
 : null;
const audited=reusableAudit||await mapLimit(parsed,8,async row=>{
 const l=row.location;
 const skillPaths=[l.skillPath,l.skillPath.replace(/SKILL\.md$/i,'skill.md')];
 if(!l.directory)skillPaths.push(`skills/${l.repo}/SKILL.md`,'skill/SKILL.md',`.agents/skills/${l.repo}/SKILL.md`,`.claude/skills/${l.repo}/SKILL.md`);
 const skill=await firstExisting([...new Set(skillPaths.map(path=>rawUrl(l,path)))]);
 const readme=await firstExisting([...new Set([
  rawUrl(l,[l.directory,'README.md'].filter(Boolean).join('/')),rawUrl(l,'README.md'),rawUrl(l,'readme.md')
 ])]);
 const license=await firstExisting(['LICENSE','LICENSE.md','LICENSE.txt','COPYING','COPYING.md'].map(path=>rawUrl(l,path)));
 const declaredName=frontmatterName(skill.text);const slug=idSlug(declaredName||l.fallbackSlug)||l.fallbackSlug;
 const id=`${l.owner}/${l.repo}/${slug}`;
 const sameRepo=(catalogRepos.get(canonicalUrl(l.repositoryUrl))||[]).map(item=>item.id);
 const exactId=catalogIds.get(norm(id));
 const bestFunctional=catalog.map(item=>({id:item.id,score:0.55*similarity(row.name,`${item.name} ${item.nameZh}`)+0.45*similarity(row.functionDescription,`${item.nameZh} ${item.summaryZh}`)})).sort((a,b)=>b.score-a.score)[0];
 const sourceTextCombined=`${skill.text}\n${readme.text}`;const detectedLicense=detectLicense(license.text);const claimed=claimedLicense(row.licenseClaim);
 const compat=compatibility(skill.text,readme.text,l);const dependencies=detectDependencies(sourceTextCombined);const risks=detectRisks(sourceTextCombined,row.functionDescription);
 return {...row,id,repositoryUrl:l.repositoryUrl,skillPath:l.skillPath,declaredSkillName:declaredName,
  evidence:{skillMd:publicEvidence(skill),readme:publicEvidence(readme),license:publicEvidence(license)},
  license:{claim:row.licenseClaim,claimedSpdx:claimed,detectedSpdx:detectedLicense,status:!license.exists?'missing':claimed&&detectedLicense&&claimed!==detectedLicense?'mismatch':detectedLicense?'verified-file':'unrecognized-file'},
  codexCompatibility:compat,dependencies,securityRisks:risks,
  duplicateEvidence:{exactCatalogId:exactId?.id||null,sameRepositoryCatalogIds:sameRepo,bestFunctionalCatalogMatch:bestFunctional?.score>=0.35?{id:bestFunctional.id,score:Number(bestFunctional.score.toFixed(3))}:null},
  installCommandStatus:'unavailable',reviewStatus:'pending',reviewedAt:REVIEWED_AT
 };
});

const candidateRepoGroups=new Map();
for(const item of audited){const key=canonicalUrl(item.repositoryUrl);if(!candidateRepoGroups.has(key))candidateRepoGroups.set(key,[]);candidateRepoGroups.get(key).push(item.number)}
for(const item of audited){
 const bestCandidate=audited.filter(other=>other.number!==item.number).map(other=>({number:other.number,id:other.id,score:0.55*similarity(item.name,other.name)+0.45*similarity(item.functionDescription,other.functionDescription)})).sort((a,b)=>b.score-a.score)[0];
 item.duplicateEvidence.sameRepositoryCandidateNumbers=(candidateRepoGroups.get(canonicalUrl(item.repositoryUrl))||[]).filter(number=>number!==item.number);
 item.duplicateEvidence.bestFunctionalCandidateMatch=bestCandidate?.score>=0.35?{number:bestCandidate.number,id:bestCandidate.id,score:Number(bestCandidate.score.toFixed(3))}:null;
}

const seenIds=new Map(),seenPaths=new Map();
for(const item of audited){
 const duplicateReasons=[];const idKey=norm(item.id),pathKey=canonicalUrl(item.evidence.skillMd.url);
 if(item.duplicateEvidence.exactCatalogId)duplicateReasons.push(`与正式目录 ID 重复：${item.duplicateEvidence.exactCatalogId}`);
 if(seenIds.has(idKey))duplicateReasons.push(`与候选 #${seenIds.get(idKey)} ID 重复`);else seenIds.set(idKey,item.number);
 if(seenPaths.has(pathKey))duplicateReasons.push(`与候选 #${seenPaths.get(pathKey)} SKILL.md 路径重复`);else seenPaths.set(pathKey,item.number);
 if(item.duplicateEvidence.bestFunctionalCatalogMatch?.score>=0.95)duplicateReasons.push(`与正式目录功能高度重合：${item.duplicateEvidence.bestFunctionalCatalogMatch.id}（${item.duplicateEvidence.bestFunctionalCatalogMatch.score}）`);
 if(item.duplicateEvidence.bestFunctionalCandidateMatch?.score>=0.95&&item.duplicateEvidence.bestFunctionalCandidateMatch.number<item.number)duplicateReasons.push(`与候选 #${item.duplicateEvidence.bestFunctionalCandidateMatch.number} 功能高度重合（${item.duplicateEvidence.bestFunctionalCandidateMatch.score}）`);
 const rejectionReasons=[...duplicateReasons];
 if(!item.evidence.skillMd.exists)rejectionReasons.push('无法取得候选路径下的 SKILL.md');
 if(!item.evidence.readme.exists)rejectionReasons.push('无法取得候选目录或仓库 README');
 if(!item.evidence.license.exists)rejectionReasons.push('仓库未取得独立 LICENSE/COPYING 文件');
 if(item.license.status==='mismatch')rejectionReasons.push(`许可证声明 ${item.license.claimedSpdx} 与文件识别结果 ${item.license.detectedSpdx} 不一致`);
 if(item.license.status==='unrecognized-file')rejectionReasons.push('取得许可证文件，但无法可靠识别许可证类型');
 if(item.securityRisks.some(value=>value.startsWith('包含高风险')))rejectionReasons.push('发现高风险命令模式，需要人工逐行复核后才能通过');
 if(item.codexCompatibility.sourceStatus==='adaptation-required')rejectionReasons.push('存在 Claude 专用路径或工作流，Codex 适配尚未核实');
 item.deduplication={status:duplicateReasons.length?'duplicate':'unique',reasons:duplicateReasons,repositoryOverlapOnly:(item.duplicateEvidence.sameRepositoryCatalogIds.length>0||item.duplicateEvidence.sameRepositoryCandidateNumbers.length>0)&&!duplicateReasons.length};
 item.decision=rejectionReasons.length?'not-approved':'approved-for-staging';item.reasons=rejectionReasons;
}

const approved=audited.filter(item=>item.decision==='approved-for-staging');
const notApproved=audited.filter(item=>item.decision!=='approved-for-staging');
const summary={inputCandidates:audited.length,approved:approved.length,notApproved:notApproved.length,duplicates:audited.filter(item=>item.deduplication.status==='duplicate').length,repositoryOverlaps:audited.filter(item=>item.deduplication.repositoryOverlapOnly).length,missingSkillMd:audited.filter(item=>!item.evidence.skillMd.exists).length,missingReadme:audited.filter(item=>!item.evidence.readme.exists).length,missingLicense:audited.filter(item=>!item.evidence.license.exists).length,codexActuallyTested:0};

const dedup={generatedAt:REVIEWED_AT,method:{id:'由 GitHub owner/repo 与 SKILL.md frontmatter name（缺失时使用目录名）组成，进行规范化比较',repositoryUrl:'同时检查正式目录和 110 条候选内部的仓库重合；同仓库不同 SKILL.md 不会自动删除',functionDescription:'名称相似度占 55%，功能描述相似度占 45%；同时和正式目录、其他候选比较，综合分 >=0.95 才判为高度功能重复。不同工具或运行环境即使类别描述相同也保留。'},summary,items:audited.map(item=>({number:item.number,id:item.id,name:item.name,sourceUrl:item.sourceUrl,status:item.deduplication.status,reasons:item.deduplication.reasons,repositoryOverlapCatalogIds:item.duplicateEvidence.sameRepositoryCatalogIds,repositoryOverlapCandidateNumbers:item.duplicateEvidence.sameRepositoryCandidateNumbers,bestFunctionalCatalogMatch:item.duplicateEvidence.bestFunctionalCatalogMatch,bestFunctionalCandidateMatch:item.duplicateEvidence.bestFunctionalCandidateMatch}))};
const approvedOutput={generatedAt:REVIEWED_AT,sourceFile:inputName,notice:'仅为 staging 审核结果，不属于正式目录；Codex 均未实际安装或运行验证。',summary,candidates:approved};
const fullAudit={generatedAt:REVIEWED_AT,sourceFile:inputName,summary,candidates:audited};

const statusMark=value=>value?'是':'否';
const compact=value=>value.length?value.join('；'):'无额外依赖或风险关键词';
const rows=audited.map(item=>`| ${item.number} | ${item.name.replace(/\|/g,'/')} | ${item.deduplication.status==='unique'?'唯一':'重复'} | ${statusMark(item.evidence.skillMd.exists)} | ${statusMark(item.evidence.readme.exists)} | ${item.license.detectedSpdx||item.license.status} | ${item.codexCompatibility.sourceStatus} | ${item.decision==='approved-for-staging'?'通过 staging':'未通过'} | ${(item.reasons.join('；')||'文档齐全；风险与依赖已记录').replace(/\|/g,'/')} |`).join('\n');
const report=`# EasySkillShow 110 条候选审核报告\n\n生成时间：${REVIEWED_AT}\n\n> 本报告核对公开 GitHub 文件，不执行候选中的任何安装命令、脚本或外部工具。所有候选的 Codex 状态均为 \`not-tested\`，通过仅表示可以进入 staging 继续评估。\n\n## 汇总\n\n- 输入候选：${summary.inputCandidates}\n- 去重后可独立审核：${summary.inputCandidates-summary.duplicates}\n- 重复项：${summary.duplicates}\n- 通过并写入候选 JSON：${summary.approved}\n- 未通过但完整保留原因：${summary.notApproved}\n- 缺少 SKILL.md：${summary.missingSkillMd}\n- 缺少 README：${summary.missingReadme}\n- 缺少或无法取得 LICENSE：${summary.missingLicense}\n- 已在 Codex 实测：0\n\n## 判定规则\n\n1. 同 ID、同 SKILL.md 路径或功能综合相似度达到 0.95 的条目判为重复。仓库 URL 相同但 Skill 路径不同只记录重合，不自动删除；Python/R 等不同运行环境也保留。\n2. SKILL.md、README、独立 LICENSE/COPYING 文件必须可以取得；许可证声明冲突或无法识别时不通过。\n3. 来源提到 Codex、格式可能兼容和在 Codex 实际验证是三个不同状态。本轮没有执行安装，因此不产生“已实测”结论。\n4. 依赖和风险通过公开文档关键词做保守归类；发现提权、管道执行或破坏性命令时必须转人工复核。\n\n## 逐项结果\n\n| # | 候选 | 去重 | SKILL | README | LICENSE | Codex 来源判断 | 结论 | 原因 |\n|---:|---|:---:|:---:|:---:|---|---|---|---|\n${rows}\n\n## 依赖与安全风险明细\n\n${audited.map(item=>`### ${item.number}. ${item.name}\n\n- ID：\`${item.id}\`\n- 来源：${item.sourceUrl}\n- Codex：${item.codexCompatibility.assessment}\n- 依赖：${compact(item.dependencies)}\n- 风险：${compact(item.securityRisks)}\n- 结论：${item.decision==='approved-for-staging'?'通过 staging':'未通过'}${item.reasons.length?`；${item.reasons.join('；')}`:''}`).join('\n\n')}\n`;

await writeFile(resolve(STAGING,'student-skill-candidates-110-dedup.json'),JSON.stringify(dedup,null,2)+'\n');
await writeFile(resolve(STAGING,'student-skill-candidates-110-approved.json'),JSON.stringify(approvedOutput,null,2)+'\n');
await writeFile(resolve(STAGING,'student-skill-candidates-110-audit.json'),JSON.stringify(fullAudit,null,2)+'\n');
await writeFile(resolve(STAGING,'student-skill-candidates-110-audit-report.md'),report);
console.log(JSON.stringify(summary,null,2));
