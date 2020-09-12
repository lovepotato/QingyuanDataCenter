<template>
  <div class="warning-container">
    <swiper :options="swiperOptions" ref="mySwiper" @click-slide="clickTab">
      <swiper-slide v-for="(item, index) in warningList" :key="index">
        <div class="warning-content">
          <div class="img">
            <img class="img-box" :src="imgPreUrl + item.image" alt="">
          </div>
          <div class="content">
            <div class="left-box">
              <div class="type">{{ item.typeStr }}</div>
              <div class="shequ">{{ item.org_str }}</div>
              <div class="didian">{{ item.addr }}</div>
            </div>
            <div class="right-box">
              <div class="time">{{ item.createtime }}</div>
              <div class="status" :style="{color: item.status === 0 ? '#d92b2c' : '#006ec7'}">{{ item.statusResult }}</div>
            </div>
          </div>
        </div>
        <div class="bottom-line">
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'WarningList',
  props: {
    warningList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        spaceBetween: 18,
        autoplay: {
          autoplay: true,
          disableOnInteraction: false,
          delay: 2000
        },
        direction: 'vertical',
        slidesPerView: 3,
        observeParents: true
      },
      statusClassList: ['wait', 'sending', 'complete']
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    clickTab(index, reallyIndex) {
      console.log(index, reallyIndex)
      // console.log(this.swiper.realIndex)
    }
  }
}
</script>
<style lang="scss" scoped>
.warning-container{
  height: calc(100% - 68px);
  overflow: hidden;
  .warning-content {
    width: 100%;
    display: flex;
    height: 120px;
    .img {
      margin-right: 33px;
      .img-box {
        width: 95px;
        height: 95px;
      }
    }

    .content {
      width: calc(100% - 33px - 95px);
      display: flex;
      justify-content: space-between;

      .left-box {
        .type {
          font-family: PingFangSC-Semibold;
          font-size: 20px;
          color: #FFFFFF;
          margin-bottom: 10px;
        }
        .shequ, .didian {
          font-family: PingFangSC-Regular;
          font-size: 16px;
          color: #b9b9b9;
          letter-spacing: 0;
          margin-bottom: 8px;
        }
      }
      .right-box {
        .time {
          font-family: PingFangSC-Regular;
          font-size: 16px;
          color: #F9F9F9;
          margin-bottom: 41px;
        }

        .status {
          text-align: right;
          font-family: PingFangSC-Semibold;
          font-size: 16px;
        }
      }
    }
  }
  .bottom-line{
    width: 100%;
    height: 1px;
    background-color: #34A6D2;
    position: absolute;
    bottom: 8px;
  }
}
</style>
<style lang="scss">
.warning-container{
  .swiper-container{
    height: 100%;
  }
  .swiper-wrapper{
    height: 100%;
  }
  .swiper-slide{
    height: 120px!important;
    // margin-top: 25px;
  }
}
</style>
