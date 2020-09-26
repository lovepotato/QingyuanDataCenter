<template>
  <div class="map-content">
    <div class="map-title">
      <div class="title" @click="showAll">兜底老人社区分布图</div>
    </div>
    <div class="active-index-img" :class="['active-index-'+i,activeId===i ? 'show':'']" v-for="i in 24" :key="i+'s'"></div>
    <div class="org-box-item" :class="['org-id-'+i,oldmanCountList[i] > 0 ? '' : 'no-oldman-community']" v-for="i in 24" :key="i" @click="activeOrgChange(i)">
      <div class="reveal-oldman-tag" v-if="revealOldmanList && revealOldmanList[i-1] && revealOldmanList[i-1].value > 0">
        <div class="count">{{ revealOldmanList[i-1].value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RevealOldmanMap',
  props: {
    revealOldmanList: {
      type: Array,
      default() {
        return []
      }
    },
    originOldmanData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      activeId: '',
      communityIdList: [20,7,29,15,12,8,6,19,17,24,9,13,11,26,22,16,18,14,23,4,5,2,21,3],
      oldmanCountList: []
    }
  },
  created() {
    this.getCommunityOldmanCountList()
  },
  methods: {
    activeOrgChange(i) {
      this.activeId = communityIdList[i]
      this.$emit('active-community-change', i)
    },
    showAll() {
      this.activeId = ''
      this.$emit('show-community-all-data')
    },
    getCommunityOldmanCountList() {
      let _ = this
      // 获取每一个社区老人数量列表，顺序以社区在地图的顺序为准（communityIdList）
      this.communityIdList.forEach(item => {
        const communityOldList = _.originOldmanData.filter(dataItem => dataItem.id === item)
        _.oldmanCountList.push(communityOldList.length)
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.map-content{
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url('../../../assets/imgs/兜底老人-地图底图.png');
  .map-title{
    width: 518px;
    height: 68px;
    background-image: url('../../../assets/imgs/公益祖师框2.png');
    padding-left: 59px;
    cursor: pointer;
    .title{
      height: 68px;
      line-height: 68px;
      font-size: 24px;
      color: #35E7FF;
      letter-spacing: 5.07px;
      line-height: 68px;
      z-index: 1000;
      position: relative;
    }
  }
  .org-box-item{
    position: absolute;
    cursor: pointer;
    z-index: 400;
    cursor: pointer;
    .reveal-oldman-tag{
      width: 57px;
      height: 82px;
      background-image: url('../../../assets/imgs/标.png');
      z-index: 350;
      margin-top: -30px;
      margin-left: 20px;
      .count{
        font-size: 32px;
        color: #00FFE1;
        letter-spacing: 0;
        text-align: center;
        height: 45px;
        line-height: 45px;
        width: 100%;
        text-align: center;
      }
    }
    &.no-oldman-community{
      cursor: pointer;
      pointer-events: none;
    }
    &.org-id-1{
      top: 0;
      right:28.5px;
      width:228.5px;
      height: 126.6px;
    }
    &.org-id-2{
      top: 169px;
      left:0;
      width:85px;
      height: 103px;

    }
    &.org-id-3{
      top: 169px;
      left: 102px;
      width: 103px;
      height: 103px;

    }
    &.org-id-4{
      top: 169px;
      left: 206px;
      width: 68px;
      height: 101px;

    }
    &.org-id-5{
      top: 169px;
      left: 434px;
      width: 69.1px;
      height: 104px;

    }
    &.org-id-6{
      top: 169px;
      left: 509.6px;
      width: 71.1px;
      height: 100.4px;

    }
    &.org-id-7{
      top: 169px;
      left: 583.7px;
      width: 73.3px;
      height: 100.4px;

    }
    &.org-id-8{
      top: 149.7px;
      left: 692px;
      width: 120.1px;
      height: 122.9px;

    }
    &.org-id-9{
      top: 134.8px;
      left: 817px;
      width: 104.8px;
      height: 137.3px;

    }
    &.org-id-10{
      top: 286px;
      left: 160.6px;
      width: 113.4px;
      height: 96px;

    }
    &.org-id-11{
      top: 286px;
      left:  290.1px;
      width: 109.4px;
      height: 94px;
    }
    &.org-id-12{
      top: 284px;
      left:  434.3px;
      width: 222px;
      height: 100.4px;

    }
    &.org-id-13{
      top: 284.6px;
      left: 691.8px;
      width: 139px;
      height: 99.3px;

    }
    &.org-id-14{
      top: 283px;
      left: 851px;
      width: 69.8px;
      height: 64px;

    }
    &.org-id-15{
      top: 282px;
      left: 934.5px;
      width: 86px;
      height: 232px;
    }
    &.org-id-16{
      top: 399px;
      left: 28px;
      width: 144.1px;
      height: 106.7px;
    }
    &.org-id-17{
      top: 399px;
      left: 161.5px;
      width: 112.7px;
      height: 106.7px;
    }
    &.org-id-18{
      top: 399px;
      left: 290px;
      width: 110px;
      height: 120.9px;
    }
    &.org-id-19{
      top: 399px;
      left: 572px;
      width: 85px;
      height: 123px;
    }
    &.org-id-20{
      top: 398.6px;
      left: 692px;
      width: 139px;
      height: 71.7px;
    }
    &.org-id-21{
      top: 470px;
      left: 692px;
      width: 164.7px;
      height: 80.5px;
    }
    &.org-id-22{
      top: 399px;
      left: 865px;
      width: 56px;
      height: 152px;
    }
    &.org-id-23{
      top: 521.6px;
      left: 47.2px;
      width: 226.5px;
      height: 126.8px;

    }
    &.org-id-24{
      top: 565px;
      left: 692px;
      width: 164px;
      height: 98.8px;
    }
  }
  .active-index-img{
    position: absolute;
    top: 0;
    left: 0;
    height: 669px;
    width: 1033px;
    z-index: 100;
    display: none;
    &.show{
      display: block;
    }
    &.active-index-1{
      background-image: url('../../../assets/imgs/兜底老人选中图/康顺园.png');
    }
    &.active-index-2{
      background-image: url('../../../assets/imgs/兜底老人选中图/兴康家园.png');
    }
    &.active-index-3{
      background-image: url('../../../assets/imgs/兜底老人选中图/50号院.png');
    }
    &.active-index-4{
      background-image: url('../../../assets/imgs/兜底老人选中图/187.png');
    }
    &.active-index-5{
      background-image: url('../../../assets/imgs/兜底老人选中图/枣园北里.png');
    }
    &.active-index-6{
      background-image: url('../../../assets/imgs/兜底老人选中图/枣园尚城.png');
    }
    &.active-index-7{
      background-image: url('../../../assets/imgs/兜底老人选中图/国际港.png');
    }
    &.active-index-8{
      background-image: url('../../../assets/imgs/兜底老人选中图/枣园东里北区.png');
    }
    &.active-index-9{
      background-image: url('../../../assets/imgs/兜底老人选中图/滨河北里.png');
    }
    &.active-index-10{
      background-image: url('../../../assets/imgs/兜底老人选中图/189.png');
    }
    &.active-index-11{
      background-image: url('../../../assets/imgs/兜底老人选中图/丽园.png');
    }
    &.active-index-12{
      background-image: url('../../../assets/imgs/兜底老人选中图/枣园.png');
    }
    &.active-index-13{
      background-image: url('../../../assets/imgs/兜底老人选中图/枣园东里.png');
    }
    &.active-index-14{
      background-image: url('../../../assets/imgs/兜底老人选中图/滨河西里北区.png');
    }
    &.active-index-15{
      background-image: url('../../../assets/imgs/兜底老人选中图/滨河东里.png');
    }
    &.active-index-16{
      background-image: url('../../../assets/imgs/兜底老人选中图/康馨园.png');
    }
    &.active-index-17{
      background-image: url('../../../assets/imgs/兜底老人选中图/康宜园.png');
    }
    &.active-index-18{
      background-image: url('../../../assets/imgs/兜底老人选中图/丽园南区.png');
    }
    &.active-index-19{
      background-image: url('../../../assets/imgs/兜底老人选中图/学院.png');
    }
    &.active-index-20{
      background-image: url('../../../assets/imgs/兜底老人选中图/彩虹新城.png');
    }
    &.active-index-21{
      background-image: url('../../../assets/imgs/兜底老人选中图/兴华园.png');
    }
    &.active-index-22{
      background-image: url('../../../assets/imgs/兜底老人选中图/滨河西里南区.png');
    }
    &.active-index-23{
      background-image: url('../../../assets/imgs/兜底老人选中图/康秀园.png');
    }
    &.active-index-24{
      background-image: url('../../../assets/imgs/兜底老人选中图/清源西里.png');
    }
  }
}
</style>
