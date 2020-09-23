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

// 发布订阅
Vue.prototype.$bus = new Vue()

import '@/icons' // icon
import '@/permission' // permission control

import animated from 'animate.css'
Vue.use(animated)

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay } from 'swiper/js/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
SwiperClass.use([Pagination, Mousewheel, Autoplay])

import 'swiper/css/swiper.css'
Vue.use(getAwesomeSwiper(SwiperClass))
Vue.use(ElementUI)
import vuescroll from 'vuescroll'
Vue.use(vuescroll, {
  ops: {
    bar: {
      showDelay: 500,
      onlyShowBarOnScroll: false,
      keepShow: false,
      background: '#c1c1c1',
      opacity: 1,
      hoverStyle: false,
      specifyBorderRadius: false,
      minSize: false,
      size: '6px',
      disable: false
    }
  }
})
Vue.config.productionTip = false

// 图片前缀
Vue.prototype.imgPreUrl = 'https://comuhome-ty.yunzhuyang.com/f/d/'
// 切换时间
Vue.prototype.carouselInterval = 5000

import { uuid } from 'vue-uuid'
import { getUniqueFlag, setUniqueFlag } from './utils/auth'
if (!getUniqueFlag()) {
  setUniqueFlag(uuid.v1())
}

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
