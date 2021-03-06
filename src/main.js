// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
import store from 'vuex'
// import axios from 'axios'
// Vue.prototype.$http = axios
//就可以在其他页面上用this.$http来请求数据

Vue.use(mandMobile)
// 请求拦截器
import requestPlugin from './request/http'
Vue.use(requestPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
