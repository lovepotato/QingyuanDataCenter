<template>
  <div class="board-container">
    <swiper :options="swiperOptions" ref="mySwiper">
      <swiper-slide v-for="(boardItem, index) in lastServiceOrderList" :key="index">
        <div class="board-content">
          <div class="img-icon">
            <el-avatar :size="60" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>
          <div class="oldman-info">
            <div class="base-info">
              <div class="name">{{ boardItem.name }}</div>
              <div class="gender">{{ boardItem.gender }}</div>
              <div class="age">{{ boardItem.age }}岁</div>
              <div class="live-stage">独居</div>
            </div>
            <div class="address">{{ boardItem.address }}</div>
            <div class="service-info">
              <div class="service-title">服务内容</div>
              <div class="service-content">{{ boardItem.service }}</div>
            </div>
          </div>
          <div class="service-status">
            <div class="status-title">工作状态</div>
            <div class="status-img" :class="[ statusClassList[ 1 ] ]"></div>
          </div>
          <div class="bottom-line"></div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'BoardList',
  props: {
    lastServiceOrderList: {
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
        spaceBetween: 25,
        autoplay: {
          autoplay: true,
          disableOnInteraction: true,
          delay: 5000
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
  }
}
</script>
<style lang="scss" scoped>
.board-container{
  height: 100%;
  width: 100%;
  .board-content{
    height: 140px;
    width: 100%;
    display: flex;
    // position: relative;
    .bottom-line{
      width: 100%;
      height: 1px;
      background-color: #34A6D2;
      position: absolute;
      bottom: 4px;
    }
    .img-icon{
      height: 115px;
      margin-right: 25px;
      width: 60px;
    }
    .oldman-info{
      width: 222px;
      height: 84px;
      margin-right: 29px;
      .base-info{
        width: 222px;
        height: 28px;
        line-height: 28px;
        font-size: 20px;
        color: #FFFFFF;
        display: flex;
        justify-content: space-between;
        letter-spacing: 0;
        .name{
          width: 41px;
          height: 28px;
          line-height: 28px;
        }
        .gender{
          width: 20px;
          height: 28px;
          line-height: 28px;
        }
        .age{
          width: 44px;
          height: 28px;
          line-height: 28px;
        }
        .live-stage{
          width: 38px;
          height: 28px;
          font-size: 14px;
          background: #34A6D2;
          border-radius: 5px;
          text-align: center;
        }
      }
      .address{
        height: 22px;
        width: 222px;
        line-height: 22px;
        font-size: 14px;
        color: #F9F9F9;
      }
      .service-info{
        width: 222px;
        height: 34px;
        line-height: 34px;
        font-size: 14px;
        color: #FFFFFF;
        display: flex;
        justify-content: space-between;
        .service-title{
          width: 61px;
          height: 25px;
          margin-right: 15px;
          line-height: 25px;
          text-align: center;
        }
        .service-content{
          height: 25px;
          width: 115px;
          background: #002E5B;
          border-radius: 5px;
          line-height: 25px;
          color: #35E7FF;
          font-size: 14px;
          padding-left: 10px;
        }
      }
    }
    .service-status{
      width: 218px;
      height: 40px;
      margin-top: 50px;
      display: flex;
      .status-title{
        height: 25px;
        line-height: 25px;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
        margin-right: 3px;
        text-align: center;
      }
      .status-img{
        height: 40px;
        // width: 157px;
        &.wait{
          background-image: url('../../../assets/imgs/Group 2 Copy 2.png');
          width: 157px;
          height: 40px;
        }
        &.sending{
          background-image: url('../../../assets/imgs/Group 2 Copy.png');
          width: 154px;
          height: 39px;
        }
        &.complete{
          background-image: url('../../../assets/imgs/Group 2.png');
          width: 154px;
          height: 40px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.board-container{
  .swiper-container{
    height: 100%;
  }
  .swiper-wrapper{
    height: 100%;
  }
  .swiper-slide{
    height: 115px!important;
    // margin-top: 25px;
  }
}
</style>
