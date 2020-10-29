import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ECharts from 'vue-echarts'
import { VueAxios } from './utils/request'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.component('v-chart', ECharts)
Vue.use(VueAxios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
