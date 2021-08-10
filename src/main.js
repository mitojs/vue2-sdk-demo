import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import './plugins/element'
import '@/assets/css/index.css'
import store from './store'
import { init, MitoVue } from '@mitojs/web'
Vue.use(MitoVue)
init({
  apikey: '7b984e70-5d2e-11eb-a1d3-af21e7d909b7',
  dsn: 'https://test.com',
  beforeDataReport(data) {
    return false
  },
  maxBreadcrumbs: 100
})
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
