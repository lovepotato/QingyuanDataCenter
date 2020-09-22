<template>
  <div class="main-container-box">
    <!-- <div style="width:400px;height:400px">
      <pie-chart :piechart-data="testData"></pie-chart>
    </div> -->
    <div class="header-block">
      <div class="oldman-info-item" @click="gotoOldmanDetailPage()">
        <div class="oldman-info-value">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.total_population : '' }}</div>
        <div class="oldman-info-label">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.total_population_label : '' }}</div>
      </div>
      <div class="oldman-info-item" @click="gotoOldmanDetailPage()">
        <div class="oldman-info-value">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.oldman_count : '' }}</div>
        <div class="oldman-info-label">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.oldman_count_label : '' }}</div>
      </div>
      <div class="oldman-info-item" @click="gotoOldmanDetailPage()">
        <div class="oldman-info-value">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.aging + '%' : '' }}</div>
        <div class="oldman-info-label">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.aging_label : '' }}</div>
      </div>
      <div class="oldman-info-item" @click="gotoOldmanDetailPage()">
        <div class="oldman-info-value">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.advanced_age : '' }}</div>
        <div class="oldman-info-label">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.advanced_age_label : '' }}</div>
      </div>
      <div class="oldman-info-item" @click="gotoOldmanDetailPage(4)">
        <div class="oldman-info-value">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.empty_nester : '' }}</div>
        <div class="oldman-info-label">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.empty_nester_label : '' }}</div>
      </div>
      <div class="oldman-info-item" @click="gotoOldmanDetailPage()">
        <div class="oldman-info-value">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.poor_oldman : '' }}</div>
        <div class="oldman-info-label">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.poor_oldman_label : '' }}</div>
      </div>
      <div class="oldman-info-item" @click="gotoOldmanDetailPage()">
        <div class="oldman-info-value">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.benefits_oldman : '' }}</div>
        <div class="oldman-info-label">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.benefits_oldman_label : '' }}</div>
      </div>
      <div class="oldman-info-item" @click="gotoOldmanDetailPage()">
        <div class="oldman-info-value">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.loss_oldman : '' }}</div>
        <div class="oldman-info-label">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.loss_oldman_label : '' }}</div>
      </div>
      <div class="oldman-info-item" @click="gotoRevealOldmanPage()">
        <div class="oldman-info-value">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.doudi_oldman : '' }}</div>
        <div class="oldman-info-label">{{ dataCenterData.oldman_info ? dataCenterData.oldman_info.data_list.doudi_oldman_label : '' }}</div>
      </div>
    </div>
    <div class="body-block">
      <div class="orginfo-item">
        <div class="service-org">
          <div class="org-content">
            <div class="org-title">
              <div class="title">养老服务组织</div>
            </div>
            <div class="org-list">
              <div class="list-item" v-for=" (serviceItem, index) in serviceData.platform_info && serviceData.platform_info.data_list" :key="index" :class="{'nocursor-class' : serviceItem.title==='服务商'}" @click="gotoServicePage(serviceItem)">
                <div class="item-value">{{ serviceItem.value }}</div>
                <div class="item-label">{{ serviceItem.title }}</div>
              </div>
            </div>
            <div class="org-pie">
              <div class="service-chart chart-item">
                <ring-chart
                  v-if="serviceData.service_type"
                  :data="serviceData.service_type.data_list"
                  :option="{
                    colorList:['#F25C5D', '#EDAE5D', '#F93F00', '#00FFF0', '#04C8F9 ', '#A901FD'],
                    legend:{
                      top:'73%',
                      itemWidth:10,
                      itemHeight:10,
                      icon:'circle',
                      itemGap:15,
                      textStyle:{
                        color:'#fff',
                        fontSize:18,
                      }
                    },
                    title: {
                      text:'服务分类',
                      subtext:'占比',
                      subtextStyle:{
                        fontSize: 18,
                        color:'#FFD258',
                        fontWeight:'normal'
                      },
                      x: 'center',
                      y: '30%',
                      textStyle: {
                        fontSize: 18,
                        color:'#FFD258',
                        fontWeight:'normal'
                      }
                    }
                  }"
                ></ring-chart>
              </div>
              <div class="activity-chart chart-item">
                <ring-chart
                  v-if="serviceData.activity_cat"
                  :data="serviceData.activity_cat.data_list"
                  :option="{
                    colorList:['#0ECEFF', '#0328E3', '#0578E5', '#F25C5D', '#02E7A4  ', '#907AFF'],
                    title: {
                      text:'活动分类',
                      subtext:'占比',
                      subtextStyle:{
                        fontSize: 18,
                        color:'#35E7FF',
                        fontWeight:'normal'
                      },
                      x: 'center',
                      y: '30%',
                      textStyle: {
                        fontSize: 18,
                        color:'#35E7FF',
                        fontWeight:'normal'
                      }
                    },
                    legend:{
                      top:'70%',
                      itemWidth:10,
                      itemHeight:10,
                      icon:'circle',
                      padding:[0,15,0,15],
                      textStyle:{
                        color:'#fff',
                        fontSize:18,
                      }
                    }
                  }"
                ></ring-chart>
              </div>
            </div>
          </div>
        </div>
        <div class="homebased-data">
          <div class="based-content">
            <div class="content-title">
              <div class="title">居家上门服务数据</div>
            </div>
            <div class="service-list">
              <div class="list-item" v-for="(item, index) in homebasedcareserviceData" :key="index" @click="gotoHomeService()">
                <div class="item-icon" :class="[classList[index]]"></div>
                <div class="divider"></div>
                <div class="item-content">
                  <div class="value" :class="[index === 3 ? 'good-rate-value' : '']">{{ index === 3 ? item.value + '%' : item.value }}</div>
                  <div class="title">{{ item.name }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="board-list">
            <board-list :last-service-order-list="lastServiceOrderList" @showOrderDetail="showOrderDetail"></board-list>
          </div>
        </div>
      </div>
      <div class="stage-map-item">
        <map-com :community-list="dataCenterData.community_list && dataCenterData.community_list.data_list" v-if="dataCenterData.community_list"></map-com>
      </div>
      <div class="medical-data">
        <div class="medical-item">
          <div class="medical-warper">
            <div class="medical-title">
              <div class="title">智能监测与远程医生</div>
            </div>
            <div class="medical-data">
              <div class="medical-total-item">
                <div class="list-item" v-for="(monitorItem, index) in monitoringData" :key="index" @click="gotoDetailPageByindex(index)">
                  <div class="value">{{ monitorItem.value.value }}</div>
                  <div class="text">{{ monitorItem.text }}</div>
                </div>
              </div>
              <div class="medical-detail-data">
                <div class="detail-data-warper">
                  <div class="detail-item" v-for="(item, index) in healthData" :key="index">
                    <div class="item-img" :class="[getHealthImg(index)]"></div>
                    <div class="item-content">
                      <div class="value">{{ item.value.value }}</div>
                      <div class="text">{{ item.text }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="video-item">
          <div class="video-warper">
            <div class="video-title">
              <div class="title">实时视频监控</div>
            </div>
            <div class="video-content">
              <div class="video-list" v-for="(item, index) in videoList" :key="index" @click="gotoVideoDetail(item)">
                <rtmpVideo
                  :video-src="item.url"
                  v-if="videoList"
                  video-height="130"
                  video-width="184"
                  :title="item.title"
                ></rtmpVideo>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <early-warning></early-warning> -->
  </div>
</template>

<script>
import rtmpVideo from '../../components/Video'
import ringChart from '../../components/charts/ringChart'
import mapCom from './map-com/map'
import boardList from '../../components/board-list/board-list'
// import earlyWarning from '../../components/Modal/earlyWarning/earlyWarning'
export default {
  components: { mapCom, ringChart, boardList, rtmpVideo
  // ,
  //   earlyWarning
  },
  data() {
    return {
      dataCenterData: {},
      serviceData: {},
      homebasedcareserviceData: {},
      classList: ['phone', 'gongdan', 'server-count', 'good-rate'],
      lastServiceOrderList: [],
      videoList: [],
      hardwareStatistics: [],
      healthData: [{ text: '心率异常', value: '' }, { text: '离床提醒', value: '' }, { text: '跌倒报警', value: '' }, { text: '求救识别', value: '' }, { text: '远程问诊', value: '' }, { text: '健康体检', value: '' }, { text: '康复评测', value: '' }, { text: '运动康复', value: '' }, { text: '心电检测', value: '' }, { text: '能力自测', value: '' }],
      monitoringData: [{ text: '智能床垫', value: '' }, { text: '行为识别', value: '' }, { text: '健康检测', value: '' }, { text: '康复设备', value: '' }, { text: '远程医生', value: '' }, { text: '健康管理', value: '' }]
    }
  },
  created() {
    this.getDataCenterData()
    this.getServiceData()
    this.getHomeBaseData()
    this.getLastServiceOrder()
    this.getVideoList()
    this.getHardwareData()
  },
  methods: {
    getDataCenterData() {
      this.http.post(`/communityoldmanbigdataanalyze/oldmanbigdatacenter`).then(({ data, code }) => {
        if (code === 0) {
          this.dataCenterData = data
        }
      })
    },
    getServiceData() {
      this.http.post(`/communityoldmanbigdataanalyze/serviceorg`).then(({ data, code }) => {
        if (code === 0) {
          this.serviceData = data
        }
      })
    },
    getHomeBaseData() {
      this.http.post(`/commandcentre/homebasedcareservice/count`).then(({ data, code }) => {
        if (code === 0) {
          const displayList = ['呼入电话', '工单数量', '服务老人', '好评率']
          this.homebasedcareserviceData = data.countList.filter((item, index) => displayList.includes(item.name))
        }
      })
    },
    getLastServiceOrder() {
      this.http.post(`/commandcentre/homebasedcareservice/lastserviceorder`).then(({ data, code }) => {
        if (code === 0) {
          this.lastServiceOrderList = data
        }
      })
    },
    getVideoList() {
      this.http.post(`/surveillancecamera/videolist`, {
        access_token: 'param1',
        id: 1041,
        type: 1,
        limit: 10
      }).then(({ data, code }) => {
        if (code === 0) {
          this.videoList = data.dataList
        }
      })
    },
    getHardwareData() {
      this.http.post(`/hardware/statistics`).then(({ data, code }) => {
        if (code === 0) {
          this.hardwareStatistics = data
          // this.totalData = this.hardwareStatistics.slice(0, 6)
          // this.healthData = this.hardwareStatistics.slice(6, data.length)
          Object.values(data).map((item, index) => {
            if (index < 6) {
              this.monitoringData[index].value = item
            } else {
              this.healthData[index - 6].value = item
            }
          })
        }
      })
    },
    getHealthImg(index) {
      const classList = ['heartRate', 'outbed', 'fallDown', 'sos', 'longRangeDiagnose', 'healthCheckup', 'recoveryTest', 'sportRecovery', 'ECGTest', 'abilityTest']
      return classList[index]
    },
    gotoOldmanDetailPage() {
      this.$router.push(`oldClassify`)
    },
    gotoRevealOldmanPage() {
      this.$router.push(`revealOldman`)
    },
    gotoHomeService() {
      this.$router.push(`homeService`)
    },
    gotoDetailPageByindex(index) {
      let pathName = ''
      switch (index) {
        case 0:
          pathName = '/aiDetail/mattress'
          break
        case 1:
          pathName = '/aiDetail/behaviorIdentify'
          break
        case 2:
          pathName = '/aiDetail/healthMonitor'
          break
        case 3:
          pathName = '/aiDetail/rehabilitation'
          break
        case 4:
          pathName = '/aiDetail/remoteDoctor'
          break
        case 5:
          pathName = '/aiDetail/healthManage'
          break
      }
      this.$router.push(pathName)
    },
    gotoVideoDetail(item) {
      this.$router.push({ path: `video`, query: { title: item.title }})
    },
    gotoServicePage({ title }) {
      let pathName = ''
      switch (title) {
        case '机构':
          pathName = 'organization'
          break
        case '社区':
          pathName = 'communityClassify'
          break
        case '驿站':
          pathName = 'stage'
          break
        case '公益组织':
          pathName = 'organizeVolunteer'
          break
        case '志愿者':
          pathName = 'organizeVolunteer'
          break
      }
      console.log(pathName)
      this.$router.push(pathName)
    },
    showOrderDetail(orderDetail) {
      const { id } = orderDetail
      this.$bus.$emit('showWorkOrderDetail', { id })
    }
  }
}
</script>

<style lang="scss" scoped>
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
      cursor: pointer;
      .oldman-info-label{
        font-size: 26px;
        color: #35E7FF;
        letter-spacing: -0.02px;
        text-align: center;
        margin-top: 12px;
      }
      .oldman-info-value{
        font-size: 47px;
        color: #FFFFFF;
        letter-spacing: -0.02px;
        height: 45px;
        line-height: 45px;
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
    width: calc(100% - 59px - 22px);
    margin: 0 auto;
    height: 928px;
    .orginfo-item{
      width: 1164px;
      height: 100%;
      margin-right: 47px;
      .service-org{
        height: 425px;
        width: 1169px;
        margin-bottom: 34px;
        background-image: url('../../assets/imgs/Group 1.png');
        position: relative;
        .org-content{
          display: flex;
          height: 315px;
          // justify-content: center;
          padding-top: 56px;
          margin-left: 22px;
          .org-title{
            height:303px;
            width: 50px;
            margin: 6px 32px 0 0;
            background-image: url('../../assets/imgs/养老服务组织.png');
            .title{
              font-family: PingFangSC-Medium;
              font-size: 24px;
              color: #35E7FF;
              letter-spacing: 4.07px;
              line-height: 40px;
              text-align: center;
              word-wrap: break-word;
              padding-top: 31.5px;
            }
          }
          .org-list{
            width: 516px;
            height: 315px;
            margin-right: 21px;
            display: flex;
            flex-wrap:wrap ;
            .list-item{
              width: 150px;
              height: 142px;
              margin-right: 22px;
              background-image: url('../../assets/imgs/框1.png');
              cursor: pointer;
              &.nocursor-class{
                cursor: default;
              }
              &:last-child{
                margin-right: 0;
              }
              .item-value{
                width:100%;
                text-align: center;
                height: 45px;
                line-height: 45px;
                font-size: 32px;
                color: #FFFFFF;
                margin: 19px 0;
              }
              .item-label{
                height: 28px;
                line-height: 28px;
                text-align: center;
                font-size: 20px;
                color: #35E7FF;
              }
            }
          }
          .org-pie{
            width: 512px;
            height: 350px;
            display: flex;
            margin-right: 12px;
            position: absolute;
            right: 18px;
            top: 36px;
            .chart-item{
              width: 50%;
              height: 100%;
            }
            &:last-child{
              margin-right: 0;
            }
          }
        }
      }
      .homebased-data{
        padding-top: 36px;
        height: 466px;
        width: 1168px;
        display: flex;
        background-image: url('../../assets/imgs/Group2.png');
        .based-content{
          height: 100%;
          width: 543px;
          margin-left: 22px;
          display: flex;
          .content-title{
            width: 47px;
            height: 375px;
            margin-right: 25px;
            background-image: url('../../assets/imgs/居家上门服务数据.png');
            .title{
              padding-top: 27.5px;
              font-family: PingFangSC-Medium;
              font-size: 24px;
              color: #35E7FF;
              letter-spacing: 4.07px;
              line-height: 40px;
              text-align: center;
              word-wrap: break-word;
            }
          }
          .service-list{
            width: 410px;
            height: 354px;
            display: flex;
            flex-wrap: wrap;
            margin-top: 23px;
            margin-right: 48px;
            .list-item{
              width: 190px;
              height: 154px;
              background-image: linear-gradient(90deg, rgba(98,240,249,0.29) 1%, rgba(255,255,255,0.00) 46%, rgba(255,255,255,0.00) 100%);
              border: 1px solid #2DC8E1;
              border-radius: 23px;
              margin-right:30px;
              padding-left: 13px;
              display: flex;
              cursor: pointer;
              &:nth-child(2n){
                margin-right: 0;
              }
              .item{
                height: 136px;
                width: calc(100% - 39px);
                margin:12px 26px 6px 13px ;
              }
              .item-icon{
                height: 40px;
                width: 40px;
                margin-right: 13px;
                margin-top: 57px;
                &.phone{
                  background-image: url('../../assets/imgs/呼入电话.png');
                }
                &.gongdan{
                  background-image: url('../../assets/imgs/工单数.png');
                }
                &.server-count{
                  background-image: url('../../assets/imgs/服务人数.png');
                }
                &.good-rate{
                  background-image: url('../../assets/imgs/好评率.png');
                }
              }
              .divider{
                width: 3px;
                height: 98px;
                margin-top: 28px;
                background-image: url('../../assets/imgs/分割线.png');
                margin-right: 17px;
              }
              .item-content{
                width: 80px;
                height: 95px;
                margin-top: 29.5px;
                .value{
                  width: 100%;
                  height: 45px;
                  line-height: 45px;
                  font-size: 32px;
                  color: #FFFFFF;
                  letter-spacing: 0;
                  text-align: center;
                  &.good-rate-value{
                    color: #FF5F5F;
                  }
                }
                .title{
                  margin-top: 14px;
                  font-size: 20px;
                  color: #35E7FF;
                  letter-spacing: 0;
                  height: 28px;
                  line-height: 28px;
                  text-align: center;
                }
              }
            }
          }
        }
        .board-list{
          width: 570px;
          height: calc(100% - 36px);
          .board-item{
            height: 140px;
            width: 570px;
          }
        }
      }
    }
    .stage-map-item{
      width: 937px;
      height: 100%;
      margin-left: 18px;
      margin-right: 39px;
    }
    .medical-data{
      width: 1168px;
      height: 100%;
      .medical-item{
        width: 100%;
        height: 515px;
        background-image: url('../../assets/imgs/Group3.png');
        margin-bottom: 40px;
        display: flex;
        .medical-warper{
          width: calc(100% - 32px - 22px);
          height: 405px;
          margin: 53px 32px 0 22px;
          display: flex;
          .medical-data{
            width: 1033px;
            height: 397px;
            .medical-total-item{
              background-image: linear-gradient(180deg, rgba(53,231,255,0.32) 0%, rgba(1,28,95,0.00) 50%, rgba(34,198,240,0.24) 100%);
              border: 1px solid #1257C9;
              border-radius: 23px;
              border-radius: 23px;
              height: 122px;
              width: 1033px;
              display: flex;
              cursor: pointer;
              .list-item{
                height: 83px;
                width: 167px;
                margin-top: 19.5px;
                position: relative;
                .text{
                  height: 28px;
                  width: 100%;
                  text-align: center;
                  line-height: 28px;
                  font-size: 20px;
                  color: #35E7FF;
                  margin-top: 10px;
                }
                .value{
                  height: 45px;
                  width: 100%;
                  line-height: 45px;
                  text-align: center;
                  font-size: 32px;
                  color: #FFFFFF;
                }
                &:after{
                  content: '';
                  height: 98px;
                  width: 3px;
                  background-image: url('../../assets/imgs/分割线.png');
                  position: absolute;
                  top: -10px;
                  right: 0;
                }
                &:last-child::after{
                  display: none;
                }
              }
            }
            .medical-detail-data{
              height: 209px;
              width: 1033px;
              margin-top: 53px;
              .detail-data-warper{
                display: flex;
                flex-wrap: wrap;
              }
              .detail-item{
                width:161px;
                height: 74px;
                display: flex;
                margin-right: 55px;
                margin-bottom: 63px;
                &:nth-child(5n){
                  margin-right: 0;
                }
                .item-img{
                  width: 71px;
                  height: 74px;
                  margin-right: 18px;
                  &.heartRate{
                    background-image: url('../../assets/imgs/心率异常.png');
                  }
                  &.outbed{
                    background-image: url('../../assets/imgs/离床提醒.png');
                  }
                  &.fallDown{
                    background-image: url('../../assets/imgs/跌倒报警.png');
                  }
                  &.sos{
                    background-image: url('../../assets/imgs/求救识别.png');
                  }
                  &.longRangeDiagnose{
                    background-image: url('../../assets/imgs/远程问诊.png');
                  }
                  &.healthCheckup{
                    background-image: url('../../assets/imgs/健康体检.png');
                  }
                  &.recoveryTest{
                    background-image: url('../../assets/imgs/康复测评.png');
                  }
                  &.sportRecovery{
                    background-image: url('../../assets/imgs/运动康复.png');
                  }
                  &.ECGTest{
                    background-image: url('../../assets/imgs/心电检测.png');
                  }
                  &.abilityTest{
                    background-image: url('../../assets/imgs/能力自测.png');
                  }
                }
                .item-content{
                  width: 72px;
                  height: 74px;
                  text-align: center;
                  .value{
                    height: 42px;
                    line-height: 42px;
                    width: 100%;
                    font-size: 30px;
                    color: #FFFFFF;
                  }
                  .text{
                    height: 25px;
                    line-height: 25px;
                    width: 100%;
                    font-size: 18px;
                    color: #35E7FF;
                    margin-top: 13px;
                  }
                }
              }
            }
          }
        }
        .medical-title{
          width: 47px;
          height: 405px;
          background-image: url('../../assets/imgs/智能监测与远程医生.png');
          margin-right: 37px;
          .title{
            font-size: 24px;
            color: #35E7FF;
            letter-spacing: 4.07px;
            line-height: 40px;
            width: 29px;
            margin-left: 9px;
            word-wrap: break-word;
            padding-top: 25px;
          }
        }
      }
      .video-item{
        height: 370px;
        width: 100%;
        background-image: url('../../assets/imgs/Group4.png');
        .video-warper{
          display: flex;
          height: 284px;
          width: calc(100% - 19px - 35px);
          margin: 0 35px 0 19px;
          padding-top: 40px;
          .video-title{
            height: 284px;
            width: 50px;
            background-image: url('../../assets/imgs/实时视频监控.png');
            margin-right: 28px;
            .title{
              width: 30px;
              height: 240px;
              margin-left: 10px;
              font-size: 24px;
              color: #35E7FF;
              letter-spacing: 4.07px;
              line-height: 40px;
              padding-top: 22px;
              word-wrap: break-word;
            }
          }
          .video-content{
            width: 1036px;
            height: 288px;
            display: flex;
            flex-wrap: wrap;
            .video-list{
              position: relative;
              width: 184px;
              height: 130px;
              margin-right: 29px;
              margin-bottom: 28px;
              cursor: pointer;
              &:nth-child(5n){
                margin-right: 0;
              }
              .video-title{
                width: 100%;
                height: 32px;
                background: rgba(0,41,193,0.65);
                font-size: 16px;
                color: #FFFFFF;
                line-height: 32px;
                text-align: center;
                position: absolute;
                top: 0;
                z-index: 100;
              }
            }
          }
        }
      }
    }
  }
  .good-rate{
    .value{
      color: #FF5F5F;
    }
  }
}
</style>
<style lang="scss" >
.service-chart {
  .statisticClassId2{
  color: #FFD258!important;
    line-height: 21px;
    padding-top: 14px;
  }
  .ring-guide-value{
    color: #FFD258!important;
  }
}
.activity-chart {
  .statisticClassId2{
  color: #35E7FF!important;
    line-height: 21px;
    padding-top: 14px;
  }
  .ring-guide-name{
    color: #35E7FF!important;
    line-height: 40px;
    padding-top: 14px;
  }
  .ring-guide-value{
    color: #35E7FF!important;
  }
}
.main-container-box{
  .video-container {
    .title{
      font-size: 16px;
      color: #FFFFFF;
      line-height: 32px;
      height: 32px;
    }
  }
}
</style>
