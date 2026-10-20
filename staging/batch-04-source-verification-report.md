# 第 4 批来源核查报告

核查日期：2026-10-18

本批共核查 15 个候选，skills.sh 详情链接均可访问，但只有 3 个进入中文详情草稿。核查期间没有安装或执行任何第三方 Skill。

## 进入草稿的 3 个 Skill

| Skill | 选择原因 | 需要明确的边界 |
| --- | --- | --- |
| wizard | 把必须由人完成的配置过程整理成交互式向导，产物和确认节点清晰 | 会处理密钥并写入 `.env` 或 GitHub；只静态检查脚本，不由 AI 端到端运行 |
| azure-diagnostics | 微软官方来源，允许只用用户提供的日志进行证据分析 | 实时访问需要 Azure 权限；诊断不等于已修复，生产修改需单独确认 |
| google-agents-cli-adk-code | Google 官方 ADK 代码参考，清楚区分设计、脚手架、代码、评测和部署 | 依赖完整 Skill 套件及 `agents-cli`；不负责脚手架和部署 |

## 不进入本批

- `lark-note` 是 `lark-meeting` 的旧名称兼容入口，不作为独立能力重复收录。
- `resolving-merge-conflicts` 已在上游 v1.3.0 移除并停止维护，当前仓库不存在对应 `SKILL.md`。
- `azure-messaging` 与本批 Azure 综合诊断能力重叠；`azure-compute` 和 `azure-cloud-migrate` 涉及费用、资源创建或迁移，留给云服务专项审核。
- `product-launch-video`、`faceless-explainer`、`motion-graphics` 属于 HyperFrames 套件，需整体核查账号、媒体来源、依赖和渲染。
- `git-guardrails-claude-code` 明确依赖 Claude Code hook，不应宣传成 Codex 通用能力。
- `ai-avatar-video`、`twitter-automation`、`ai-video-generation` 依赖第三方 CLI、登录或付费服务；其中社交账号自动操作风险较高。

## 数据说明

GitHub Stars 是仓库级指标：Microsoft 1,575、Matt Pocock 295,597、HyperFrames 66,285、Google Agents CLI 6,099、qu-skills 3（采集时间 2026-10-18）。它们不代表单个 Skill 的安装量、安全性或适合新手程度。精确安装次数仍无法可靠取得，保留为 `null`。
