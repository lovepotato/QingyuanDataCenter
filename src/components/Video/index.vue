<template>
  <div class="video-container">
    <div
      @click="clickTitle"
      class="title"
      v-if="title"
    >{{ title }}</div>
    <video
      :autoplay="true"
      :class="needScale ? 'rtmp-video' : ''"
      :height="needScale ? videoHeight / 3 : videoHeight"
      :width="needScale ? videoWidth / 3 : videoWidth"
      @click="play"
      controls
      muted
      ref="video"
    />
    <!-- <div
      @click.stop="play"
      class="play-warpper"
      v-if="notPlay"
    >
      <img
        :style="{width: videoWidth / 5 + 'px', height: videoWidth / 5 + 'px'}"
        alt
        class="img"
        src="../../assets/imgs/bofang.png"
      />
    </div>-->
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
    title: {
      type: String,
      default() {
        return ''
      }
    },
    autoplay: {
      type: Boolean,
      default() {
        return false
      }
    },
    scale: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  data() {
    return {
      currentInstance: null,
      notPlay: true
    }
  },
  computed: {
    needScale() {
      return this.scale && !(this.videoWidth < 300 || this.videoHeight < 200)
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
        autoplay: this.autoplay, // 是否自动播放
        language: 'zh-CN',
        controls: false, // 是否显示控件,
        muted: true,
        volume: 0,
        controlBar: {
          PlayToggle: true,
          currentTimeDisplay: true,
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false
        }
      })

      this.currentInstance.on('click', () => {
        this.currentInstance.play()
        this.$emit('videoClick')
      })
    },
    play() {
      this.currentInstance.play()
      this.notPlay = false
    },
    changeURL() {
      this.currentInstance.src({ src: this.videoSrc, type: 'rtmp' })
      this.currentInstance.volume(0)
      const a = this.currentInstance.load(
        { src: this.videoSrc, type: 'rtmp' },
        () => {
          this.currentInstance.play()
          // this.volume(0)
          this.currentInstance.muted(true)
        }
      )
      this.notPlay = true
      // this.play()
    },
    clickTitle() {
      this.$emit('clickTitle')
    }
  }
}
</script>
<style lang="scss" scoped>
.rtmp-video {
  transform: scale(3, 3);
  transform-origin: 0 0;
}
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
  .play-warpper {
    position: absolute;
    height: 100%;
    width: 100%;
    background: pink;
    cursor: pointer;
    opacity: 0.5;
    background: #151414;
    top: 0px;
    z-index: 1000;
    img {
      // width: 100px;
      // height: 116px;
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      cursor: pointer;
    }
  }
}
</style>
