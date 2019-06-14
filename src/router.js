import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/home.vue')
    },
    {
      path: '/quizz',
      name: 'quizz',
      component: () => import('@/views/pages/quizz_home/quizz_home.vue')
    }
  ]
})
