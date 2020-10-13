<template>
  <el-dialog
    :before-close="closetimer"
    :close-on-click-modal="false"
    :lock-scroll="false"
    :visible.sync="showDialog"
    append-to-body
    class="number-modal"
  >
    <div class="number-modal-content">
      <div class="name">{{ name }}</div>
      <div class="mobile">{{ mobile }}</div>
      <img
        alt
        src="../../../assets/imgs/电话.png"
      />
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
  name: 'NumberModal',
  data() {
    return {
      showDialog: false,
      name: '',
      mobile: '',
      timer: ''
    }
  },
  mounted() {
    this.$bus.$on('newMobile', ({ data: { name, mobile }}) => {
      this.closetimer()
      this.name = name || '未知'
      this.mobile = mobile || '未知号码'
      this.showDialog = true
      this.timer = setTimeout(() => {
        this.showDialog = false
      }, 10000)
    })

    this.$bus.$on('closeModal', () => {
      this.closetimer()
      this.showDialog = false
    })
  },
  destroyed() {
    this.$bus.$off('newMobile')
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
.number-modal {
  .el-dialog {
    background-image: url('../../../assets/imgs/提示框3.png');
    width: 683px;
    height: 647px;
    background-color: transparent;

    .el-dialog__header {
      padding: 0px;

      button {
        display: none;
      }
    }

    .number-modal-content {
      text-align: center;
      .name {
        font-family: PingFangSC-Semibold;
        font-size: 31px;
        color: #ffffff;
        letter-spacing: 0;
        text-align: center;
        margin: 0 auto;
        margin-bottom: 23px;
        margin-top: 61px;
      }

      .mobile {
        font-family: PingFangSC-Semibold;
        font-size: 40px;
        color: #35e7ff;
        letter-spacing: 10px;
        text-align: center;
        margin: 0 auto;
      }

      img {
        width: 319px;
        height: 333px;
      }

      .button-group {
        padding: 0 60px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .cancel {
          background-image: url('../../../assets/imgs/取消.png');
          width: 242px;
          height: 63px;
          font-family: PingFangSC-Semibold;
          font-size: 30px;
          color: #35e7ff;
          letter-spacing: 19.35px;
          text-align: center;
          background-size: 100% 100%;
          line-height: 63px;
          cursor: pointer;
        }

        .comfrim {
          background-image: url('../../../assets/imgs/知道了.png');
          width: 242px;
          height: 63px;
          font-family: PingFangSC-Semibold;
          font-size: 30px;
          color: #ffffff;
          letter-spacing: 4.84px;
          text-align: center;
          background-size: 100% 100%;
          line-height: 63px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
