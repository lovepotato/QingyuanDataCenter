<template>
  <div class="wrapper">
    <video :src="src" v-if="isVideo" @click="openVideo" class="l-img" style="cursor: pointer" autoplay muted loop></video>
    <el-image
      v-else
      :src="src"
      class="l-img"
    >
      <div
        class="image-slot"
        slot="error"
      ></div>
    </el-image>
    <el-dialog
      width="1368px"
      custom-class="videoPlayDialog"
      title=""
      :lock-scroll="false"
      append-to-body
      :visible.sync="videoDialogVisible"
      @opened="videoDialogOpened"
      @closed="videoDialogCloseed"
    >
      <mp4Video :video-src="src" video-width="1280" video-height="720" ref="myVideo"></mp4Video>
    </el-dialog>
  </div>
</template>

<script>
import mp4Video from '@/components/Video/mp4'

export default {
  components: {
    mp4Video
  },
  props: {
    isVideo: {
      type: Boolean,
      default() {
        return false
      }
    },
    src: {
      type: [String],
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      videoDialogVisible: false
    }
  },
  methods: {
    videoDialogOpened() {
      this.$refs.myVideo.play()
    },
    videoDialogCloseed() {
      this.$refs.myVideo.pause()
    },
    openVideo() {
      this.videoDialogVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 248px;
  height: 146px;
  margin-right: 30px;

  .l-img {
    width: 100%;
    height: 100%;
  }
}
</style>
