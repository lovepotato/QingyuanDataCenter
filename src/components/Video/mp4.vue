<template>
  <div class="video-container">
    <video
      :autoplay="videoAutoplay"
      :style="'width:'+videoWidth+'px;height:'+videoHeight+'px'"
      class="vjs-matrix video-js"
      muted
      ref="video"
    />
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
        return 'video/mp4'
      }
    },
    videoAutoplay: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      currentInstance: null,
      cover: require('../../assets/imgs/bofang.png')
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
        controls: true, // 是否显示控件,
        aspectRatio: '16:9', // 将播放器置于流体模式下（如“16:9”或“4:3”）
        loop: false, // 是否循环播放:true/false
        muted: false, // 设置默认播放音频：true/false
        preload: 'auto',
        fluid: true, // 是否自适应布局
        inactivityTimeout: 0, // 闲置超时
        nativeControlsForTouch: false, // 是否使用浏览器原生的控件
        language: 'zh-CN',
        poster: this.cover,
        controlBar: {
          children: [
            { name: 'playToggle' }, // 播放按钮
            { name: 'currentTimeDisplay' }, // 当前已播放时间
            { name: 'progressControl' }, // 播放进度条
            { name: 'durationDisplay' }, // 总时间
            {
              name: 'volumePanel', // 音量控制
              inline: false // 不使用水平方式
            },
            { name: 'FullscreenToggle' } // 全屏
          ]
        }
      })
    },
    changeURL() {
      this.currentInstance.src({ src: this.videoSrc, type: this.videoType })
      const a = this.currentInstance.load(
        { src: this.videoSrc, type: this.videoType },
        () => {
          this.currentInstance.play()
          this.currentInstance.muted(true)
        }
      )
    },
    play() {
      this.currentInstance.play()
    },
    pause() {
      this.currentInstance.pause()
    }
  }
}
</script>
<style lang="scss" >
.video-container {
  position: relative;
  height: max-content;
  width: max-content;

  .video-js {
    margin-left: 20px;
    .vjs-poster {
      background-size: 110px !important;
    }
    .vjs-big-play-button {
      display: none !important;
      visibility: hidden !important;
    }
  }
}
</style>
