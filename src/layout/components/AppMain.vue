<template>
  <section class="app-main">
    <div class="app-main-container">
      <div
        :class="[getViewClass]"
        class="app-view"
      >
        <!-- <transition
          mode="out-in"
          name="fade-transform"
        > -->
        <router-view :key="key" />
        <!-- </transition> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    },
    getViewClass() {
      const pathList = this.$route.path.split('/')
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';
.hideSidebar {
  .app-main {
    width: calc(100vw - 54px); /* sidebar width */
    left: 54px;
  }
}

.app-main {
  /*50 = navbar  */
  height: 100%;
  width: 100%; /* sidebar width */
  position: relative;
  // left: $sideBarWidth;
  overflow: hidden;

  .app-main-container {
    // padding: 17px 20px;
    height: 100%;
    width: 100%;

    .app-view {
      // margin-top: 17px;
      // background-color: #fff;
      height: 100%;
      width: 100%;
      // overflow: hidden;
      // padding: 15px 20px;
      min-width: 1100px;
      &.transparent {
        background-color: transparent;
      }

      &.smallpadding {
        padding: 0px 8px;
      }
    }
  }
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
