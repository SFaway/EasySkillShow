export const taskEntries = [
  {id:'papers',title:'写论文与报告',description:'找资料、读文献、整理引用与生成报告',icon:'book',collection:'papers-reports'},
  {id:'exam',title:'期末复习',description:'制作闪卡、复习提纲和练习材料',icon:'spark',collection:'exam-review'},
  {id:'ppt',title:'制作 PPT',description:'从内容提纲到演示文稿制作与修改',icon:'file',category:'文档办公',subcategory:'presentations'},
  {id:'data',title:'分析数据',description:'清洗表格、分析数据并生成图表',icon:'filter',category:'数据分析'},
  {id:'career',title:'实习与求职',description:'优化简历、准备面试和职业材料',icon:'browser',collection:'internship-career'},
  {id:'coding',title:'编程入门',description:'理解代码、规范提交并完成小项目',icon:'bolt',collection:'coding-starter'}
];

export function qualityTier(item={}){
  if(item.codexTestStatus==='verified'&&item.demoStatus==='verified'){
    return {id:'verified',label:'实际验证',description:'已有本项目记录的 Codex 实测和演示证据'};
  }
  const bulkCandidate=item.tagsVersion==='candidate-audit-2026-10-20'||Boolean(item.auditEvidence);
  if(item.reviewStatus==='source-checked'&&!bulkCandidate){
    return {id:'reviewed',label:'深度审核',description:'已人工核对来源并整理关键信息，但不代表功能或安全实测'};
  }
  return {id:'basic',label:'基础收录',description:'可供搜索和初步了解，仍需继续核对内容与使用条件'};
}

export function isHomepageRecommended(item){
  return item?.reviewStatus==='source-checked'&&qualityTier(item).id!=='basic';
}

function studentPriority(item){
  const collections=item.collections||[];
  if(collections.includes('student-essential'))return 4;
  if(collections.includes('exam-review'))return 3;
  if(collections.includes('papers-reports'))return 2;
  if(collections.includes('internship-career')||collections.includes('coding-starter'))return 1;
  return 0;
}

export function recommendationReason(item){
  const collections=item.collections||[];
  if(collections.includes('student-essential'))return '大学生常用精选';
  if(collections.includes('exam-review'))return '适合课程复习';
  if(collections.includes('papers-reports'))return '适合论文与报告';
  if(collections.includes('internship-career'))return '适合实习求职';
  if(collections.includes('coding-starter'))return '适合编程入门';
  return item.featured?'目录精选':'已深度整理';
}

export function selectHomepageRecommendations(items,limit=8){
  return [...items].filter(isHomepageRecommended).sort((a,b)=>{
    const verified=Number(qualityTier(b).id==='verified')-Number(qualityTier(a).id==='verified');
    if(verified)return verified;
    const student=studentPriority(b)-studentPriority(a);
    if(student)return student;
    const featured=Number(Boolean(b.featured))-Number(Boolean(a.featured));
    if(featured)return featured;
    return (a.recommendationRank??999)-(b.recommendationRank??999)||String(a.nameZh).localeCompare(String(b.nameZh),'zh-CN');
  }).slice(0,limit);
}

export function toggleComparison(ids,id,max=3){
  const next=new Set(ids);
  if(next.has(id)){next.delete(id);return {ids:[...next],limitReached:false};}
  if(next.size>=max)return {ids:[...next],limitReached:true};
  next.add(id);
  return {ids:[...next],limitReached:false};
}

export function visiblePage(items,limit=20){
  const safeLimit=Math.max(1,Number(limit)||20);
  return {items:items.slice(0,safeLimit),shown:Math.min(items.length,safeLimit),total:items.length,hasMore:items.length>safeLimit};
}

export function addRecentView(items,item,max=5){
  const compact={id:item.id,nameZh:item.nameZh,name:item.name,category:item.category};
  return [compact,...items.filter(record=>record.id!==item.id)].slice(0,max);
}

export function parseStoredArray(raw){
  if(!raw)return [];
  try{const value=JSON.parse(raw);return Array.isArray(value)?value:[];}catch{return [];}
}

export function parseStoredObject(raw){
  if(!raw)return {};
  try{const value=JSON.parse(raw);return value&&typeof value==='object'&&!Array.isArray(value)?value:{};}catch{return {};}
}
