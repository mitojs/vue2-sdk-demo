# MitoJS Vue 2 演示

Vue **2.7.16** 的浏览器监控示例，保持 Vue 2 major。左侧可触发日志、Vue 组件、Promise、JavaScript 与 Fetch/XHR 场景；右侧紧凑排查表显示完整真实上报、发生位置、请求结果和 JSON。计数器、路由与请求保留在行为轨迹中。

上报使用真实 SDK POST，由同源 `public/localReceiver.js` Service Worker 在当前浏览器内接收并返回 HTTP 200。演示接口也在本地返回 200 或 500，无需后台服务。请通过 localhost 或 HTTPS 访问。

## 开发与验证

全流程使用 **Node 24.22.2 + pnpm 12.16.1**，版本分别记录在 `.node-version` 和 `packageManager`。

```sh
pnpm install --frozen-lockfile
pnpm dev
```

开发地址为 `http://localhost:2037/`。首次运行浏览器测试先安装 Chromium，然后执行完整验证：

```sh
pnpm exec playwright install --no-shell chromium
pnpm verify
```

`pnpm verify` 顺序运行 lint、生产构建、格式化/搜索单测和真实浏览器用例；也可单独执行 `pnpm lint`、`pnpm build`、`pnpm test`。浏览器测试会自动启动本仓库的静态预览 `http://localhost:2038/vue2-sdk-demo/`，覆盖真实 POST/200、Vue/Promise/JavaScript 异常、Fetch/XHR 200/500、搜索/选择/JSON/清空、旧路由入口、控制台实例和 390px 手机布局。控制台仍可通过 `window.MitoInstance` 调用 SDK。

验证已经运行的生产预览可指定地址：

```sh
DEMO_URL=http://localhost:2032/ pnpm test
```

生产输出继续写入 `docs/`，相对资源路径同时支持站点根目录和 GitHub Pages 项目前缀。旧的 `#/demo/one`、`#/demo/two` 分别跳转到异常演示和行为轨迹。

## 构建工具

使用 **Vite 7.3.7 + 官方 `@vitejs/plugin-vue2` 2.3.4**。插件的 peer 范围要求 Vue `^2.7.0-0`，支持 Vite 3–7，因此把旧的 Vue 2.6 更新到 2.7.16，仍然使用 Vue 2 的 Options API 和 Vue Router 3。Vite 7 的 Node 要求为 `^20.19.0 || >=22.12.0`，Node 24 满足要求。项目已移除 Vue CLI 3、Webpack 4、node-sass 及未使用的旧后台壳，不需要旧 Node、OpenSSL 参数或强制 peer 安装。[官方 Vue 2.7 迁移说明](https://v2.vuejs.org/v2/guide/migration-vue-2-7.html)、[官方 Vue2 Vite 插件](https://github.com/vitejs/vite-plugin-vue2)。

SDK 依赖是实际发布的正式版 `4.0.0`，包括传递依赖 `@mitojs/shared`；JSON 保留 SDK 实际生成的所有字段，不覆写其中的版本值。

## 持续集成与发布

`.github/workflows/gh-pages.yml` 对 Pull Request 和 master 推送运行相同的 Node 24/pnpm 冻结安装、lint、构建和完整测试。Pull Request 只验证；验证通过后，只有 master 推送会使用部署步骤中的 `CI_TOKEN`，沿用 `docs/` 发布到 Pages 分支。

## 代码结构

- `src/App.vue`：组合布局与页面路由。
- `src/components/demo/`：侧栏、顶部、场景、紧凑表、详情与行为轨迹组件。
- `src/monitoring.js`：SDK 初始化与真实演示场景。
- `src/localReceiver.js`、`public/localReceiver.js`：浏览器本地接收器与模拟接口。
- `src/shared/`：从 Vue 3 演示同步的同版本 `demo-shell.css`、`report-monitor.css`、`report-model.js` 和类型声明；三框架保持同一份样式和格式化规则，更新时一起同步。
