import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { startLocalReceiver } from './localReceiver'
import { initializeMonitoring } from './monitoring'
import { state } from './state'
import './shared/demo-shell.css'
import './shared/report-monitor.css'

Vue.config.productionTip = false
async function start() {
  try {
    await startLocalReceiver()
    initializeMonitoring()
    state.ready = true
  } catch (error) {
    state.notice = '本地接收器未能启动，请使用 localhost 或 HTTPS 访问并刷新重试。'
  }
  new Vue({ router, render: (h) => h(App) }).$mount('#app')
}
start()
