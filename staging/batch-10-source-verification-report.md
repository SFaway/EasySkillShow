# 第 10 批来源核查报告

核查日期：2026-10-19

## 结论

- 候选 15 条，2 条进入中文详情草稿。
- 12 条保留等待费用、权限、平台或重复性专项审核。
- `prisma-postgres` 是官方废弃兼容入口，退役且不导入。

## 本轮拟新增

1. `azure-cost`：以只读角色查询历史费用、预测支出并形成基于实际数据的优化建议。
2. `prisma-upgrade-v7`：指导 Prisma ORM 6 到 7 的破坏性升级，并明确 MongoDB 不适用。

## 主要延后项

- RunComfy 音乐能力涉及云端推理、费用、音乐版权与声音权利。
- HyperFrames slideshow 是专用可导航播放器项目，不等于普通 PPT 或完整 MP4。
- Azure Copilot 与 AKS Runway 会创建或修改云资源，涉及身份、集群权限和持续费用。
- Prisma Postgres Setup 与 Compute 会创建或部署云端服务，需进一步核查账号、秘密、费用和平台稳定性。
- `to-prd` 会直接发布 issue 并加标签，且与现有文档协作能力重叠。
- 设计与子代理条目与现有目录重叠或存在来源、实测和可迁移性问题。

## 核查边界

本轮只读取公开来源，没有登录 Azure、Prisma、RunComfy、Uizze 或 GitHub issue tracker，也没有安装 Skill、创建数据库、部署集群、生成媒体或运行迁移。
