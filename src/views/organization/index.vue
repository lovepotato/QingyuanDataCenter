<template>
  <div class="organization-container">
    <div class="organization-left-item">
      <div class="org-base-info">
        <div class="img-box">
          <el-image style="width: 443px; height: 443px" :src=" 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg' || organizationDetail.img"></el-image>
          <div class="org-title">{{ organizationDetail.company }}</div>
        </div>
        <div class="base-info-item">
          <div class="info-content">
            <div class="img-icon name-img"></div>
            <div class="detail-title">联系人</div>
            <div class="detail-value">{{ organizationDetail.name }}</div>
          </div>
          <div class="info-content">
            <div class="img-icon mobile-img"></div>
            <div class="detail-title">联系电话</div>
            <div class="detail-value">{{ organizationDetail.mobile }}</div>
          </div>
          <div class="info-content">
            <div class="img-icon time-img"></div>
            <div class="detail-title">成立时间</div>
            <div class="detail-value">{{ organizationDetail.createorgtime }}</div>
          </div>
          <div class="info-content">
            <div class="img-icon area-img"></div>
            <div class="detail-title">占地面积</div>
            <div class="detail-value">{{ organizationDetail.area }}</div>
          </div>
          <div class="info-content">
            <div class="img-icon type-img"></div>
            <div class="detail-title">机构类型</div>
            <div class="detail-value">{{ organizationDetail.typeStr }}</div>
          </div>
          <div class="info-content">
            <div class="img-icon nature-img"></div>
            <div class="detail-title">机构性质</div>
            <div class="detail-value">{{ organizationDetail.natureStr }}</div>
          </div>
          <div class="info-content">
            <div class="img-icon medical-img"></div>
            <div class="detail-title">医养结合</div>
            <div class="detail-value">{{ organizationDetail.isMedicalOfProvide }}</div>
          </div>
          <div class="info-content">
            <div class="img-icon charge-img"></div>
            <div class="detail-title">收费区间</div>
            <div class="detail-value">{{ organizationDetail.charge }}</div>
          </div>
        </div>
      </div>
      <div class="org-bed-info">
        <div class="bed-item">
          <div class="value">{{ organizationDetail.bedNum }}</div>
          <div class="title">床位数量</div>
        </div>
        <div class="bed-item">
          <div class="value">{{ organizationDetail.inbed }}</div>
          <div class="title">使用数量</div>
        </div>
        <div class="bed-item">
          <div class="value">{{ organizationDetail.leisurebed }}</div>
          <div class="title">空闲数量</div>
        </div>
        <div class="bed-item">
          <div class="value">{{ organizationDetail.inrate }}</div>
          <div class="title">入住率</div>
        </div>
      </div>
      <div class="org-staff-info">
        <div class="staff-content">
          <div class="value">{{ organizationDetail.staffNum }}</div>
          <div class="title">员工总数</div>
        </div>
        <div class="staff-content">
          <div class="value">{{ organizationDetail.nurse }}</div>
          <div class="title">护理人员</div>
        </div>
        <div class="staff-content">
          <div class="value">{{ organizationDetail.nurserate }}</div>
          <div class="title">人护比</div>
        </div>
        <div class="staff-content">
          <div class="value">{{ organizationDetail.nowin }}</div>
          <div class="title">今日入住</div>
        </div>
        <div class="staff-content">
          <div class="value">{{ organizationDetail.nowleave }}</div>
          <div class="title">今日请假</div>
        </div>
        <div class="staff-content">
          <div class="value">{{ organizationDetail.nowout }}</div>
          <div class="title">今日离院</div>
        </div>
      </div>
    </div>
    <div class="organization-center-item">
      <div class="chart-items">
        <div class="chart-title">在住老人年龄分布</div>
        <div class="chart-item">
          <pie-chart :data="oldmanageData" :option="oldmanageOption" v-if="oldmanageData"></pie-chart>
        </div>
      </div>
      <div class="chart-items">
        <div class="chart-title">在住老人能力等级分布</div>
        <div class="chart-item">
          <pie-chart :data="abilityLeaveData" :option="bilityLeaveOption" v-if="abilityLeaveData"></pie-chart>
        </div>
      </div>
    </div>
    <div class="organization-right-item">
      <div class="btn-item" :class="[pageParams.currentPage === 1 ? 'disable-pre': 'pre-btn']" @click="preOldmanPage"></div>
      <div class="btn-item" :class="[pageParams.currentPage === oldmanTotalPage ? 'disable-next': 'next-btn']" @click="nextOldmanPage"></div>
      <div class="oldman-list">
        <div class="oldman-item" v-for="(manitem, index) in oldmanList" :key="index" @click="showDtailPanel(manitem)">
          <div class="oldman-base-info">
            <div class="info-img">
              <el-avatar :size="85" shape="circle" :src="manitem.image"></el-avatar>
            </div>
            <div class="info-content">
              <div class="info-top"><span class="name">{{ manitem.realname }}</span><span class="gender">{{ manitem.gender }}</span><span class="age">{{ manitem.age }}</span></div>
              <div class="info-bottom">
                <div class="bed-img"></div>
                <div class="bed-number">{{ manitem.bedNo }}</div>
              </div>
            </div>
          </div>
          <div class="oldman-detail-info">
            <div class="detail-info-item">
              <div class="detail-item left">
                <div class="title">入住日期</div>
                <div class="value">{{ manitem.intime }}</div>
              </div>
              <div class="detail-item right">
                <div class="title">能力等级</div>
                <div class="value">{{ manitem.ability }}</div>
              </div>
            </div>
            <div class="detail-info-item">
              <div class="detail-item left">
                <div class="title">医保类型</div>
                <div class="value">{{ manitem.healthType }}</div>
              </div>
              <div class="detail-item right">
                <div class="title">健康状况</div>
                <div class="value">{{ manitem.healthStatus }}</div>
              </div>
            </div>
            <div class="detail-info-item">
              <div class="signle-title">现病史</div>
              <div class="value-list">
                <div class="illness-item" v-for="(illitem, illIndex) in manitem.illList" :key="illIndex">{{ illitem }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pieChart from '../../components/charts/pieChart'
import { deepClone } from '../../utils/index'
export default {
  name: 'Organization',
  components: { pieChart },
  data() {
    return {
      organizationDetail: {},
      oldmanageData: [],
      abilityLeaveData: [],
      oldmanageOption: {
        color: ['#665BFF', '#EDAE5D ', '#F7F100', '#FD5D5D', '#C431FF']
      },
      bilityLeaveOption: {
        color: ['#1DBFFF', '#2AFFCF', '#C1F700', '#FF9132']
      },
      oldmanList: [],
      pageParams: {
        currentPage: 1,
        limit: 9
      },
      oldmanTotalPage: 0
    }
  },
  created() {
    this.getOldmanList()
  },
  mounted() {
    this.getOrganizationData()
  },
  methods: {
    getOrganizationData() {
      this.http.post(`/cloudlivemanage/statistics`).then(({ data, code }) => {
        if (code === 0) {
          this.organizationDetail = data.orgDetail
          this.oldmanageData = data.oldmanage_data
          this.abilityLeaveData = data.ability_leave_data
        }
      })
    },
    getOldmanList() {
      this.http.post(`/cloudlivemanage/oldmanlist`, this.pageParams).then(({ data, code }) => {
        if (code === 0) {
          this.oldmanList = data.dataList
          this.oldmanTotalPage = data.totalPages
          this.oldmanList = this.oldmanList.map(item => {
            return {
              ...item,
              illList: this.getIllnessList(item.illness)
            }
          })
        }
      })
    },
    getIllnessList(illStr) {
      let illnessList = []
      if (illStr) illnessList = illStr.split(',')
      illnessList = illnessList.length > 3 ? illnessList.splice(0, 3).concat(['...']) : illnessList
      console.log(illnessList)
      if (illnessList.length === 0) illnessList = ['无']
      return illnessList
    },
    nextOldmanPage() {
      const next = this.pageParams.currentPage + 1
      if (next > this.oldmanTotalPage) {
        return
      } else {
        this.pageParams.currentPage = next
        this.getOldmanList()
      }
    },
    preOldmanPage() {
      const pre = this.pageParams.currentPage - 1
      if (pre > 0) {
        this.pageParams.currentPage = pre
        this.getOldmanList()
      }
    },
    showDtailPanel(detailItem) {
      this.$bus.$emit('showAgedDetail', {
        id: ''
      })
    }
  }

}
</script>

<style lang="scss">
.organization-container{
  width: 100%;
  height: 100%;
  display: flex;
  padding: 17px 58px 0 41px;
  .organization-left-item{
    width: 912px;
    height: 1083px;
    background-image: url('../../assets/imgs/机构页面Group1.png');
    margin-right: 36px;
    padding: 26px 41px;
    .org-base-info{
      height: 480px;
      width: 100%;
      display: flex;
      .img-box{
        width: 443px;
        height: 443px;
        margin: auto 0;
        margin-right: 43px;
        position: relative;
        .org-title{
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 69px;
          line-height: 69px;
          font-size: 30px;
          color: #FFFFFF;
          letter-spacing: 1.5px;
          background: rgba(0,41,193,0.65);
          text-align: center;
        }
      }
      .base-info-item{
        height: 480px;
        width: calc(100% - 443px - 43px);
        .info-content{
          font-size: 20px;
          line-height: 60px;
          display: flex;
          letter-spacing: 0;
          text-align: left;
          .img-icon{
            width: 16px;
            height: 16px;
            margin-right: 25.9px;
            margin-top: 22px;
            &.name-img{
              background-image: url('../../assets/imgs/lianxiren.png');
            }
            &.mobile-img{
              background-image: url('../../assets/imgs/lianxiren.png');
            }
            &.time-img{
              background-image: url('../../assets/imgs/shijian.png');
            }
            &.area-img{
              background-image: url('../../assets/imgs/mianji.png');
            }
            &.type-img{
              background-image: url('../../assets/imgs/leixing.png');
            }
            &.nature-img{
              background-image: url('../../assets/imgs/xingzhi.png');
            }
            &.medical-img{
              background-image: url('../../assets/imgs/yiyangjiehe2.png');
            }
            &.charge-img{
              background-image: url('../../assets/imgs/shoufeiqujian.png');
            }
          }
          .detail-title{
            height: 60px;
            width: 80px;
            line-height: 60px;
            color: #32C5FF;
            margin-right: 28px;
          }
          .detail-value{
            height: 60px;
            width: 80px;
            line-height: 60px;
            color: #FFFFFF;
            width: calc(100% - 28px - 80px - 25.9px - 16px);
          }
        }
      }
    }
    .org-bed-info{
      height: 142px;
      width: 821px;
      background-image: url('../../assets/imgs/机构页面框1.png');
      margin-top: 33px;
      padding: 22px;
      display: flex;
      .bed-item{
        width: 203px;
        height: 92px;
        .value{
          font-size: 32px;
          color: #FFFFFF;
          letter-spacing: 0;
          text-align: center;
          height: 45px;
          line-height: 45px;
        }
        .title{
          height: 28px;
          line-height: 28px;
          font-size: 20px;
          color: #35E7FF;
          letter-spacing: 0;
          text-align: center;
          margin-top: 19px;
        }
      }
    }
    .org-staff-info{
      width: 820px;
      height: 326px;
      display: flex;
      flex-wrap: wrap;
      margin-top: 43px;
      .staff-content{
        width: 256px;
        height: 142px;
        margin-bottom: 42px;
        margin-right: 26px;
        padding-top: 25px ;
        background-image: url('../../assets/imgs/机构页面2.png');
        &:nth-child(3n){
          margin-right: 0;
        }
        .value{
          height: 45px;
          line-height: 45px;
          font-size: 32px;
          color: #FFFFFF;
          letter-spacing: 0;
          text-align: center;
        }
        .title{
          margin-top: 19px;
          height: 28px;
          line-height: 28px;
          font-size: 20px;
          color: #35E7FF;
          letter-spacing: 0;
          text-align: center;
        }
      }
    }
  }
  .organization-center-item{
    width: 573px;
    height: 1081px;
    background-image: url('../../assets/imgs/机构页面Group2.png');
    margin-right: 36px;
    padding:32px 46px;
    .chart-items{
      width: 100%;
      height: 50%;
      .chart-title{
        height: 40px;
        line-height: 40px;
        width: 100%;
        text-align: left;
        font-size: 24px;
        color: #35E7FF;
        letter-spacing: 5.07px;
      }
      .chart-item{
        width: 100%;
        height: calc(100% - 40px);
      }
    }
  }
  .organization-right-item{
    width: calc(100% -  912px - 36px - 573px - 36px);
    height: 1078px;
    padding: 0 55px;
    position: relative;
    .btn-item{
      width: 24px;
      height: 37px;
      top: 50%;
      position: absolute;
      cursor: pointer;
      &.pre-btn{
        left: 12px;
        background-image: url('../../assets/imgs/jiantou-可点击.png');
        transform:rotate(180deg);
      }
      &.disable-pre{
        background-image: url('../../assets/imgs/jiantou-不可点击.png');
        left: 12px;
        cursor: no-drop;
      }
      &.next-btn{
        right: 12px;
        background-image: url('../../assets/imgs/jiantou-可点击.png');
      }
       &.disable-next{
          background-image: url('../../assets/imgs/jiantou-不可点击.png');
          transform:rotate(180deg);
          right: 12px;
          cursor: no-drop;
        }
    }
    .oldman-list{
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      .oldman-item{
        width: 533px;
        height: 344px;
        background-image: url('../../assets/imgs/机构页面框3.png');
        margin-right: 42px;
        margin-bottom: 23px;
        padding: 40px 37px;
        cursor: pointer;
        &:nth-child(3n){
          margin-right: 0;
        }
        .oldman-base-info{
          height: 74px;
          width: 100%;
          display: flex;
          .info-img{
            height: 85px;
            width: 85px;
            margin-right: 26px;
          }
          .info-content{
            width: calc(100% - 85px);
            .info-top{
              width: 100%;
              height: 30px;
              line-height: 30px;
              font-size: 22px;
              color: #FFFFFF;
              letter-spacing: 0;
              text-align: left;
              .name{
                width: 66px;
              }
              .gender{
                width: 122px;
                text-align: center;
                padding-left: 44px;
                padding-right: 53px;
              }
              .age{
                width: 80px;
              }
            }
            .info-bottom{
              width: 100%;
              height: 28px;
              line-height: 28px;
              display: flex;
              font-size: 20px;
              color: #F9F9F9;
              margin-top: 26px;
              .bed-img{

              }
            }
          }
        }
        .oldman-detail-info{
          height: 133px;
          margin-top: 46px;
          width: 100%;
          .detail-info-item{
            height: 44px;
            line-height: 44px;
            width: 100%;
            font-size: 18px;
            color: #32C5FF;
            letter-spacing: 0;
            line-height: 25px;
            display: flex;
            &:last-child{
              margin-top: 7px;
            }
            .detail-item{
              width: calc(50%);
              height: 44px;
              display: flex;
              font-size: 18px;
              &.left{
                margin-right: 73px;
              }
              .title{
                width: 72px;
                height: 44px;
                line-height: 44px;
                color: #32C5FF;
              }
              .value{
                width: calc(100% - 72px);
                height: 44px;
                line-height: 44px;
                text-align: left;
                color: #fff;
                padding-left: 12px;
              }
            }
            .signle-title{
              width: 72px;
              height: 44px;
              text-align: left;
              color: #32C5FF;
              line-height: 44px;
            }
            .value-list{
              display: flex;
              justify-content: space-between;
              .illness-item{
                border: 1px solid #44D7B6;
                border-radius: 8px;
                color: #44D7B6;
                width: auto;
                height: 38px;
                line-height: 38px;
                padding: 0 13px 0 13px;
                margin-right: 12px;
                &:last-child{
                  margin-right: 0;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
