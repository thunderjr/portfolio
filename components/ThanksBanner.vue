<template>
  <CFlex
    v-bind="mainStyles[colorMode]"
    w="85%"
    max-width="1300px"
    align-self="center"
    justify="space-between"
    box-shadow="md"
    rounded="lg"
    px="8"
  >
    <CStack
      d="flex"
      flex-dir="column"
      justify="center"
      mr="8"
    >
      <slot />
    </CStack>
    <CImage :src="require('~/assets/profile-undraw.svg')" size="12rem" />
  </CFlex>
</template>

<script>
export default {
  props: {},
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

<style>

</style>
