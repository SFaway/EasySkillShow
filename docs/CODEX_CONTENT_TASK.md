# Codex 任务：保留基础介绍，补充精细化内容（v0.2）

## 目的

把 **真实的 `SKILL.md`** 整理成面向普通中文用户的 **简明版 + 详细版**，重点降低理解门槛。不要求自动制作图片；只有可追溯的真实截图才作为真实演示。

## 先做一条，再做批量

请先选 `anthropics/skills/pptx` （或用户指定的现有条目），阅读 `README.md`、`data/skills.json`、`docs/API.md` 与原仓库的 `SKILL.md`，以及原仓库中适合解释使用方式的说明。可优先利用本地已安装且可信的内容梳理类 Skill（如用户所提到的 `skill-documentarian`），但**先报告工具是否已安装、是否能读取原文、哪些工作真正由它完成**。未知第三方仓库不要擅自安装运行，不要将工具输出当作事实。

## 内容字段分工

### 保留的基础结构（适合只想 30 秒看懂的人）

- `name` / `nameZh`：保留真实名称，中文名清楚、通俗但不歪曲原意。
- `summaryZh`：用一句中文解释能帮用户完成什么；优先用户任务语言，而不是技术名词。
- `scenarios`：2～3 条常见场景。
- `audience`：说明适合哪些用户。
- `inputExample` / `outputExample`：保留当前示例并检查合理性。**不能因为写详细版就删除它们。**

### 新增精细层（适合需要判断是否安装的人）

- `explanationZh`：已有核心功能解释，核对来源后优化。
- `detailZh.overview`：更完整介绍（建议 100～250 字），需避免空泛重复。
- `detailZh.workflow`：按原文能确认的工作步骤，数组，每步一句话。
- `detailZh.requirements`：工具依赖、输入条件、兼容平台（不确定时不得编造）。
- `exampleDetails.context`：**在原有 inputExample/outputExample 基础上**说明示例背景及目标。
- `exampleDetails.steps`：完成这个示例的一般过程；不能伪装成实际执行日志。
- `exampleDetails.expectedFiles`：可能生成的产物（有依据才写）。
- `exampleDetails.notes`：限制、注意事项和不确定性。
- `boundaries`：不能做的事情、成功条件、风险。

## 数据来源及真实性

1. 最优先原作者 `SKILL.md` 与仓库文档；引用原文路径或 URL 供人工审核。
2. 如果内容只是从说明推断，请明确描述为“可能、通常、需要验证”，不能写成已实测。
3. **不要伪造**下载量、Stars、具体截图、成功率、速度、成本和平台兼容性。
4. 可以提出可视化素材建议，但不能把 AI 想象图标成真实截图。
5. 保持 `reviewStatus=pending`；只有人工核对来源后才能改成 `source-checked`。不要把 `demoStatus` 擅自标记成 `verified`。
6. 避免对非可信 Skill 自动执行脚本或联网访问敏感数据；如必须安装，先列出权限和风险，征求用户同意。

## 修改流程

1. 把对应现有记录完整复制到 `staging/xxx-rewrite.json` （示例见 `staging/pptx-rewrite.template.json`），只修改必要内容字段。
2. 记录“原始描述 vs Skill 辅助优化后描述”的差别，至少列出 3 点：可读性、准确性、理解成本。
3. 执行 `npm run check:data`。
4. 执行 `npm run import:skill -- staging/xxx-rewrite.json --update-existing` **干运行**。这不会写入目录。
5. 向用户展示改动和原文依据；**用户确认后**才执行 `npm run import:skill -- staging/xxx-rewrite.json --update-existing --write`。
6. 重新执行 `npm test`，用浏览器检查二级页简明/详细切换和文字排版。

## 验收条件

- 浏览页名称和简介仍然精简，点击进入详情后默认显示简明版。
- 简明版在 30 秒左右可理解用途；详细版能帮助用户判断环境要求、用途和边界。
- 详细使用示例是在现有输入输出基础上扩写，而不是平行写一个互相矛盾的新案例。
- 不改变项目已有来源、ID、安装命令、审核状态等事实字段，除非有可核实依据。
- 未补齐详细版信息时有诚实的“待完善”提示，不能出现看似完成但内容凭空编造。
