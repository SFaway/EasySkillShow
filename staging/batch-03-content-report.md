# 第 3 批 Skill 内容优化报告

本批包含 `archify`、`explain`、`skill-doc-generator`，草稿未写入正式目录。

| Skill | 优化前 | 优化后 |
| --- | --- | --- |
| archify | 把结构化信息转成可以查看的 HTML 图表。 | 帮助 AI 把流程、架构或代码关系制作成可交互查看的 HTML 图示。 |
| explain | 把已有资料整理成易理解的讲解和 HTML 页面。 | 帮助 AI 把已有方案、资料或代码流程整理成简短回答和完整 HTML 讲解页。 |
| skill-doc-generator | 自动整理 Skill 文档，生成标准化 README。 | 帮助 Skill 作者分析 SKILL.md、检查文档一致性，并生成标准化 README。 |

## 准确性改进

- `archify`：原文支持自然语言、Mermaid 和仓库证据，不要求用户直接写结构化 JSON；同时明确支持十类关系图，不适用于数值图表和看板。
- `explain`：明确必须同时交付简短聊天回答和完整 HTML，且只能解释已有证据，不能承担新研究或规划。
- `skill-doc-generator`：区分分析、校验、单条 README 生成和批量目录处理；明确文档检查不等于功能或安全测试。

## 事实、推断与示例

- **原文事实**：图类型、输出契约、检查流程、脚本用途和主要运行要求来自对应 `SKILL.md`。
- **合理推断**：用户注册流程适合 workflow；接口说明通常适合流程图或时序图；README 生成后需要人工核对。
- **未实测示例**：三个原有示例均扩写为演示性流程，没有声称生成了真实 HTML、README 或检查报告。

原始来源：

- <https://github.com/tt-a1i/archify/blob/main/archify/SKILL.md>
- <https://github.com/gg-skills/explain/blob/main/SKILL.md>
- <https://github.com/auldsyababua/instructor-workflow/blob/main/skills/skill-doc-generator/SKILL.md>
