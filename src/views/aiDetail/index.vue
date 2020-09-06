<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handClick">
      <el-tab-pane label="行为识别" name="behaviorIdentify"></el-tab-pane>
      <el-tab-pane label="健康监测" name="healthMonitor"></el-tab-pane>
      <el-tab-pane label="康复管理" name="rehabilitation"></el-tab-pane>
      <el-tab-pane label="远程医生" name="remoteDoctor"></el-tab-pane>
      <el-tab-pane label="智能床垫" name="mattress"></el-tab-pane>
      <el-tab-pane label="健康管理" name="healthManage"></el-tab-pane>
    </el-tabs>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'AiDetail',
  data() {
    return {
      activeName: this.$route.name
    }
  },
  methods: {
    handClick() {
      this.$router.push(`/aiDetail/${this.activeName}`)
    }
  }
}
</script>

<style>

</style>
