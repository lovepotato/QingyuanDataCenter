<template>
  <div class="wrapper">
    <video
      :src="src"
      @click="openVideo"
      autoplay
      class="l-img"
      loop
      muted
      style="cursor: pointer"
      v-if="isVideo"
    ></video>
    <el-image
      :src="src"
      class="l-img"
      v-else
    >
      <div
        class="image-slot"
        slot="error"
      ></div>
    </el-image>
    <el-dialog
      :lock-scroll="false"
      :visible.sync="videoDialogVisible"
      @closed="videoDialogCloseed"
      @opened="videoDialogOpened"
      append-to-body
      custom-class="videoPlayDialog"
      title
      width="1368px"
    >
      <mp4Video
        :video-src="src"
        ref="myVideo"
        video-height="720"
        video-width="1280"
      ></mp4Video>
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
