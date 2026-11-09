import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const RouteView = { render: (h) => h('span') }
export default new Router({
  routes: [
    { path: '/', redirect: '/scenarios' },
    { path: '/scenarios', component: RouteView },
    { path: '/behavior', component: RouteView },
    { path: '/demo', redirect: '/scenarios' },
    { path: '/demo/one', redirect: '/scenarios' },
    { path: '/demo/two', redirect: '/behavior' },
    { path: '*', redirect: '/scenarios' }
  ]
})
