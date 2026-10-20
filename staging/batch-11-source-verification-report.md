# 第 11 批来源核查报告

核查日期：2026-10-19

## 结论

- 候选 15 条，2 条进入中文详情草稿。
- 10 条因依赖、权限、费用、重叠或完整性问题暂缓。
- `lark-vc-agent` 是兼容旧名称的入口，退役且不单独导入。
- 两条 `ai-image-generation` 是同一上游能力的复制分叉，建议排除。

## 本轮拟新增

1. `prisma-mongodb-upgrade`：阻止不存在的 MongoDB → Prisma 7 路径，并支持在最新 v6 与 Prisma Next Early Access 之间做迁移决策。
2. `supabase`：覆盖数据库、认证、RLS、Storage、Realtime、Edge Functions、CLI、MCP 与安全检查的官方综合指南。

## 延后重点

- 飞书会议旧入口、Orca 两项均是运行时或兼容发现入口，不是独立业务能力。
- Entra Agent ID 会创建高权限身份与授权；`to-issues` 会写入外部追踪器。
- 视频和图像生成依赖第三方 CLI、云端推理、账号、费用和媒体权利。
- TS 深模块与 Impeccable 会大范围修改代码库；研究套件还存在多项安全警告和高实验成本。

## 核查边界

本轮没有安装 Skill、连接数据库、执行 SQL、创建身份、加入会议、发布 issue、运行多代理或上传媒体。Prisma Next 和 Supabase 均快速变化，正式使用前必须再次核对项目实际版本和当前官方文档。
