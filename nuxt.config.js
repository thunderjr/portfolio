import { ChakraLoaderPlugin } from 'chakra-loader'

import { faLink, faMobileAlt, faFire, faHandPointer, faUserTag, faHome } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faJs,
  faHtml5,
  faCss3Alt,
  faVuejs,
  faReact,
  faNodeJs,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

export default {
  chakra: {
    icons: {
      iconPack: 'fa',
      iconSet: {
        faLink,
        faGithub,
        faJs,
        faHtml5,
        faCss3Alt,
        faVuejs,
        faReact,
        faNodeJs,
        faMobileAlt,
        faFire,
        faHandPointer,
        faUserTag,
        faLinkedin,
        faHome
      }
    }
  },
  ssr: false,
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@chakra-ui/nuxt',
    '@nuxtjs/emotion'
  ],
  build: {
    extend(config) {
      config.plugins.push(
        new ChakraLoaderPlugin()
      )
    }
  }
}
