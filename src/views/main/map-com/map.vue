<template>
  <div class="map-container">
    <div class="map-content">
      <div class="position-note"></div>
    </div>
    <div class="oldman-data"></div>
  </div>
</template>

<script>
export default {
  name: 'MapCom',
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.map-container{
  width: 100%;
  height: 100%;
  .map-content{
    width:937px;
    height: 705px;
    margin-bottom: 20px;
    background-image: url('../../../assets/imgs/地图.png');
    .position-note{
      width: 100%;
      height: 100%;
      background-image: url('../../../assets/imgs/标注.png');
    }
  }
  .oldman-data{
    height: 203px;
    width: 928px;
    margin: 0 auto;
    background-image: url('../../../assets/imgs/框3.png');
  }
}
</style>
