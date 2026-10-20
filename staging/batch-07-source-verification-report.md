# 第 7 批候选核验报告

核验日期：2026-10-19

## 结果概览

- 候选总数：15
- 进入中文详情草稿：7（首批 4，第二批 3）
- 保留待后续专题审核：7
- 已退役、不入库：1
- 建议直接排除：0

本轮没有安装或运行任何第三方 Skill。所有候选均核对了 skills.sh 页面、原始仓库和 `SKILL.md`，以当前原仓库为事实优先级最高的来源。

## 精选草稿

1. `supabase-postgres-best-practices`：按优先级审查 Postgres 查询、连接、安全、结构、锁和诊断问题。
2. `writing-for-agents`：优化 Skill、AGENTS.md、CLAUDE.md 等 Agent 指令文档。
3. `loop-me`：通过多轮访谈把重复活动写成可直接实现的工作流规格。
4. `lark-attendance`：以只读方式查询用户自己的飞书考勤打卡记录。
5. `lark-approval`：查询审批，并在用户逐项确认后处理真实审批动作。
6. `minimalist-ui`：为网页实现一套暖色、编辑感、扁平极简的明确风格预设。
7. `lark-slides`：规划、创建、读取和编辑飞书云端幻灯片，并在写入后回读验证。

第二批没有降低审核门槛：飞书审批和幻灯片仍标记为真实云端写入，`minimalist-ui` 仍标记为强风格偏好；三项均保持 `pending` 与 `illustrative`。

## 重要来源变化

`redesign-existing-projects` 的 skills.sh 页面仍展示旧版网站改版流程，但当前原仓库已将它标记为 `retired`，并要求改用 `design-taste-frontend` 的改版路线。本轮不把过期摘要当作当前能力入库。

## 未进入正式目录

- `video-edit`、`image-to-video`：依赖 RunComfy 云端模型、账号和外部媒体上传，等待费用、隐私、肖像权和版权审核。
- 两项 Azure Skill：涉及企业云架构、AKS、RBAC、网络和付费资源，等待云基础设施专题审核。
- `embedded-captions`、`pr-to-video`：是 HyperFrames 套件组件，需要完整的视频依赖和渲染链路验证。
- `wait-what`：原始内容只有一条重新解释指令，缺少独立工作流和边界。

## 统计与真实性

- 精选条目的安装量和仓库 Stars 来自 2026-10-19 的 skills.sh 页面快照，会随时间变化。
- Stars 是整个 GitHub 仓库的指标，不代表单个 Skill 的质量或热度。
- skills.sh 的第三方安全审计标记只作为风险线索；本项目没有因此把任何条目标记为安全审核通过。
- 所有示例均为演示性内容，没有连接数据库、修改 Agent 指令、实现自动化、查询真实考勤、处理真实审批或写入飞书幻灯片。

## 可核查来源

- [supabase/agent-skills](https://github.com/supabase/agent-skills)
- [mattpocock/skills](https://github.com/mattpocock/skills)
- [larksuite/cli](https://github.com/larksuite/cli)
- [leonxlnx/taste-skill](https://github.com/leonxlnx/taste-skill)
- [microsoft/azure-skills](https://github.com/microsoft/azure-skills)
- [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)
- [prime-skills/runcomfy-agent-skills](https://github.com/prime-skills/runcomfy-agent-skills)

