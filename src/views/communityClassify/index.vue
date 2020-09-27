<template>
  <div class="community-contanier">
    <div class="community-list-warper">
      <vue-scroll :ops="ops">
        <div class="community-list-tab">
          <div class="community-item" v-for="(item, index) in communityList" :key="index" :class="{'active-community':item.index == activeCommunityIndex}" @click="activeCommunityChange(item.index)">
            <div class="name">{{ item.title }}</div>
          </div>
        </div>
      </vue-scroll>
    </div>
    <div class="community-info">
      <div class="info-left">
        <div class="community-stastics">
          <div class="statics-item">
            <div class="map-img">
              <img style="width:100%;height:100%" :src="currentMapImg" />
            </div>
            <div class="statics-list">
              <div class="statics-content">
                <div class="value">{{ communityItem.total_population }}</div>
                <div class="title">{{ communityItem.total_population_label }}</div>
              </div>
              <div class="statics-content">
                <div class="value">{{ communityItem.oldman_count }}</div>
                <div class="title">{{ communityItem.oldman_count_label }}</div>
              </div>
              <div class="statics-content">
                <div class="value">{{ communityItem.aging }}</div>
                <div class="title">{{ communityItem.aging_label }}</div>
              </div>
              <div class="statics-content">
                <div class="value">{{ communityItem.service_provider }}</div>
                <div class="title">{{ communityItem.service_provider_label }}</div>
              </div>
              <div class="statics-content">
                <div class="value">{{ communityItem.service_staff }}</div>
                <div class="title">{{ communityItem.service_staff_label }}</div>
              </div>
              <div class="statics-content">
                <div class="value">{{ communityItem.activityroom }}</div>
                <div class="title">{{ communityItem.activityroom_label }}</div>
              </div>
              <div class="statics-content">
                <div class="value">{{ communityItem.commonwealorganization_count }}</div>
                <div class="title">{{ communityItem.commonwealorganization_count_label }}</div>
              </div>
              <div class="statics-content">
                <div class="value">{{ communityItem.volunteer_count }}</div>
                <div class="title">{{ communityItem.volunteer_count_label }}</div>
              </div>
              <div class="statics-content">
                <div class="value">{{ communityItem.monitoring_count }}</div>
                <div class="title">{{ communityItem.monitoring_count_label }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="oldman-info">
          <div class="info-content">
            <div class="info-item">
              <div class="value">{{ communityItem.foreigner }}</div>
              <div class="title">{{ communityItem.foreigner_label }}</div>
            </div>
            <div class="info-item">
              <div class="value">{{ communityItem.advanced_age }}</div>
              <div class="title">{{ communityItem.advanced_age_label }}</div>
            </div>
            <div class="info-item">
              <div class="value">{{ communityItem.empty_nester }}</div>
              <div class="title">{{ communityItem.empty_nester_label }}</div>
            </div>
            <div class="info-item">
              <div class="value">{{ communityItem.poor_oldman }}</div>
              <div class="title">{{ communityItem.poor_oldman_label }}</div>
            </div>
            <div class="info-item">
              <div class="value">{{ communityItem.benefits_oldman }}</div>
              <div class="title">{{ communityItem.benefits_oldman_label }}</div>
            </div>
            <div class="info-item">
              <div class="value">{{ communityItem.loss_oldman }}</div>
              <div class="title">{{ communityItem.loss_oldman_label }}</div>
            </div>
          </div>
          <div class="complete-order-content">
            <!-- <div class="complete-info">
              <div class="content">
                <div class="title">档案信息完善度达 <span style="color:#FFE397">{{ communityItem.percentage_complete+'%' }}</span> 的老人总数</div>
                <div class="value">
                  <span style="font-size: 54px;color: #FFFFFF;letter-spacing: -0.02px;line-height:75px">{{ communityItem.percentage_complete_count }}</span>
                  <span style="font-size: 16px;color: #FFFFFF;letter-spacing: 0;">人</span>
                  <span style="font-size: 18px;color: #44D7B6;letter-spacing: 0;text-align: center;padding-left:16px;">{{ communityItem.percentage_complete_label }}</span></div>
              </div>
            </div> -->
            <div class="doudi-info info-detail">
              <div class="info-warper">
                <div class="title">{{ communityItem.member_last_count_label }}</div>
                <div class="value">{{ communityItem.member_last_count }}</div>
              </div>
            </div>
            <div class="safety-info info-detail">
              <div class="info-warper">
                <div class="title">{{ communityItem.member_last_safety_today_label }}</div>
                <div class="value">{{ communityItem.member_last_safety_today }}</div>
              </div>
            </div>
            <div class="notfafety-info info-detail">
              <div class="info-warper">
                <div class="title">{{ communityItem.member_last_safety_today_not_label }}</div>
                <div class="value">{{ communityItem.member_last_safety_today_not }}</div>
              </div>
            </div>
            <div class="activity-info info-detail">
              <div class="info-warper">
                <div class="title">{{ communityItem.activity_count_label }}</div>
                <div class="value">{{ communityItem.activity_count }}</div>
              </div>
            </div>
            <div class="order-info info-detail">
              <div class="info-warper">
                <div class="title">{{ communityItem.order_count_label }}</div>
                <div class="value">{{ communityItem.order_count }}</div>
              </div>
            </div>
            <div class="transaction-info info-detail">
              <div class="info-warper">
                <div class="title">{{ communityItem.transaction_money_label }}</div>
                <div class="value">{{ communityItem.transaction_money }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-center">
        <div class="chart-items" v-if="showChartItem">
          <div class="chart-item">
            <div class="chart-title">老人性别分布</div>
            <div class="chart-content">
              <pie-chart :option="oldmanGenderOption" :data="oldmanGenderData" v-if="oldmanGenderData"></pie-chart>
            </div>
          </div>
          <div class="chart-item">
            <div class="chart-title">老人年龄分布</div>
            <div class="chart-content">
              <pie-chart :option="oldmanAgeOption" :data="oldmanAgeData"></pie-chart>
            </div>
          </div>
          <div class="chart-item">
            <div class="chart-title">能力等级分布</div>
            <div class="chart-content">
              <pie-chart :option="oldmanAblityOption" :data="oldmanAblityData" v-if="oldmanAblityData"></pie-chart>
            </div>
          </div>
          <div class="chart-item">
            <div class="chart-title">常见疾病排行<span class="title-last"> ( TOP 8 )</span></div>
            <div class="chart-content">
              <bar-chart :data="commonDiseasesData" :option="commonDiseasesOption" v-if="commonDiseasesData"></bar-chart>
            </div>
          </div>
          <div class="chart-item">
            <div class="chart-title">本市和外埠户籍分布</div>
            <div class="chart-content">
              <pie-chart :option="localityForeignerOption" :data="localityForeignerData" v-if="localityForeignerData"></pie-chart>
            </div>
          </div>
          <div class="chart-item">
            <div class="chart-title">医保类型分布</div>
            <div class="chart-content">
              <pie-chart :option="healthInsuranceOption" :data="healthInsuranceData" v-if="healthInsuranceData"></pie-chart>
            </div>
          </div>
        </div>
      </div>
      <div class="info-right">
        <div class="activity-list">
          <div class="activity-title">
            近期举办活动
          </div>
          <div class="activity-list-container">
            <swiper v-if="recentActivity.length > 0" :options="swiperOptions" ref="mySwiper">
              <swiper-slide v-for="(boardItem, index) in recentActivity" :key="index">
                <div class="activity-content">
                  <div class="img-icon">
                    <el-avatar :size="140" shape="square" :src="boardItem.img"></el-avatar>
                  </div>
                  <div class="activity-info">
                    <div class="info-title info-item" :title=" boardItem.title">{{ boardItem.title }}</div>
                    <div class="activity-addr info-item" :title=" boardItem.addr">{{ '活动地点：' + boardItem.addr }}</div>
                    <div class="activity-count info-item">{{ '参与人数：' + boardItem.maxjoinnum }}</div>
                    <div class="activity-time-title info-item">活动时间:</div>
                    <div class="activity-time info-item">{{ timefilter(boardItem.act_start) + ' - ' + timefilter(boardItem.act_end) }}</div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pieChart from '../../components/charts/pieChart'
import barChart from '../../components/charts/barChart'
export default {
  name: 'Community',
  components: {
    pieChart,
    barChart
  },
  data() {
    return {
      activeCommunityIndex: 1,
      communityItem: {},
      communityList: [],
      oldmanGenderOption: {
        color: ['#00FFB4', '#0091FF']
      },
      oldmanAgeOption: {
        color: ['#665BFF ', '#F7F100 ', '#FD5D5D', '#C431FF']
      },
      oldmanAblityOption: {
        color: ['#1DBFFF', '#2AFFCF', '#C1F700', '#FF9132']
      },
      commonDiseasesOption: {},
      localityForeignerOption: {
        color: ['#1DBFFF', '#FFD768 ']
      },
      healthInsuranceOption: {
        color: ['#D5FF7F', '#32C5FF', '#A901FD', '#5C6CF2', '#EDAE5D']
      },
      oldmanGenderData: [],
      oldmanAgeData: [],
      oldmanAblityData: [],
      healthInsuranceData: [],
      localityForeignerData: [],
      commonDiseasesData: {},
      showChartItem: false,
      swiperOptions: {
        loop: this.recentActivity && this.recentActivity.length > 4,
        spaceBetween: 80,
        autoplay: {
          autoplay: false,
          disableOnInteraction: true,
          delay: 5000
        },
        direction: 'vertical',
        slidesPerView: 4,
        observeParents: true
      },
      ops: {
        scrollPanel: {
          scrollingY: false
        },
        bar: {
          background: '#3A61CB'
        }
      },
      showActivitySwiper: false
    }
  },
  computed: {
    currentMapImg() {
      return require(`../../assets/imgs/社区地图/${this.communityItem.index}.png`)
    }
  },
  watch: {
    communityItem: {
      handler(oldVal, newVal) {
        const xData = []
        const yData = []
        console.log('watch')
        this.healthInsuranceData = this.communityItem.health_insurance
        this.localityForeignerData = this.communityItem.locality_foreigner
        this.oldmanAblityData = this.communityItem.degree_of_ability_data_list
        this.oldmanAgeData = this.communityItem.oldman_age
        this.oldmanGenderData = this.communityItem.oldman_sex
        Object.keys(this.communityItem).length > 0 && this.communityItem.common_diseases.map(item => {
          xData.push(item.value)
          yData.push(item.name)
        })
        this.commonDiseasesData = { xData, yData }
        this.recentActivity = this.communityItem.recent_activity
        this.showActivitySwiper = true
      },
      deep: true,
      immediate: true
    }
  },
  created() {
    this.getCommunityList()
  },
  methods: {
    getCommunityList() {
      this.http.post(`/communityoldmanbigdataanalyze/communityclassify`).then(({ data, code }) => {
        if (code === 0) {
          this.communityList = data.community_list.data_list
          this.activeCommunityIndex = this.communityList[0].index
          this.activeCommunityChange(this.activeCommunityIndex)
        }
      })
    },
    activeCommunityChange(index) {
      this.showActivitySwiper = false
      this.showChartItem = false
      this.activeCommunityIndex = index
      this.communityItem = this.communityList.find(item => item.index === index)
      this.showChartItem = true
    },
    timefilter(val) {
      return val.slice(0, 10)
    }
  }
}
</script>

<style lang="scss" scoped>
.community-contanier{
  width: 100%;
  height: 100%;
  padding: 0 46px;
  .community-list-warper{
    overflow: hidden;
    height: 69px;
    margin-top: 17px;
  }
  .community-list-tab{
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 69px;
    justify-content: flex-start;
    border-bottom: 0.5px solid #1257C9;
    .active-community{
      background: #032F8C;
      border-radius: 8px 8px 0 0;
    }
    .community-item{
      width: 208px;
      height: 69px;
      line-height: 69px;
      font-family: PingFangSC-Regular;
      font-size: 26px;
      color: #0091FF;
      letter-spacing: 0;
      text-align: center;
      font-weight: bold;
      padding: 0 13px;
      cursor: pointer;
      .name{
        width: 182px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        height: 69px;
      }
    }
  }
  .community-info{
    height: 996px;
    width: 100%;
    display: flex;
    margin-top: 26px;
    .info-left{
      width: 1178px;
      height: 100%;
      margin-right: 29px;
      .community-stastics{
        background-image: url('../../assets/imgs/社区分类Group1.png');
        width: 1169px;
        height: 542px;
        padding: 30px 20px 30px 30px;
        .statics-item{
          height: 475px;
          width: 100%;
          display: flex;
          .map-img{
            width: 475px;
            height: 475px;
            margin-right: 39px;
            padding: 4px;
            background-image: url('../../assets/imgs/框-社区分类1.png');
          }
          .statics-list{
            width: 601px;
            height: 470px;
            display: flex;
            flex-wrap: wrap;
          }
          .statics-content{
            width: 187px;
            height: 144px;
            background-image: url('../../assets/imgs/框-社区分类2.png');
            margin-right: 20px;
            margin-bottom: 22px;
            &:nth-child(3n){
              margin-right: 0;
            }
            .title{
              height: 28px;
              line-height: 28px;
              font-size: 20px;
              color: #35E7FF;
              letter-spacing: 0;
              text-align: center;
              margin-top: 31px;
            }
            .value{
              height: 45px;
              line-height: 45px;
              font-size: 32px;
              color: #FFFFFF;
              letter-spacing: 0;
              text-align: center;
              margin-top: 14px;
              width: 100%;
            }
          }
        }
      }
      .oldman-info{
        margin-top: 27px;
        background-image: url('../../assets/imgs/社区分类Group2.png');
        width: 1169px;
        height: 426px;
        padding-top: 29px;
        .info-content{
          height: 143px;
          width: 1116px;
          display: flex;
          padding: 28px 0;
          margin-left: 23px;
          background-image: url('../../assets/imgs/框-社区分类3.png');
          .info-item{
            width: 185px;
            height: 88px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            .value{
              height: 45px;
              line-height: 45px;
              font-size: 32px;
              color: #FFFFFF;
              letter-spacing: -0.01px;
              text-align: center;
            }
            .title{
              height: 28px;
              line-height: 28px;
              font-size: 20px;
              color: #35E7FF;
              letter-spacing: 0;
              text-align: center;
              margin-top: 10px;
            }
          }
        }
        .complete-order-content{
          width: 100%;
          height: 205px;
          display: flex;
          margin-left: 23px;
          margin-top: 20px;
          .complete-info{
            width: 548px;
            height: 205px;
            background-image: url('../../assets/imgs/档案信息完善度.png');
            margin-right: 22px;
            padding-left: 189px;
            .content{
              width: 100%;
              height: 140px;
              padding-top: 42px;
            }
            .title{
              font-size: 21px;
              color: #FFFFFF;
              letter-spacing: 0;
              line-height: 40px;
              height: 40px;
              margin-top: 14px;
            }
            .value{
              .value-left{
                height:75px;
                line-height: 75px;
                font-size: 54px;
                color: #FFFFFF;
                letter-spacing: -0.02px;
                text-align: center;
              }
            }
          }
          .doudi-info, .safety-info, .notfafety-info {
            width: 167px;
            height: 205px;
            margin-right: 22px;
          }
          .doudi-info {
            background-image: url('../../assets/imgs/兜底老人.png');
          }
          .safety-info {
            background-image: url('../../assets/imgs/今日未报.png');
          }
          .notfafety-info {
            background-image: url('../../assets/imgs/今日已报.png');
          }
          .activity-info{
            width: 167px;
            height: 205px;
            background-image: url('../../assets/imgs/活动数量.png');
            margin-right: 22px;
          }
          .order-info{
            width: 167px;
            height: 205px;
            background-image: url('../../assets/imgs/订单数量.png');
            margin-right: 22px;
          }
          .transaction-info{
            width: 167px;
            height: 205px;
            background-image: url('../../assets/imgs/交易额.png');
          }
          .info-detail{
            padding-top: 98px;
            .info-warper{
              width: 100%;
              height: 84px;
              .value{
                height: 45px;
                line-height: 45px;
                font-size: 32px;
                color: #FFFFFF;
                letter-spacing: -0.01px;
                text-align: center;
                margin-top: 11px;
              }
              .title{
                height: 43px;
                line-height: 43px;
                font-size: 20px;
                color: #44D7B6;
                letter-spacing: 0;
                text-align: center;
              }
            }
          }
        }
      }

    }
    .info-center{
      width: 1709px;
      height: 994px;
      padding: 26px 32px;
      background-image: url('../../assets/imgs/社区分类Group3.png');
      .chart-items{
        height: 100%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .chart-item{
          width: calc(100% / 3);
          height: calc(50%);
          .chart-title{
            font-size: 24px;
            color: #35E7FF;
            letter-spacing: 5.07px;
            line-height: 40px;
            height: 40px;
            .title-last{
              font-size: 14px;
              color: #35E7FF;
              letter-spacing: 0;
              text-align: center;
              line-height: 20px;
            }
          }
          .chart-content{
            height: calc(100% - 40px);
            width: 100%;
          }
        }
      }
    }
    .info-right{
      width: 410px;
      height: 100%;
      padding: 22px 0 0 25px;
      margin-left: 28px;
      background-image: url('../../assets/imgs/社区分类Group4.png');
      .activity-list{
        width: 100%;
        height: 100%;
        .activity-title{
          font-family: PingFangSC-Medium;
          font-size: 24px;
          color: #35E7FF;
          letter-spacing: 5.07px;
          line-height: 40px;
          height: 40px;
        }
        .activity-list-container{
          height: 800px;
          margin-top: 31px;
          .activity-content{
            display: flex;
            height: 140px;
            width: 100%;
            position: relative;
            &::after{
              content: '';
              width: 361px;
              height: 1px;
              position: absolute;
              bottom: -40px;
              width: 100%;
              right: 21px;
              background-image: url('../../assets/imgs/近期举办活动-分割线.png');
            }
            .img-icon{
              width: 140px;
              height: 140px;
            }
            .activity-info{
               text-align: left;
               width: calc(100% - 140px - 18px);
               height: 140px;
               margin-left: 18px;
              .info-item{
                font-size: 16px;
                color: #F9F9F9;
                letter-spacing: 0;
                line-height: 30px;
                height: 30px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                padding-right: 18px;
              }
              .info-title{
                font-size: 20px;
                color: #FFFFFF;
                letter-spacing: 0;
                height: 28px;
                line-height: 28px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.activity-list-container{
  .swiper-container{
    height: 100%;
  }
  .swiper-wrapper{
    height: 100%;
  }
  .swiper-slide{
    height: 140px!important;
  }
}
</style>
