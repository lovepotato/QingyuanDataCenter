<template>
  <div class="aged-detail-modal">
    <!-- <div class="dialog-title">
      <div class="title">长者详情</div>
      <div></div>
      <div>
        <img src="../../assets/imgs/fanhui-5.png" alt="" class="back" @click="back">
        <img src="../../assets/imgs/guanbi-5.png" alt="" class="close" @click="showDialog = false">
      </div>
    </div> -->
    <div class="dialog-content">
      <img src="../../assets/imgs/fanhui-5.png" alt="" class="back" @click="back">
      <vue-scroll>
        <detail-content :current-id="currentId" :type="type" />
      </vue-scroll>
    </div>
  </div>
</template>

<script>
import detailContent from '../../components/Modal/agedDetail/components/index'

export default {
  name: 'OldmanDetailPage',
  components: {
    detailContent
  },
  data() {
    return {
      showDialog: false,
      currentId: this.$route.query.id,
      type: 0
    }
  },
  created() {
    // this.$bus.$on('showAgedDetail', (event) => {
    //   this.currentId = event.id
    //   this.type = event.type
    //   this.showDialog = true
    // })
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss">
.aged-detail-modal {
  height: 100%;
  // width: 1336px;
  &.el-dialog__wrapper {
    position: absolute;
    width: 3456px;
    height: 1296px;
  }

  .el-dialog__header {
    padding: 0px;
    height: 0px;

    button {
      display: none;
    }
  }

  .el-dialog__body {
    padding: 0px;
    height: 1296px;
  }

  &.el-dialog-side .el-dialog {
    right: 0 !important;
    top: 0;
    bottom: 0;
    min-height: 100%;
    margin: 0 !important;
    border-radius: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    // position: absolute;
    position: fixed;
    height: 100%;
    width: 1296px;
    background-color: transparent;
  }

  .dialog-title {
    height: 118px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    padding-top: 54px;
    background-color: #052467;
    .title {
      font-family: PingFangSC-Semibold;
      font-size: 32px;
      color: #35E7FF;
      letter-spacing: 0;
    }

    .close {
      margin-right: 45px;
      img {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }

    .back {
      margin-right: 45px;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }

  .dialog-content {
    background-color: #052467;
    height: 100%;//calc(100% - 118px);
    width: 100%;

    .back {
      position: absolute;
      right: 30px;
      top: 25px;
      width: 20px;
      height: 20px;
      cursor: pointer;
      z-index: 2;
    }
  }
}
</style>

<style lang="scss">
body {
  width: 100%;
  height: 100%;
}
</style>
