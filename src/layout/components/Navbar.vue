<template>
  <div class="navbar">
    <!-- <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" /> -->

    <!-- <breadcrumb class="breadcrumb-container" /> -->
    <div class="title">
      清源智慧化养老大数据中心
    </div>
    <div class="right-menu">
      <img src="../../assets/imgs/搜索.png" alt="" @click="jumpToSearch">
      <img src="../../assets/imgs/消息.png" alt="">
      <span class="time">
        {{ currentDateInfo.time }}
      </span>
      <span class="month">{{ currentDateInfo.month }}</span>
      <span class="date">{{ currentDateInfo.date }}</span>
      <img src="../../assets/imgs/最大化.png" alt="" @click="screenfullHandle">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import dayjs from 'dayjs'
import screenfull from 'screenfull'

export default {
  components: {
    // Breadcrumb
    // Hamburger
  },
  data() {
    return {
      currentDateInfo: {
        time: '',
        month: '',
        date: ''
      },
      timer: ''
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  mounted() {
    this.timer = setInterval(this.getCurrentTime, 1000)
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    getCurrentTime() {
      const date = dayjs()
      this.currentDateInfo.time = date.format('HH:mm:ss')
      this.currentDateInfo.month = date.format('MMM')
      this.currentDateInfo.date = date.format('YYYY / MM / DD')
    },
    jumpToSearch() {
      this.$router.push('/search')
    },
    screenfullHandle() {
      // 如果不允许进入全屏，发出不允许提示
      // if (screenfull.enabled) {
      //   this.$message({
      //     message: '不支持全屏',
      //     type: 'warning'
      //   })
      //   return false
      // }
      screenfull.toggle()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.navbar {
  height: $navBarHeight;
  overflow: hidden;
  position: relative;
  text-align: center;
  // background: #D72324;
  // box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .title {
    font-family: PingFangSC-Semibold;
    font-size: 40px;
    color: #FFFFFF;
    letter-spacing: 24.46px;
    text-align: center;
    line-height: 50px;
    margin-top: 34px;
  }

  .right-menu {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 24px;
    top: 30px;
    width: 550px;
    img {
      width: 24px;
      height: 24px;
      margin-left: 48px;
      cursor: pointer;
    }

    .time {
      font-family: FZLTZHK--GBK1-0;
      font-size: 22px;
      color: #229FDF;
      letter-spacing: 3.06px;
      text-align: center;
      margin-left: 55px;
      margin-right: 7px;
      width: 124px;
    }

    .month, .date {
      font-family: FZLTZHK--GBK1-0;
      font-size: 12px;
      color: #229FDF;
      letter-spacing: 0;
      text-align: center;
      line-height: 35px;
    }

    .month {
      margin-right: 3px;
    }
  }
}
</style>
