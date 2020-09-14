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
        {{ content }}
      </div>
      <div class="imgs">
        <el-image v-for="(item, index) in currentImgs" :key="index" :src="item" class="img"></el-image>
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
  </el-dialog>
</template>

<script>
export default {
  name: 'WarningModal',
  data() {
    return {
      showDialog: false,
      content: '',
      imgs: '',
      timer: ''
    }
  },
  computed: {
    currentImgs() {
      if (this.imgs) {
        return this.imgs.split(',').map(item => {
          return this.imgPreUrl + item
        })
      } else {
        return []
      }
    }
  },
  mounted() {
    this.$bus.$on('newWarningModal', ({ data: { content, imgs }}) => {
      this.closetimer()
      this.content = content || '未知'
      this.imgs = imgs || ''
      this.showDialog = true
      this.timer = setTimeout(() => {
        this.showDialog = false
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
</style>
