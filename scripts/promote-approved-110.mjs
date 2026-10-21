import {readFile,rename,writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {validate} from './validate-data.mjs';

const ROOT=resolve(fileURLToPath(new URL('..',import.meta.url)));
const SOURCE=resolve(ROOT,'staging/student-skill-candidates-110-approved.json');
const TARGET=resolve(ROOT,'data/skills.json');
const TMP=resolve(ROOT,'data/skills.json.tmp');

const categoryByNumber={
 1:['data-analysis','data-management'],2:['data-analysis','data-visualization'],3:['data-analysis','data-management'],4:['data-analysis','statistics'],5:['data-analysis','statistics'],6:['design-content','diagrams'],7:['learning-research','paper-reading'],9:['learning-research','literature-review'],10:['learning-research','study-review'],11:['learning-research','knowledge-explanation'],12:['document-office','resume-writing'],15:['learning-research','study-review'],16:['learning-research','knowledge-explanation'],18:['learning-research','knowledge-explanation'],19:['learning-research','knowledge-explanation'],20:['learning-research','literature-review'],21:['learning-research','literature-review'],23:['learning-research','paper-reading'],26:['learning-research','paper-reading'],27:['learning-research','paper-reading'],29:['learning-research','literature-review'],30:['learning-research','literature-review'],33:['document-office','pdf'],37:['learning-research','knowledge-explanation'],39:['data-analysis','statistics'],44:['learning-research','knowledge-explanation'],46:['programming','project-development'],49:['data-analysis','data-cleaning'],58:['programming','project-development'],59:['programming','project-development'],60:['programming','project-development'],63:['design-content','diagrams'],70:['learning-research','knowledge-explanation'],71:['data-analysis','data-cleaning'],72:['data-analysis','statistics'],73:['learning-research','knowledge-explanation'],76:['document-office','structured-writing'],78:['data-analysis','data-management'],79:['learning-research','literature-review'],80:['document-office','structured-writing'],81:['data-analysis','statistics'],82:['data-analysis','statistics'],85:['learning-research','literature-review'],87:['data-analysis','statistics'],91:['data-analysis','statistics'],93:['data-analysis','statistics'],94:['data-analysis','statistics'],97:['programming','project-development'],99:['programming','project-development'],100:['data-analysis','data-visualization'],101:['data-analysis','data-visualization'],104:['data-analysis','data-visualization'],107:['document-office','structured-writing'],110:['document-office','structured-writing']
};
const categoryNames={'learning-research':'学习科研','document-office':'文档办公',programming:'编程开发','design-content':'设计与内容','data-analysis':'数据分析',automation:'效率自动化','ai-tools':'AI 工具'};
const audienceByCategory={'learning-research':['大学生','研究人员'],'document-office':['大学生','文档工作者'],programming:['开发者','技术学习者'],'design-content':['学生','内容创作者'],'data-analysis':['数据分析学习者','研究人员']};

function clean(value=''){return String(value).replace(/\s+/g,' ').trim()}
function catalogRecord(candidate){
 const [categoryId,subcategoryId]=categoryByNumber[candidate.number]||[];
 if(!categoryId)throw new Error(`Missing category mapping for candidate #${candidate.number}`);
 const dependencyText=candidate.dependencies.length?candidate.dependencies.join('、'):'未发现必须依赖的明确说明';
 const risks=candidate.securityRisks.length?candidate.securityRisks:['来源文件通过静态核对，但仍需在实际使用前检查权限、联网和文件操作'];
 const sourceDeclared=candidate.codexCompatibility.sourceStatus==='source-declared';
 const name=clean(candidate.declaredSkillName||candidate.name).replace(/\s+/g,'-').toLowerCase();
 const nameZh=clean(candidate.functionDescription||candidate.name);
 return {
  id:candidate.id.toLowerCase(),name,nameZh,category:categoryNames[categoryId],
  summaryZh:`帮助用户完成${nameZh}，并按来源说明整理所需输入、步骤和可复核输出。`,
  explanationZh:`该 Skill 主要用于${nameZh}。公开的 SKILL.md、README 和许可证文件已经完成静态核对，识别到的依赖包括：${dependencyText}。本项目尚未执行安装或功能测试，因此来源核对不代表安全、结果质量或 Codex 兼容性已经实测通过。`,
  audience:`适合需要${nameZh}的${audienceByCategory[categoryId].join('和')}；使用者需要能够判断来源、依赖和专业输出是否可靠。`,
  scenarios:[`完成${nameZh}`,`在开始前核对所需资料和依赖`,`检查输出并保留可复核依据`],
  inputExample:`演示性示例，尚未在 Codex 实测：请协助我完成${nameZh}。先列出需要的资料、依赖和风险，不要执行未经确认的命令。`,
  outputExample:`可能得到与${nameZh}相关的分析、步骤或文档草稿；实际结果取决于输入资料、外部依赖和人工复核。`,
  boundaries:[`尚未在 Codex 中实际安装或运行验证`,`文档识别到的依赖：${dependencyText}`,...risks],
  tags:[nameZh,...candidate.dependencies.slice(0,5)],
  keywords:[candidate.name,name,candidate.functionDescription,...candidate.dependencies],
  sourceUrl:candidate.sourceUrl,repositoryUrl:candidate.repositoryUrl,
  stats:{githubStars:null,githubRepo:`${candidate.location.owner}/${candidate.location.repo}`,installs:null,installsSource:null,lastCheckedAt:candidate.reviewedAt},
  installCommand:null,installNote:'来源文件已完成静态核对，但本项目没有核实可直接复制的安装命令；请查看原作者说明。',installCommandStatus:'unavailable',
  codexTestStatus:'not-tested',reviewStatus:'source-checked',demoStatus:'illustrative',
  safetyNote:risks.join('；'),featured:false,screenshots:[],platforms:sourceDeclared?['Codex']:[],
  licenseStatus:'confirmed-repository',sourceCheckedOn:candidate.reviewedAt.slice(0,10),
  categoryId,subcategoryId,tagsVersion:'candidate-audit-2026-10-20',audiences:audienceByCategory[categoryId],collections:[],
  compatibility:{codex:sourceDeclared?'confirmed-by-source':'installable-unverified',confirmedPlatforms:sourceDeclared?['Codex']:[],assessment:candidate.codexCompatibility.assessment},
  license:{status:'confirmed-repository',value:candidate.license.detectedSpdx,sourceUrl:candidate.evidence.license.url},
  auditEvidence:{reviewedAt:candidate.reviewedAt,skillMd:candidate.evidence.skillMd,readme:candidate.evidence.readme,license:candidate.evidence.license,dependencies:candidate.dependencies,securityRisks:candidate.securityRisks}
 };
}

const staged=JSON.parse(await readFile(SOURCE,'utf8')).candidates;
const current=JSON.parse(await readFile(TARGET,'utf8'));
const existing=new Set(current.map(item=>item.id.toLowerCase()));
const promoted=staged.map(catalogRecord);
const conflicts=promoted.filter(item=>existing.has(item.id));
if(conflicts.length)throw new Error(`Refusing to overwrite existing IDs: ${conflicts.map(item=>item.id).join(', ')}`);
const next=[...current,...promoted];
const errors=validate(next);
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`Validated ${next.length} records: ${current.length} existing + ${promoted.length} promoted; 0 overwritten.`);
if(process.argv.includes('--write')){
 await writeFile(TMP,JSON.stringify(next,null,2)+'\n');
 await rename(TMP,TARGET);
 console.log(`Wrote ${promoted.length} records to data/skills.json.`);
}else console.log('Dry-run only. Add --write to save.');
