# 新 Skill 候选清单（待人工审核）

本清单包含 12 个候选，只进入 `candidate` 状态，不会被网站读取，也没有安装或执行任何第三方脚本。GitHub 元数据采集时间为 2026-10-18；skills.sh 安装量未写入，因为精确接口需要认证。

## 候选分布

| 类别 | 数量 | 候选 |
| --- | ---: | --- |
| 学习科研 | 1 | doc-coauthoring |
| 文档办公 | 1 | xlsx |
| 编程开发 | 6 | webapp-testing、React 性能、React 组件架构、Vercel 部署、React Native、Postgres 规范 |
| 设计创作 | 1 | canvas-design |
| AI 工具 | 3 | skill-creator、mcp-builder、ai-sdk |

## 推荐优先级

### 第一优先：容易向大学生解释，价值直接

1. `xlsx`：课程数据、实验数据、预算表和求职统计都容易形成真实场景。
2. `doc-coauthoring`：适合论文提纲、项目提案、课程报告和 PRD 协作。
3. `webapp-testing`：适合学生前端项目，且与现有静态规范检查形成互补。
4. `skill-creator`：与 EasySkillShow 的产品主题直接相关，可帮助用户理解 Skill 如何创建和评测。
5. `canvas-design`：可覆盖海报、社团活动物料和作品集视觉设计。

### 第二优先：适合 AI 编程用户

6. `vercel-react-best-practices`
7. `vercel-composition-patterns`
8. `supabase-postgres-best-practices`
9. `vercel-react-native-skills`
10. `ai-sdk`

### 需要更严格权限说明后再收录

11. `deploy-to-vercel`：会把项目发送到外部部署服务，涉及账号、团队和生产环境边界。
12. `mcp-builder`：可能连接外部 API 并处理密钥，需要更完整的权限和安全说明。

## 许可证与来源注意事项

- Vercel 的 React 三项候选和 Supabase Postgres 候选在 `SKILL.md` 中明确标为 MIT。
- Anthropic 的部分文档类 Skill 标明专有或要求查看各自 `LICENSE.txt`；不能因为仓库公开就默认允许任意转载。
- `deploy-to-vercel`、`ai-sdk`、`doc-coauthoring`、`skill-creator` 的 frontmatter 没有完整许可证结论，需要发布前继续核对。
- 4 个来源仓库在采集时均未归档，但“未归档”不等于长期维护承诺。

## 去重结论

- 没有候选与现有 10 个 Skill 完全重复。
- `webapp-testing` 与 `web-design-guidelines` 接近，但前者运行浏览器测试，后者按规范静态审查代码。
- `skill-creator` 与 `skill-doc-generator` 接近，但前者覆盖创建、评测和迭代，后者只整理文档。
- 两个 React 候选分别解决性能和组件架构问题，可以分开收录，也可以在首轮只选其一降低认知负担。

## 建议人工审核顺序

先审核 `xlsx`、`doc-coauthoring`、`webapp-testing`、`skill-creator`、`canvas-design`。这 5 个最符合大学生日常任务，也最容易开展真实用户测试。其余候选等待分类覆盖和权限说明确认后再决定是否进入 `draft`。
