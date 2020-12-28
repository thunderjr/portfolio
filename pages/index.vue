<template>
  <CBox
    v-bind="mainStyles[colorMode]"
    flex-direction="column"
    d="flex"
    w="100vw"
    h="100%"
  >
    <MyHeading />
    <NavBar />
    <ThanksBanner>
      <CText font-size="xl" font-weight="bold" letter-spacing="0px">
        Obrigado por se interessar no meu perfil!
      </CText>
      <CText font-size="lg" line-height="1.3em" letter-spacing="0">
        Este é o protótipo de uma página de apresentação que estou construindo,
        com a intenção de mantê-la atualizada com os projetos que trabalho no dia a dia como desenvolvedor Web.
      </CText>
      <VScrollin v-chakra as="CText" font-size="2xl" :speed="10">
        ⚠ Em construção!
      </VScrollin>
    </ThanksBanner>

    <CGrid
      v-bind="contentBoxStyles[colorMode]"
      w="85%"
      my="6"
      max-width="1300px"
      align-self="center"
      rounded="md"
      box-shadow="lg"
      template-columns="350px 1fr"
      gap="1.2em"
    >
      <ChatBox />
      <CFlex wrap="wrap" my="1.2em">
        <ProjectCard
          v-for="(project, i) in projects"
          :key="`project${i}`"
          v-bind="project"
        />
      </CFlex>
    </CGrid>

    <CBox position="absolute" top="5" right="10">
      <CIconButton
        :icon="colorMode === 'light' ? 'moon' : 'sun'"
        :aria-label="`Switch to ${
          colorMode === 'light' ? 'dark' : 'light'
        } mode`"
        @click="toggleColorMode"
      />
    </CBox>
  </CBox>
</template>

<script>
import VScrollin from 'vue-scrollin'

export default {
  name: 'App',
  components: {
    VScrollin
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data: () => ({
    showModal: false,

    mainStyles: {
      dark: {
        bg: 'gray.700',
        color: 'whiteAlpha.900'
      },
      light: {
        bg: 'white',
        color: 'gray.900'
      }
    },
    contentBoxStyles: {
      dark: {
        bg: 'gray.800',
        color: 'whiteAlpha.900'
      },
      light: {
        bg: 'whiteAlpha.800',
        color: 'gray.900'
      }
    }
  }),
  computed: {
    projects() { return this.$store.state.projects.projects },
    colorMode() { return this.$chakraColorMode() },
    toggleColorMode() { return this.$toggleColorMode }
  }
}
</script>
