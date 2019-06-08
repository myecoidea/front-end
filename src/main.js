import Vue from 'vue'
import App from './app.vue'
import router from './router.js'
import store from './store.js'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {

    primary: {
      base: '#85C174',
      darken1: '#70B966',
      darken2: '#70AF63',
      darken3: '#62AB55',
      darken4: '#5B9353'
    },
    secondary: '#353533',
    background: '#fbfbfb'
  },
    primary: {
      base: '#9E84BC',
      darken1: '#9B82BA',
      darken2: '#8E71AF',
      darken3: '#8764A8',
      darken4: '#704C95'
    },
    background: '#111'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
