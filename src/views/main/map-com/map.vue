<template>
  <div class="map-container">
    <div class="map-content">
      <div class="position-note">
        <div class="org-box-item" :class="['org-id-'+i]" v-for="i in 24" :key="i" @click="activeOrgChange(i)"></div>
      </div>
    </div>
    <div class="oldman-data">
      <div class="org-title">
        <div class="title">{{ communityItem.title }}</div>
      </div>
      <div class="data-content">
        <div class="data-item">
          <div class="value">{{ communityItem.total_population }}</div>
          <div class="title">{{ communityItem.total_population_label }}</div>
        </div>
        <div class="data-item">
          <div class="value">{{ communityItem.oldman_count }}</div>
          <div class="title">{{ communityItem.oldman_count_label }}</div>
        </div>
        <div class="data-item">
          <div class="value">{{ communityItem.aging }}</div>
          <div class="title">{{ communityItem.aging_label }}</div>
        </div>
        <div class="data-item">
          <div class="value">{{ '23' }}</div>
          <div class="title">{{ '服务商' }}</div>
        </div>
        <div class="data-item">
          <div class="value">{{ 865 }}</div>
          <div class="title">{{ '服务人数' }}</div>
        </div>
        <div class="data-item">
          <div class="value">{{ 13 }}</div>
          <div class="title">{{ '活动室' }}</div>
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
    }
  }
}
</script>

<style lang="scss">
.map-container{
  width: 100%;
  height: 100%;
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
      .org-box-item{
        position: absolute;
        &.org-id-1{
          top: 0;
          bottom:0
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
