<template>
  <div class="physical-report">
    <div
      class="user-title"
      style="clean: both"
    >健康体检报告</div>
    <div class="img-wrapper">
      <el-image
        :key="url"
        :src="url | formatImageSrc"
        v-for="url in healthmonitoringReport"
      ></el-image>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    healthmonitoringReport: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.img-wrapper {
  width: 100%;
  text-align: center;
}
</style>
