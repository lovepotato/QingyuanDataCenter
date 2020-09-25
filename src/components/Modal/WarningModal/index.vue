<template>
  <el-dialog
    :close-on-click-modal="false"
    :lock-scroll="false"
    :visible.sync="showDialog"
    append-to-body
    :before-close="closetimer"
    class="warning-modal"
  >
    <div class="warning-modal-content">
      <div class="title">提示</div>
      <div class="text">
        <div>{{ `${time} ${name}` }}</div>
        <div><span>在<span>{{ address }}</span>发出 </span><span class="type">{{ msg }}</span><span>，请及时处理!</span></div>
      </div>
      <div class="imgs">
        <el-image :src="currentImgs[0] | formatImageSrc" class="img" @click="openVideo"></el-image>
      </div>
      <div class="button-group">
        <div
          @click="showDialog = false"
          class="cancel"
        >取消</div>
        <div
          @click="showDialog = false"
          class="comfrim"
        >知道了</div>
      </div>
    </div>
    <el-dialog
      width="1368px"
      custom-class="videoPlayDialog"
      title="视频报警"
      :lock-scroll="false"
      append-to-body
      :visible.sync="videoDialogVisible"
      @opened="videoDialogOpened"
      @closed="videoDialogCloseed"
    >
      <mp4Video :video-src="currentImgs[1]" video-width="1280" video-height="720" ref="myVideo"></mp4Video>
    </el-dialog>
  </el-dialog>
</template>

<script>
import mp4Video from '@/components/Video/mp4'

export default {
  name: 'WarningModal',
  components: {
    mp4Video
  },
  data() {
    return {
      showDialog: false,
      address: '北京市大兴区清源街道枣园北里1号楼',
      msg: 'SOS预警',
      name: '祖奶奶',
      time: '2020-09-12 14:23',
      imgs: 'mNk2C5Fta3c=,mNk2C5Fta3c=,mNk2C5Fta3c=,mNk2C5Fta3c=',
      timer: '',
      videoDialogVisible: false,
      isOpened: false
    }
  },
  computed: {
    currentImgs() {
      if (this.imgs) {
        return this.imgs.split(',').map(item => {
          return item
        })
      } else {
        return []
      }
    }
  },
  mounted() {
    this.$bus.$on('newWarningModal', ({ data: { address, imgs, msg, name, time }}) => {
      this.isOpened = false
      this.closetimer()
      this.imgs = imgs || ''
      this.address = address || ''
      this.msg = msg || ''
      this.name = name || ''
      this.time = time || ''
      this.showDialog = true
      this.timer = setTimeout(() => {
        if (!this.isOpened) {
          this.showDialog = false
        }
      }, 5000)
    })

    this.$bus.$on('closeModal', () => {
      this.closetimer()
      this.showDialog = false
    })
  },
  destroyed() {
    this.$bus.$off('newWarningModal')
    this.$bus.$off('closeModal')
  },
  methods: {
    closetimer() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    videoDialogOpened() {
      this.$refs.myVideo.play()
    },
    videoDialogCloseed() {
      this.$refs.myVideo.pause()
    },
    openVideo() {
      this.videoDialogVisible = true
      this.isOpened = true
    }
  }
}
</script>

<style lang="scss">
.warning-modal {
  .el-dialog {
    background-image: url('../../../assets/imgs/提示框2.png');
    width: 1126px;
    height: 758px;
    background-color: transparent;
    overflow: hidden;

    .el-dialog__header {
      padding: 0px;

      button {
        display: none;
      }
    }

    .el-dialog__body {
      padding: 0px;
    }

    .warning-modal-content {
      text-align: center;

      .title {
        font-family: PingFangSC-Semibold;
        font-size: 30px;
        color: #35E7FF;
        letter-spacing: 19.35px;
        text-align: center;
        margin-top: 26px;
        margin-left: 19px;
      }

      .text {
        font-family: PingFangSC-Regular;
        font-size: 30px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        margin-top: 60px;
        margin-bottom: 50px;
        height: 122px;

        div {
          text-align: center;
        }

        &>div {
           margin-bottom: 10px;
        }

        .type {
          color: #F7B500;
        }
      }

      .imgs {
        margin-bottom: 63px;
        padding: 0 39px;
        width: 100%;
        display: flex;
        justify-content: center;
        height: 240px;

        .img {
          width: 239px;
          height: 239px;
          margin-right: 22px;
          cursor: pointer;

          &:last-child {
            margin-right: 0px;
          }
        }
      }

      .button-group {
        padding: 0 162px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .cancel {
          background-image: url('../../../assets/imgs/取消.png');
          width: 333px;
          height: 74px;
          font-family: PingFangSC-Semibold;
          font-size: 30px;
          color: #35e7ff;
          letter-spacing: 19.35px;
          text-align: center;
          background-size: 100% 100%;
          line-height: 74px;
          cursor: pointer;
        }

        .comfrim {
          background-image: url('../../../assets/imgs/知道了.png');
          width: 333px;
          height: 74px;
          font-family: PingFangSC-Semibold;
          font-size: 30px;
          color: #ffffff;
          letter-spacing: 4.84px;
          text-align: center;
          background-size: 100% 100%;
          line-height: 74px;
          cursor: pointer;
        }
      }
    }
  }
}
.videoPlayDialog {
  overflow: visible;
  min-width: 1280px;
  min-height: 720px;
  background-color: #052467;
  .el-dialog__headerbtn .el-dialog__close {
    color: #35e7ff;
    font-size: 20px;
  }
  .el-dialog__title {
    font-size: 32px;
    color: #35e7ff;
  }
}
</style>
