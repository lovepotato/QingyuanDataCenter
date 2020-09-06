<template>
  <div class="behaviorIdentify">
    <div class="left-contaier"></div>
  </div>
</template>

<script>
export default {
  name: 'BehaviorIdentify',
  data() {
    return {
      baseData: {}
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      this.http.post(`/cloudvideo/index`).then(res => {
        this.baseData = res
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.behaviorIdentify {
  width: 100%;
  height: 1000px;
  display: flex;
}

.left-contaier {
  background-image: url("../../../assets/imgs/行为识别Group1.png");
  width: 949px;
  height: 994px;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
