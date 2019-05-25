import Vue from 'vue'
import App from './app.vue'
import router from './router.js'
import store from './store.js'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  iconfont: 'md',
  iconfont: 'mdi'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
