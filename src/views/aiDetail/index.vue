<template>
  <div class="ai-detail">
    <el-tabs v-model="activeName" type="card" @tab-click="handClick" class="tab">
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

<style lang="scss">
.ai-detail {
  padding: 20px 55px 55px 55px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid red;

  .tab {
    margin-bottom: 20px;
  }

  .el-tabs__header {
    margin: 0px !important;
  }
  .el-tabs__nav-prev, .el-tabs__nav-next {
    display: none !important;
  }

  .el-tabs--card>.el-tabs__header {
    border-bottom: 0px !important;
  }

  .el-tabs--card>.el-tabs__header .el-tabs__nav {
    border: 0px !important;
  }

  .el-tabs--card>.el-tabs__header .el-tabs__item {
    border-bottom: 0px !important;
    border-left: 0px !important;
  }

  .el-tabs__item {
    width: 384px;
    height: 69px;
    background-color: transparent;
    font-family: PingFangSC-Regular;
    font-size: 26px;
    color: #0091FF;
    text-align: center;
    line-height: 69px;
    margin-right: 208px;
    padding: 0px;

    &:last-child {
      margin-right: 0px;
    }
  }

  .el-tabs__item.is-active {
    width: 384px;
    height: 69px;
    background-color: #032F8C;
    color: #fff;
    font-family: PingFangSC-Semibold;
    font-size: 26px;
    border-radius: 8px 8px 0px 0px;
    text-align: center;
    line-height: 69px;
  }
}
</style>
