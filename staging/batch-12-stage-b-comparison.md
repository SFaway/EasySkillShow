# 第 12 批 Stage B 对比

## 选择结果

| 候选 | 与现有目录的关系 | 决策 |
| --- | --- | --- |
| shadcn | 现有设计类条目偏视觉或审查；该条目聚焦项目感知的组件 CLI、registry、Radix/Base UI 和组件更新流程 | 新增 |
| vercel-react-native-skills | 现有 Vercel 条目聚焦 React/Next.js Web；该条目专门覆盖 React Native/Expo 与移动平台 | 新增 |
| systematic-debugging | 已有同源同 ID 条目 | 跳过重复 |
| 其余 12 项 | 涉及外部写入、云资源、账号、付费服务、宿主耦合或明显能力重叠 | 暂缓 |

## 差异化边界

### shadcn

- 不是通用视觉设计器，也不是托管式组件平台。
- 核心是先读取 `components.json` 和 CLI 项目上下文，再搜索、查看、添加或更新组件。
- CLI 会安装依赖和写入源文件；更新必须先预览差异，覆盖现有文件需要明确批准。

### React Native 与 Expo

- 不是性能分析器，也不承诺套用规则后必然提速。
- 与 Web React 规则分开，强调列表虚拟化、Reanimated、原生导航、图片、手势与平台配置。
- 必须结合依赖版本、iOS/Android 差异、构建测试和真机测量判断。

## 草稿原则

两条记录均把原始 Skill 的明确陈述列为来源事实；目录定位、适用受众和验证要求标为合理推断；没有读取真实项目、运行 CLI 或测量性能的部分明确标为未测试。
