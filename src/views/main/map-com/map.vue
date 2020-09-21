<template>
  <div class="map-container">
    <div class="map-content">
      <div class="active-index-img" :class="['active-index-'+i,activeId===i ? 'show':'']" v-for="i in 24" :key="i"></div>
      <div class="position-note">
        <div class="org-box-item" :class="['org-id-'+i]" v-for="i in 24" :key="i" @click="activeOrgChange(i)">
        </div>
      </div>
    </div>
    <div class="oldman-data">
      <div class="org-title">
        <div class="title">{{ communityItem && communityItem.title }}</div>
      </div>
      <div class="data-content">
        <div class="data-item" @click="gotoCommunityClassify()">
          <div class="value">{{ communityItem && communityItem.total_population }}</div>
          <div class="title">{{ communityItem && communityItem.total_population_label }}</div>
        </div>
        <div class="data-item" @click="gotoCommunityClassify()">
          <div class="value">{{ communityItem && communityItem.oldman_count }}</div>
          <div class="title">{{ communityItem && communityItem.oldman_count_label }}</div>
        </div>
        <div class="data-item" @click="gotoCommunityClassify()">
          <div class="value">{{ communityItem && communityItem.aging }}%</div>
          <div class="title">{{ communityItem && communityItem.aging_label }}</div>
        </div>
        <div class="data-item" @click="gotoCommunityClassify()">
          <div class="value">{{ communityItem && communityItem.service_provider }}</div>
          <div class="title">{{ communityItem && communityItem.service_provider_label }}</div>
        </div>
        <div class="data-item" @click="gotoCommunityClassify()">
          <div class="value">{{ communityItem && communityItem.service_staff }}</div>
          <div class="title">{{ communityItem && communityItem.service_staff_label }}</div>
        </div>
        <div class="data-item" @click="gotoCommunityClassify()">
          <div class="value">{{ communityItem && communityItem.activityroom }}</div>
          <div class="title">{{ communityItem && communityItem.activityroom_label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapCom',
  props: {
    communityList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      communityItem: {},
      activeId: 1,
      timer: null
    }
  },
  mounted() {
    this.activeOrgChange(1)
  },
  methods: {
    activeOrgChange(id) {
      this.activeId = id
      this.communityItem = this.communityList.find(item => item.index === id)
      if (this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.activeId += 1
        if (this.activeId > 24) {
          this.activeId = 1
        }
        this.activeOrgChange(this.activeId)
      }, 5000)
    },
    gotoCommunityClassify() {
      this.$router.push(`communityClassify`)
    }
  }
}
</script>

<style lang="scss">
.map-container{
  width: 100%;
  height: 100%;
  position: relative;
  .active-index-img{
    position: absolute;
    top: 4px;
    left: 0;
    height: 704px;
    width: 933px;
    display: none;
    &.show{
      display: block;
    }
    z-index: 100;
    &.active-index-1{
      background-image: url('../../../assets/imgs/active-index-1.png');
    }
    &.active-index-2{
      background-image: url('../../../assets/imgs/active-index-2.png');
    }
    &.active-index-3{
      background-image: url('../../../assets/imgs/active-index-3.png');
    }
    &.active-index-4{
      background-image: url('../../../assets/imgs/active-index-4.png');
    }
    &.active-index-5{
      background-image: url('../../../assets/imgs/active-index-5.png');
    }
    &.active-index-6{
      background-image: url('../../../assets/imgs/active-index-6.png');
    }
    &.active-index-7{
      background-image: url('../../../assets/imgs/active-index-7.png');
    }
    &.active-index-8{
      background-image: url('../../../assets/imgs/active-index-8.png');
    }
    &.active-index-9{
      background-image: url('../../../assets/imgs/active-index-9.png');
    }
    &.active-index-10{
      background-image: url('../../../assets/imgs/active-index-10.png');
    }
    &.active-index-11{
      background-image: url('../../../assets/imgs/active-index-11.png');
    }
    &.active-index-12{
      background-image: url('../../../assets/imgs/active-index-12.png');
    }
    &.active-index-13{
      background-image: url('../../../assets/imgs/active-index-13.png');
    }
    &.active-index-14{
      background-image: url('../../../assets/imgs/active-index-14.png');
    }
    &.active-index-15{
      background-image: url('../../../assets/imgs/active-index-15.png');
    }
    &.active-index-16{
      background-image: url('../../../assets/imgs/active-index-16.png');
    }
    &.active-index-17{
      background-image: url('../../../assets/imgs/active-index-17.png');
    }
    &.active-index-18{
      background-image: url('../../../assets/imgs/active-index-18.png');
    }
    &.active-index-19{
      background-image: url('../../../assets/imgs/active-index-19.png');
    }
    &.active-index-20{
      background-image: url('../../../assets/imgs/active-index-20.png');
    }
    &.active-index-21{
      background-image: url('../../../assets/imgs/active-index-21.png');
    }
    &.active-index-22{
      background-image: url('../../../assets/imgs/active-index-22.png');
    }
    &.active-index-23{
      background-image: url('../../../assets/imgs/active-index-23.png');
    }
    &.active-index-24{
      background-image: url('../../../assets/imgs/active-index-24.png');
    }
  }
  .map-content{
    width:937px;
    height: 705px;
    margin-bottom: 20px;
    background-image: url('../../../assets/imgs/地图.png');
    position: relative;
    .position-note{
      width: 100%;
      height: 100%;
      background-image: url('../../../assets/imgs/标注.png');
      position: absolute;
      top:0;
      left: 0;
      z-index: 200;
      .org-box-item{
        position: absolute;
        cursor: pointer;
        z-index:300px;
        cursor: pointer;
        &.org-id-1{
          top: 0;
          right:24.2px;
          width:207.1px;
          height: 116.4px;
          //border: solid 1px rebeccapurple;

        }
        &.org-id-2{
          top: 152.7px;
          left:0;
          width:76px;
          height: 92px;
          //border: solid 1px rebeccapurple;

        }
        &.org-id-3{
          top: 152.7px;
          left: 91.5px;
          width: 94px;
          height: 92px;
          //border: solid 1px rebeccapurple;

        }
        &.org-id-4{
          top: 152.7px;
          left:185.5px;
          width:61.4px;
          height: 91px;
          //border: solid 1px rebeccapurple;

        }
        &.org-id-5{
          top: 152.7px;
          left:391.5px;
          width:64px;
          height: 89px;
          //border: solid 1px rebeccapurple;

        }
        &.org-id-6{
          top: 152.7px;
          left:460.3px;
          width:65.6px;
          height: 89px;
          //border: solid 1px rebeccapurple;

        }
        &.org-id-7{
          top: 152.7px;
          left:525.8px;
          width:76px;
          height: 92px;
          //border: solid 1px rebeccapurple;

        }
        &.org-id-8{
          top: 135.4px;
          left: 626.1px;
          width:107.3px;
          height: 111px;
          //border: solid 1px rebeccapurple;

        }
        &.org-id-9{
          top: 121.4px;
          left: 739.6px;
          width: 93.4px;
          height: 124.1px;
          //border: solid 1px rebeccapurple;

        }
        &.org-id-10{
          top: 257.4px;
          left: 145.5px;
          width: 110.5px;
          height: 86px;
          //border: solid 1px rebeccapurple;

        }
        &.org-id-11{
          top: 257.4px;
          left:  259.9px;
          width: 102px;
          height: 86px;
          //border: solid 1px rebeccapurple;

        }
        &.org-id-12{
          top: 257.5px;
          left: 391.9px;
          width: 203px;
          height: 88.6px;
          //border: solid 1px rebeccapurple;

        }
        &.org-id-13{
          top: 255.2px;
          left: 626.1px;
          width: 124.6px;
          height: 88px;
          //border: solid 1px rebeccapurple;

        }
        &.org-id-14{
          top: 255.4px;
          left: 768.6px;
          width: 63.4px;
          height: 88px;
          //border: solid 1px rebeccapurple;

        }
        &.org-id-15{
          top: 255.4px;
          left: 845.1px;
          width: 77.4px;
          height: 206.2px;
          //border: solid 1px rebeccapurple;

        }
        &.org-id-16{
          top: 368px;
          left: 33px;
          width: 124px;
          height: 97px;
          //border: solid 1px rebeccapurple;

        }
        &.org-id-17{
          top: 360.1px;
          left: 163.2px;
          width: 86.3px;
          height: 96px;
          //border: solid 1px rebeccapurple;

        }
        &.org-id-18{
          top: 359.7px;
          left: 259.9px;
          width: 102px;
          height: 112px;
          //border: solid 1px rebeccapurple;

        }
        &.org-id-19{
          top: 357.2px;
          left: 516.6px;
          width:76px;
          height: 111px;
          //border: solid 1px rebeccapurple;

        }
        &.org-id-20{
          top: 360.5px;
          left: 623.9px;
          width: 128px;
          height: 70px;
          //border: solid 1px rebeccapurple;

        }
        &.org-id-21{
          top: 425.5px;
          left: 623.9px;
          width: 152.6px;
          height: 75px;
          //border: solid 1px rebeccapurple;
        }
        &.org-id-22{
          top: 358.2px;
          left: 782.5px;
          width: 49px;
          height: 134px;
          //border: solid 1px rebeccapurple;
        }
        &.org-id-23{
          top: 468.7px;
          left: 42.2px;
          width: 204.3px;
          height: 114.8px;
          //border: solid 1px rebeccapurple;

        }
        &.org-id-24{
          top: 506.5px;
          left: 623.9px;
          width: 153px;
          height: 94px;
          //border: solid 1px rebeccapurple;

        }
      }
    }
  }
  .oldman-data{
    height: 203px;
    width: 937px;
    margin: 0 auto;
    background-image: url('../../../assets/imgs/框3.png');
    position: relative;
    .org-title{
     height: 56px;
     width: 100%;
      .title{
        height: 56px;
        line-height: 56px;
        width: 252px;
        font-size: 20px;
        color: #FFFFFF;
        letter-spacing: 4.3px;
        text-align: center;
        margin: 0 auto;
      }
    }
    .data-content{
      height:98px;
      width: 930px;
      margin: 22px auto 27px auto;
      display: flex;
      .data-item{
        height: 98px;
        width: 155px;
        position: relative;
        cursor: pointer;
        .title{
          font-size: 18px;
          color: #FFFFFF;
          letter-spacing: 0;
          text-align: center;
          height: 25px;
        }
        .value{
          font-size: 30px;
          color: #4DEAFF;
          letter-spacing: -0.01px;
          text-align: center;
          margin-bottom: 15px;
          height: 42px;
        }
        &::after{
          content: '';
          width: 3px;
          height: 98px;
          top: 0;
          right: 0;
          position: absolute;
          background-image: url('../../../assets/imgs/分割线.png');
        }
        &:last-child::after{
            display: none;
          }
      }
    }
  }
}
</style>
