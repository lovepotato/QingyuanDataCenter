<template>
  <div class="main-container-box">
    <!-- <div style="width:400px;height:400px">
      <pie-chart :piechart-data="testData"></pie-chart>
    </div> -->
    <div class="header-block">
      <div class="oldman-info-item">
        <div class="oldman-info-value">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.total_population : '' }}</div>
        <div class="oldman-info-label">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.total_population_label : '' }}</div>
      </div>
      <div class="oldman-info-item">
        <div class="oldman-info-value">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.oldman_count : '' }}</div>
        <div class="oldman-info-label">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.oldman_count_label : '' }}</div>
      </div>
      <div class="oldman-info-item">
        <div class="oldman-info-value">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.aging : '' }}</div>
        <div class="oldman-info-label">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.aging_label : '' }}</div>
      </div>
      <div class="oldman-info-item">
        <div class="oldman-info-value">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.advanced_age : '' }}</div>
        <div class="oldman-info-label">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.advanced_age_label : '' }}</div>
      </div>
      <div class="oldman-info-item">
        <div class="oldman-info-value">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.empty_nester : '' }}</div>
        <div class="oldman-info-label">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.empty_nester_label : '' }}</div>
      </div>
      <div class="oldman-info-item">
        <div class="oldman-info-value">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.poor_oldman : '' }}</div>
        <div class="oldman-info-label">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.poor_oldman_label : '' }}</div>
      </div>
      <div class="oldman-info-item">
        <div class="oldman-info-value">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.benefits_oldman : '' }}</div>
        <div class="oldman-info-label">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.benefits_oldman_label : '' }}</div>
      </div>
      <div class="oldman-info-item">
        <div class="oldman-info-value">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.loss_oldman : '' }}</div>
        <div class="oldman-info-label">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.loss_oldman_label : '' }}</div>
      </div>
    </div>
    <div class="body-block">
      <div class="orginfo-item">
        <div class="service-org"></div>
      </div>
      <div class="stage-map-item"></div>
    </div>
  </div>
</template>

<script>
// import rtmpVideo from '../../components/Video'
// import pieChart from '../../components/charts/pieChart'
export default {
  // components: { pieChart },
  data() {
    return {
      dataCenterData: {}
    }
  },
  created() {
    this.getDataCenterData()
  },
  methods: {
    getDataCenterData() {
      this.http.post(`/communityoldmanbigdataanalyze/oldmanbigdatacenter`).then(({ data, code }) => {
        if (code === 0) {
          this.dataCenterData = data
        }
      })
    }
  }
}
</script>

<style lang="scss">
.main-container-box{
  width: 100%;
  height: 100%;
  .header-block{
    height: 112px;
    width: 100%;
    display: flex;
    margin: 23px 0 48px 0;
    .oldman-info-item{
      position: relative;
      width: 422px;
      height: 100%;
      .oldman-info-label{
        font-size: 26px;
        color: #35E7FF;
        letter-spacing: -0.02px;
        text-align: center;
        margin-top: 6px;
      }
      .oldman-info-value{
        font-size: 45px;
        color: #FFFFFF;
        letter-spacing: -0.02px;
        text-align: center;
      }
      &::after{
        content:'';
        position: absolute;
        width: 3px;
        height: 98px;
        background-image: url('../../assets/imgs/分割线.png');
        right: 0;
        top: 0;
      }
      &:last-child::after{
          display: none;
      }
    }
  }
  .body-block{
    display: flex;
    width: calc(100% - 59px - 65px);
    margin-left: 59px;
    margin-right: 65px;
    height: 928px;
    .orginfo-item{
      width: 1164px;
      height: 100%;
      .service-org{
        height: 425px;
        width: 1169px;
        background-image: url('../../assets/imgs/Group 1.png');
      }
    }
    .stage-map-item{
      width: 937px;
      height: 100%;
      margin-left: 18px;
      margin-right: 39px;
    }
    .medical-item{
      width: 1168px;
      height: 100%;
    }
  }
}
</style>
