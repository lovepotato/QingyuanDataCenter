<template>
  <div class="revealOldman-container">
    <div class="revealOldman-warper">
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
      <div class="all-oldman-list"></div>
    </div>
  </div>
</template>
<script>
import revealOldmanMap from './revealOldmanMap/revealOldmanMap'
export default {
  name: 'RevealOldman',
  components: { revealOldmanMap }
}
</script>
<style lang="scss" scoped>
.revealOldman-container{
  width: 100%;
  height: 100%;
  .revealOldman-warper{
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
      position: absolute;
    }
  }
}
</style>
