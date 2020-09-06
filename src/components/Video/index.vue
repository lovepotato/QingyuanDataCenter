<template>
  <div>
    <video muted ref="video" autoplay="true" :width="videoWidth" :height="videoHeight" />
  </div>
</template>

<script>
export default {
  props: {
    videoSrc: {
      type: String,
      default() {
        return ''
      }
    },
    videoWidth: {
      type: [String, Number],
      default() {
        return 400
      }
    },
    videoHeight: {
      type: [String, Number],
      default() {
        return 300
      }
    }
  },
  data() {
    return {
      currentInstance: null
    }
  },
  watch: {
    videoSrc: {
      handler(val) {
        if (val) {
          this.changeURL()
        }
      }
    }
  },
  mounted() {
    this.initVideoPlayer()
    this.changeURL()
  },
  beforeDestroy() {
    if (this.currentInstance) {
      this.currentInstance.dispose()
    }
  },
  methods: {
    // 初始化播放器方法
    initVideoPlayer() {
      this.currentInstance = this.$video(this.$refs.video, {
        autoplay: true, // 是否自动播放
        language: 'zh-CN',
        controls: false // 是否显示控件,
        // controlBar: {
        //   currentTimeDisplay: true,
        //   timeDivider: true,
        //   durationDisplay: true,
        //   remainingTimeDisplay: false
        // }
      })
    },
    changeURL() {
      this.currentInstance.src({ src: this.videoSrc, type: 'rtmp' })
      const a = this.currentInstance.load({ src: this.videoSrc, type: 'rtmp' }, () => {
        this.currentInstance.play()
      })
    }
  }
}
</script>
<style scoped>
</style>
