import Vue from 'vue'
import App from './App'
import router from '@/router'
import '@/assets/css/app'
import '../config/rem'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './store'
import VueJsonp from 'vue-jsonp'
import VueScroller from 'vue-scroller'
import {ToastPlugin} from 'vux'

Vue.use(ElementUI)
Vue.use(VueJsonp)
Vue.use(VueScroller)
Vue.use(ToastPlugin)
//import { Button, Select } from 'element-ui'
//Vue.use(Button)

new Vue({
  el: "#app",
  router,
  store,
  template: '<App />',
  components: {
    App
  },
  render: h => h(App)
})
