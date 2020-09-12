<template>
  <div class="community-contanier">
    <div class="community-list-tab">
      <div class="community-item" v-for="(item, index) in communityList" :key="index" :class="{'active-community':index == activeCommunityIndex}" @click="activeCommunityChange(index)">
        <div class="name">{{ item.title }}</div>
      </div>
    </div>
    <div class="community-info">
      <div class="info-left">
        <div class="community-stastics">
          <div class="statics-item">
            <div class="map-img"></div>
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
                <div class="value">{{ communityItem.service_staff_label }}</div>
                <div class="title">{{ communityItem.service_staff }}</div>
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
            <div class="complete-info">
              <div class="content">
                <div class="title">档案信息完善度达<span style="color:#FFE397">{{ communityItem.percentage_complete }}</span>的老人总数</div>
                <div class="value">
                  <span style="font-size: 54px;color: #FFFFFF;letter-spacing: -0.02px;line-height:75px">{{ communityItem.percentage_complete_count }}</span>
                  <span style="font-size: 16px;color: #FFFFFF;letter-spacing: 0;">人</span>
                  <span style="font-size: 18px;color: #44D7B6;letter-spacing: 0;text-align: center;padding-left:16px;">{{ communityItem.percentage_complete_label }}</span></div>
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
      <div class="info-center"></div>
      <div class="info-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Community',
  data() {
    return {
      activeCommunityIndex: 1,
      communityItem: {},
      communityList: []
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
          this.activeCommunityChange(this.activeCommunityIndex)
        }
      })
    },
    activeCommunityChange(index) {
      this.activeCommunityIndex = index
      this.communityItem = this.communityList.find(item => item.index === index)
    }
  }
}
</script>

<style lang="scss">
.community-contanier{
  width: 100%;
  height: 100%;
  padding: 0 59px;
  .community-list-tab{
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 69px;
    justify-content: flex-start;
    border-bottom: 0.5px solid #1257C9;
    margin-top: 17px;
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
        height: 1169px;
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
              margin-top: 24px;
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
        height: 1169px;
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
      width: 1717px;
      height: 994px;
      margin-right: 28px;
      background-image: url('../../assets/imgs/社区分类Group3.png');
    }
    .info-right{
      width: 410px;
      height: 100%;
      background-image: url('../../assets/imgs/社区分类Group4.png');
    }
  }
}
</style>
