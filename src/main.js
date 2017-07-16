import Vue from 'vue'
import App from './App'
import router from '@/router'
import '@/assets/css/app'
import '../config/rem'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
//import { Button, Select } from 'element-ui'
//Vue.use(Button)

new Vue({
  el: "#app",
  router,
  template: '<App />',
  components: {
    App
  },
  render: h => h(App)
})
