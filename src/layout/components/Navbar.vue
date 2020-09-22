<template>
  <div class="navbar">
    <!-- <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" /> -->

    <!-- <breadcrumb class="breadcrumb-container" /> -->
    <div class="title">
      清源智慧化养老大数据中心
    </div>
    <div class="right-menu">
      <i class="el-icon-s-home icon-home" @click="$router.push('/')" v-if="!isMainPage"></i>
      <img src="../../assets/imgs/搜索.png" alt="" @click="jumpToSearch">
      <img src="../../assets/imgs/消息.png" alt="" @mouseover="openMessage" @mouseleave="closeMessage">
      <div class="dot" v-if="hasMessage"></div>
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
      timer: '',
      hasMessage: false
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ]),
    isMainPage() {
      return this.$route.name === 'main'
    }
  },
  mounted() {
    this.timer = setInterval(this.getCurrentTime, 1000)
    this.$bus.$on('hasMessage', () => {
      this.hasMessage = true
    })
    this.$bus.$on('emptyMessage', () => {
      this.hasMessage = false
    })
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
    this.$bus.$off('hasMessage')
    this.$bus.$off('emptyMessage')
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
    },
    openMessage() {
      this.$bus.$emit('showMessageBox')
    },
    closeMessage() {
      setTimeout(() => {
        this.$bus.$emit('closeMessageBox')
      }, 200)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.icon-home {
  font-size: 27px;
  color: #229FDF;
  margin-left: 42px;
  cursor: pointer;
  position: relative;
  bottom: 2px;
}

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
    width: 660px;
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
      font-size: 15px;
      color: #229FDF;
      letter-spacing: 0;
      text-align: center;
      line-height: 35px;
    }

    .month {
      margin-right: 3px;
    }

    .dot {
      position: absolute;
      height: 5px;
      width: 5px;
      border-radius: 5px;
      background-color: #FFB200;
      right: 398px;
      top: -2px;
    }
  }
}
</style>
