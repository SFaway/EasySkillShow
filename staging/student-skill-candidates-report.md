# “大学生常用 Skill”候选专项审核（待人工确认）

本轮核查 8 个候选，只写入 staging，没有修改 `data/skills.json`，也没有安装或执行第三方 Skill。所有案例均标为“演示性示例，尚未实际运行验证”。

## 推荐顺序

| 排名 | Skill | 推荐理由 | 主要阻碍 |
| ---: | --- | --- | --- |
| 1 | study-flashcards | 课程资料到复习卡片的价值最直观，适合做 EasySkillShow 首个真实用户测试 | 官方只标注 Cowork、Copilot Studio、Scout；Codex 尚未验证 |
| 2 | excalidraw-diagram-generator | 课程作业、答辩和编程项目都能使用，产物可直接编辑，来源可靠 | 复杂图仍需人工排版；图标功能需要 Python 和额外素材 |
| 3 | resume-review | 实习和校招场景高频，输入输出容易理解 | ATS 分数只是作者自定义模拟；小型第三方仓库，需明显风险提示 |
| 4 | academic-paper-review | 单篇论文阅读比完整文献综述更容易上手，适合组会和课程报告 | 需要全文读取和外部搜索；专业判断不能替代导师或同行评审 |
| 5 | doc-coauthoring | 跨专业可用，适合课程报告、提案和 PRD | 原文强依赖 Claude 表述；当前目录没有明确许可证 |
| 6 | systematic-debugging | 方法可靠，官方明确支持 Codex，适合计算机专业 | 对非编程学生使用频率较低；运行测试会操作项目环境 |
| 7 | find-skills | 来源和 Codex 兼容性清楚，可帮助继续发现能力 | 只对已经愿意使用 AI Agent 和命令行的用户有直接价值；正式目录已有该项 |
| 8 | systematic-literature-review | 研究价值高，范围和输出格式明确 | 只查 arXiv，依赖 Python、网络和子代理，DeerFlow 工具语义需适配 |

综合评估时优先考虑大学生日常使用频率，其次是能否在 30 秒内理解，再看安装门槛和来源可靠性。排名不是质量排行榜；例如 `systematic-debugging` 的来源可靠性很高，但受众更窄。

## 首个试验建议：课程资料 → 复习卡片与测验

建议将 `study-flashcards` 作为真实测试对象，但分两步进行：

1. 先在官方明确列出的支持平台验证原始 Skill，确认课件读取、出处标注、互动 HTML、题目答案和进度保存。
2. 再单独做 Codex 兼容性试验；如果需要修改工具名、模板定位或文件交付方式，应标记为“适配版”，不能把适配结果说成原版已支持。

建议测试材料选择一份不含个人信息、约 15～25 页的课程课件，并固定验收项：

- 卡片是否一题只考一个知识点；
- 卡片和答案能否追溯到页码或标题；
- 是否混入课件外事实；
- 互动页能否离线打开、翻卡、答题和计分；
- 中文长文本、公式和特殊字符是否正常显示；
- 受限预览环境无法保存进度时是否有清楚提示。

本轮没有生成真实 HTML 截图，也没有把演示案例写成实测结果。

## 关键核查结论

### 平台兼容性

- `study-flashcards`：官方候选页仅列 Cowork、Copilot Studio、Scout，Codex 为 `unverified`。
- `systematic-debugging`：仓库 README 明确提供 Codex App 和 Codex CLI 安装路径，可写“来源确认支持”，但本轮仍未做功能实测。
- `find-skills`：官方 Skills CLI 的支持列表和兼容性表包含 Codex。
- `academic-paper-review`、`systematic-literature-review`：原文包含 DeerFlow 特定工具与固定路径；后者还硬性依赖子代理，不能直接写成 Codex 已兼容。
- `doc-coauthoring`：大量使用 Claude、Reader Claude、`create_file`、`str_replace` 等语义，需要平台适配。
- `resume-review`、`excalidraw-diagram-generator`：可由通用 Skills CLI 放入 Codex 目录，但完整行为尚未端到端验证，因此标记为 `installable-unverified`。

### 许可证

- Microsoft CAT Agent Skills、DeerFlow、TrainWithShubham Skills、GitHub awesome-copilot、Superpowers、Vercel Skills 的仓库许可证均核实为 MIT。
- `anthropics/skills` 根仓库没有统一许可证，`skills/doc-coauthoring` 当前也没有独立许可证文件，因此保持 `null`，发布前需进一步向来源确认；不能因为仓库公开就推断可再分发。

### 明显风险与边界

- 没有发现本轮静态阅读能够证明的恶意代码；这不等于完成安全审计。
- `study-flashcards` 会把课程内容嵌入 HTML，分享文件前要检查敏感信息。
- `resume-review` 会处理联系方式和经历等个人数据；ATS 分数不是实际招聘系统分数。
- `academic-paper-review` 和 `systematic-literature-review` 会访问外部论文来源；未公开论文和研究主题要考虑保密要求。
- `systematic-literature-review` 自带脚本使用 arXiv 的 HTTP 端点，且完整流程依赖子代理。
- `excalidraw-diagram-generator` 的 Python 工具会改写指定文件；本轮只做静态扫描，没有运行。
- `systematic-debugging` 可能运行项目测试和修改代码，应只在受信任仓库中使用并避免把密钥写入日志。
- `find-skills` 会下载第三方 Skill，且 Skills CLI 有可关闭的匿名遥测；推荐结果不等于安全通过。

## 数据采集结果

采集时间：`2026-10-18T05:20:27Z`。Stars 为 GitHub 仓库级数据，安装量来自 skills.sh 页面内 `SoftwareApplication.interactionStatistic.userInteractionCount`。

| Skill | GitHub Stars | skills.sh 安装量 |
| --- | ---: | ---: |
| study-flashcards | 88 | null（不在 skills.sh，本轮来源没有等价统计） |
| academic-paper-review | 84,040 | 2,656 |
| systematic-literature-review | 84,040 | 2,418 |
| resume-review | 44 | 186 |
| excalidraw-diagram-generator | 40,138 | 31,363 |
| doc-coauthoring | 181,825 | 91,753 |
| systematic-debugging | 301,295 | 297,525 |
| find-skills | 35,401 | 3,907,466 |

安装量和 Stars 会变化；Stars 是整个仓库的，不等于单个 Skill 的评价。

## 与现有数据的关系

- `find-skills` 已在正式目录中，本文件把它作为对照和内容升级候选，不应再次新增记录。
- `doc-coauthoring` 已出现在上一轮候选清单中，本文件是更完整的专项审核，不应重复发布。
- 其余 6 项是本专项的新候选。
- 本文件采用专项审核结构，故意不做成 `import-skill.mjs` 可直接写入的生产包；人工选定候选后，再转成正式 `data/skills.json` 结构并做导入干运行。

## 事实、推断与示例如何区分

- `evidence.sourceFacts`：来自原始 `SKILL.md`、仓库 README、许可证或官方页面。
- `evidence.reasonableInferences`：面向大学生的使用频率、上手难度和可能的迁移性判断。
- `evidence.exampleStatus`：本轮 8 个案例均为 `illustrative-untested`。

因此，本轮可以确认“原文规定要产出什么、需要哪些工具、来源页面列了哪些平台”，不能确认“某个大学生一定能顺利得到同样结果”或“在 Codex 中已经跑通”。
