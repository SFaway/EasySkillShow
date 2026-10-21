# EasySkillShow · 面向普通中文用户的 Skill 发现平台

> v0.7 发布候选版｜2026-10-21｜从真实任务出发，帮助普通中文用户找到、比较并理解 Skill。

## 用 Windows 11 + VS Code 启动

1. 将压缩包解压到 `D:\Code\EasySkillShow_MVP`（其他目录也可以）。
2. 用 VS Code 打开整个文件夹。
3. 确保电脑安装了 Node.js 18 及以上版本。在终端运行 `node -v`。
4. 在项目根目录的终端运行：

```powershell
npm start
```

5. 浏览器访问 **http://localhost:4173**。

不需要 `npm install`、不需要 API Key、也不需要登录。退出服务按 `Ctrl+C`。

## 已经实现

- PCL 风格的蓝白布局、左侧分类导航、紧凑 Skill 列表。
- 任务式首页、名称 / 中文用途搜索、场景专题、分类筛选、排序与收藏。
- 最多 3 个 Skill 并排对比；支持最近浏览、筛选条件保留和分批展示目录。
- 二级 Skill 详情页：**简明版 / 详细版切换**、场景、输入输出示例、安装方法、来源和限制。
- 内容质量分级，明确区分来源核对、命令来源核对、Codex 实测与演示证据。
- 请求超时和失败重试、本地保存异常降级、键盘标签切换、跳到主要内容和减少动画支持。
- 为 Codex 预留 `detailZh` 与 `exampleDetails` 字段，未补充的内容明确提示“待完善”，不伪造结果。
- `import:skill` 新增可选 `--update-existing`，安全导入已有条目的修订稿，先预览、写入前自动备份。
- 实际可请求的本地只读 API（仅用于当前开发服务，不接入外部 API）；同一个数据源未来可供 Codex 访问。
- 119 条正式目录记录；另有 8 条 staging 深度审核稿，它们对应正式目录中的同一批 Skill，**不重复计入总数**。中文讲解是依据原始资料整理的摘要，不等于使用效果实测。
- 固定 7 个一级分类，并按内容数量展开二级任务；标签与“大学生常用”等精选集合不会挤占左侧分类。
- 默认推荐只让“来源已核对”的精选条目获得优先级；待审核条目仍保留在目录中，但不会仅凭 `featured=true` 排到首页前列。
- 安装命令来源与 Codex 实测状态分开展示；复制命令不等于安装成功、安全通过或功能可用。
- 数据结构校验和 Codex 产出 JSON 的安全导入脚本（不会执行 Skill 自身的代码）。

## 尚未实现，不要误认为完成

- 不是 skills.sh 的全量索引；只搜索当前正式收录的本地 119 条记录。
- 没有集成 skills.sh 远程 API 或 OAuth/OIDC。
- 没有自动运行 Skill、自动下载或一键安装。
- 没有自动翻译、批量导入 GitHub、真实图片/GIF 自动生成。
- `reviewStatus: source-checked` 仅代表核对了相关来源页面，并不代表功能或安全测试通过。
- Codex 查询 Skill 的接口设计已有，但 Codex 端 `SKILL.md` 还未创建。

## 目录说明

```text
EasySkillShow_MVP/
├─ public/                       # 一级页、二级页和样式
│  ├─ index.html
│  ├─ app.js
│  └─ styles.css
├─ data/skills.json             # 119 条正式 Skill 目录
├─ data/taxonomy.json           # 7 个一级分类、二级分类和专题集合
├─ server.mjs                  # 无第三方依赖的 Node API + 静态服务
├─ scripts/
│  ├─ validate-data.mjs       # 校验 Skill 数据
│  ├─ import-skill.mjs        # Codex 数据导入（需显式 --write）
│  └─ promote-student-candidates.mjs # 候选整理与专题集合维护
├─ staging/                      # Codex 输出文件示例
├─ docs/
│  ├─ PRD.md                   # MVP 产品约束与验收
│  ├─ API.md                   # 接口契约
│  └─ CODEX_HANDOFF.md         # 交给 Codex 的执行任务
└─ package.json
```

## 数据维护

```powershell
npm run check
npm run check:data
npm test
npm run import:skill -- staging/codex-output.example.json
# 默认只预检查，不写入数据。
# 确认无误才用以下命令导入：
npm run import:skill -- staging/your-real-skill.json --write
# 如要更新现有 Skill 的中文介绍，必须显式加上 --update-existing：
npm run import:skill -- staging/pptx-rewrite.template.json --update-existing  # 先预检
# 人工确认后再加 --write
# 默认保留已有分类、专题集合、来源、许可证、平台、精选和审核信息。
# 确实要改这些元数据时再加 --update-metadata；该记录会重置为待审核。
```

新增 Skill 一律标记 `pending`。更新已有条目的普通中文介绍时，默认保留分类、专题集合及已经审核的元数据；只有显式使用 `--update-metadata` 才替换这些受保护字段，并自动重置审核状态。禁止把模型生成的介绍冒充功能实测。

## 后续方向

1. 完善精选 Skill 的中文讲解和可验证的演示素材；真实访谈验证是否降低理解成本。
2. 让 Codex 根据 GitHub 源文件生成 `staging/*.json`；人工审查后入库。
3. 配置可缓存的服务端源同步，不将外部服务身份令牌暴露给浏览器。
4. 实现 Codex Finder，让 Codex 使用本平台的 `/api/v1/skills` 进行搜索。
5. 真正需要时再换成 React + TypeScript / 数据库；**当前零依赖方案是为了尽快交付可验证原型**。

项目面向产品作品集验证，不对第三方 Skill 的安全、维护或可用性作承诺。查看外部安装命令前请检查仓库源码和许可证。

## 验证记录

已通过 JavaScript 语法检查、119 条目录数据校验、推荐与专题集合回归测试、安装与 Codex 状态测试、导入保护测试以及接口冒烟测试。发布前体验审查见 `docs/UX_RELEASE_AUDIT.md`。当前自动化浏览器受本地页面安全策略限制，未将未执行的视觉验收记录为通过。

## 版本演进说明

- **简明版**使用 `summaryZh`、`scenarios`、`audience` 和原有 `inputExample` / `outputExample`，适合新手。
- **详细版**使用已有 `explanationZh`、`boundaries` 等信息，并在 Codex 输出新增 `detailZh` 和 `exampleDetails` 后自动补充细节。
- 当前 119 条正式记录中，待审核条目仍明确标记为待审核；8 条 staging 审核稿是已有条目的候选预览版本，所有演示性输入输出都不等于功能实测。
- 这版仍保持 `npm start` 启动的本地服务方式，**没有加入 skills.sh API、AI API，也没有改成直接双击 index.html 使用**。
- 给 Codex 的具体任务见 `docs/CODEX_CONTENT_TASK.md`，请先做一条 A/B 对照，确认质量后再批量处理。
- v0.3 至 v0.7 依次补充了任务首页、质量分级、对比、筛选上下文、最近浏览、渐进加载、错误恢复、键盘支持和发布前稳定性修复。
