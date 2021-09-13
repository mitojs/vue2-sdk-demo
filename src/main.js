import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import './plugins/element'
import '@/assets/css/index.css'
import store from './store'
import { init } from '@mitojs/vue'

const MitoInstance = init({
  // apikey: '7b984e70-5d2e-11eb-a1d3-af21e7d909b7',
  vue: Vue,
  dsn: 'https://test.com',
  beforeDataReport(data) {
    return false
  },
  maxBreadcrumbs: 100
})
window._MITO_ = MitoInstance
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
