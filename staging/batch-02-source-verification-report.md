# Batch 02 · Stage A 来源核验报告

核验日期：2026-10-18

## 结论

- 候选共 15 个。
- 进入本批内容草稿 5 个：`grilling`、`teach`、`code-review`、`vercel-react-best-practices`、`lark-doc`。
- 暂留后续 8 个：HyperFrames 套件 4 个、`domain-modeling`、`codebase-design`、`diagnosing-bugs`、`ai-video-generation`。
- 建议排除 1 个：`design-mobile-apps`。它依赖外部 API Key、账号与额度，且第三方审计出现较强风险提示，不符合当前低门槛收录方向。
- 重复 1 个：`web-design-guidelines` 已在正式目录中。

## 选择依据

本批优先选择原始 `SKILL.md` 与相关资料能够完整核实、普通用户用途明确、与大学生学习或 AI 编程有关、且能把环境要求和风险说清楚的条目。没有安装或执行任何第三方 Skill。

`grilling` 被选择，是因为当前正式目录已经有依赖它的 `grill-me`；补齐后用户能更准确理解两者关系。`teach` 直接对应长期学习。`code-review` 与 React 性能规范覆盖 AI 编程的审查需求。`lark-doc` 来自飞书官方 well-known 地址，文档工作流清晰，但仍保持“待人工审核”，不把来源可信等同于已经完成安全审查。

## 统计信息处理

skills.sh 页面本轮只显示如 `935.1K` 一类四舍五入值。无法证明精确安装次数，因此正式草稿中的 `installs` 保持 `null`，并记录采集来源和时间。GitHub Stars 沿用同日从仓库采集的精确值；飞书条目没有对应 GitHub 仓库，因此 Stars 留空。

## 风险与后续事项

- HyperFrames 应按完整套件核查依赖、运行环境与产物，不宜把四个组件拆成四个相似介绍。
- `diagnosing-bugs` 需与现有 `systematic-debugging` 做内容去重后再决定是否收录。
- `ai-video-generation` 涉及额外 CLI、登录、模型与额度，应另做成本和内容安全核查。
- 第三方安全标签仅作为筛选线索，不能据此宣称已完成安全审核。
