import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import request from './utils/request'
import echarts from 'echarts'
import Video from 'video.js'
import 'videojs-flash'
import 'video.js/dist/video-js.css'
// Vue.use(VueAxios, axios)
Vue.prototype.http = request
Vue.prototype.$echarts = echarts
Vue.prototype.$video = Video

import '@/icons' // icon
import '@/permission' // permission control

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
