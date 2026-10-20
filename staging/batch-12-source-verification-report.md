# 第 12 批来源核验报告

执行日期：2026-10-19

## 结论

- 候选总数：15
- 进入中文草稿：2
- 正式目录重复：1
- 留待后续专项审核：12
- 本批不安装、不运行任何第三方 Skill。

进入草稿的是 `shadcn-ui/ui/shadcn` 与 `vercel-labs/agent-skills/vercel-react-native-skills`。前者补充 React 组件系统与 registry 工作流，后者补充 React Native/Expo 移动端性能规则；二者与现有目录能力的增量最清楚。

## 关键核验

1. shadcn 候选在榜单中写作 `shadcn/ui`，当前 skills.sh 页面和官方仓库均使用 `shadcn-ui/ui`，本批按官方规范化来源入库。
2. shadcn Skill 会运行项目 package runner 下的 CLI，并将组件作为源代码加入项目；更新现有组件前要求使用 `--dry-run` 与 `--diff`，`--overwrite` 需要明确同意。
3. React Native Skill 覆盖列表、动画、导航、UI、状态、渲染、monorepo 与配置八类规则；建议必须结合实际 React Native/Expo 版本、iOS/Android 平台和真机测量验证。
4. `systematic-debugging` 的同一来源与 ID 已在正式目录中，因此不重复导入。

## 暂缓项

- 飞书妙搭、Azure Reliability、Neon 与 Just Scrape 可能修改真实云资源、使用账号凭据或产生费用。
- HyperFrames Figma 涉及设计资产、令牌和双重凭据。
- `using-superpowers`、`writing-plans`、`requesting-code-review`、`implement-spec` 与 `retro` 假设特定宿主、子代理或外部系统，且与现有工作流类条目重叠。
- `writing-great-skills` 与已收录 Skill Creator 重叠；`test-driven-development` 与现有 TDD 条目重叠。

## 审核边界

本报告只基于公开页面和仓库源文件做静态核验，没有执行 CLI、安装依赖、连接账号、读取用户项目或修改外部资源。所有示例均按演示性内容处理。
