/** Promote the audited student candidate batch and apply the fixed IA taxonomy. */
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { resolve, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { validate } from './validate-data.mjs';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const TARGET = resolve(ROOT, 'data/skills.json');
const SOURCE = resolve(ROOT, 'staging/student-skill-candidates.json');
const isWrite = process.argv.includes('--write');

const assignments = {
  'vercel-labs/skills/find-skills': ['ai-tools', 'skill-discovery'],
  'anthropics/skills/pptx': ['document-office', 'presentations'],
  'anthropics/skills/pdf': ['document-office', 'pdf'],
  'anthropics/skills/docx': ['document-office', 'word-docs'],
  'anthropics/skills/frontend-design': ['design-content', 'web-ui'],
  'vercel-labs/agent-skills/web-design-guidelines': ['design-content', 'design-review'],
  'coreyhaines31/marketingskills/ad-creative': ['design-content', 'marketing-copy'],
  'tt-a1i/archify/archify': ['design-content', 'diagrams'],
  'gg-skills/explain/explain': ['learning-research', 'knowledge-explanation'],
  'auldsyababua/instructor-workflow/skill-doc-generator': ['ai-tools', 'skill-development'],
  'microsoft/cat-agent-skills/study-flashcards': ['learning-research', 'study-review'],
  'github/awesome-copilot/excalidraw-diagram-generator': ['design-content', 'diagrams'],
  'trainwithshubham/skills/resume-review': ['document-office', 'resume-writing'],
  'bytedance/deer-flow/academic-paper-review': ['learning-research', 'paper-reading'],
  'anthropics/skills/doc-coauthoring': ['document-office', 'structured-writing'],
  'obra/superpowers/systematic-debugging': ['programming', 'debugging'],
  'bytedance/deer-flow/systematic-literature-review': ['learning-research', 'literature-review']
};

const categoryNames = {
  'learning-research': '学习科研',
  'document-office': '文档办公',
  programming: '编程开发',
  'design-content': '设计与内容',
  'data-analysis': '数据分析',
  automation: '效率自动化',
  'ai-tools': 'AI 工具'
};

const collectionMembers = {
  'student-essential': [
    'vercel-labs/skills/find-skills', 'anthropics/skills/pptx', 'anthropics/skills/pdf',
    'anthropics/skills/docx', 'microsoft/cat-agent-skills/study-flashcards',
    'github/awesome-copilot/excalidraw-diagram-generator', 'trainwithshubham/skills/resume-review',
    'bytedance/deer-flow/academic-paper-review', 'anthropics/skills/doc-coauthoring',
    'obra/superpowers/systematic-debugging', 'bytedance/deer-flow/systematic-literature-review'
  ],
  'exam-review': ['microsoft/cat-agent-skills/study-flashcards', 'anthropics/skills/pdf', 'anthropics/skills/pptx', 'gg-skills/explain/explain'],
  'papers-reports': ['bytedance/deer-flow/academic-paper-review', 'bytedance/deer-flow/systematic-literature-review', 'anthropics/skills/pdf', 'anthropics/skills/docx', 'anthropics/skills/doc-coauthoring'],
  'internship-career': ['trainwithshubham/skills/resume-review', 'anthropics/skills/docx', 'anthropics/skills/pptx'],
  'coding-starter': ['obra/superpowers/systematic-debugging', 'anthropics/skills/frontend-design', 'vercel-labs/agent-skills/web-design-guidelines', 'vercel-labs/skills/find-skills']
};

const audienceLabels = {
  'learning-research': ['大学生', '学习者'],
  'document-office': ['大学生', '办公用户'],
  programming: ['开发者', '编程学习者'],
  'design-content': ['创作者', '开发者'],
  'data-analysis': ['数据分析者'],
  automation: ['效率工具用户'],
  'ai-tools': ['AI 工具用户', '开发者']
};

function collectionsFor(id) {
  return Object.entries(collectionMembers).filter(([, ids]) => ids.includes(id)).map(([key]) => key);
}

function applyTaxonomy(record) {
  const [categoryId, subcategoryId] = assignments[record.id] || ['ai-tools', 'agent-tools'];
  return {
    ...record,
    category: categoryNames[categoryId],
    categoryId,
    subcategoryId,
    tags: [...new Set([...(record.tags || []), categoryNames[categoryId]])],
    audiences: [...new Set([...(record.audiences || []), ...(audienceLabels[categoryId] || [])])],
    platforms: Array.isArray(record.platforms) ? record.platforms : [],
    collections: collectionsFor(record.id)
  };
}

function candidateToRecord(candidate) {
  const detail = candidate.detailZh || {};
  const install = candidate.install || {};
  const compatibility = candidate.compatibility || {};
  const license = candidate.license || {};
  return applyTaxonomy({
    id: candidate.id,
    name: candidate.name,
    nameZh: candidate.nameZh,
    summaryZh: candidate.summaryZh,
    explanationZh: detail.overview || candidate.summaryZh,
    audience: candidate.audience,
    scenarios: candidate.scenarios || detail.suitableScenarios || [],
    inputExample: candidate.inputExample,
    outputExample: candidate.outputExample,
    boundaries: candidate.boundaries || [],
    tags: [...(detail.coreCapabilities || []).slice(0, 4)],
    keywords: [candidate.name, candidate.nameZh, ...(candidate.scenarios || [])],
    sourceUrl: candidate.sourceUrl,
    repositoryUrl: candidate.repositoryUrl,
    stats: candidate.stats,
    installCommand: install.command || null,
    installNote: install.command ? '安装命令来自已核对的来源页面，执行前仍需检查仓库内容。' : '暂无已核实的 Codex 安装命令，请从来源页面获取作者提供的文件与说明。',
    reviewStatus: 'pending',
    demoStatus: 'illustrative',
    safetyNote: (candidate.securityRisks || []).join('；'),
    featured: Number(candidate.recommendationRank) <= 4,
    screenshots: [],
    platforms: compatibility.confirmedPlatforms || [],
    licenseStatus: license.status || 'unchecked',
    sourceCheckedOn: '2026-10-18',
    recommendationRank: candidate.recommendationRank,
    compatibility,
    license,
    runtimeRequirements: candidate.runtimeRequirements || [],
    securityRisks: candidate.securityRisks || [],
    detailZh: {
      overview: detail.overview || '',
      workflow: detail.workflow || [],
      requirements: [...(detail.requirements || []), ...(candidate.runtimeRequirements || [])]
    },
    exampleDetails: {
      context: candidate.audience || '',
      steps: detail.usageSteps || [],
      expectedFiles: detail.expectedArtifacts || [],
      notes: '演示性示例，尚未实际运行验证。实际结果取决于 AI 工具、输入材料和运行环境。'
    }
  });
}

const current = JSON.parse(await readFile(TARGET, 'utf8'));
const staged = JSON.parse(await readFile(SOURCE, 'utf8')).candidates;
const candidateMap = new Map(staged.map(candidate => [candidate.id, candidateToRecord(candidate)]));
const next = current.map(old => candidateMap.has(old.id)
  ? { ...old, ...candidateMap.get(old.id) }
  : applyTaxonomy(old));
const existing = new Set(next.map(item => item.id));
for (const candidate of staged) if (!existing.has(candidate.id)) next.push(candidateMap.get(candidate.id));

const errors = validate(next);
if (errors.length) {
  console.error('Validation failed:\n' + errors.join('\n'));
  process.exit(1);
}

console.log(`Prepared ${next.length} records: ${next.length - current.length} new, ${staged.filter(item => existing.has(item.id)).length} updated, fixed 7-category taxonomy applied.`);
if (!isWrite) {
  console.log('Dry-run only. Add --write to save.');
  process.exit(0);
}

await mkdir(resolve(ROOT, 'data/backups'), { recursive: true });
const backup = resolve(ROOT, 'data/backups/skills-' + new Date().toISOString().replace(/[:.]/g, '-') + '.json');
await copyFile(TARGET, backup);
await writeFile(TARGET, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(`Saved formal catalog. Backup: ${basename(backup)}`);
