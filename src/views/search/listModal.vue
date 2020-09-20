<template>
  <el-dialog
    :close-on-click-modal="true"
    :visible.sync="showDialog"
    append-to-body
    :lock-scroll="false"
    class="el-dialog-side search-detail-modal"
  >
    <div class="dialog-title">
      <div class="title">搜索结果</div>
      <div class="close" @click="showDialog = false"><img src="../../assets/imgs/guanbi-5.png" alt=""></div>
    </div>
    <div class="dialog-content">
      <!-- <vue-scroll> -->
      <!-- <div class="list-container">
          <div class="item" v-for="(item, index) in list" :key="index">
            <div></div>
          </div>
        </div> -->
      <iframe :src="iframeUrl" frameborder="0" class="iframe"></iframe>
      <!-- </vue-scroll> -->
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'ListModal',
  props: {
    list: {
      type: Array,
      default() {
        return [1, 2, 3]
      }
    },
    keyword: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      showDialog: false
    }
  },
  computed: {
    iframeUrl() {
      return `http://ai.yunzhuyang.com/QRobot/query/${this.keyword}`
    }
  },
  created() {

  }
}
</script>

<style lang="scss">
.search-detail-modal {
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
    overflow-y: auto;
    // position: absolute;
    position: fixed;
    height: 100%;
    width: 886px;
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

    .list-container {
      .item {
        width: 886px;
        height: 189px;
        background-color: #032F8C;
        margin-bottom: 16px;
      }
    }

    .iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
