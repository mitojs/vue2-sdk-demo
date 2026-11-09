import Vue from 'vue'

export const state = Vue.observable({
  ready: false,
  reports: [],
  breadcrumbs: [],
  selectedId: null,
  count: 0,
  notice: '选择一个场景，看看 MitoJS 收集了什么。'
})
let nextId = 1

// Only the service worker receiver calls this with the actual SDK POST body.
export function receiveReport(payload) {
  const record = { id: nextId++, receivedAt: Date.now(), payload }
  state.reports.unshift(record)
  state.reports.splice(50)
  state.selectedId = record.id
  if (payload.data.type === 'VUE') state.notice = '组件错误已采集，页面可以继续操作。'
}
export function clearReports() {
  state.reports = []
  state.selectedId = null
  state.breadcrumbs = []
  state.notice = '当前会话记录已清空。'
}
