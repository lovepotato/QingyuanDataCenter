<template>
  <div :class="classObj" class="app-wrapper">
    <!-- <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" /> -->
    <div class="fixed-header">
      <navbar />
    </div>
    <div class="main-container">
      <app-main />
    </div>
    <!-- <div class="app-footer">Copyright © 2020. All Rights Reserved.</div> -->
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain
  },
  mixins: [ResizeMixin],
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
        hideSidebar: false, //! this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
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
