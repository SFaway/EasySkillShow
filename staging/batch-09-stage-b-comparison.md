# 第 9 批中文详情优化对比

## 共同改进

1. **按真实任务组织**：把 API 和 CLI 命令表转成“先确认版本与目标，再选择查询、事务或迁移操作”的用户流程。
2. **把危险操作单独抬高**：原始 SQL、批量更新、数据库重置和接受数据丢失不会藏在普通步骤中。
3. **区分参考与执行**：条目提供写法与决策依据，不声称已经连接数据库、运行迁移或验证 schema。
4. **保留版本边界**：Prisma CLI 条目明确只覆盖 ORM 7，并区分稳定的 `prisma` 与平台 Beta CLI。

## 逐条变化

### prisma-client-api

- 原文重点：Prisma Client 的构造、模型查询、查询形状、过滤、关系、事务、原始 SQL和客户端方法。
- 优化后：以应用开发任务串联这些能力，并增加真实数据写入、参数化查询、`Prisma.raw()` 标识符、短事务、隔离级别和 schema 版本核对边界。

### prisma-cli

- 原文重点：Prisma ORM 7 的 init、generate、dev、db、migrate、studio、mcp、validate、format 和 debug 命令。
- 优化后：先确认项目版本与数据库目标，再选择命令；对 `migrate reset`、`db push --force-reset` 和 `--accept-data-loss` 设置操作前即时确认，不复用其他同意。

### lark-markdown 来源校正

- 目录内容已经覆盖创建、读取、比较、局部替换和整篇覆盖，以及 patch 非原子、多人与权限风险。
- 本轮不重写内容、不创建第二条记录，只把来源校正到 `larksuite/cli` 当前仓库，并补充可追溯统计和核查状态。

## 证据分层

- 原始 `SKILL.md` 和直接引用文档明确写出的命令、流程与风险进入 `reviewEvidence.sourceFacts`。
- 目录定位、适用人群和实施建议进入 `reasonableInferences`。
- 未连接数据库、未执行查询或迁移、未创建真实项目的说明进入 `untestedClaims`，案例保持 `demoStatus=illustrative`。
