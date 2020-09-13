<template>
  <div id="app">
    <!-- <vue-scroll> -->
    <router-view />
    <aged-detail></aged-detail>
    <!-- </vue-scroll> -->
  </div>
</template>

<script>
import agedDetail from './components/Modal/agedDetail/index'

export default {
  name: 'App',
  components: {
    agedDetail
  },
  data() {
    return {
      setIntervalMessage: null,
      setIntervalZhixiaoyun: null
    }
  },
  mounted() {
    // this.loopMessage()
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
      this.setIntervalMessage = setInterval(() => {
        this.http.post('/commandcenter/message/notify').then((res) => {
          console.log(res)
        })
      }, 2000)
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
