import Profil from './profil/profil.vue'

export default {
  name: 'header',
  data: () => ({
    menu: false,
    drawer: false,
    expand: false,
    isLogin: false
  }),
  components: {
    Profil
  }
}
