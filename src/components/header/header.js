import Profil from './profil/profil.vue'

export default {
  name: 'header',
  data: () => ({
    drawer: false,
    expand: false
  }),
  components: {
    Profil
  }
}