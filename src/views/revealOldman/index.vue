<template>
  <div class="revealOldman-container">
    <div class="revealOldman-map-view">
      <div class="left-info">
        <div class="flowsheet-content"></div>
        <div class="safe-record-list"></div>
      </div>
      <div class="center-info">
        <div class="map-container">
          <reveal-oldman-map></reveal-oldman-map>
        </div>
        <div class="oldman-count-list"></div>
        <div class="care-info-list"></div>
      </div>
      <div class="all-oldman-list">
        <oldman-info-box v-for="i in 6" :key="i"></oldman-info-box>
      </div>
    </div>
    <div class="revealOldman-box-view">

    </div>
    <div class="fixed-banner">
      <div class="banner-title">今日动态</div>
      <div class="banner-item" v-for="i in 4" :key="i">
        <div class="value"></div>
        <div class="title"></div>
      </div>
    </div>
    <div class="toggle-view-btn" :class="{'diplay-all' : isDisplayAll}" @click="toggleDisplayAllBox"></div>
  </div>
</template>
<script>
import revealOldmanMap from './revealOldmanMap/revealOldmanMap'
import oldmanInfoBox from './oldmanInfoBox/oldmanInfoBox'
export default {
  name: 'RevealOldman',
  components: { revealOldmanMap, oldmanInfoBox },
  data() {
    return {
      isDisplayAll: false
    }
  },
  methods: {
    // 切换显示模式
    toggleDisplayAllBox() {
      this.isDisplayAll = !this.isDisplayAll
    }
  }
}
</script>
<style lang="scss" scoped>
.revealOldman-container{
  width: 100%;
  height: 100%;
  position: relative;
  .revealOldman-map-view{
    margin-top: 23px;
    height: calc(100% - 23px);
    width: 100%;
    display: flex;
    justify-content: flex-start;
    position: relative;
    .left-info{
      width: 1126px;
      height: 100%;
      margin-right: 47px;
      .flowsheet-content{
        width: 100%;
        height: 573px;
        margin-bottom: 35px;
        background-image: url('../../assets/imgs/兜底老人Group1.png');
      }
      .safe-record-list{
        width: 100%;
        height: 480px;
        background-image: url('../../assets/imgs/兜底老人Group2.png');
      }
    }
    .center-info{
      width: 1033px;
      height: 100%;
      margin-right: 60px;
      .map-container{
        width: 100%;
        height: 669px;
        margin-bottom: 58px;
      }
      .oldman-count-list{
        width: 100%;
        height: 150px;
        margin-bottom: 45px;
        background-image: url('../../assets/imgs/兜底老人框1.png');
      }
      .care-info-list{
        width: 100%;
        height: 150px;
        display: flex;
        .care-count-item{
          width: 322px;
          height: 150px;
          margin-right: 34px;
          background-image: url('../../assets/imgs/兜底老人框2.png');
          &:last-child{
            margin-right: 0;
          }
        }
      }
    }
    .all-oldman-list{
      width: 866px;
      height: 100%;
      // margin-right:35px;
      display: flex;
      flex-wrap: wrap;
    }
  }
  .revealOldman-box-view{
    margin-top: 23px;
    height: calc(100% - 23px);
    width: 100%;
  }
  .fixed-banner{
    height: 1079px;
    width: 146px;
    padding-left: 166px;
    position: absolute;
    right: 119px;
    top: 0;
    background-color: #032F8C;
    padding: 20px 10px;
    .banner-title{
      height: 56px;
      width: 125px;
      line-height: 56px;
      font-size: 20px;
      color: #FFFFFF;
      letter-spacing: 4.3px;
      text-align: center;
      background-image: url('../../assets/imgs/今日动态框.png');
    }
    .banner-item{
      width: 100%;
      height: 244px;
      position: relative;
      &::after{
        content: '';
        width: 100%;
        height: 2px;
        background-color: #32C5FF;
        position: absolute;
        bottom: 0;
      }
      &:last-child::after{
        display: none;
      }
    }
  }
  .toggle-view-btn{
    position: absolute;
    width: 51px;
    height: 51px;
    right: 55px;
    background-image: url('../../assets/imgs/箭头》.png');
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    &.diplay-all{
      background-image: url('../../assets/imgs/箭头《.png');
    }
  }
}
</style>
