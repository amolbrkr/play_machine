// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

import Trending from '@/components/Trending'
import Banner from '@/components/Banner'
import AppError from '@/components/AppError'
import Loading from '@/components/Loading'
import VidPreview from '@/components/VidPreview'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.component('app-banner', Banner)
Vue.component('app-trending', Trending)
Vue.component('app-error', AppError)
Vue.component('app-loading', Loading)
Vue.component('vid-preview', VidPreview)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
