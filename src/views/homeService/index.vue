<template>
  <div>
    <transition
      name="fade"
      enter-active-class="animated fadeInLeftBig"
      leave-active-class="animated fadeOutRightBig"
      :duration="1000"
    >
      <div class="color" v-show="show">test</div>
    </transition>
    <el-button @click="show = !show"></el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.show = true
    // }, 1000)
  }
}
</script>

<style>
.color {
  width: 200px;
  height: 20px;
  background-color: pink;
}
</style>
