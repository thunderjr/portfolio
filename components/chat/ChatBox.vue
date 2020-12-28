<template>
  <CFlex flex-dir="column" :border-radius="borderRadiusSize">
    <CFlex v-bind="headerProps">
      <CAvatar name="Flávio Marques" :src="require('~/assets/chat/profile-picture.jpg')" mr="3" border-width="1px" />
      <CStack :spacing="-2">
        <CText font-size="lg">
          Flávio M. Júnior
        </CText>
        <CText font-size="sm">
          {{ status }}
        </CText>
      </CStack>
    </CFlex>

    <CFlex
      py="4"
      px="5"
      flex-dir="column"
      align="flex-start"
      flex="1"
      class="chat-box"
      :border-bottom-left-radius="borderRadiusSize"
      :border-bottom-right-radius="borderRadiusSize"
    >
      <ChatMessage v-for="(message, i) in messageList" :key="`msg${i}`" :message="message || ''" />
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
      await this.wait(10000)
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
