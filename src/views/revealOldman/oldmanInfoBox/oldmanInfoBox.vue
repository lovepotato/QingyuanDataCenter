<template>
  <div class="oldman-list-item" @click="showOldmanDetail(oldmanDetail)">
    <div class="safe-status" :class="[oldmanDetail.status === 1 ? 'is-sure-safe' : 'is-unsure-safe']">{{ oldmanDetail.text }}</div>
    <div class="box-header">
      <div class="box-img">
        <el-avatar :size="99" :src="oldmanDetail.img">
        </el-avatar>
      </div>
      <div class="oldman-base-info">
        <div class="info-top info-item">{{ oldmanDetail.name }}</div>
        <div class="info-center info-item">
          <div class="tag-item" v-for="(tagItem, index) in getTags(oldmanDetail.tag)" :key="index" v-show="oldmanDetail.tag">{{ tagItem }}</div>
        </div>
        <div class="info-bottom info-item">
          <span class="gender">{{ oldmanDetail.gender }}</span>
          <span class="age">{{ oldmanDetail.age | fliterAge }}</span>
        </div>
      </div>
    </div>
    <div class="contract-info">
      <div class="phone-info contract-info-item">
        <div class="img-icon phone-img"></div>
        <div class="info-title">联系电话</div>
        <div class="info-value">{{ oldmanDetail.mobile }}</div>
      </div>
      <div class="address-info contract-info-item">
        <div class="img-icon address-img"></div>
        <div class="info-title">详细地址</div>
        <div class="info-value">{{ oldmanDetail.address }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RevealOldmanMap',
  filters: {
    fliterAge(age) {
      return age + '岁'
    }
  },
  props: {
    oldmanDetail: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    getTags(tagStr) {
      const tags = tagStr.split(',')
      return tags
    },
    showOldmanDetail(item) {
      this.$bus.$emit('showAgedDetail', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.oldman-list-item{
  width: 398px;
  height: 327px;
  padding: 34px 32px;
  background-image: url('../../../assets/imgs/兜底老人框3.png');
  margin-right: 35px;
  margin-bottom: 49px;
  position: relative;
  cursor: pointer;
  .safe-status{
    position: absolute;
    top: 0;
    right: 0;
    width: 110px;
    height: 40px;
    font-size: 20px;
    color: #F9F9F9;
    letter-spacing: 0;
    line-height: 40px;
    text-align: center;
    &.is-sure-safe{
      background-image: url('../../../assets/imgs/标签蓝.png');
    }
    &.is-unsure-safe{
      background-image: url('../../../assets/imgs/标签红.png');
    }
  }
  .box-header{
    height: 99px;
    width: 100%;
    display: flex;
    .box-img{
      width: 99px;
      height: 99px;
      margin-right: 19px;
    }
    .oldman-base-info{
      width: calc(100% - 99px - 19px);
      height: 99px;
      .info-item{
        height: 30px;
        line-height: 30px;
        font-size: 22px;
        color: #FFFFFF;
        letter-spacing: 0;
        .age{
          padding-left: 20px;
        }
        .tag-item{
          border: 1px solid #32C5FF;
          border-radius: 4px;
          font-size: 16px;
          color: #32C5FF;
          letter-spacing: 0;
          padding: 0 9px;
          height: 24px;
          line-height: 24px;
          margin-right: 10px;
        }
        // &.info-top{
        //   margin-bottom: 41px;
        // }
      }
      .info-center{
        display: flex;
        justify-self: start;
        margin: 10px 0;
        height: 24px;
      }
    }
  }
  .contract-info{
    height: 107px;
    width: 100%;
    margin-top: 56px;
    .contract-info-item{
      display: flex;
      .img-icon{
        width: 16px;
        height: 16px;
        margin-top: 7px;
        &.phone-img{
          background-image: url('../../../assets/imgs/dianhua.png');
        }
        &.address-img{
          background-image: url('../../../assets/imgs/dizhi.png');
        }
      }
      .info-title{
        width: 72px;
        height: 30px;
        font-size: 18px;
        color: #32C5FF;
        letter-spacing: 0;
        line-height: 30px;
        margin-left: 11px;
        margin-right: 17px;
      }
      .info-value{
        height: 30px;
        font-size: 18px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 30px;
        width: 209px;
      }
    }
    .phone-info{
      height: 30px;
      font-size: 18px;
      letter-spacing: 0;
      line-height: 30px;
      margin-bottom: 17px;
    }
    .address-info{
      height: 60px;
      .info-value{
        height: 60px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
