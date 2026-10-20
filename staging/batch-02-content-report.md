# 第 2 批 Skill 内容优化报告

本批包含 `frontend-design`、`web-design-guidelines`、`ad-creative`，草稿未写入正式目录。

| Skill | 优化前 | 优化后 |
| --- | --- | --- |
| frontend-design | 帮助 AI 制作更有设计感的网页界面。 | 帮助 AI 根据页面主题设计更有辨识度的网页，减少千篇一律的模板感。 |
| web-design-guidelines | 按照网页设计规则检查现有页面。 | 帮助 AI 按最新网页界面规范检查现有代码，并指出具体文件和行号。 |
| ad-creative | 围绕产品卖点生成广告创意方向与文案。 | 帮助 AI 根据产品、受众和投放平台生成广告角度与文案，并按平台限制检查。 |

## 准确性改进

- `frontend-design`：原文强调从主题、受众和页面任务出发，先设计计划、排除模板化默认选择，再实现并自我审视；草稿不再只说“更有设计感”。
- `web-design-guidelines`：原文明确需要拉取最新规则、读取指定文件，并用 `file:line` 格式输出；草稿据此修正了产物描述。
- `ad-creative`：补充平台规格、表现数据迭代和基于真实素材的批量生产；明确不能虚构宣传事实，也不等于自动投放。

## 事实、推断与示例

- **原文事实**：上述工作流程、输入要求、输出格式、平台限制和能力边界均来自对应 `SKILL.md`。
- **合理推断**：网页设计可能输出项目代码；广告 3 个角度可被整理为便于比较的结构化结果。
- **未实测示例**：Skill 搜索页设计、搜索页代码审查、大学生学习工具广告角度均沿用原有情境，尚未运行。

原始来源：

- <https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md>
- <https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md>
- <https://github.com/coreyhaines31/marketingskills/blob/main/skills/ad-creative/SKILL.md>
