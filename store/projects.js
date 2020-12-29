// Oficinas e Delivery Dashboard
export const state = () => ({
  projects: [
    {
      name: 'myOficina\u00AE',
      description: 'Projeto idealizado durante o Trabalho de Conclusão de Curso na ETEC Jardim Ângela.\nPensado inicialmente para solucionar problemas de uma oficina de motos; o projeto evoluiu e está em uso por diversas oficinas hoje em dia.\nAtualmente, é o projeto que tem mais da minha atenção.',
      imagePath: 'myoficina.jpg',
      difficulty: 65,
      technologies: [
        { text: 'Vue.js', icon: 'vuejs' },
        { text: 'Google Firestore', icon: 'fire' },
        { text: 'Node.js', icon: 'node-js' }
      ],
      shortcuts: [
        { icon: 'link', text: 'Acessar', url: '' }
      ]
    },
    {
      name: 'Prisma Foil Art - Catálogo Integrado',
      description: 'Catálogo desenvolvido para agregar produtos de uma loja de quadros. Não é considerado uma loja, devido a não existência de checkout, porém, por necessidades do cliente, a compra é finalizada no próprio Mercado Livre, que também é fonte das informações contidas no catálogo.',
      imagePath: 'prisma.png',
      difficulty: 40,
      technologies: [
        { text: 'Vue.js', icon: 'vuejs' },
        { text: 'JavaScript', icon: 'js' },
        { text: 'Google Firestore', icon: 'fire' },
        { text: 'CSS', icon: 'css3-alt' }
      ],
      shortcuts: [
        { icon: 'link', text: 'Acessar', url: 'https://prismastore.vercel.app/' }
      ]
    },
    {
      name: 'Ferramenta de Consulta - API Mercado Livre',
      description: 'Desenvolvido durante minha passagem na General Motors, no setor de eCommerce.\nUtilizando a API do Mercado Livre, pude fazer tarefas que antes seriam manuais se tornarem simples e eficientes.\nAbriu meus olhos para mais detalhes sobre a experiência do usuário.',
      imagePath: 'ml.jpg',
      difficulty: 30,
      technologies: [
        { text: 'JavaScript + jQuery', icon: 'js' },
        { text: 'HTML', icon: 'html5' },
        { text: 'CSS', icon: 'css3-alt' }
      ],
      shortcuts: [
        { icon: 'link', text: 'Acessar', url: 'https://mercadolivreapi.flaviojunior3.repl.co/' }
      ]
    },
    {
      name: 'Be The Hero - Semana Omnistack 11',
      description: 'Sistema desenvolvido no workshop da Rockseat, com o objetivo de conectar pessoas dispostas a ajudar a ONGs que precisam dessa ajuda.',
      imagePath: 'bethehero.jpg',
      difficulty: 25,
      technologies: [
        { text: 'React', icon: 'react' },
        { text: 'React Native', icon: 'mobile-alt' },
        { text: 'Node.js', icon: 'node-js' }
      ],
      shortcuts: [
        { icon: 'github', text: 'GitHub', url: 'https://github.com/thunderjr/beTheHero' }
      ]
    }
  ]
})
