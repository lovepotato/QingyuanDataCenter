<template>
  <div class="physical-report">
    <div
      class="user-title"
      style="clean: both"
    >体适能测评</div>
    <div class="img-wrapper">
      <el-image
        :key="url"
        :src="url"
        v-for="url in physicalFitnessAssessment"
      ></el-image>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    physicalFitnessAssessment: {
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
