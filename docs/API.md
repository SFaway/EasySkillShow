# API 设计（MVP 运行中）

## 架构目标

浏览器和未来 Codex 查询器使用**同一套本地 Skill 目录**。用户不需要携带 API Key；第一版完全不请求第三方 API。

## 已实现的只读 API

### `GET /api/v1/health`
返回 `{ "ok": true, "version": "0.1.0", "dataMode": "local-curated" }`。

### `GET /api/v1/categories`
返回“全部分类”与固定 7 个一级分类；每个一级分类包含当前数量和二级任务计数。

### `GET /api/v1/taxonomy`

返回本地分类字典、二级任务、展开阈值和精选集合。分类与集合都来自 `data/taxonomy.json`，浏览器不会临时调用 AI 自动分类。

### `GET /api/v1/skills`

查询参数：

| 参数 | 例子 | 作用 |
|---|---|---|
| `q` | `PPT`、`网页`、`广告文案` | 中英文名/关键词/场景本地检索 |
| `category` | `文档办公` | 按一级分类过滤，默认全部分类 |
| `subcategory` | `presentations` | 按二级任务过滤 |
| `collection` | `student-essential` | 按跨分类精选集合过滤 |
| `sort` | `recommended`、`name`、`category` | 排序 |
| `featured` | `true` | 仅返回精选条目 |
| `limit` | `50` | 1～100 |
| `page` | `1` | 页码从 1 开始 |

成功响应：

```json
{
  "data": [{"id":"anthropics/skills/pptx","name":"pptx","nameZh":"PPT 制作与编辑"}],
  "meta": {
    "q":"PPT", "category":"全部分类", "sort":"recommended",
    "page":1, "limit":50, "total":1, "hasMore":false,
    "dataMode":"local-curated"
  }
}
```

其中 `data` 的真实元素包含 `data/skills.json` 中的全部字段；上方仅示意重要字段。

示例：`http://localhost:4173/api/v1/skills?q=PPT`。

### `GET /api/v1/skills/{url-encoded-id}`

使用 URL 编码后的稳定 Skill ID 获取详情，例如：

```js
fetch('/api/v1/skills/' + encodeURIComponent('anthropics/skills/pptx'))
```

成功返回 `{ "data": SkillRecord }`，不存在返回 `404`。

## 统一数据契约

`data/skills.json` 中每条数据结构：

| 字段 | 类型 | 用途 |
|---|---|---|
| `id` | string | 唯一标识，推荐使用 `owner/repo/slug` |
| `name`, `nameZh` | string | 英文原名和中文展示名 |
| `category`, `categoryId`, `subcategoryId` | string | 展示分类、固定一级分类 ID、二级任务 ID |
| `tags`, `keywords` | string[] | 跨分类标签和搜索别名，不用于生成左侧一级分类 |
| `audiences`, `platforms`, `collections` | string[] | 适用人群、已确认平台和精选集合 |
| `summaryZh`, `explanationZh` | string | 通俗一句话及详细介绍 |
| `audience`, `scenarios` | string / string[] | 适合人群和应用场景 |
| `inputExample`, `outputExample` | string | 具体用法示意，不等于实测 |
| `boundaries` | string[] | 做不到什么、依赖和风险 |
| `sourceUrl`, `repositoryUrl` | string | 真实可追溯来源 |
| `installCommand` | string / null | 已核实命令只展示、复制，不执行；未核实时为 `null` |
| `reviewStatus` | `pending` / `source-checked` | 未审核 / 来源已核实 |
| `demoStatus` | `none` / `illustrative` / `verified` | 是否有示例/实测演示 |
| `screenshots` | string[] | 经过授权的实测图片，当前均为空 |
| `platforms` | string[] | 已单独验证兼容的平台；当前为空 |
| `licenseStatus` | string | 版权与许可审核状态 |
| `safetyNote` | string | 安全注意事项 |
| `featured` | boolean | 是否首页推荐 |
| `sourceCheckedOn` | string | 来源页面核对时间 |
| `stats` | object | 本地缓存的仓库 Stars、安装量及采集时间；不是浏览器实时查询 |

`stats` 的结构：

```json
{
  "githubStars": 181822,
  "githubRepo": "anthropics/skills",
  "installs": null,
  "installsSource": "skills.sh",
  "lastCheckedAt": "2026-10-18T04:42:52Z"
}
```

`githubStars` 是整个 GitHub 仓库的数据，不代表单个 Skill。无法通过可靠来源取得精确安装量时，`installs` 必须保留为 `null`，页面不展示安装量，也不会用 Stars 代替。

## 未来但未实现的 API

- `GET /api/v1/skills?source=remote`：查询远程缓存目录；需要先落实数据抓取、许可和认证。
- `GET /api/v1/skills/:id/media`：取得已经验证的演示素材。
- `POST /api/v1/admin/skills/import`：管理员上传 Skill 记录；必须有身份验证、大小限制、审核队列和审计日志。**暂不开放公开写接口。**

## 接入 skills.sh 时的边界

官方文档 https://www.skills.sh/docs/api 描述了 `/api/v1/skills`、`/api/v1/skills/search`、`/api/v1/skills/{id}` 等接口，当前推荐使用 Vercel OIDC 验证。未来接入应由**服务端**持有令牌并完成缓存、限流、错误重试；浏览器不能直接保存 OIDC 令牌。另需检查内容转载许可和服务条款。

## Codex 接入设计

第一阶段 Codex 可生成符合本地 JSON 结构的数据文件；第二阶段创建 `easy-skillshow-finder/SKILL.md`，指导 Codex 使用上述 GET 接口查询目录、获取详情和返回来源链接。若网站未发布，Codex 只能访问同一台机器上的 localhost 服务，不是“任何电脑都能搜索”。


## v0.2 新增可选展示字段（仅本地目录内容，不是第三方 API）

```json
{
  "detailZh": { "overview": "", "workflow": [], "requirements": [] },
  "exampleDetails": { "context": "", "steps": [], "expectedFiles": [], "notes": "" }
}
```

不填详细层时，界面仍展示既有 `summaryZh` / `explanationZh` / `inputExample` / `outputExample`；不把待完善的材料冒充实测。更新已存在的条目请用 `--update-existing` 干运行检查，再经人工审批写入。
