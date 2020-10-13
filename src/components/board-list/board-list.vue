<template>
  <div class="board-container">
    <swiper
      :options="swiperOptions"
      @click-slide="handleClickSlide"
      ref="mySwiper"
      v-if="lastServiceOrderList.length > 0"
    >
      <swiper-slide
        :key="index"
        v-for="(boardItem, index) in lastServiceOrderList"
      >
        <div class="board-content">
          <div class="img-icon">
            <el-avatar
              :size="60"
              :src="boardItem.img | formatImageSrc"
            ></el-avatar>
          </div>
          <div class="oldman-info">
            <div class="base-info">
              <div class="name">{{ boardItem.name }}</div>
              <div class="gender">{{ boardItem.gender }}</div>
              <div class="age">{{ boardItem.age }}岁</div>
              <div class="live-stage-box">
                <div
                  :key="tindex"
                  :style="{background: tag === '空巢' || tag === '五保' ? '#34a6d2' : '#dd614a'}"
                  class="live-stage"
                  v-for="(tag, tindex) in getTagList(boardItem.tag)"
                  v-show="tindex < 3"
                >{{ tag }}</div>
                <div
                  class="live-stage"
                  v-show="getTagList(boardItem.tag).length > 3"
                >...</div>
              </div>
            </div>
            <div class="address">{{ boardItem.address }}</div>
            <div class="service-info">
              <div class="service-title">服务内容</div>
              <div class="service-content text-overflow-class{">{{ boardItem.service }}</div>
            </div>
          </div>
          <div class="service-status">
            <div class="status-title">工作状态</div>
            <div
              :class="[ boardItem.status==='待派单' ? 'wait' : boardItem.status==='待服务' ? 'sending' : boardItem.status==='已完成' ? 'complete' : '']"
              class="status-img"
            ></div>
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
      statusClassList: [
        { key: '待派单', value: 'wait' },
        { key: '待服务', value: 'sending' },
        { key: '已完成', value: 'complete' }
      ]
    }
  },
  computed: {
    swiperOptions() {
      return {
        loop: this.lastServiceOrderList.length > 2,
        spaceBetween: 25,
        autoplay: {
          autoplay: true,
          disableOnInteraction: false,
          delay: 5000
        },
        direction: 'vertical',
        slidesPerView: 3,
        observeParents: true
      }
    },
    swiper() {
      return this.$refs.mySwiper ? this.$refs.mySwiper.$swiper : null
    }
  },
  mounted() {
    // this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    getTagList(tag) {
      if (!tag) return []
      return tag.indexOf('&') !== -1 ? tag.split('&') : [tag]
    },
    handleClickSlide(index, reallyIndex) {
      console.log(index, reallyIndex)
      this.$emit(
        'showOrderDetail',
        this.lastServiceOrderList[reallyIndex || index]
      )
    }
  }
}
</script>
<style lang="scss" scoped>
.board-container {
  height: 100%;
  width: 100%;
  .board-content {
    height: 140px;
    width: 100%;
    display: flex;
    cursor: pointer;
    // position: relative;
    .bottom-line {
      width: 100%;
      height: 1px;
      background-color: #34a6d2;
      position: absolute;
      bottom: 4px;
    }
    .img-icon {
      height: 115px;
      margin-right: 25px;
      width: 60px;
    }
    .oldman-info {
      width: 222px;
      height: 84px;
      margin-right: 29px;
      .base-info {
        width: 222px;
        height: 28px;
        line-height: 28px;
        font-size: 20px;
        color: #ffffff;
        display: flex;
        justify-content: space-between;
        letter-spacing: 0;
        position: relative;
        .name {
          width: 80px;
          height: 28px;
          line-height: 28px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .gender {
          width: 20px;
          height: 28px;
          line-height: 28px;
        }
        .age {
          width: 44px;
          height: 28px;
          line-height: 28px;
        }
        .live-stage-box {
          top: 0;
          left: 250px;
          position: absolute;
          display: flex;
          width: 200px;
          overflow: hidden;
        }
        .live-stage {
          width: 38px;
          height: 28px;
          font-size: 14px;
          background: #34a6d2;
          border-radius: 5px;
          text-align: center;
          margin-right: 10px;
        }
      }
      .address {
        height: 22px;
        width: 222px;
        line-height: 22px;
        font-size: 14px;
        color: #f9f9f9;
        margin: 10px 0;
      }
      .service-info {
        width: 222px;
        height: 34px;
        line-height: 34px;
        font-size: 14px;
        color: #ffffff;
        display: flex;
        justify-content: space-between;
        .service-title {
          width: 61px;
          height: 25px;
          margin-right: 15px;
          line-height: 25px;
          text-align: center;
        }
        .service-content {
          height: 25px;
          width: 115px;
          background: #002e5b;
          border-radius: 5px;
          line-height: 25px;
          color: #35e7ff;
          font-size: 14px;
          padding-left: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .service-status {
      width: 218px;
      height: 40px;
      margin-top: 71px;
      display: flex;
      .status-title {
        height: 25px;
        line-height: 25px;
        font-size: 14px;
        color: #ffffff;
        letter-spacing: 0;
        margin-right: 3px;
        text-align: center;
      }
      .status-img {
        height: 40px;
        // width: 157px;
        &.wait {
          background-image: url('../../assets/imgs/Group 2 Copy 2.png');
          width: 157px;
          height: 40px;
        }
        &.sending {
          background-image: url('../../assets/imgs/Group 2 Copy.png');
          width: 154px;
          height: 39px;
        }
        &.complete {
          background-image: url('../../assets/imgs/Group 2.png');
          width: 154px;
          height: 40px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.board-container {
  .swiper-container {
    height: 100%;
  }
  .swiper-wrapper {
    height: 100%;
  }
  .swiper-slide {
    height: 115px !important;
    // margin-top: 25px;
  }
}
</style>
