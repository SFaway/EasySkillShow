# 第 11 批中文详情优化对比

## 共同改进

1. 先解释用户面对的决策：MongoDB 不能升级到 Prisma 7；Supabase 安全不只等于开启 RLS。
2. 将版本、凭据、数据写入、迁移和回滚条件放到普通用户能看到的边界中。
3. 把静态建议与真实执行分开，不声称连接过数据库、验证过 policy 或完成过切换。

## prisma-mongodb-upgrade

- 原文重点：v6 是经典 ORM 的 MongoDB 终点，v7 无连接器；选择留在 v6 或评估 Prisma Next Early Access。
- 优化后：加入事务、MongoDB 8.0、集合存储名、contract、API 不对等和迁移生命周期检查，并强调不能把改换 SQL 数据库当成隐含解决方案。

## supabase

- 原文重点：先看 changelog 与当前文档，覆盖 Supabase 全产品并提供 RLS、JWT、令牌、视图、函数、Storage 和 migration 安全规则。
- 优化后：从“确认项目版本与工作流”开始，明确公开 schema、Data API grant 与 RLS 是不同层级；把 service role、metadata、SECURITY DEFINER、迁移和 MCP token 风险转成实施检查表。

## 证据分层

- 原始文件明确写出的版本、流程和安全规则进入 `sourceFacts`。
- 目录定位与上线保护措施进入 `reasonableInferences`。
- 未连接服务、未执行迁移和未验证示例进入 `untestedClaims`。
