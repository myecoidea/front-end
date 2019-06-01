export default {
  name: 'footer',
  data: () => ({
    categories: [
      {
        name: 'Réseaux sociaux',
        links: [
          {
            icon: 'mdi-discord',
            href: 'https://discordapp.com/invite/uBG8ErA'
          },
          {
            icon: 'mdi-instagram',
            href: 'https://www.instagram.com/my_ecoidea/'
          },
          {
            icon: 'mdi-twitter-box',
            href: 'https://twitter.com/my_ecoidea'
          }
        ]
      },
      {
        name: 'Légal',
        links: [
          {
            name: 'CGU',
            to: '/cgu'
          },
          {
            name: 'Politique de confidentialité',
            to: '/confidentiality'
          },
          {
            name: 'Mentions légales',
            to: '/legal'
          }
        ]
      },
      {
        name: 'Projet',
        links: [
          {
            name: 'Membres',
            to: '/members'
          },
          {
            name: 'Patchs',
            to: '/patchs'
          },
          {
            name: 'Notre projet',
            to: '/project'
          }
        ]
      }
    ]    
  })
}
