# Batch 01 基础核验报告（Stage A）

> 状态：待人工审核。未写入 `data/skills.json`，未安装、运行任何第三方 Skill。

## 核验范围与结论

- 输入批次：`batch_01_rank_001-015.json`
- 本次仅处理原榜单第 1–15 名，共 15 项。
- 来源通过：3 项。
- 需复查：12 项。
- 建议排除：0 项。
- 与正式目录重复：2 项（`find-skills`、`frontend-design`）。
- 新候选：13 项。

这里的“通过”仅表示来源链路清楚、原始 `SKILL.md` 可定位且暂未发现阻断性问题，不代表内容、安全或 Codex 兼容性已审核通过。第三方安全扫描只作为线索记录。

## 逐项核验

| 排名 | Skill | 结果 | 来源与 SKILL.md | 核验重点 |
|---:|---|---|---|---|
| 1 | find-skills | 需复查 | [详情](https://www.skills.sh/vercel-labs/skills/find-skills) · [SKILL.md](https://github.com/vercel-labs/skills/blob/main/skills/find-skills/SKILL.md) | 正式目录已有同来源同名记录；本批不重复新增。 |
| 2 | grill-me | 需复查 | [详情](https://www.skills.sh/mattpocock/skills/grill-me) · [SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md) | 是 `grilling` 的薄封装；[仓库 issue #685](https://github.com/mattpocock/skills/issues/685) 已确认单独安装可能缺依赖。 |
| 3 | grill-with-docs | 需复查 | [详情](https://www.skills.sh/mattpocock/skills/grill-with-docs) · [SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md) | 依赖 `grilling` 和 `domain-modeling`，需要组合安装说明。 |
| 4 | agent-browser | 需复查 | [详情](https://www.skills.sh/vercel-labs/agent-browser/agent-browser) · [SKILL.md](https://github.com/vercel-labs/agent-browser/blob/main/skills/agent-browser/SKILL.md) | 发现型入口；需额外安装 CLI 与浏览器组件，权限面较大，Snyk 为 Warn。 |
| 5 | improve-codebase-architecture | 需复查 | [详情](https://www.skills.sh/mattpocock/skills/improve-codebase-architecture) · [SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/improve-codebase-architecture/SKILL.md) | 来源明确，但其他 harness 的探索能力可能不完整；两项第三方扫描为 Warn。 |
| 6 | tdd | 通过 | [详情](https://www.skills.sh/mattpocock/skills/tdd) · [SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/tdd/SKILL.md) | 规则型 Skill，来源和边界清楚；实际效果仍依赖项目测试环境。 |
| 7 | hyperframes-cli | 需复查 | [详情](https://www.skills.sh/heygen-com/hyperframes/hyperframes-cli) · [SKILL.md](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-cli/SKILL.md) | 依赖 Node.js 22+、FFmpeg、CLI、渲染与本地服务；Snyk 为 Warn。 |
| 8 | hyperframes | 需复查 | [详情](https://www.skills.sh/heygen-com/hyperframes/hyperframes) · [SKILL.md](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes/SKILL.md) | 多 Skill 路由入口，不能按独立单功能工具介绍；Snyk 为 Warn。 |
| 9 | setup-matt-pocock-skills | 需复查 | [详情](https://www.skills.sh/mattpocock/skills/setup-matt-pocock-skills) · [SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/setup-matt-pocock-skills/SKILL.md) | 会检查并可能修改项目代理说明文件，需要突出变更范围与确认步骤。 |
| 10 | handoff | 需复查 | [详情](https://www.skills.sh/mattpocock/skills/handoff) · [SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/productivity/handoff/SKILL.md) | 仓库还有近似的 `claude-handoff` 路径，下一阶段需确认 skills.sh 实际打包版本。 |
| 11 | frontend-design | 需复查 | [详情](https://www.skills.sh/anthropics/skills/frontend-design) · [SKILL.md](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md) | 正式目录已有同来源同名记录；只应复核统计信息。仓库 API 未给出统一许可证字段。 |
| 12 | reddit-automation | 通过 | [详情](https://www.skills.sh/flowkit-labs/skills/reddit-automation) · [SKILL.md](https://github.com/flowkit-labs/skills/blob/main/reddit-automation/SKILL.md) | 原文限定人工审核、手动发布，不登录、不保存凭据、不自动发帖；名称容易造成误解。 |
| 13 | triage | 需复查 | [详情](https://www.skills.sh/mattpocock/skills/triage) · [SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/triage/SKILL.md) | 可能写入 issue/PR 状态、标签和评论；两项第三方扫描为 Warn。 |
| 14 | prototype | 通过 | [详情](https://www.skills.sh/mattpocock/skills/prototype) · [SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/prototype/SKILL.md) | 来源和一次性原型边界清楚；下一阶段需突出非生产代码与清理要求。 |
| 15 | media-use | 需复查 | [详情](https://www.skills.sh/heygen-com/hyperframes/media-use) · [SKILL.md](https://github.com/heygen-com/hyperframes/blob/main/skills/media-use/SKILL.md) | 可能需要 CLI 登录、宿主 API 配置或付费额度；Socket 为 Warn。 |

## 数据口径

- GitHub Stars：2026-10-18 通过 GitHub 官方公开仓库接口读取，表示整个仓库的 Stars，不代表单个 Skill 的质量或安全性。
- 安装次数：2026-10-18 从对应 skills.sh 详情页结构化数据中的 `userInteractionCount` 读取。
- 许可证：只记录 GitHub 仓库接口能明确返回的仓库级 SPDX 值；`anthropics/skills` 返回 `null`，没有推断补齐。
- 安全信号：照录详情页展示的 Gen Agent Trust Hub、Socket 和 Snyk 结果；没有据此设置 `securityReviewed: true`。
- 兼容性：除来源明确说明外均保持未实测；没有把 skills.sh 页面列出的通用 Agent 导航当作单项兼容证据。

## 事实、推断与未实测内容

- 事实：详情页状态、仓库状态、实际文件路径、原始说明中的依赖/行为、官方仓库指标。
- 合理推断：某项是否适合普通用户、是否需要依赖提示、名称是否容易产生误解。这些都写入 `inferences`，不是原作者承诺。
- 未实测：安装、运行、Codex 兼容性、文件写入、外部平台操作和实际产物质量。均写入 `untested`。

## 建议进入 Stage B 的 3–5 项

建议优先选择来源已通过且容易向普通用户解释的项目：

1. `mattpocock/skills/tdd`
2. `flowkit-labs/skills/reddit-automation`
3. `mattpocock/skills/prototype`

如果希望同时验证“复杂依赖如何向新手解释”，可再加入：

4. `vercel-labs/agent-browser/agent-browser`
5. `mattpocock/skills/grill-me`

在人工确认前，不进入 Stage B，不修改正式数据，也不让这些条目出现在正式页面。
