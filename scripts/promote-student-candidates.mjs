/** Promote the audited student candidate batch and apply the fixed IA taxonomy. */
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { resolve, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { validate } from './validate-data.mjs';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const TARGET = resolve(ROOT, 'data/skills.json');
const SOURCE = resolve(ROOT, 'staging/student-skill-candidates.json');
const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);

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

export const collectionMembers = {
  'student-essential': [
    'vercel-labs/skills/find-skills', 'anthropics/skills/pptx', 'anthropics/skills/pdf',
    'anthropics/skills/docx', 'microsoft/cat-agent-skills/study-flashcards',
    'github/awesome-copilot/excalidraw-diagram-generator', 'trainwithshubham/skills/resume-review',
    'bytedance/deer-flow/academic-paper-review', 'anthropics/skills/doc-coauthoring',
    'obra/superpowers/systematic-debugging', 'bytedance/deer-flow/systematic-literature-review'
  ],
  'exam-review': ['microsoft/cat-agent-skills/study-flashcards', 'anthropics/skills/pdf', 'anthropics/skills/pptx', 'gg-skills/explain/explain', 'mattpocock/skills/teach'],
  'papers-reports': ['bytedance/deer-flow/academic-paper-review', 'bytedance/deer-flow/systematic-literature-review', 'anthropics/skills/pdf', 'anthropics/skills/docx', 'anthropics/skills/doc-coauthoring'],
  'internship-career': ['trainwithshubham/skills/resume-review', 'anthropics/skills/docx', 'anthropics/skills/pptx'],
  'coding-starter': ['obra/superpowers/systematic-debugging', 'juliusbrussee/caveman/caveman-commit', 'gg-skills/explain/explain', 'mattpocock/skills/tdd', 'vercel-labs/skills/find-skills']
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

export function collectionsFor(id) {
  return Object.entries(collectionMembers).filter(([, ids]) => ids.includes(id)).map(([key]) => key);
}

export function applyTaxonomy(record) {
  const assignment = assignments[record.id];
  if (!assignment) {
    return {
      ...record,
      platforms: Array.isArray(record.platforms) ? record.platforms : [],
      collections: collectionsFor(record.id)
    };
  }
  const [categoryId, subcategoryId] = assignment || [record.categoryId, record.subcategoryId];
  const categoryName = categoryNames[categoryId] || record.category;
  return {
    ...record,
    category: categoryName,
    categoryId,
    subcategoryId,
    tags: [...new Set([...(record.tags || []), categoryName].filter(Boolean))],
    audiences: [...new Set([...(record.audiences || []), ...(audienceLabels[categoryId] || [])])],
    platforms: Array.isArray(record.platforms) ? record.platforms : [],
    collections: collectionsFor(record.id)
  };
}

export function candidateToRecord(candidate) {
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
    installNote: install.command ? '候选资料包含此命令，但命令来源尚未单独核对；复制不代表安装成功或功能可用。' : '暂无已核实的 Codex 安装命令，请从来源页面获取作者提供的文件与说明。',
    installCommandStatus: install.command ? 'unverified' : 'unavailable',
    codexTestStatus: 'not-tested',
    reviewStatus: 'pending',
    demoStatus: 'illustrative',
    safetyNote: (candidate.securityRisks || []).join('；'),
    featured: false,
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

export function promoteCatalog(current, staged) {
  const candidateMap = new Map(staged.map(candidate => [candidate.id, candidateToRecord(candidate)]));
  const preservedTaxonomyIds = [];
  const next = current.map(old => {
    if (!assignments[old.id]) preservedTaxonomyIds.push(old.id);
    return candidateMap.has(old.id)
      ? { ...old, ...candidateMap.get(old.id) }
      : applyTaxonomy(old);
  });
  const existing = new Set(next.map(item => item.id));
  for (const candidate of staged) if (!existing.has(candidate.id)) next.push(candidateMap.get(candidate.id));
  const collectionChangedIds = next
    .filter(item => JSON.stringify(current.find(old => old.id === item.id)?.collections || []) !== JSON.stringify(item.collections || []))
    .map(item => item.id);
  return { next, existing, preservedTaxonomyIds, collectionChangedIds };
}

if (isMain) {
  const isWrite = process.argv.includes('--write');
  const current = JSON.parse(await readFile(TARGET, 'utf8'));
  const staged = JSON.parse(await readFile(SOURCE, 'utf8')).candidates;
  const { next, existing, preservedTaxonomyIds, collectionChangedIds } = promoteCatalog(current, staged);
  const errors = validate(next);
  if (errors.length) {
    console.error('Validation failed:\n' + errors.join('\n'));
    process.exit(1);
  }

  console.log(`Prepared ${next.length} records: ${next.length - current.length} new, ${staged.filter(item => existing.has(item.id)).length} updated.`);
  const collectionCounts = Object.entries(collectionMembers).map(([id, members]) => `${id}=${members.length}`).join(', ');
  console.log(`Preserved existing category assignments for ${preservedTaxonomyIds.length} records without an explicit mapping; no fallback category was applied.`);
  console.log(`Recalculated collection membership from the curated whitelist (${collectionCounts}). Changed records: ${collectionChangedIds.length}${collectionChangedIds.length ? ` [${collectionChangedIds.join(', ')}]` : ''}.`);
  if (!isWrite) {
    console.log('Dry-run only. Add --write to save.');
    process.exit(0);
  }

  await mkdir(resolve(ROOT, 'data/backups'), { recursive: true });
  const backup = resolve(ROOT, 'data/backups/skills-' + new Date().toISOString().replace(/[:.]/g, '-') + '.json');
  await copyFile(TARGET, backup);
  await writeFile(TARGET, JSON.stringify(next, null, 2) + '\n', 'utf8');
  console.log(`Saved formal catalog. Backup: ${basename(backup)}`);
}
