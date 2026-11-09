import Vue from 'vue'
import { init } from '@mitojs/browser'
import { vuePlugin } from '@mitojs/vue'
import { apiURL } from './localReceiver'
import { clearReports, state } from './state'
export let monitoring

export function initializeMonitoring() {
  monitoring = init(
    {
      vue: Vue,
      apikey: 'mitojs-vue2-demo',
      dsn: apiURL + 'report',
      maxBreadcrumbs: 50,
      maxDuplicateCount: 100,
      throttleDelayTime: 0,
      silentConsole: true,
      beforePushBreadcrumb(breadcrumb, entry) {
        state.breadcrumbs = breadcrumb.getStack().concat([entry]).slice(-50)
        return entry
      }
    },
    [vuePlugin]
  )
  window.MitoInstance = monitoring
}
export function manualReport() {
  if (!monitoring) return
  monitoring.log({ message: '这是一条来自 Vue 2 演示的手动上报', tag: 'vue2-demo' })
  state.notice = '手动上报已触发。'
}
export function promiseError() {
  // This intentionally unhandled rejection demonstrates the SDK Promise collector.
  Promise.reject(new Error('Promise 演示异常'))
  state.notice = 'Promise 异常已触发。'
}
export function codeError() {
  setTimeout(() => {
    throw new Error('JavaScript 演示异常')
  }, 0)
  state.notice = 'JavaScript 异常已触发。'
}
export async function fetchRequest(failure) {
  try {
    const response = await fetch(apiURL + (failure ? 'failure' : 'success'))
    await response.json()
    state.notice = response.ok
      ? 'Fetch 请求成功 · HTTP 200'
      : 'Fetch 请求异常 · HTTP 500，已自动上报。'
  } catch (error) {
    state.notice = 'Fetch 请求未完成，请刷新页面重试。'
  }
}
export function xhrRequest(failure) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', apiURL + (failure ? 'failure' : 'success'))
  xhr.addEventListener('loadend', () => {
    state.notice =
      xhr.status === 200
        ? 'XHR 请求成功 · HTTP 200'
        : 'XHR 请求异常 · HTTP ' + xhr.status + '，已自动上报。'
  })
  xhr.send()
}
export function changeCount(delta) {
  state.count += delta
  state.notice = '计数已更新为 ' + state.count + '，点击行为已记录。'
}
export function clearRecords() {
  if (monitoring) monitoring.breadcrumb.clear()
  clearReports()
}
