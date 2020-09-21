<template>
  <div class="video-container">
    <div class="title" v-if="title">{{ title }}</div>
    <video muted ref="video" :autoplay="videoAutoplay" :width="videoWidth" :height="videoHeight"  :style="'width:'+videoWidth+'px;height:'+videoHeight+'px'"/>
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
    },
    videoType: {
      type: String,
      default() {
        return 'rtmp'
      }
    },
    videoAutoplay: {
      type: Boolean,
      default() {
        return true
      }
    },
    title: {
      type: String,
      default() {
        return ''
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
        autoplay: this.videoAutoplay, // 是否自动播放
        language: 'zh-CN',
        controls: false, // 是否显示控件,
        muted: true,
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
      })
    },
    changeURL() {
      this.currentInstance.src({ src: this.videoSrc, type: this.videoType })
      const a = this.currentInstance.load({ src: this.videoSrc, type: this.videoType }, () => {
        this.currentInstance.play()
        this.currentInstance.muted(true)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.video-container {
  position: relative;
  height: max-content;
  width: max-content;
  .title {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 75px;
    background: rgba(94, 128, 255, 0.65);
    font-family: PingFangSC-Medium;
    font-size: 24px;
    color: #ffffff;
    letter-spacing: 5.07px;
    line-height: 75px;
    text-align: center;
  }
}
</style>
