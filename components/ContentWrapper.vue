<template>
  <CGrid
    v-bind="mainStyles[colorMode]"
    w="75%"
    my="6"
    max-width="1200px"
    align-self="center"
    rounded="md"
    box-shadow="lg"
    template-columns="auto 1fr"
  >
    <slot />
  </CGrid>
</template>

<script>
export default {
  inject: ['$chakraColorMode'],
  data: () => ({
    mainStyles: {
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
    colorMode() { return this.$chakraColorMode() }
  }
}
</script>
