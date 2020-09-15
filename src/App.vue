<template>
  <div id="app">
    <!-- <vue-scroll> -->
    <router-view />
    <aged-detail></aged-detail>
    <number-modal></number-modal>
    <sos-modal></sos-modal>
    <warning-modal></warning-modal>
    <!-- </vue-scroll> -->
  </div>
</template>

<script>
import agedDetail from './components/Modal/agedDetail/index'
import numberModal from './components/Modal/Number'
import sosModal from './components/Modal/SosModal'
import warningModal from './components/Modal/WarningModal'

export default {
  name: 'App',
  components: {
    agedDetail,
    numberModal,
    sosModal,
    warningModal
  },
  data() {
    return {
      setIntervalMessage: null,
      setIntervalZhixiaoyun: null
    }
  },
  mounted() {
    this.loopMessage()
    // this.loopZhixiaoyun()
  },
  destroyed() {
    if (this.setIntervalMessage) {
      clearInterval(this.setIntervalMessage)
    }

    if (this.setIntervalZhixiaoyun) {
      clearInterval(this.setIntervalZhixiaoyun)
    }
  },
  methods: {
    loopMessage() {
      this.setIntervalMessage = setInterval(this.timerRequestMessage(), 20000)
    },
    timerRequestMessage() {
      this.http.post('/commandcenter/message/notify').then(({ code, data }) => {
        if (code === 0) {
          this.$bus.$emit('closeModal')
          if (Number(data.type) === 2) {
            this.$bus.$emit('newMobile', { data: data.data })
          }

          if (Number(data.type) === 1) {
            this.$bus.$emit('newSosModal', { data: data.data })
          }

          if (Number(data.type) === 3) {
            this.$bus.$emit('newWarningModal', { data: data.data })
          }
        } else {
          return
        }
      })
      return this.timerRequestMessage
    },
    loopZhixiaoyun() {
      this.setIntervalZhixiaoyun = setInterval(() => {
        this.http.post('/smartcloud/oldman_search', { keyword: '1' }).then((res) => {
          console.log(res)
        })
      }, 2000)
    }
  }
}
</script>

<style>

</style>
