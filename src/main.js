import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import qs from 'qs'
Vue.prototype['$qs'] = qs
Vue.prototype['$axios'] = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  Vue,
  axios,
  components: { App },
  template: '<App/>'
})
