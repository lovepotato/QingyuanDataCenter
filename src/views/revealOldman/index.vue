<template>
  <div class="revealOldman-container">
    <!-- <transition name="moveL"> -->
    <div class="revealOldman-map-view" v-show="!isDisplayAll">
      <div class="left-info">
        <div class="flowsheet-content">
          <div class="img"></div>
        </div>
        <div class="safe-record-list">
          <div class="record-title">最近报平安记录</div>
          <div class="list-container">
            <swiper :options="swiperOptions" ref="mySwiper">
              <swiper-slide v-for="(boardItem, index) in oldmanLastSafeData" :key="index">
                <div class="safe-record-item">
                  <div class="time record-item">{{ boardItem.date }}</div>
                  <div class="name record-item">{{ boardItem.name }}</div>
                  <div class="address record-item">{{ boardItem.address }}</div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <div class="center-info">
        <div class="map-container">
          <reveal-oldman-map @active-community-change="activeCommunityChange" 
          :origin-oldman-data="originOldmanData"
          :community-member-last-count-list="oldmanLastCount.communityMemberLastCountList" 
          @show-community-all-data="showCommunityAllData"></reveal-oldman-map>
        </div>
        <div class="oldman-count-list">
          <div class="count-item" v-for="(item, index) in oldmanLastCountListPre" :key="index">
            <div class="item-value">{{ item.value }}</div>
            <div class="item-title">{{ item.name }}</div>
          </div>
        </div>
        <div class="care-info-list">
          <div class="care-count-item" v-for="(item, index) in oldmanLastCountListLast" :key="index">
            <div class="item-value">{{ item.value }}</div>
            <div class="item-title">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="all-oldman-list">
        <oldman-info-box v-for="(item, index) in mapOldmanList" :key="index" :oldman-detail="item"></oldman-info-box>
      </div>
    </div>
    <!-- </transition> -->
    <div class="box-view-warper">
      <vue-scroll>
        <transition name="moveR">
          <div class="revealOldman-box-view" v-show="isDisplayAll">
            <oldman-info-box v-for="(item, index) in oldmanLastData" :key="index" :oldman-detail="item"></oldman-info-box>
          </div>
        </transition>
      </vue-scroll>
    </div>
    <div class="fixed-banner">
      <div class="banner-title">今日动态</div>
      <div class="banner-item" v-for="(item, index) in oldmanLastCount.todayCountList" :key="index">
        <div class="value">{{ item.value }}</div>
        <div class="title">{{ item.name }}</div>
      </div>
    </div>
    <div class="toggle-view-btn" :class="{'diplay-all' : isDisplayAll,'disableClass':oldmanLastData.length==0}" @click="toggleDisplayAllBox"></div>
  </div>
</template>
<script>
import revealOldmanMap from './revealOldmanMap/revealOldmanMap'
import oldmanInfoBox from './oldmanInfoBox/oldmanInfoBox'
import { deepClone } from '../../utils/index'
export default {
  name: 'RevealOldman',
  components: { revealOldmanMap, oldmanInfoBox },
  data() {
    return {
      isDisplayAll: false,
      oldmanLastData: [],// 所有社区老人列表，展示所有老人
      oldmanLastCount: {},
      oldmanLastSafeData: [],
      oldmanLastCountListPre: [],
      oldmanLastCountListLast: [],
      mapOldmanList: [],// 当前社区老人信息列表，最多展示6个老人信息
      activeCommunityIndex: '',
      originOldmanData: [],
      swiperOptions: {
        loop: this.oldmanLastSafeData && this.oldmanLastSafeData.length > 5,
        spaceBetween: 0,
        autoplay: {
          disableOnInteraction: true,
          delay: 5000
        },
        direction: 'vertical',
        slidesPerView: 6,
        observeParents: true
      },
      ops: {
        scrollPanel: {
          scrollingx: false
        },
        bar: {
          background: '#3A61CB'
        }
      }
    }
  },
  created() {
    this.getOldmanData()
    this.getOldmanLastSafe()
    this.$on('show-community-all-data', this.showCommunityAllData)
  },
  beforeDestroy() {
    this.$off('show-community-all-data', this.showCommunityAllData)
  },
  methods: {
    // 获取老人列表
    getOldmanData() {
      this.http.post(`/commandcentre/oldmanlast/list`).then(({ data, code }) => {
        if (code === 0) {
          this.oldmanLastData = data.dataList
          this.mapOldmanList = data.dataList.slice(0, 6)
          this.originOldmanData = deepClone(data.dataList)
          this.getOldmanLastCount()
        }
      })
    },
    // 获取老人个数
    getOldmanLastCount() {
      this.http.post(`/commandcentre/oldmanlast/count`,{
        limit: 10000
      }).then(({ data, code }) => {
        if (code === 0) {
          this.oldmanLastCount = data
          this.oldmanLastCountListPre = data.countList.slice(0, 6)
          this.oldmanLastCountListLast = data.countList.slice(6, 9)
        }
      })
    },
    // 获取报平安记录
    getOldmanLastSafe() {
      this.http.post(`/commandcentre/oldmanlast/safe`).then(({ data, code }) => {
        if (code === 0) {
          this.oldmanLastSafeData = data.dataList
        }
      })
    },
    // 切换显示模式
    toggleDisplayAllBox() {
      this.isDisplayAll = !this.isDisplayAll
    },
    // 地图点击事件
    activeCommunityChange(index) {
      // 展示当前选中社区的列表
      this.activeCommunityIndex = index
      this.getOldmanListByCommunityIndex(index)
    },
    showCommunityAllData() {
      this.getOldmanLastCount()
    },
    getOldmanListByCommunityIndex(index) {
      this.http.post(`/commandcentre/oldmanlast/list`,{
        store_id: index,
        limit: 10000
      }).then((data, code) => {
        if (code === 0) {
          this.oldmanLastCount = data
          this.oldmanLastCountListPre = data.countList.slice(0, 6)
          this.oldmanLastCountListLast = data.countList.slice(6, 9)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.revealOldman-container{
  width: 100%;
  height: 100%;
  position: relative;
  .moveR-enter-active,  .moveR-leave-active {
    transition: all 0.3s Linear;
    transform: translateX(0);
  }
  .moveR-enter,
  .moveR-leave {
    transform: translateX(100%);
  }
  .moveR-leave-to {
    transform: translateX(100%);
  }
  .moveL-enter-active, .moveL-leave-active {
    transition: all 0.3s Linear;
    transform: translateX(0%);
  }
  .moveL-enter,
  .moveL-leave {
    transform: translateX(-100%);
  }
  .moveL-leave-to {
    transform: translateX(-100%);
  }
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
      margin-left: 61px;
      .flowsheet-content{
        width: 100%;
        height: 573px;
        margin-bottom: 35px;
        background-image: url('../../assets/imgs/兜底老人Group1.png');

        .img {
          background-image: url('../../assets/imgs/兜底老人-流程图.png');
          width: 1126px;
          height: 573px;
        }
      }
      .safe-record-list{
        width: 100%;
        height: 480px;
        background-image: url('../../assets/imgs/兜底老人Group2.png');
        padding: 30px 32px;
        .record-title{
          height: 40px;
          text-align: left;
          font-size: 24px;
          color: #35E7FF;
          letter-spacing: 5.07px;
          line-height: 40px;
          margin-bottom: 25px;
        }
        .list-container{
          width: 100%;
          height: 348px;
          position: relative;
          overflow: hidden;
        }
        .safe-record-item{
          width: 1057px;
          height: 58px;
          line-height: 58px;
          display: flex;
          .record-item{
            width: 30%;
            height: 58px;
            font-size: 18px;
            color: #FFFFFF;
            letter-spacing: 0;
            text-align: left;
            padding-left: 39px;
          }
        }
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
        display: flex;
        .count-item{
          width: 167px;
          height: 100%;
          padding: 31px 0;
          .item-value{
            font-size: 32px;
            color: #FFFFFF;
            letter-spacing: 0;
            text-align: center;
            height: 45px;
            line-height: 45px;
          }
          .item-title{
            font-size: 20px;
            color: #35E7FF;
            letter-spacing: 0;
            text-align: center;
            height: 28px;
            line-height: 28px;
            margin-top: 14px;
          }
        }
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
          padding: 31px 0;
          &:last-child{
            margin-right: 0;
          }
          .item-value{
            font-size: 32px;
            color: #FFFFFF;
            letter-spacing: 0;
            text-align: center;
            height: 45px;
            line-height: 45px;
          }
          .item-title{
            font-size: 20px;
            color: #35E7FF;
            letter-spacing: 0;
            text-align: center;
            height: 28px;
            line-height: 28px;
            margin-top: 14px;
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
  .box-view-warper{
    margin-top: 23px;
    height: calc(100% - 23px);
    width: 100%;
    padding-left: 165px;
  }
  .revealOldman-box-view{
    display: flex;
    flex-wrap: wrap;
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
      padding: 59px 0 80px 0;
      .title{
        font-size: 20px;
        color: #35E7FF;
        letter-spacing: 0;
        text-align: center;
        height: 28px;
        line-height: 28px;
        margin-top: 24px;
      }
      .value{
        font-size: 40px;
        color: #FFFFFF;
        letter-spacing: 0;
        height: 56px;
        line-height: 56px;
        text-align: center;
      }
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
  .disableClass{
    cursor: not-allowed;
    pointer-events:none;
  }
}
</style>
<style lang="scss">
.safe-record-list{
  .swiper-wrapper{
    height: 348px!important;
    width: 100%!important;
  }
  .swiper-slide{
    height: 58px!important;
    &:nth-of-type(even){
      .safe-record-item{
        background-color: #011950;
      }
    }
    &:nth-of-type(odd){
      .safe-record-item{
        background-color: #154B88;
      }
    }
  }
}
</style>
