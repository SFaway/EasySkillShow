# Batch 01 Stage B 中文内容对比

> 待审核草稿。没有覆盖 `data/skills.json`，所有示例均标记为演示性、未经实测。

## 1. tdd

**优化前的技术表达**

> Test-driven development. Red → green loop. Test at pre-agreed seams and avoid implementation-coupled, tautological and horizontal-slicing tests.

**优化后的简明介绍**

> 测试驱动开发助手：帮助 AI 先写失败测试，再用最少代码实现功能，适合开发新功能和修复缺陷。

**改善点**

- 将 seam、red/green、horizontal slicing 转换为“先确认公开接口—写一个失败测试—补最少代码”。
- 明确它是开发方法和规则，不是测试框架或完整项目开发器。
- 示例展示用户需要提供缺陷、接口和测试命令，而不是重复罗列能力。

## 2. reddit-automation

**优化前容易产生的理解**

> Reddit Automation 容易被理解为自动登录、批量回复或自动发帖。

**优化后的简明介绍**

> Reddit 讨论发现与回复草稿：帮助 AI 筛选真正相关的 Reddit 讨论，并起草需人工审核、主动披露关系的回复。

**改善点**

- 直接说明不会自动发帖，也不需要账户密码或令牌。
- 把伦理要求变成普通用户可执行的规则：只回复真正匹配的帖子、披露关系、人工发布。
- 保留帖子是“不可信外部内容”的安全事实，避免把帖子里的命令当作指令执行。

## 3. prototype

**优化前的技术表达**

> Build throwaway code; choose LOGIC.md or UI.md; use variants via `?variant=` and a floating switcher.

**优化后的简明介绍**

> 产品原型验证助手：帮助 AI 用一次性逻辑或界面原型快速验证想法，适合在正式开发前比较方案。

**改善点**

- 先解释两类用户问题：“逻辑是否合理”与“界面应该长什么样”。
- 明确输出是临时验证材料，不是可直接上线的生产代码。
- 把切换参数、临时路由和分支清理放入详细版，避免简明版技术过载。

## 4. agent-browser

**优化前的技术表达**

> Chrome/Chromium via CDP with accessibility-tree snapshots and compact `@eN` refs.

**优化后的简明介绍**

> 网页操作与测试助手：让 AI 操作网页、填写表单、提取信息和检查网站，适合重复性浏览器任务。

**改善点**

- 用“读取按钮、输入框和链接，再按编号操作”解释 accessibility snapshot 和 refs。
- 明确安装 Skill 之后还必须安装 CLI 与浏览器组件。
- 把真实提交、账号、Cookie 和网页提示注入等风险放入边界与安全说明。

## 5. grill-me

**优化前的原始内容**

> Call the Skill tool with "grilling".

**优化后的简明介绍**

> 想法追问与决策梳理：让 AI 分轮追问你的想法、计划或设计，帮助在动手前暴露遗漏和未决问题。

**改善点**

- 读取配套 `grilling` 后，解释了决策树、问题依赖、分轮回答和推荐答案。
- 明确它不会替用户做决定，也不会自动进入执行。
- 显示单项安装可能缺少 `grilling` 的真实依赖问题，避免用户安装后无法使用。

## 事实、推断与示例的区分

| 类型 | 在草稿中的处理 |
|---|---|
| 原文事实 | 写入 `reviewEvidence.sourceFacts`，例如 TDD 的红—绿循环、Reddit 不自动发帖、Prototype 的两条分支。 |
| 合理推断 | 写入 `reviewEvidence.reasonableInferences`，并使用“适合”“通常”“可能”等有限定的表达。 |
| 未经实测 | 写入 `reviewEvidence.untestedClaims`；简明输入、输出和详情示例均明确标记“演示性、尚未实际运行验证”。 |

## 内容层次检查

- 简明版回答：能做什么、适合谁、用户怎么说、可能得到什么。
- 详细版回答：工作流程、环境要求、操作步骤、预期产物和能力边界。
- 功能介绍只概括通用价值；使用示例只讲一个具体情境，减少重复。
- 技术术语仅在影响安装、安全、兼容性或交付时保留。
- 每条都说明 Skill 不是独立桌面应用或独立服务。

## 仍需人工审核的事项

1. `grill-me` 是否在页面中保留单项安装命令，还是等依赖组合方案确定后再发布。
2. `agent-browser` 的能力和权限范围较大，是否符合当前 EasySkillShow 面向新手的收录标准。
3. `reddit-automation` 是否使用当前中文名，避免用户把它误解成自动发帖工具。
4. `prototype` 是否归入“编程开发 / 项目开发”，或未来增加更具体的“原型验证”二级标签。
5. 这 5 条均未实测，不应将 `demoStatus` 改为 `verified`。
