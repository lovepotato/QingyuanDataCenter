<template>
  <div id="app">
    <!-- <vue-scroll> -->
    <router-view />
    <!-- </vue-scroll> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    // this.setScale()
    // window.addEventListener('resize', this.setScale)
    // this.loopMessage()
    // this.loopZhixiaoyun()
  },
  destroyed() {
    // if (this.setIntervalMessage) {
    //   clearInterval(this.setIntervalMessage)
    // }

    // if (this.setIntervalZhixiaoyun) {
    //   clearInterval(this.setIntervalZhixiaoyun)
    // }

    // window.removeEventListener('resize', this.setScale)
  },
  methods: {
    // loopMessage() {
    //   this.setIntervalMessage = setInterval(this.timerRequestMessage(), 20000)
    // },
    // timerRequestMessage() {
    //   this.http.post('/commandcenter/message/notify').then(({ code, data }) => {
    //     if (code === 0) {
    //       this.$bus.$emit('closeModal')
    //       if (Number(data.type) === 2) {
    //         this.$bus.$emit('newMobile', { data: data.data })
    //       }

    //       if (Number(data.type) === 1) {
    //         this.$bus.$emit('newSosModal', { data: data.data })
    //       }

    //       if (Number(data.type) === 3) {
    //         this.$bus.$emit('newWarningModal', { data: data.data })
    //       }
    //     } else {
    //       return
    //     }
    //   })
    //   return this.timerRequestMessage
    // },
    // loopZhixiaoyun() {
    //   this.setIntervalZhixiaoyun = setInterval(() => {
    //     this.http.post('/smartcloud/oldman_search', { keyword: '1' }).then((res) => {
    //       console.log(res)
    //     })
    //   }, 2000)
    // },
    // getScale() {
    //   const width = 3456
    //   const height = 1296
    //   const ww = window.innerWidth / width
    //   const wh = window.innerHeight / height
    //   return ww < wh ? ww : wh
    // },
    // setScale() {
    //   this.scale = this.getScale()
    //   document.body.style.setProperty('--scale', this.scale)
    // }
  }
}
</script>

<style>
/* body {
  --scale: 1;
  transform: scale(var(--scale), 0.833) ;
} */
</style>
