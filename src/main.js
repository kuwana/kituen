// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueOnsen from 'vue-onsenui'

import 'onsenui'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

// import { MainPage, SecondPage } from './components'
import { anyComponents } from './components'

Vue.use(VueOnsen, {
  components: {
    ...anyComponents
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
