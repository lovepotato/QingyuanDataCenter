<template>
  <el-dialog
    :close-on-click-modal="true"
    :visible.sync="showDialog"
    append-to-body
    :lock-scroll="false"
    class="el-dialog-side early-warning-modal"
  >
    <div class="dialog-title">
      <div class="title">预警详情</div>
      <div class="close" @click="showDialog = false"><img src="../../../assets/imgs/guanbi-5.png" alt=""></div>
    </div>
    <div class="dialog-content">
      <vue-scroll>
        <div class="early-warning-detail">
          <div class="detail-item" v-for="(detail, index) in warningList" :key="index" :class="[detail.title === '预警画面' ? 'img-detai' : '']">
            <div class="item-title">{{ detail.title }}</div>
            <div class="item-value" v-if="detail.title !== '预警画面'">{{ detail.value }}</div>
            <div v-else class="img-value">
              <div
                class="img-item"
                v-for="(img, iIndex) in getImgList(detail.value)"
                :key="iIndex"
              >
                <el-image
                  style="width: 100%; height: 100%"
                  :src="img"
                  fit="fill"
                ></el-image>
              </div>
            </div>
          </div>
          <div class="confirm-btn" @click="showDialog = false">我知道了</div>
        </div>
      </vue-scroll>

    </div>
  </el-dialog>
</template>

<script>

export default {
  name: 'EarlyWarning',
  data() {
    return {
      showDialog: false,
      currentId: '',
      type: 0,
      warningList: [
        { title: '社区名称', value: '', key: 'org_str' },
        { title: '具体地址', value: '', key: 'addr' },
        { title: '预警类型', value: '', key: 'typeStr' },
        { title: '发生时间', value: '', key: 'createtime' },
        { title: '预警画面', value: '', key: 'images' },
        { title: '通知人员', value: '', key: 'informUser' },
        { title: '处理类型', value: '', key: 'statusStr' },
        { title: '处理结果', value: '', key: 'statusResult' },
        { title: '处理人', value: '', key: 'disposeUser' },
        { title: '处理时间', value: '', key: 'disposetime' }
      ]
    }
  },
  created() {
    this.$bus.$on('showEarlyWarningDetail', (warningObj) => {
      if (typeof warningObj !== 'object') return
      this.warningList = this.warningList.map(item => {
        item.value = warningObj[item.key]
        return item
      })
      this.showDialog = true
    })
  },
  destroyed() {
    this.$bus.$off('showEarlyWarningDetail')
  },
  methods: {
    getImgList(value) {
      let imgList = []
      if (value && value.indexOf(',') > -1) {
        imgList = value.split(',')
      }
      return imgList
    }
  }
}
</script>

<style lang="scss">
.early-warning-modal {
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
    .early-warning-detail{
      width: 100%;
      height: 100%;
      padding: 40px;
      .detail-item{
        width: 100%;
        height: 26px;
        line-height: 26px;
        font-size: 18px;
        display: flex;
        margin-bottom: 26px;
        &.img-detai{
          min-height: 223px;
          width: 100%;
          height: auto;
        }
        .item-title{
          height: 26px;
          line-height: 26px;
          width: 80px;
          text-align: right;
          color: #32C5FF;
          margin-right: 26px;
        }
        .item-value{
          height: 26px;
          line-height: 26px;
          width: calc(100% - 80px -26px);
          text-align: left;
          color: #fff;
        }
        .img-value{
          width: 100%;
          min-height: 223px;
          height: auto;
          display: flex;
          flex-wrap:wrap ;
          .img-item{
            width: 223px;
            height: 223px;
            margin-right: 21px;
            margin-bottom: 15px;
            &:last-child{
              margin-right: 0;
            }
          }
        }
      }
      .confirm-btn{
        width: 249px;
        height: 66px;
        border: 2px solid #35E7FF;
        border-radius: 33px;
        margin: 290px auto 94px auto;
        font-size: 24px;
        color: #35E7FF;
        letter-spacing: -0.01px;
        text-align: center;
        line-height: 66px;
        cursor: pointer;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.early-warning-modal {

}
</style>
