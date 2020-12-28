<template>
  <Flipper
    width="260px"
    height="260px"
    class="flipper"
    :flipped="flipped"
    @click="onClick"
  >
    <CFlex slot="front" v-bind="slotProps[colorMode]">
      <CBox position="relative">
        <CImage height="160px" object-fit="cover" :src="image" rounded-top="md" />
        <CBox class="click-wrapper">
          <CIcon name="hand-pointer" size="4em" color="whiteAlpha.900" />
        </CBox>
      </CBox>

      <CFlex p="2" flex-dir="column" flex="1">
        <CHeading as="h3" font-size="lg" mb="2" line-height="1em">
          {{ name }}
        </CHeading>
        <CFlex mt="auto">
          <CFlex>
            <CTooltip
              v-for="(s, i) in shortcuts"
              :key="`shortcut${i}`"
              :label="s.text"
            >
              <CBox><CIcon v-bind="iconStyles[colorMode]" :name="s.icon" size="1.1em" mr="1" /></CBox>
            </CTooltip>
          </CFlex>

          <CFlex ml="auto">
            <CTooltip
              v-for="(tech, i) in technologies"
              :key="`tech${i}`"
              :label="tech.text"
            >
              <CBox><CIcon v-bind="iconStyles[colorMode]" :name="tech.icon" size="1.6em" /></CBox>
            </CTooltip>
          </CFlex>
        </CFlex>
      </CFlex>
    </CFlex>

    <CFlex slot="back" v-bind="slotProps[colorMode]" p="3" flex-dir="column">
      <CHeading as="h3" font-size="lg" mb="2" line-height="1em">
        {{ name }}
      </CHeading>

      <CText font-size="xs" line-height="1.35em">
        {{ description }}
      </CText>

      <CStack :spacing="0" mt="auto">
        <CText font-size="sm">
          Nível de Dificuldade:
        </CText>
        <CLightMode><CProgress color="indigo" :value="difficulty" /></CLightMode>
        <CText font-size="0.6rem">
          de acordo com minha habilidade na época
        </CText>
      </CStack>
    </CFlex>
  </Flipper>
</template>

<script>
import Flipper from 'vue-flipper'
export default {
  components: { Flipper },
  props: {
    name: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    imagePath: {
      type: String,
      default: ''
    },
    difficulty: {
      type: Number,
      default: 0
    },
    technologies: {
      type: Array,
      default: () => ([])
    },
    shortcuts: {
      type: Array,
      default: () => ([])
    }
  },
  inject: ['$chakraColorMode'],
  data: () => ({
    iconStyles: {
      dark: { color: 'whiteAlpha.800' },
      light: { color: 'gray.600' }
    },
    flipped: false
  }),
  computed: {
    colorMode() { return this.$chakraColorMode() },
    image() {
      return this.imagePath.includes('http') ? this.imagePath : require(`~/assets/projects/${this.imagePath}`)
    },
    slotProps() {
      const common = {
        class: 'slot',
        flexDir: 'column',
        boxShadow: 'md',
        transition: 'all .3s ease-out',
        rounded: 'md',
        h: '100%'
      }

      return {
        dark: {
          ...common,
          bg: 'gray.700',
          color: 'white'
        },
        light: {
          ...common,
          bg: 'white',
          color: 'gray.800'
        }
      }
    }
  },
  methods: {
    onClick() { this.flipped = !this.flipped }
  }
}
</script>

<style src="vue-flipper/dist/vue-flipper.css" />
<style>
@keyframes pulse {
  0% {
    transform: scale(0.91);
  }

  70% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.91);
  }
}
</style>
<style scoped>
  .flipper {
    margin: 0.25rem;
  }

   .click-wrapper {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 25%;
    left: 37.5%;
    animation: 1s pulse infinite;
  }

  .slot img {
    opacity: 1;
    display: block;
    width: 100%;
    transition: .5s ease;
    backface-visibility: hidden;
    cursor: pointer;
  }

  .Flipper__face--front:hover .slot img {
    filter: brightness(50%);
    -webkit-filter: brightness(50%);
    filter: blur(50%);
  }

  .Flipper__face--front:hover .click-wrapper {
    opacity: 1;
  }

  .slot:hover {
    box-shadow: 0 20px 25px -3px rgba(0,0,0,0.1), 0 8px 12px -2px rgba(0,0,0,0.05) !important;
  }
</style>
