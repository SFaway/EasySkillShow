# 第 8 批候选核验报告

核验日期：2026-10-19

## 结果概览

- 候选总数：15
- 进入中文详情草稿：4
- 保留待后续专题审核：11
- 已退役、不入库：0
- 建议直接排除：0

本轮没有安装或运行任何第三方 Skill。候选均核对了 skills.sh 页面和原始仓库；精选条目完整阅读了当前 `SKILL.md`，其余条目按可定位的源文件或仓库说明核验。以当前原仓库为事实优先级最高的来源。

## 精选草稿

1. `skill-creator`：创建、测试、比较并迭代改进 Agent Skill。
2. `caveman-commit`：根据差异生成简短、可粘贴的 Conventional Commits 信息，不执行 Git 写入。
3. `vercel-composition-patterns`：用组合、复合组件、状态提升和显式变体改善 React 组件架构。
4. `brainstorming`：在实现前用开放问题、需求回放和设计确认澄清真正目标。

## 保留待后续审核

- `kling-3-0`：依赖 RunComfy 云端视频服务，等待费用、隐私、肖像权和生成内容许可审核。
- `caveman-review`：与现有代码审查条目重叠，极短评论格式需评估复杂问题的信息损失。
- `caveman-compress`：文件全文会发送给模型提供商并覆盖原文件，等待隐私与恢复测试。
- `ui-ux-pro-max`、`gpt-taste`：与现有设计类条目高度重叠，等待规则库、脚本、无障碍和性能专题审核。
- `full-output-enforcement`：强制完整输出可能与用户长度偏好、上下文预算和其他指令冲突。
- `claude-handoff`：依赖 Claude CLI 后台代理，暂不作为通用多 Agent 能力展示。
- `lark-okr`：包含真实 OKR 写入、删除和绩效敏感数据，等待飞书专题审核。
- `codex-pet`：涉及第三方图片生成和本机 Codex 配置写入，等待产品格式与隐私验证。
- `azure-rbac`：可能生成高权限 Azure 角色分配，等待云权限专题审核。
- `music-to-video`：依赖完整 HyperFrames 套件、音乐版权、逐帧子代理和渲染链路。

## 统计与真实性

- 精选条目的安装量和仓库 Stars 来自 2026-10-19 的 skills.sh 页面快照，会随时间变化。
- Stars 是整个 GitHub 仓库的指标，不代表单个 Skill 的质量或热度。
- skills.sh 的第三方安全审计标记只作为风险线索；本项目没有因此把任何条目标记为安全审核通过。
- 所有示例均为演示性内容；没有创建 Skill、运行对比评测、执行 Git 提交、重构真实 React 组件或启动真实项目实施。

## 可核查来源

- [anthropics/skills](https://github.com/anthropics/skills)
- [juliusbrussee/caveman](https://github.com/juliusbrussee/caveman)
- [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)
- [obra/superpowers](https://github.com/obra/superpowers)
- [larksuite/cli](https://github.com/larksuite/cli)
- [microsoft/azure-skills](https://github.com/microsoft/azure-skills)
- [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)
- [prime-skills/runcomfy-agent-skills](https://github.com/prime-skills/runcomfy-agent-skills)
- [leonxlnx/taste-skill](https://github.com/leonxlnx/taste-skill)

