<template>
  <el-dialog
    :close-on-click-modal="false"
    :lock-scroll="false"
    :visible.sync="showDialog"
    append-to-body
    :before-close="closetimer"
    class="sos-modal"
  >
    <div class="sos-modal-content">
      <div class="title">提示</div>
      <img
        alt
        src="../../../assets/imgs/提示位图.png"
      />
      <div class="text">
        <div>{{ `${time} ${name}` }}</div>
        <div><span>发出 </span><span class="type">{{ msg }}</span><span>，请及时处理!</span></div>
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
  name: 'SosModal',
  data() {
    return {
      showDialog: false,
      address: '',
      msg: '',
      name: '',
      time: '',
      timer: ''
    }
  },
  mounted() {
    this.$bus.$on('newSosModal', ({ data: { address, msg, name, time }}) => {
      this.closetimer()
      this.address = address || ''
      this.msg = msg || ''
      this.name = name || ''
      this.time = time || ''
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
    this.$bus.$off('newSosModal')
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
.sos-modal {
  .el-dialog {
    background-image: url('../../../assets/imgs/提示框1.png');
    width: 1126px;
    height: 843px;
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

    .sos-modal-content {
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
        margin-top: 10px;
        margin-bottom: 57px;
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

      img {
        width: 593px;
        height: 435px;
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
