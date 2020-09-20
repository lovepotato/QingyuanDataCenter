<template>
  <el-dialog
    :close-on-click-modal="true"
    :visible.sync="showDialog"
    append-to-body
    :lock-scroll="false"
    class="el-dialog-side aged-detail-modal"
  >
    <div class="dialog-title">
      <div class="title">长者详情</div>
      <div class="close" @click="showDialog = false"><img src="../../../assets/imgs/guanbi-5.png" alt=""></div>
    </div>
    <div class="dialog-content">
      <vue-scroll>
        <detail-content :current-id="currentId" :type="type" />
      </vue-scroll>
    </div>
  </el-dialog>
</template>

<script>
import detailContent from './components/index'

export default {
  name: 'AgedDetail',
  components: {
    detailContent
  },
  data() {
    return {
      showDialog: false,
      currentId: '',
      type: 0
    }
  },
  created() {
    this.$bus.$on('showAgedDetail', (event) => {
      this.currentId = event.id
      this.type = event.type
      this.showDialog = true
    })
  }
}
</script>

<style lang="scss">
.aged-detail-modal {
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
  }

  .dialog-content {
    background-color: #052467;
    height: calc(100% - 118px);
    width: 100%;
  }
}
</style>

<style lang="scss" scoped>
.aged-detail-modal {

}
</style>
