<template>
  <CFlex
    v-bind="styles[colorMode]"
    m="1"
    p="2"
    rounded="md"
    align="flex-end"
    class="message"
  >
    <CText line-height="1.35rem" font-size="md">
      {{ message }}
    </CText>
    <CText line-height="0" font-size="8pt" ml="3">
      {{ time }}
    </CText>
  </CFlex>
</template>

<script>
export default {
  name: 'ChatMessage',
  props: {
    message: {
      type: String,
      required: true
    }
  },
  inject: ['$chakraColorMode'],
  data: () => ({
    styles: {
      dark: {
        bg: 'gray.500',
        color: 'whiteAlpha.900',
        style: {
          '--bg': '#718096'
        }
      },
      light: {
        bg: 'gray.100',
        color: 'gray.800',
        style: {
          '--bg': '#E2E8F0'
        }
      }
    },
    time: ''
  }),
  computed: {
    colorMode() { return this.$chakraColorMode() }
  },
  created() {
    this.time = new Date().toTimeString().slice(0, 5)
  }
}
</script>

<style scoped>
  .message:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-right: 10px solid var(--bg);
    border-bottom: 2px solid transparent;
    border-radius: 2px;
    margin: 0 0 -6px -16px;
  }
</style>
