# EasySkillShow 110 条候选审核报告

生成时间：2026-10-20T08:45:39.623Z

> 本报告核对公开 GitHub 文件，不执行候选中的任何安装命令、脚本或外部工具。所有候选的 Codex 状态均为 `not-tested`，通过仅表示可以进入 staging 继续评估。

## 汇总

- 输入候选：110
- 去重后可独立审核：110
- 重复项：0
- 通过并写入候选 JSON：54
- 未通过但完整保留原因：56
- 缺少 SKILL.md：0
- 缺少 README：0
- 缺少或无法取得 LICENSE：5
- 已在 Codex 实测：0

## 判定规则

1. 同 ID、同 SKILL.md 路径或功能综合相似度达到 0.95 的条目判为重复。仓库 URL 相同但 Skill 路径不同只记录重合，不自动删除；Python/R 等不同运行环境也保留。
2. SKILL.md、README、独立 LICENSE/COPYING 文件必须可以取得；许可证声明冲突或无法识别时不通过。
3. 来源提到 Codex、格式可能兼容和在 Codex 实际验证是三个不同状态。本轮没有执行安装，因此不产生“已实测”结论。
4. 依赖和风险通过公开文档关键词做保守归类；发现提权、管道执行或破坏性命令时必须转人工复核。

## 逐项结果

| # | 候选 | 去重 | SKILL | README | LICENSE | Codex 来源判断 | 结论 | 原因 |
|---:|---|:---:|:---:|:---:|---|---|---|---|
| 1 | 通用数据分析 | 唯一 | 是 | 是 | Apache-2.0 | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 2 | 数据可视化 | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 3 | SQL 查询生成 | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 4 | 问卷结果分析 | 唯一 | 是 | 是 | Apache-2.0 | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 5 | 用户访谈综合 | 唯一 | 是 | 是 | Apache-2.0 | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 6 | 用户旅程地图 | 唯一 | 是 | 是 | Apache-2.0 | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 7 | 学术引用核验 | 唯一 | 是 | 是 | MIT | portable-unverified | 通过 staging | 文档齐全；风险与依赖已记录 |
| 8 | 科学论文写作与质量检查 | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 9 | 学术文献检索 | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 10 | 个性化考试复习计划 | 唯一 | 是 | 是 | MIT | portable-unverified | 通过 staging | 文档齐全；风险与依赖已记录 |
| 11 | 英语学习教练 | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 12 | 求职与职业发展教练 | 唯一 | 是 | 是 | MIT | portable-unverified | 通过 staging | 文档齐全；风险与依赖已记录 |
| 13 | 产品/商业岗位面试准备 | 唯一 | 是 | 是 | missing | adaptation-required | 未通过 | 仓库未取得独立 LICENSE/COPYING 文件；存在 Claude 专用路径或工作流，Codex 适配尚未核实 |
| 14 | 数据分析师模拟面试 | 唯一 | 是 | 是 | MIT | adaptation-required | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过；存在 Claude 专用路径或工作流，Codex 适配尚未核实 |
| 15 | 考试考点提炼 | 唯一 | 是 | 是 | MIT | portable-unverified | 通过 staging | 文档齐全；风险与依赖已记录 |
| 16 | Claude Scholar: Research Ideation | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 17 | Archora: Hypothesis | 唯一 | 是 | 是 | missing | portable-unverified | 未通过 | 仓库未取得独立 LICENSE/COPYING 文件 |
| 18 | Brainstorming Research Ideas | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 19 | Creative Thinking for Research | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 20 | Research Gap Finder | 唯一 | 是 | 是 | MIT | portable-unverified | 通过 staging | 文档齐全；风险与依赖已记录 |
| 21 | Critical Integrative Review | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 22 | Surveying Literature | 唯一 | 是 | 是 | MIT | adaptation-required | 未通过 | 存在 Claude 专用路径或工作流，Codex 适配尚未核实 |
| 23 | CCF Literature Monitor | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 24 | Daily Paper Reader | 唯一 | 是 | 是 | Apache-2.0 | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 25 | Daily Papers | 唯一 | 是 | 是 | Apache-2.0 | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 26 | Nature Citation | 唯一 | 是 | 是 | Apache-2.0 | portable-unverified | 通过 staging | 文档齐全；风险与依赖已记录 |
| 27 | Nature Paper Card | 唯一 | 是 | 是 | Apache-2.0 | portable-unverified | 通过 staging | 文档齐全；风险与依赖已记录 |
| 28 | NotebookLM Skill | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 29 | Patent Research | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 30 | Gemini Deep Research | 唯一 | 是 | 是 | Apache-2.0 | portable-unverified | 通过 staging | 文档齐全；风险与依赖已记录 |
| 31 | Google Scholar Skills | 唯一 | 是 | 是 | MIT | adaptation-required | 未通过 | 存在 Claude 专用路径或工作流，Codex 适配尚未核实 |
| 32 | LitLLM | 唯一 | 是 | 是 | Apache-2.0 | adaptation-required | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过；存在 Claude 专用路径或工作流，Codex 适配尚未核实 |
| 33 | MinerU Skill | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 34 | Qinyan Citation | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 35 | Wenxian | 唯一 | 是 | 是 | LGPL-3.0 | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 36 | Preregister | 唯一 | 是 | 是 | MIT | adaptation-required | 未通过 | 存在 Claude 专用路径或工作流，Codex 适配尚未核实 |
| 37 | Research Question Audit | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 38 | Experimental Design | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 39 | Medical Study Design Review | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 40 | Power Analysis | 唯一 | 是 | 是 | MIT | adaptation-required | 未通过 | 存在 Claude 专用路径或工作流，Codex 适配尚未核实 |
| 41 | Conjoint Experiment Designer | 唯一 | 是 | 是 | unrecognized-file | source-declared | 未通过 | 取得许可证文件，但无法可靠识别许可证类型 |
| 42 | Fieldwork Methods | 唯一 | 是 | 是 | unrecognized-file | source-declared | 未通过 | 取得许可证文件，但无法可靠识别许可证类型 |
| 43 | IRB Protocol | 唯一 | 是 | 是 | unrecognized-file | source-declared | 未通过 | 取得许可证文件，但无法可靠识别许可证类型 |
| 44 | Derivation Verify | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 45 | Formula Derivation | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 46 | Lean 4 Theorem Proving | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 47 | Numerical Check | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 48 | Proof Writer | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 49 | Geospatial Data QC | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 50 | PhD Skills: Dataset Curation | 唯一 | 是 | 是 | MIT | portable-unverified | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 51 | gget | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 许可证声明 BSD-2-Clause 与文件识别结果 MIT 不一致；发现高风险命令模式，需要人工逐行复核后才能通过 |
| 52 | RDKit Cheminformatics | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 许可证声明 BSD-3-Clause 与文件识别结果 MIT 不一致；发现高风险命令模式，需要人工逐行复核后才能通过 |
| 53 | PhD Skills: Launch | 唯一 | 是 | 是 | MIT | portable-unverified | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 54 | PufferLib | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 55 | K-Dense: PyTorch Lightning | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 许可证声明 Apache-2.0 与文件识别结果 MIT 不一致；发现高风险命令模式，需要人工逐行复核后才能通过 |
| 56 | K-Dense: Stable Baselines3 | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 57 | PyTorch Geometric | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 58 | TRL Training | 唯一 | 是 | 是 | Apache-2.0 | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 59 | Hugging Face LLM Trainer | 唯一 | 是 | 是 | Apache-2.0 | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 60 | Hugging Face Vision Trainer | 唯一 | 是 | 是 | Apache-2.0 | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 61 | Mermaid Diagram Generator | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 62 | Academic Figure Drawing (TikZ) | 唯一 | 是 | 是 | MIT | portable-unverified | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 63 | CCF-Figure | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 64 | Draw.io Diagrams | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 65 | Scientific Illustration Guide | 唯一 | 是 | 是 | MIT | portable-unverified | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 66 | Scientific Schematics | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 67 | Biomedical Mechanism Figures | 唯一 | 是 | 是 | missing | source-declared | 未通过 | 仓库未取得独立 LICENSE/COPYING 文件 |
| 68 | PaperBanana | 唯一 | 是 | 是 | Apache-2.0 | portable-unverified | 未通过 | 许可证声明 MIT-0 与文件识别结果 Apache-2.0 不一致；发现高风险命令模式，需要人工逐行复核后才能通过 |
| 69 | Bulk RNA-seq Pipeline | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 70 | CCF Experiment Designer | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 71 | Data Leakage Audit | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 72 | FEM/CAE Governance | 唯一 | 是 | 是 | Apache-2.0 | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 73 | Materials Ontology Explorer | 唯一 | 是 | 是 | Apache-2.0 | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 74 | PhD Skills: Debug | 唯一 | 是 | 是 | MIT | portable-unverified | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 75 | PhD Skills: Research Publishing | 唯一 | 是 | 是 | MIT | portable-unverified | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 76 | Prepare Artifacts | 唯一 | 是 | 是 | Apache-2.0 | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 77 | Replication Package | 唯一 | 是 | 是 | MIT | adaptation-required | 未通过 | 存在 Claude 专用路径或工作流，Codex 适配尚未核实 |
| 78 | Verify Results | 唯一 | 是 | 是 | Apache-2.0 | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 79 | Benchmark Research Skill | 唯一 | 是 | 是 | MIT | portable-unverified | 通过 staging | 文档齐全；风险与依赖已记录 |
| 80 | Experiment Log Summarizer | 唯一 | 是 | 是 | MIT | portable-unverified | 通过 staging | 文档齐全；风险与依赖已记录 |
| 81 | AER Identification | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 82 | Network Meta-Analysis Pipeline | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 83 | Archora: Stats | 唯一 | 是 | 是 | missing | portable-unverified | 未通过 | 仓库未取得独立 LICENSE/COPYING 文件 |
| 84 | Guided Statistical Analysis | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 85 | Meta-Analysis & Systematic Review | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 86 | PyMC Bayesian Modeling | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 许可证声明 Apache-2.0 与文件识别结果 MIT 不一致；发现高风险命令模式，需要人工逐行复核后才能通过 |
| 87 | Medical Statistical Analysis | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 88 | Complex Survey Analysis (Python) | 唯一 | 是 | 是 | GPL-3.0 | source-declared | 未通过 | 许可证声明 LGPL-3.0 与文件识别结果 GPL-3.0 不一致；发现高风险命令模式，需要人工逐行复核后才能通过 |
| 89 | Complex Survey Analysis (R) | 唯一 | 是 | 是 | GPL-3.0 | source-declared | 未通过 | 许可证声明 LGPL-3.0 与文件识别结果 GPL-3.0 不一致；发现高风险命令模式，需要人工逐行复核后才能通过 |
| 90 | Fixest | 唯一 | 是 | 是 | GPL-3.0 | source-declared | 未通过 | 许可证声明 LGPL-3.0 与文件识别结果 GPL-3.0 不一致；发现高风险命令模式，需要人工逐行复核后才能通过 |
| 91 | AlterLab Qualitative Methods | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 92 | Analytic Memo Writing | 唯一 | 是 | 是 | MIT | adaptation-required | 未通过 | 存在 Claude 专用路径或工作流，Codex 适配尚未核实 |
| 93 | Thematic Analysis | 唯一 | 是 | 是 | MIT | portable-unverified | 通过 staging | 文档齐全；风险与依赖已记录 |
| 94 | Methodological Rules & Saturation | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 95 | Qualitative Analysis | 唯一 | 是 | 是 | unrecognized-file | source-declared | 未通过 | 取得许可证文件，但无法可靠识别许可证类型 |
| 96 | SHAP | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 97 | pyvene | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 98 | SAELens | 唯一 | 是 | 是 | MIT | portable-unverified | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 99 | nnsight | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 100 | Map Research Sites | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 101 | Nature Figure | 唯一 | 是 | 是 | Apache-2.0 | portable-unverified | 通过 staging | 文档齐全；风险与依赖已记录 |
| 102 | Archora: Figure | 唯一 | 是 | 是 | missing | portable-unverified | 未通过 | 仓库未取得独立 LICENSE/COPYING 文件 |
| 103 | Nature Paper Skills: Figure Planner | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 104 | Tufte Data Viz | 唯一 | 是 | 是 | MIT | portable-unverified | 通过 staging | 文档齐全；风险与依赖已记录 |
| 105 | Conference Poster Builder | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 106 | Nature Paper Skills: Submission Audit | 唯一 | 是 | 是 | MIT | source-declared | 未通过 | 发现高风险命令模式，需要人工逐行复核后才能通过 |
| 107 | PaperFit: Overflow Repair | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |
| 108 | Post-Publication Corrector | 唯一 | 是 | 是 | Apache-2.0 | adaptation-required | 未通过 | 存在 Claude 专用路径或工作流，Codex 适配尚未核实 |
| 109 | Research Disseminator | 唯一 | 是 | 是 | Apache-2.0 | adaptation-required | 未通过 | 存在 Claude 专用路径或工作流，Codex 适配尚未核实 |
| 110 | CCF Paper Writer | 唯一 | 是 | 是 | MIT | source-declared | 通过 staging | 文档齐全；风险与依赖已记录 |

## 依赖与安全风险明细

### 1. 通用数据分析

- ID：`TerminalSkills/skills/data-analysis`
- 来源：https://github.com/TerminalSkills/skills/blob/main/skills/data-analysis/SKILL.md
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；外部 CLI/二进制
- 风险：涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务
- 结论：通过 staging

### 2. 数据可视化

- ID：`seb1n/awesome-ai-agent-skills/data-visualization`
- 来源：https://github.com/seb1n/awesome-ai-agent-skills/blob/main/data-and-analytics/data-visualization/SKILL.md
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；GPU/模型训练；外部 CLI/二进制
- 风险：涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：通过 staging

### 3. SQL 查询生成

- ID：`seb1n/awesome-ai-agent-skills/sql-query-generation`
- 来源：https://github.com/seb1n/awesome-ai-agent-skills/blob/main/data-and-analytics/sql-query-generation/SKILL.md
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；GPU/模型训练；外部 CLI/二进制
- 风险：涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：通过 staging

### 4. 问卷结果分析

- ID：`product-on-purpose/pm-skills/measure-survey-analysis`
- 来源：https://github.com/product-on-purpose/pm-skills/blob/main/skills/measure-survey-analysis/SKILL.md
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；MCP 服务；Node/npm；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：通过 staging

### 5. 用户访谈综合

- ID：`product-on-purpose/pm-skills/discover-interview-synthesis`
- 来源：https://github.com/product-on-purpose/pm-skills/blob/main/skills/discover-interview-synthesis/SKILL.md
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；MCP 服务；Node/npm；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：通过 staging

### 6. 用户旅程地图

- ID：`product-on-purpose/pm-skills/discover-journey-map`
- 来源：https://github.com/product-on-purpose/pm-skills/blob/main/skills/discover-journey-map/SKILL.md
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；MCP 服务；Node/npm；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务
- 结论：通过 staging

### 7. 学术引用核验

- ID：`ruichenrui/citation-verification/citation-verification`
- 来源：https://github.com/ruichenrui/citation-verification/blob/main/SKILL.md
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：外部联网；MCP 服务；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务
- 结论：通过 staging

### 8. 科学论文写作与质量检查

- ID：`K-Dense-AI/scientific-agent-skills/scientific-writing`
- 来源：https://github.com/K-Dense-AI/scientific-agent-skills/blob/main/skills/scientific-writing/SKILL.md
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 9. 学术文献检索

- ID：`crash-you/literature-search/literature-search`
- 来源：https://github.com/crash-you/literature-search
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；MCP 服务；Python/pip/uv；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核
- 结论：通过 staging

### 10. 个性化考试复习计划

- ID：`microsoft/cat-agent-skills/exam-prep-learning-plan-builder`
- 来源：https://github.com/microsoft/cat-agent-skills/blob/main/submissions/exam-prep-learning-plan-builder/SKILL.md
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：外部联网；浏览器或浏览器 MCP；Python/pip/uv；Node/npm；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务
- 结论：通过 staging

### 11. 英语学习教练

- ID：`zhouwei713/english-learning-coach-skill/english-learning-coach`
- 来源：https://github.com/zhouwei713/english-learning-coach-skill/blob/main/SKILL.md
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；Python/pip/uv
- 风险：涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：通过 staging

### 12. 求职与职业发展教练

- ID：`Jeff-Kazzee/career-coach/career-coach`
- 来源：https://github.com/Jeff-Kazzee/career-coach
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：API Key/凭证；外部联网；Python/pip/uv
- 风险：涉及 API Key、令牌或其他凭证；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据
- 结论：通过 staging

### 13. 产品/商业岗位面试准备

- ID：`lan1177/interview-prep/interview-prep`
- 来源：https://github.com/lan1177/interview-prep
- Codex：包含 Claude 专用路径、钩子或工作流，迁移到 Codex 前需要人工适配
- 依赖：外部联网；MCP 服务；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务
- 结论：未通过；仓库未取得独立 LICENSE/COPYING 文件；存在 Claude 专用路径或工作流，Codex 适配尚未核实

### 14. 数据分析师模拟面试

- ID：`SankaiAI/interview-pre-agent-skill/interview-prep`
- 来源：https://github.com/SankaiAI/interview-pre-agent-skill
- Codex：包含 Claude 专用路径、钩子或工作流，迁移到 Codex 前需要人工适配
- 依赖：外部联网；Python/pip/uv；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过；存在 Claude 专用路径或工作流，Codex 适配尚未核实

### 15. 考试考点提炼

- ID：`sid-git-repo/sid-claude-skills/exam-ready`
- 来源：https://github.com/sid-git-repo/sid-claude-skills/blob/main/skills/exam-ready/SKILL.md
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：外部联网；MCP 服务；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务
- 结论：通过 staging

### 16. Claude Scholar: Research Ideation

- ID：`Galaxy-Dawn/claude-scholar/research-ideation`
- 来源：https://github.com/Galaxy-Dawn/claude-scholar/tree/HEAD/skills/research-ideation
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；LaTeX/TeX；外部 CLI/二进制
- 风险：可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：通过 staging

### 17. Archora: Hypothesis

- ID：`richard-kim-79/archora-skills/hypothesis`
- 来源：https://github.com/richard-kim-79/archora-skills/tree/HEAD/skills/hypothesis
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：外部联网；浏览器或浏览器 MCP；Node/npm
- 风险：可能联网、下载内容或访问外部服务
- 结论：未通过；仓库未取得独立 LICENSE/COPYING 文件

### 18. Brainstorming Research Ideas

- ID：`Orchestra-Research/AI-Research-SKILLs/brainstorming-research-ideas`
- 来源：https://github.com/Orchestra-Research/AI-Research-SKILLs/tree/HEAD/21-research-ideation/brainstorming-research-ideas
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；Python/pip/uv；Node/npm；Docker/容器；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：可能读取、写入或修改本地文件；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：通过 staging

### 19. Creative Thinking for Research

- ID：`Orchestra-Research/AI-Research-SKILLs/creative-thinking-for-research`
- 来源：https://github.com/Orchestra-Research/AI-Research-SKILLs/tree/HEAD/21-research-ideation/creative-thinking-for-research
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；Python/pip/uv；Node/npm；Docker/容器；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：可能读取、写入或修改本地文件；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：通过 staging

### 20. Research Gap Finder

- ID：`chtc66/academic-skills/research-gap-finder`
- 来源：https://github.com/chtc66/academic-skills/tree/HEAD/research-gap-finder
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：外部联网；Python/pip/uv
- 风险：可能联网、下载内容或访问外部服务；可能消耗大量算力、存储或云服务费用
- 结论：通过 staging

### 21. Critical Integrative Review

- ID：`ozzyzhou99/critical-integrative-review-skill/write-critical-literature-review`
- 来源：https://github.com/ozzyzhou99/critical-integrative-review-skill/tree/HEAD/write-critical-literature-review
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网
- 风险：可能联网、下载内容或访问外部服务
- 结论：通过 staging

### 22. Surveying Literature

- ID：`chgagne/claude-skills-research/surveying-literature`
- 来源：https://github.com/chgagne/claude-skills-research/tree/HEAD/surveying-literature
- Codex：包含 Claude 专用路径、钩子或工作流，迁移到 Codex 前需要人工适配
- 依赖：API Key/凭证；外部联网；Python/pip/uv；LaTeX/TeX；外部 CLI/二进制
- 风险：可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：未通过；存在 Claude 专用路径或工作流，Codex 适配尚未核实

### 23. CCF Literature Monitor

- ID：`mikubaka88/CCFA-Skills/ccf-literature-monitor`
- 来源：https://github.com/mikubaka88/CCFA-Skills/tree/HEAD/ccf-literature-monitor
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；Python/pip/uv；Node/npm；LaTeX/TeX；外部 CLI/二进制
- 风险：涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：通过 staging

### 24. Daily Paper Reader

- ID：`huangkiki/dailypaper-skills/paper-reader`
- 来源：https://github.com/huangkiki/dailypaper-skills/tree/HEAD/skills/paper-reader
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；Python/pip/uv；LaTeX/TeX；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 25. Daily Papers

- ID：`huangkiki/dailypaper-skills/daily-papers`
- 来源：https://github.com/huangkiki/dailypaper-skills/tree/HEAD/skills/daily-papers
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；Python/pip/uv；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 26. Nature Citation

- ID：`Yuan1z0825/nature-skills/nature-citation`
- 来源：https://github.com/Yuan1z0825/nature-skills/tree/HEAD/skills/nature-citation
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：外部联网；浏览器或浏览器 MCP
- 风险：可能联网、下载内容或访问外部服务
- 结论：通过 staging

### 27. Nature Paper Card

- ID：`Yuan1z0825/nature-skills/nature-paper-card`
- 来源：https://github.com/Yuan1z0825/nature-skills/tree/HEAD/skills/nature-paper-card
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：Python/pip/uv
- 风险：专业或高风险领域输出不能替代专家审核
- 结论：通过 staging

### 28. NotebookLM Skill

- ID：`pleaseprompto/notebooklm-skill/notebooklm`
- 来源：https://github.com/pleaseprompto/notebooklm-skill
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 29. Patent Research

- ID：`borghei/Claude-Skills/patent`
- 来源：https://github.com/borghei/Claude-Skills/tree/HEAD/research/patent
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核
- 结论：通过 staging

### 30. Gemini Deep Research

- ID：`sanjay3290/ai-skills/deep-research`
- 来源：https://github.com/sanjay3290/ai-skills/tree/HEAD/skills/deep-research
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：API Key/凭证；外部联网；MCP 服务；Python/pip/uv；Docker/容器；外部 CLI/二进制
- 风险：涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：通过 staging

### 31. Google Scholar Skills

- ID：`cookjohn/gs-skills/gs-search`
- 来源：https://github.com/cookjohn/gs-skills/tree/HEAD/skills/gs-search
- Codex：包含 Claude 专用路径、钩子或工作流，迁移到 Codex 前需要人工适配
- 依赖：外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：未通过；存在 Claude 专用路径或工作流，Codex 适配尚未核实

### 32. LitLLM

- ID：`litllm/litllm/litllm`
- 来源：https://github.com/litllm/litllm/tree/HEAD/skill
- Codex：包含 Claude 专用路径、钩子或工作流，迁移到 Codex 前需要人工适配
- 依赖：API Key/凭证；外部联网；Python/pip/uv；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能消耗大量算力、存储或云服务费用
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过；存在 Claude 专用路径或工作流，Codex 适配尚未核实

### 33. MinerU Skill

- ID：`nebutra/mineru-skill/mineru`
- 来源：https://github.com/nebutra/mineru-skill/tree/HEAD/skills/mineru
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；MCP 服务；Python/pip/uv；Node/npm；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能消耗大量算力、存储或云服务费用
- 结论：通过 staging

### 34. Qinyan Citation

- ID：`LeonChaoX/qinyan-academic-skills/qinyan-citation`
- 来源：https://github.com/LeonChaoX/qinyan-academic-skills/tree/HEAD/skills/沁言学术skills/qinyan-citation
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；LaTeX/TeX；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 35. Wenxian

- ID：`njzjz/wenxian/wenxian`
- 来源：https://github.com/njzjz/wenxian/tree/HEAD/skill
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；浏览器或浏览器 MCP；Python/pip/uv；LaTeX/TeX；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能联网、下载内容或访问外部服务
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 36. Preregister

- ID：`pedrohcgs/claude-code-my-workflow/preregister`
- 来源：https://github.com/pedrohcgs/claude-code-my-workflow/tree/HEAD/.claude/skills/preregister
- Codex：包含 Claude 专用路径、钩子或工作流，迁移到 Codex 前需要人工适配
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；R 环境；Docker/容器；LaTeX/TeX；外部 CLI/二进制
- 风险：可能执行本地命令或脚本；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据
- 结论：未通过；存在 Claude 专用路径或工作流，Codex 适配尚未核实

### 37. Research Question Audit

- ID：`isshikiayane/research-workflow-skills/research-question-audit`
- 来源：https://github.com/isshikiayane/research-workflow-skills/tree/HEAD/research-question-audit
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：Python/pip/uv
- 风险：可能处理个人、研究参与者或位置数据
- 结论：通过 staging

### 38. Experimental Design

- ID：`K-Dense-AI/scientific-agent-skills/experimental-design`
- 来源：https://github.com/K-Dense-AI/scientific-agent-skills/tree/HEAD/skills/experimental-design
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 39. Medical Study Design Review

- ID：`Aperivue/medsci-skills/design-study`
- 来源：https://github.com/Aperivue/medsci-skills/tree/HEAD/skills/design-study
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；Python/pip/uv；Node/npm；GPU/模型训练；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能消耗大量算力、存储或云服务费用
- 结论：通过 staging

### 40. Power Analysis

- ID：`pedrohcgs/claude-code-my-workflow/power-analysis`
- 来源：https://github.com/pedrohcgs/claude-code-my-workflow/tree/HEAD/.claude/skills/power-analysis
- Codex：包含 Claude 专用路径、钩子或工作流，迁移到 Codex 前需要人工适配
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；R 环境；Docker/容器；LaTeX/TeX；外部 CLI/二进制
- 风险：可能执行本地命令或脚本；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：未通过；存在 Claude 专用路径或工作流，Codex 适配尚未核实

### 41. Conjoint Experiment Designer

- ID：`scdenney/open-science-skills/conjoint-design`
- 来源：https://github.com/scdenney/open-science-skills/tree/HEAD/plugin/skills/conjoint-design
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；Python/pip/uv；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：未通过；取得许可证文件，但无法可靠识别许可证类型

### 42. Fieldwork Methods

- ID：`MattArtzAnthro/AI-Anthropology-Toolkit/fieldwork-methods`
- 来源：https://github.com/MattArtzAnthro/AI-Anthropology-Toolkit/tree/HEAD/skills/fieldwork-methods
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；外部 CLI/二进制
- 风险：涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据
- 结论：未通过；取得许可证文件，但无法可靠识别许可证类型

### 43. IRB Protocol

- ID：`MattArtzAnthro/AI-Anthropology-Toolkit/irb-protocol`
- 来源：https://github.com/MattArtzAnthro/AI-Anthropology-Toolkit/tree/HEAD/skills/irb-protocol
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；外部 CLI/二进制
- 风险：涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据
- 结论：未通过；取得许可证文件，但无法可靠识别许可证类型

### 44. Derivation Verify

- ID：`fkguo/nullius/derivation-verify`
- 来源：https://github.com/fkguo/nullius/tree/HEAD/skills/derivation-verify
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；MCP 服务；Python/pip/uv；Node/npm；LaTeX/TeX；外部 CLI/二进制
- 风险：可能执行本地命令或脚本；可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：通过 staging

### 45. Formula Derivation

- ID：`wanshuiyin/Auto-claude-code-research-in-sleep/formula-derivation`
- 来源：https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/tree/HEAD/skills/formula-derivation
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 46. Lean 4 Theorem Proving

- ID：`cameronfreer/lean4-skills/lean4`
- 来源：https://github.com/cameronfreer/lean4-skills/tree/HEAD/plugins/lean4/skills/lean4
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；MCP 服务；Python/pip/uv；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务
- 结论：通过 staging

### 47. Numerical Check

- ID：`flonat/flonat-research/numerical-check`
- 来源：https://github.com/flonat/flonat-research/tree/HEAD/skills/numerical-check
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；MCP 服务；Python/pip/uv；Node/npm；LaTeX/TeX；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能执行本地命令或脚本；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 48. Proof Writer

- ID：`wanshuiyin/Auto-claude-code-research-in-sleep/proof-writer`
- 来源：https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/tree/HEAD/skills/proof-writer
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 49. Geospatial Data QC

- ID：`isshikiayane/research-workflow-skills/geospatial-data-qc`
- 来源：https://github.com/isshikiayane/research-workflow-skills/tree/HEAD/geospatial-data-qc
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：Python/pip/uv
- 风险：可能处理个人、研究参与者或位置数据
- 结论：通过 staging

### 50. PhD Skills: Dataset Curation

- ID：`fcakyon/phd-skills/dataset-curation`
- 来源：https://github.com/fcakyon/phd-skills/tree/HEAD/plugin/skills/dataset-curation
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：外部联网；MCP 服务；Python/pip/uv；Node/npm；LaTeX/TeX；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 51. gget

- ID：`K-Dense-AI/scientific-agent-skills/gget`
- 来源：https://github.com/K-Dense-AI/scientific-agent-skills/tree/HEAD/skills/gget
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：未通过；许可证声明 BSD-2-Clause 与文件识别结果 MIT 不一致；发现高风险命令模式，需要人工逐行复核后才能通过

### 52. RDKit Cheminformatics

- ID：`K-Dense-AI/scientific-agent-skills/rdkit`
- 来源：https://github.com/K-Dense-AI/scientific-agent-skills/tree/HEAD/skills/rdkit
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：未通过；许可证声明 BSD-3-Clause 与文件识别结果 MIT 不一致；发现高风险命令模式，需要人工逐行复核后才能通过

### 53. PhD Skills: Launch

- ID：`fcakyon/phd-skills/launch`
- 来源：https://github.com/fcakyon/phd-skills/tree/HEAD/plugin/skills/launch
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：API Key/凭证；外部联网；MCP 服务；Python/pip/uv；Node/npm；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能消耗大量算力、存储或云服务费用
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 54. PufferLib

- ID：`K-Dense-AI/scientific-agent-skills/pufferlib`
- 来源：https://github.com/K-Dense-AI/scientific-agent-skills/tree/HEAD/skills/pufferlib
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 55. K-Dense: PyTorch Lightning

- ID：`K-Dense-AI/scientific-agent-skills/pytorch-lightning`
- 来源：https://github.com/K-Dense-AI/scientific-agent-skills/tree/HEAD/skills/pytorch-lightning
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：未通过；许可证声明 Apache-2.0 与文件识别结果 MIT 不一致；发现高风险命令模式，需要人工逐行复核后才能通过

### 56. K-Dense: Stable Baselines3

- ID：`K-Dense-AI/scientific-agent-skills/stable-baselines3`
- 来源：https://github.com/K-Dense-AI/scientific-agent-skills/tree/HEAD/skills/stable-baselines3
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 57. PyTorch Geometric

- ID：`K-Dense-AI/scientific-agent-skills/torch-geometric`
- 来源：https://github.com/K-Dense-AI/scientific-agent-skills/tree/HEAD/skills/torch-geometric
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 58. TRL Training

- ID：`huggingface/skills/trl-training`
- 来源：https://github.com/huggingface/skills/tree/HEAD/skills/trl-training
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；MCP 服务；Python/pip/uv；Docker/容器；GPU/模型训练；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：通过 staging

### 59. Hugging Face LLM Trainer

- ID：`huggingface/skills/huggingface-llm-trainer`
- 来源：https://github.com/huggingface/skills/tree/HEAD/skills/huggingface-llm-trainer
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；MCP 服务；Python/pip/uv；Docker/容器；GPU/模型训练；外部 CLI/二进制
- 风险：可能读取、写入或修改本地文件；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：通过 staging

### 60. Hugging Face Vision Trainer

- ID：`huggingface/skills/huggingface-vision-trainer`
- 来源：https://github.com/huggingface/skills/tree/HEAD/skills/huggingface-vision-trainer
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；MCP 服务；Python/pip/uv；Docker/容器；GPU/模型训练；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：通过 staging

### 61. Mermaid Diagram Generator

- ID：`wanshuiyin/Auto-claude-code-research-in-sleep/mermaid-diagram`
- 来源：https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/tree/HEAD/skills/mermaid-diagram
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 62. Academic Figure Drawing (TikZ)

- ID：`nanoAgentTeam/research-claw/figure-drawing`
- 来源：https://github.com/nanoAgentTeam/research-claw/tree/HEAD/config/.skills/figure-drawing
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；Python/pip/uv；Node/npm；LaTeX/TeX；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 63. CCF-Figure

- ID：`Deepshare-Official/CCF-Figure/scientific-figure-generator`
- 来源：https://github.com/Deepshare-Official/CCF-Figure
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；Python/pip/uv
- 风险：可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核
- 结论：通过 staging

### 64. Draw.io Diagrams

- ID：`Agents365-ai/drawio-skill/drawio-skill`
- 来源：https://github.com/Agents365-ai/drawio-skill/tree/HEAD/skills/drawio-skill
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 65. Scientific Illustration Guide

- ID：`wentorai/research-plugins/scientific-illustration-guide`
- 来源：https://github.com/wentorai/research-plugins/tree/HEAD/skills/tools/diagram/scientific-illustration-guide
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：API Key/凭证；外部联网；Python/pip/uv；Node/npm；LaTeX/TeX
- 风险：包含高风险或提权型命令，需要逐条人工审查；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 66. Scientific Schematics

- ID：`K-Dense-AI/scientific-agent-skills/scientific-schematics`
- 来源：https://github.com/K-Dense-AI/scientific-agent-skills/tree/HEAD/skills/scientific-schematics
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 67. Biomedical Mechanism Figures

- ID：`yiyanli123/biorender-mechanism-figures-skill/biorender-mechanism-figures`
- 来源：https://github.com/yiyanli123/biorender-mechanism-figures-skill/tree/HEAD/biorender-mechanism-figures
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：Python/pip/uv；外部 CLI/二进制
- 风险：专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据
- 结论：未通过；仓库未取得独立 LICENSE/COPYING 文件

### 68. PaperBanana

- ID：`dwzhu-pku/PaperBanana/paperbanana`
- 来源：https://github.com/dwzhu-pku/PaperBanana/tree/HEAD/skill
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：API Key/凭证；外部联网；Python/pip/uv；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务
- 结论：未通过；许可证声明 MIT-0 与文件识别结果 Apache-2.0 不一致；发现高风险命令模式，需要人工逐行复核后才能通过

### 69. Bulk RNA-seq Pipeline

- ID：`K-Dense-AI/scientific-agent-skills/bulk-rnaseq`
- 来源：https://github.com/K-Dense-AI/scientific-agent-skills/tree/HEAD/skills/bulk-rnaseq
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 70. CCF Experiment Designer

- ID：`mikubaka88/CCFA-Skills/ccf-experiment-designer`
- 来源：https://github.com/mikubaka88/CCFA-Skills/tree/HEAD/ccf-experiment-designer
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；浏览器或浏览器 MCP；Python/pip/uv；Node/npm；LaTeX/TeX；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：通过 staging

### 71. Data Leakage Audit

- ID：`isshikiayane/research-workflow-skills/data-leakage-audit`
- 来源：https://github.com/isshikiayane/research-workflow-skills/tree/HEAD/data-leakage-audit
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：Python/pip/uv
- 风险：可能处理个人、研究参与者或位置数据
- 结论：通过 staging

### 72. FEM/CAE Governance

- ID：`test1card/femis-skill/femis`
- 来源：https://github.com/test1card/femis-skill
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；MCP 服务；Python/pip/uv；Node/npm；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务
- 结论：通过 staging

### 73. Materials Ontology Explorer

- ID：`HeshamFS/materials-simulation-skills/ontology-explorer`
- 来源：https://github.com/HeshamFS/materials-simulation-skills/tree/HEAD/skills/ontology/ontology-explorer
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；浏览器或浏览器 MCP；Python/pip/uv；Node/npm；外部 CLI/二进制
- 风险：可能执行本地命令或脚本；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核
- 结论：通过 staging

### 74. PhD Skills: Debug

- ID：`fcakyon/phd-skills/debug`
- 来源：https://github.com/fcakyon/phd-skills/tree/HEAD/plugin/skills/debug
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：外部联网；MCP 服务；Python/pip/uv；Node/npm；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能读取、写入或修改本地文件；可能联网、下载内容或访问外部服务；可能消耗大量算力、存储或云服务费用
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 75. PhD Skills: Research Publishing

- ID：`fcakyon/phd-skills/research-publishing`
- 来源：https://github.com/fcakyon/phd-skills/tree/HEAD/plugin/skills/research-publishing
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：API Key/凭证；外部联网；MCP 服务；Python/pip/uv；Node/npm；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能消耗大量算力、存储或云服务费用
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 76. Prepare Artifacts

- ID：`ShaishavMaisuria/research-paper-lifecycle-skills/prepare-artifacts`
- 来源：https://github.com/ShaishavMaisuria/research-paper-lifecycle-skills/tree/HEAD/skills/prepare-artifacts
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；浏览器或浏览器 MCP；Node/npm；LaTeX/TeX；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：通过 staging

### 77. Replication Package

- ID：`pedrohcgs/claude-code-my-workflow/replication-package`
- 来源：https://github.com/pedrohcgs/claude-code-my-workflow/tree/HEAD/.claude/skills/replication-package
- Codex：包含 Claude 专用路径、钩子或工作流，迁移到 Codex 前需要人工适配
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；R 环境；Docker/容器；LaTeX/TeX；外部 CLI/二进制
- 风险：可能执行本地命令或脚本；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：未通过；存在 Claude 专用路径或工作流，Codex 适配尚未核实

### 78. Verify Results

- ID：`ShaishavMaisuria/research-paper-lifecycle-skills/verify-results`
- 来源：https://github.com/ShaishavMaisuria/research-paper-lifecycle-skills/tree/HEAD/skills/verify-results
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；浏览器或浏览器 MCP；Python/pip/uv；Node/npm；Docker/容器；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：通过 staging

### 79. Benchmark Research Skill

- ID：`eternalwavee/benchmark-research-skill/benchmark-research-skill`
- 来源：https://github.com/eternalwavee/benchmark-research-skill
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：外部联网；Python/pip/uv
- 风险：可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：通过 staging

### 80. Experiment Log Summarizer

- ID：`chtc66/academic-skills/experiment-log-summarizer`
- 来源：https://github.com/chtc66/academic-skills/tree/HEAD/experiment-log-summarizer
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：外部联网；Python/pip/uv
- 风险：可能联网、下载内容或访问外部服务；可能消耗大量算力、存储或云服务费用
- 结论：通过 staging

### 81. AER Identification

- ID：`brycewang-stanford/AER-Skills/aer-identification`
- 来源：https://github.com/brycewang-stanford/AER-Skills/tree/HEAD/skills/aer-identification
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；MCP 服务；Python/pip/uv；R 环境；LaTeX/TeX
- 风险：可能联网、下载内容或访问外部服务
- 结论：通过 staging

### 82. Network Meta-Analysis Pipeline

- ID：`xinglongMedical/nma-research-skill/nma-research`
- 来源：https://github.com/xinglongMedical/nma-research-skill
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；Python/pip/uv；R 环境；外部 CLI/二进制
- 风险：涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核
- 结论：通过 staging

### 83. Archora: Stats

- ID：`richard-kim-79/archora-skills/stats`
- 来源：https://github.com/richard-kim-79/archora-skills/tree/HEAD/skills/stats
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：外部联网；浏览器或浏览器 MCP；Node/npm
- 风险：可能联网、下载内容或访问外部服务
- 结论：未通过；仓库未取得独立 LICENSE/COPYING 文件

### 84. Guided Statistical Analysis

- ID：`K-Dense-AI/scientific-agent-skills/statistical-analysis`
- 来源：https://github.com/K-Dense-AI/scientific-agent-skills/tree/HEAD/skills/statistical-analysis
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 85. Meta-Analysis & Systematic Review

- ID：`Aperivue/medsci-skills/meta-analysis`
- 来源：https://github.com/Aperivue/medsci-skills/tree/HEAD/skills/meta-analysis
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；Python/pip/uv；Node/npm；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核
- 结论：通过 staging

### 86. PyMC Bayesian Modeling

- ID：`K-Dense-AI/scientific-agent-skills/pymc`
- 来源：https://github.com/K-Dense-AI/scientific-agent-skills/tree/HEAD/skills/pymc
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：未通过；许可证声明 Apache-2.0 与文件识别结果 MIT 不一致；发现高风险命令模式，需要人工逐行复核后才能通过

### 87. Medical Statistical Analysis

- ID：`Aperivue/medsci-skills/analyze-stats`
- 来源：https://github.com/Aperivue/medsci-skills/tree/HEAD/skills/analyze-stats
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；Python/pip/uv；Node/npm；R 环境；LaTeX/TeX；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据
- 结论：通过 staging

### 88. Complex Survey Analysis (Python)

- ID：`DAAF-Contribution-Community/daaf/svy`
- 来源：https://github.com/DAAF-Contribution-Community/daaf/tree/HEAD/.claude/skills/svy
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；Python/pip/uv；R 环境；Docker/容器；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据
- 结论：未通过；许可证声明 LGPL-3.0 与文件识别结果 GPL-3.0 不一致；发现高风险命令模式，需要人工逐行复核后才能通过

### 89. Complex Survey Analysis (R)

- ID：`DAAF-Contribution-Community/daaf/survey-r`
- 来源：https://github.com/DAAF-Contribution-Community/daaf/tree/HEAD/.claude/skills/survey-r
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；Python/pip/uv；R 环境；Docker/容器；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据
- 结论：未通过；许可证声明 LGPL-3.0 与文件识别结果 GPL-3.0 不一致；发现高风险命令模式，需要人工逐行复核后才能通过

### 90. Fixest

- ID：`DAAF-Contribution-Community/daaf/fixest`
- 来源：https://github.com/DAAF-Contribution-Community/daaf/tree/HEAD/.claude/skills/fixest
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；Python/pip/uv；R 环境；Docker/容器；LaTeX/TeX；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据
- 结论：未通过；许可证声明 LGPL-3.0 与文件识别结果 GPL-3.0 不一致；发现高风险命令模式，需要人工逐行复核后才能通过

### 91. AlterLab Qualitative Methods

- ID：`AlterLab-IEU/AlterLab-Academic-Skills/alterlab-qualitative-methods`
- 来源：https://github.com/AlterLab-IEU/AlterLab-Academic-Skills/tree/HEAD/skills/research-tools/alterlab-qualitative-methods
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；LaTeX/TeX；外部 CLI/二进制
- 风险：涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据
- 结论：通过 staging

### 92. Analytic Memo Writing

- ID：`smirik/psy-qm-skills/memo-write`
- 来源：https://github.com/smirik/psy-qm-skills/tree/HEAD/skills/memo-write
- Codex：包含 Claude 专用路径、钩子或工作流，迁移到 Codex 前需要人工适配
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；Python/pip/uv；LaTeX/TeX；外部 CLI/二进制
- 风险：涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务
- 结论：未通过；存在 Claude 专用路径或工作流，Codex 适配尚未核实

### 93. Thematic Analysis

- ID：`keemanxp/thematic-analysis-skill/thematic-analysis`
- 来源：https://github.com/keemanxp/thematic-analysis-skill/tree/HEAD/thematic-analysis
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：外部联网；Python/pip/uv；Node/npm
- 风险：可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：通过 staging

### 94. Methodological Rules & Saturation

- ID：`linxule/interpretive-orchestration/methodological-rules`
- 来源：https://github.com/linxule/interpretive-orchestration/tree/HEAD/plugin/skills/methodological-rules
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；MCP 服务；Node/npm；外部 CLI/二进制
- 风险：涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务
- 结论：通过 staging

### 95. Qualitative Analysis

- ID：`MattArtzAnthro/AI-Anthropology-Toolkit/qualitative-analysis`
- 来源：https://github.com/MattArtzAnthro/AI-Anthropology-Toolkit/tree/HEAD/skills/qualitative-analysis
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；外部 CLI/二进制
- 风险：涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：未通过；取得许可证文件，但无法可靠识别许可证类型

### 96. SHAP

- ID：`K-Dense-AI/scientific-agent-skills/shap`
- 来源：https://github.com/K-Dense-AI/scientific-agent-skills/tree/HEAD/skills/shap
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 97. pyvene

- ID：`Orchestra-Research/AI-Research-SKILLs/pyvene-interventions`
- 来源：https://github.com/Orchestra-Research/AI-Research-SKILLs/tree/HEAD/04-mechanistic-interpretability/pyvene
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；Python/pip/uv；Node/npm；Docker/容器；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：可能读取、写入或修改本地文件；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：通过 staging

### 98. SAELens

- ID：`NousResearch/hermes-agent/saelens`
- 来源：https://github.com/NousResearch/hermes-agent/tree/HEAD/optional-skills/mlops/saelens
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能消耗大量算力、存储或云服务费用
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 99. nnsight

- ID：`Orchestra-Research/AI-Research-SKILLs/nnsight-remote-interpretability`
- 来源：https://github.com/Orchestra-Research/AI-Research-SKILLs/tree/HEAD/04-mechanistic-interpretability/nnsight
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；Python/pip/uv；Node/npm；Docker/容器；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：通过 staging

### 100. Map Research Sites

- ID：`Revonia-gh/evidence-first-research-skills/map-research-sites`
- 来源：https://github.com/Revonia-gh/evidence-first-research-skills/tree/HEAD/.agents/skills/map-research-sites
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；Python/pip/uv
- 风险：涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：通过 staging

### 101. Nature Figure

- ID：`Yuan1z0825/nature-skills/nature-figure`
- 来源：https://github.com/Yuan1z0825/nature-skills/tree/HEAD/skills/nature-figure
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：Python/pip/uv
- 风险：可能处理个人、研究参与者或位置数据
- 结论：通过 staging

### 102. Archora: Figure

- ID：`richard-kim-79/archora-skills/figure`
- 来源：https://github.com/richard-kim-79/archora-skills/tree/HEAD/skills/figure
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：外部联网；浏览器或浏览器 MCP；Python/pip/uv；Node/npm
- 风险：可能联网、下载内容或访问外部服务
- 结论：未通过；仓库未取得独立 LICENSE/COPYING 文件

### 103. Nature Paper Skills: Figure Planner

- ID：`boom5426/nature-paper-skills/figure-planner`
- 来源：https://github.com/boom5426/nature-paper-skills/tree/HEAD/skills/core/figure-planner
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；Python/pip/uv；LaTeX/TeX；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 104. Tufte Data Viz

- ID：`caylent/tufte-data-viz/tufte-data-viz`
- 来源：https://github.com/caylent/tufte-data-viz
- Codex：SKILL.md 结构可能被 Agent Skills 工具读取，但尚未在 Codex 实测
- 依赖：外部联网；浏览器或浏览器 MCP；Python/pip/uv；Node/npm
- 风险：可能联网、下载内容或访问外部服务
- 结论：通过 staging

### 105. Conference Poster Builder

- ID：`K-Dense-AI/scientific-agent-skills/pptx-posters`
- 来源：https://github.com/K-Dense-AI/scientific-agent-skills/tree/HEAD/skills/pptx-posters
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：API Key/凭证；外部联网；浏览器或浏览器 MCP；MCP 服务；Python/pip/uv；Node/npm；Docker/容器；LaTeX/TeX；GPU/模型训练；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能读取、写入或修改本地文件；涉及 API Key、令牌或其他凭证；可能联网、下载内容或访问外部服务；专业或高风险领域输出不能替代专家审核；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 106. Nature Paper Skills: Submission Audit

- ID：`boom5426/nature-paper-skills/submission-audit`
- 来源：https://github.com/boom5426/nature-paper-skills/tree/HEAD/skills/core/submission-audit
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；Python/pip/uv；LaTeX/TeX；外部 CLI/二进制
- 风险：包含高风险或提权型命令，需要逐条人工审查；可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：未通过；发现高风险命令模式，需要人工逐行复核后才能通过

### 107. PaperFit: Overflow Repair

- ID：`openraiser/paperfit/overflow-repair`
- 来源：https://github.com/openraiser/paperfit/tree/HEAD/skills/overflow-repair
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；Python/pip/uv；Node/npm；LaTeX/TeX；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务
- 结论：通过 staging

### 108. Post-Publication Corrector

- ID：`yaotingsun/academic-publishing-skills/post-publication-corrector`
- 来源：https://github.com/yaotingsun/academic-publishing-skills/tree/HEAD/plugins/post-publication-corrector/skills/post-publication-corrector
- Codex：包含 Claude 专用路径、钩子或工作流，迁移到 Codex 前需要人工适配
- 依赖：外部联网；MCP 服务；Python/pip/uv
- 风险：可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：未通过；存在 Claude 专用路径或工作流，Codex 适配尚未核实

### 109. Research Disseminator

- ID：`yaotingsun/academic-publishing-skills/research-disseminator`
- 来源：https://github.com/yaotingsun/academic-publishing-skills/tree/HEAD/plugins/research-disseminator/skills/research-disseminator
- Codex：包含 Claude 专用路径、钩子或工作流，迁移到 Codex 前需要人工适配
- 依赖：外部联网；MCP 服务；Python/pip/uv
- 风险：可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据
- 结论：未通过；存在 Claude 专用路径或工作流，Codex 适配尚未核实

### 110. CCF Paper Writer

- ID：`mikubaka88/CCFA-Skills/ccf-paper-writer`
- 来源：https://github.com/mikubaka88/CCFA-Skills/tree/HEAD/ccf-paper-writer
- Codex：来源文本提到 Codex，但本项目未实际安装或运行验证
- 依赖：外部联网；浏览器或浏览器 MCP；Python/pip/uv；Node/npm；LaTeX/TeX；外部 CLI/二进制
- 风险：可能联网、下载内容或访问外部服务；可能处理个人、研究参与者或位置数据；可能消耗大量算力、存储或云服务费用
- 结论：通过 staging
