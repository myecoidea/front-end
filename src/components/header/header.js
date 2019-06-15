import Profil from './profil/profil.vue'

export default {
  name: 'header',
  data: () => ({
    menu: false,
    drawer: false,
    expand: false,
    isLogin: false,
    items: [
      {
        name: 'Accueil',
        link: '/',
        icon: 'Home'
      },
      {
        name: 'Ajout d\'idée',
        link: '/idea/share-idea',
        icon: 'Add'
      },
      {
        name: 'Quizz',
        link: '/quizz',
        icon: 'Quizz'
      }
    ]
  }),
  components: {
    Profil
  }
}
