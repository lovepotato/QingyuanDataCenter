<template>
  <div :class="classObj" class="app-wrapper">
    <!-- <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" /> -->
    <div class="fixed-header">
      <navbar />
    </div>
    <div class="main-container">
      <app-main />
    </div>
    <aged-detail></aged-detail>
    <number-modal></number-modal>
    <sos-modal></sos-modal>
    <warning-modal></warning-modal>
    <!-- <div class="app-footer">Copyright © 2020. All Rights Reserved.</div> -->
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import agedDetail from '../components/Modal/agedDetail/index'
import numberModal from '../components/Modal/Number'
import sosModal from '../components/Modal/SosModal'
import warningModal from '../components/Modal/WarningModal'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
    agedDetail,
    numberModal,
    sosModal,
    warningModal
  },
  mixins: [ResizeMixin],
  data() {
    return {
      setIntervalMessage: null,
      setIntervalZhixiaoyun: null
    }
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    classObj() {
      return {
        // hideSidebar: false, //! this.sidebar.opened,
        // openSidebar: this.sidebar.opened,
        // withoutAnimation: this.sidebar.withoutAnimation,
        // mobile: this.device === 'mobile'
      }
    }
  },
  mounted() {
    this.setScale()
    window.addEventListener('resize', this.setScale)
    this.loopMessage()
  },
  destroyed() {
    if (this.setIntervalMessage) {
      clearInterval(this.setIntervalMessage)
    }

    if (this.setIntervalZhixiaoyun) {
      clearInterval(this.setIntervalZhixiaoyun)
    }

    window.removeEventListener('resize', this.setScale)
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
    loopMessage() {
      this.setIntervalMessage = setInterval(this.timerRequestMessage(), 20000)
    },
    timerRequestMessage() {
      this.http.post('/commandcenter/message/notify').then(({ code, data }) => {
        if (code === 0) {
          this.$bus.$emit('closeModal')
          if (Number(data.type) === 2) {
            this.$bus.$emit('newMobile', { data: data.data })
          }

          if (Number(data.type) === 1) {
            this.$bus.$emit('newSosModal', { data: data.data })
          }

          if (Number(data.type) === 3) {
            this.$bus.$emit('newWarningModal', { data: data.data })
          }
        } else {
          return
        }
      })
      return this.timerRequestMessage
    },
    loopZhixiaoyun() {
      this.setIntervalZhixiaoyun = setInterval(() => {
        this.http.post('/smartcloud/oldman_search', { keyword: '1' }).then((res) => {
          console.log(res)
        })
      }, 2000)
    },
    getScale() {
      const width = 3456
      const height = 1296
      const ww = window.innerWidth / width
      const wh = window.innerHeight / height
      return ww < wh ? ww : wh
    },
    setScale() {
      this.scale = this.getScale()
      this.scaleHeight = this.scale * 1.5
      document.body.style.setProperty('--scale', this.scale)
      document.body.style.setProperty('--scaleHeight', this.scaleHeight)
    }
  }
}
</script>

<style>
body {
  --scale: 1;
  --scaleHeight: 1;
  transform: scale(var(--scale), var(--scaleHeight)) ;
}
</style>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    // height: 100%;
    // width: 100%;

    width: 3456px;
    height: 1296px;
    background: url("../assets/imgs/全底图.png");
    // overflow: hidden;
    // background-size: 100%;
    background-repeat:no-repeat;
    // background-size: 100% 100%;
    transform-origin: 0 0;

    .app-footer{
      height: 50px;
      width: 100%;
      line-height: 50px;
      // position: fixed;
      text-align: center;
      // bottom: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    // position: fixed;
    // top: 0;
    // right: 0;
    z-index: 1000;
    width: calc(100%);
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100%)
  }

  .mobile .fixed-header {
    width: 100%;
  }

</style>
