# 第 3 批来源核查报告

核查日期：2026-10-18

本批共核查 15 个候选，仅选择 5 个进入内容草稿。核查过程没有安装或运行第三方 Skill，也没有把 skills.sh 的四舍五入安装量写成精确数据。

## 进入草稿的 5 个 Skill

| Skill | 选择原因 | 需要明确的边界 |
| --- | --- | --- |
| lark-markdown | 飞书官方来源，远端 Markdown 的读写与比较流程清楚 | 不是本地 Markdown 编辑器；局部替换并非原子操作 |
| implement | 面向已确认的单个开发任务，功能和完成条件明确 | 会直接改代码并提交；不负责重新讨论需求或创建 PR |
| wayfinder | 适合毕业设计、长期项目等一次对话无法完成的工作 | 默认只规划；会在问题跟踪器创建或更新任务 |
| ui-taste | 兼顾界面设计、改进和只读审查，基础版依赖少 | 不能把未检查的界面说成已验证，也不自动发布或安装依赖 |
| remotion-best-practices | Remotion 官方仓库，创建、预览和导出规则完整 | 需要代码与本地环境；未明确要求时不导出视频 |

## 暂不导入

- `ask-matt` 更像 Matt Pocock 技能库的总入口，与现有发现工具存在重叠。
- `lark-vc-agent` 是指向 `lark-meeting` 的兼容别名，不作为独立功能展示。
- `hyperframes-keyframes`、`general-video`、`hyperframes-audio` 属于 HyperFrames 套件，应和核心、账号、依赖及渲染产物一起验证。
- `lark-apps` 与 `microsoft-foundry` 涉及更广泛的云端开发、权限、部署与费用，保留给进阶批次。
- `design-taste-frontend` 与现有网页设计条目及本批 `ui-taste` 重叠，需要先做差异审查。
- `caveman` 是表达风格模式，当前优先级低于能直接完成学习、办公或开发任务的条目。
- `ai-image-generation` 的聚合详情页存在，但目前未在对应仓库找到原始 `SKILL.md`，因此不根据二手页面编写介绍。

## 统计信息处理

GitHub Stars 记录的是整个仓库在本次核查时的数值，不代表单个 Skill 的安装量、质量或安全程度。安装次数没有获得可复核的精确值，继续保留为 `null`，前台不会显示“暂无数据”。
