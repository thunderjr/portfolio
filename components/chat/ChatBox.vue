<template>
  <CFlex flex-dir="column" :border-radius="borderRadiusSize">
    <CFlex v-bind="headerProps">
      <CAvatar name="Flávio Júnior" :src="require('~/assets/chat/profile-picture.jpg')" mr="3" border-width="1px" />
      <CStack :spacing="-2">
        <CText font-size="lg">
          Flávio Jr.
        </CText>
        <CText font-size="sm">
          {{ status }}
        </CText>
      </CStack>
    </CFlex>

    <CFlex
      :border-bottom-left-radius="borderRadiusSize"
      :border-bottom-right-radius="borderRadiusSize"
      position="relative"
      align="flex-start"
      flex-dir="column"
      class="chat-box"
      flex="1"
      py="4"
      px="5"
    >
      <ChatMessage v-for="(message, i) in messageList" :key="`msg${i}`" :message="message || ''" />
      <!-- bg="#234b4d" -->
      <CFlex
        v-if="whatsAppButton"
        href="https://api.whatsapp.com/send?phone=5511945465500&text=Ol%C3%A1%2C%20vim%20a%20partir%20do%20seu%20portf%C3%B3lio%20%3DD"
        position="absolute"
        justify="center"
        target="_blank"
        align="center"
        bg="black"
        bottom="0"
        left="0"
        h="50px"
        w="100%"
        as="a"
      >
        <CImage h="95%" object-fit="cover" :src="require('~/assets/chat/whatsapp-button.png')" />
      </CFlex>
    </CFlex>
  </CFlex>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
moment.locale('pt-br')

export default {
  name: 'ChatBox',
  inject: ['$chakraColorMode'],
  data: () => ({
    messageList: [],
    status: 'online',
    whatsAppButton: false,

    borderRadiusSize: 'md'
  }),
  computed: {
    colorMode() { return this.$chakraColorMode() },
    headerProps() {
      return {
        bg: '#6146e4',
        borderTopLeftRadius: this.borderRadiusSize,
        borderTopRightRadius: this.borderRadiusSize,
        p: '3',
        px: '4',
        align: 'center',
        color: 'white'
      }
    },
    ...mapGetters({
      getMessages: 'chat/getMessages'
    })
  },
  created() {
    const route = this.$route.path
    const messages = this.getMessages(route)
    this.fillMessageList(messages)
  },
  methods: {
    wait: millis => new Promise(resolve => setTimeout(resolve, millis)),
    async fillMessageList(messages) {
      let delay = 0
      for (const message of messages) {
        delay += message.length * 20
        this.status = 'digitando...'
        await this.wait(delay)

        this.status = 'online'
        this.messageList.push(message)

        await this.wait(Math.floor(Math.random() * 500))
      }
      await this.wait(2000)
      this.whatsAppButton = true
      await this.wait(5000)
      this.status = `Visto por último ${moment().calendar()}`.toLowerCase()
    }
  }
}
</script>

<style>
  .chat-box {
    background: url('~assets/chat/background.jpg');
    background-size: cover;
    background-position-x: center;
  }
</style>
