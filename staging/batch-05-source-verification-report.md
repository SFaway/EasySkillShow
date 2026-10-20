# 第 5 批来源核查报告

核查日期：2026-10-18

本批 15 个 skills.sh 详情链接均可访问，并已定位原始来源。最终选择 4 个进入内容草稿；核查期间没有安装或运行第三方 Skill。

## 进入草稿的 4 个 Skill

| Skill | 选择原因 | 关键边界 |
| --- | --- | --- |
| lark-base | 飞书官方多维表格能力，适合项目追踪和结构化资料管理 | 云端写入、删除、权限和分享都可能影响真实数据 |
| to-questionnaire | 输入、流程和 Markdown 产物清晰，大学生和产品工作都容易使用 | 只生成问卷，不负责发送或验证回答真实性 |
| setup-pre-commit | 能直接改善 Node.js 项目的提交质量，产物可检查 | 会安装依赖、格式化文件、运行测试并创建提交 |
| lark-calendar | 飞书官方日程与会议协调能力，时间推荐和确认流程完整 | 创建、改期、邀请和会议室会影响他人，必须确认 |

## 暂不导入

- `larksuite/cli/lark-doc` 与正式目录中的飞书云文档助手重复。
- `lark-shared` 是飞书 Skill 的认证与安全底座，不是独立用户任务。
- `paper-context-resolver`、`repo-intake-and-plan`、`minimal-run-and-audit`、`env-and-assets-bootstrap` 都是 RigorPilot 论文复现流程的辅助组件，等待整套工作流审核。
- `remotion-to-hyperframes` 等待 HyperFrames 套件级验证。
- `lark-im` 和 `lark-mail` 涉及对外通信与不可信内容，等待专项确认设计。
- `azure-quotas` 涉及 Azure 订阅、配额权限和云资源规划，留给进阶批次。
- `ai-image-generation` 依赖第三方 CLI、登录及付费推理，当前建议排除。

## 仓库统计

采集时间为 2026-10-18：`larksuite/cli` 17,720 Stars、`mattpocock/skills` 295,600、`heygen-com/hyperframes` 66,293、`lllllllama/rigorpilot-skills` 484、`microsoft/azure-skills` 1,575、`qu-skills/superpowers` 3。Stars 是仓库级指标，不代表单个 Skill 的质量、安装量或安全性；精确安装次数继续保留为 `null`。
