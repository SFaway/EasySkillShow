# 第 6 批候选核验报告

核验日期：2026-10-19

## 结果概览

- 候选总数：15
- 进入中文详情草稿：5
- 保留待后续专题审核：8
- 兼容旧名称、不独立入库：2
- 建议直接排除：0

本轮没有安装或运行任何第三方 Skill。15 个 skills.sh 详情页和对应 GitHub 仓库均可访问，原始 `SKILL.md` 位置已写入 `batch-06-source-verification.json`。

## 精选草稿

1. `writing-fragments`：通过追问采集写作素材，不提前强加结构。
2. `writing-shape`：完整读取已有素材，逐段协作生成独立文章。
3. `writing-beats`：用可选择的节拍控制文章叙事路线和概念解释顺序。
4. `lark-workflow-meeting-summary`：汇总指定范围内的会议、纪要与逐字稿。
5. `lark-workflow-standup-report`：合并日程与未完成任务，提示冲突和逾期事项。

三个写作 Skill 互相衔接但不等价：`writing-fragments` 负责探索素材，`writing-shape` 负责逐段组织成文，`writing-beats` 强调分支选择和读者理解路径。它们都位于原仓库的 `in-progress` 目录，因此详情页已明确标注测试中状态。

## 未进入正式目录

- `lark-minutes`、`lark-vc`：当前源文件只是旧名称兼容入口，业务统一交给 `lark-meeting`，不适合单独展示。
- `lark-event`：面向实时事件流和长驻进程，且 skills.sh 页面显示 Snyk Warn，等待事件监听与数据落盘专项审核。
- `lark-contact`：主要是其他飞书工作流的身份解析前置步骤，涉及员工目录权限。
- `lark-openapi-explorer`：可裸调飞书 OpenAPI，写入和删除能力需要更严格的权限与确认设计。
- `scaffold-exercises`：依赖特定课程仓库目录、校验命令和 Git 提交流程，通用性不足。
- `lark-skill-maker`：用于开发飞书 API Skill，面向高级用户，等待生成物安全审核。
- `migrate-to-shoehorn`：只针对 TypeScript 测试代码，且需要安装额外 npm 依赖。
- `azure-upgrade`：来源可靠，但会触及云资源、SKU、费用和迁移回滚，等待云迁移专题审核。
- `high-end-visual-design`：与现有设计条目重叠，并强制特定字体、动效与奢华审美，等待可访问性和品牌适配评估。

## 统计与真实性

- 精选条目的安装量和仓库 Stars 来自 2026-10-19 的 skills.sh 详情页快照，会随时间变化。
- Stars 是整个 GitHub 仓库的指标，不能理解为单个 Skill 的热度。
- skills.sh 的安全审计标记仅作为外部线索记录，不等于本项目已经完成安全审核；正式记录继续保持 `reviewStatus=pending`。
- 所有使用示例均为演示性内容，没有连接真实账号、读取真实会议或修改真实文件。

## 可核查来源

- [第 6 批原始候选](../../../../300/EasySkillShow_Codex_%E5%88%86%E6%89%B9%E4%BB%BB%E5%8A%A1/batches/batch_06_rank_130-144.json)
- [larksuite/cli](https://github.com/larksuite/cli)
- [mattpocock/skills](https://github.com/mattpocock/skills)
- [microsoft/azure-skills](https://github.com/microsoft/azure-skills)
- [leonxlnx/taste-skill](https://github.com/leonxlnx/taste-skill)

