<template>
  <div class="volunteer-container">
    <div class="count-list-box">
      <div class="count-item" v-for="(countItem, index) in voluteerData.countList" :key="index">
        <div class="count-value">{{ countItem.value }}</div>
        <div class="count-name">{{ countItem.name }}</div>
      </div>
    </div>
    <div class="community-container">
      <div class="community-list">
        <vue-scroll :ops="ops">
          <div class="list-item" v-for="(communityItem, index) in voluteerData.communityList" :key="index" @click="activeCommunityChange(communityItem.id)" :class="{'active-community' : communityItem.id === activeCommunityId}">
            <div class="community-title community-item">{{ communityItem.title }}</div>
            <div class="community-org-count community-item">{{ communityItem.number }}个组织</div>
            <div class="arrow-item">></div>
          </div>
        </vue-scroll>
      </div>
      <div class="org-list">
        <div class="list-item" v-for="(orgItem, index) in orgDetail.organizationList" :key="index">
          <div class="list-base-info">
            <div class="list-img">
              <el-image :src="orgItem.img" style="width: 100%; height: 100%" fit="fit"></el-image>
            </div>
            <div class="list-info-content">
              <div class="top-info">
                <div class="info-warper">
                  <div class="info-item img-icon" :class="[orgInfoArray[0].iconName]"></div>
                  <div class="info-item item-title">{{ orgInfoArray[0].title }}</div>
                  <div class="info-item item-value">{{ orgItem[orgInfoArray[0].key] }}</div>
                </div>
                <div class="info-warper">
                  <div class="info-item img-icon" :class="[orgInfoArray[1].iconName]"></div>
                  <div class="info-item item-title">{{ orgInfoArray[1].title }}</div>
                  <div class="info-item item-value">{{ orgItem[orgInfoArray[1].key] }}</div>
                </div>
                <div class="info-warper">
                  <div class="info-item img-icon" :class="[orgInfoArray[2].iconName]"></div>
                  <div class="info-item item-title">{{ orgInfoArray[2].title }}</div>
                  <div class="info-item item-value">{{ orgItem[orgInfoArray[2].key] }}</div>
                </div>
              </div>
              <div class="bottom-info">{{ orgItem.content }}</div>
            </div>
          </div>
          <div class="count-list">
            <div class="count-item" v-for="(item, sindex) in orgItem.countList" :key="sindex + 'count'">
              <div class="item-value">{{ item.value }}</div>
              <div class="item-title">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="activity-content">
        <div class="activity-chart">
          <div class="activity-title">
            <div class="title">举办活动类型分布</div>
          </div>
          <div class="chart-item">
            <pie-chart :data="orgDetail.activityCategoryList" :option="activityCategoryOption"></pie-chart>
          </div>
        </div>
        <div class="activity-list">
          <div class="activity-title">
            <div class="title">近期举办活动</div>
          </div>
          <div class="activity-items">
            <vue-scroll :ops="ops">
              <div class="activity-item" v-for="(activityItem, index) in orgDetail.activityLastList" :key="index">
                <div class="item-name" :class="{'hot-activity' : index < 3}">{{ activityItem.name }}</div>
                <div class="item-time">{{ activityItem.value }}</div>
              </div>
            </vue-scroll>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pieChart from '../../components/charts/pieChart'
export default {
  name: 'Volunteer',
  components: {
    pieChart
  },
  data() {
    return {
      voluteerData: {},
      activeCommunityId: '',
      orgDetail: {},
      orgInfoArray: [{ iconName: 'lianxiren', title: '联系人', key: 'contacts' }, { iconName: 'dianhua', title: '联系电话', key: 'mobile' }, { iconName: 'dizhi', title: '联系地址', key: 'address' }],
      activityCategoryOption: {
        color: ['#FD5D5D', '#32C5FF', '#FFD972 ']
      },
      ops: {
        scrollPanel: {
          scrollingX: false
        },
        bar: {
          background: '#3A61CB'
        }
      }
    }
  },
  mounted() {
    this.getVoluteerData()
  },
  methods: {
    getVoluteerData() {
      this.http.post(`/commandcentre/publicwelfareorganization/community`).then(({ data, code }) => {
        if (code === 0) {
          this.voluteerData = data
          this.activeCommunityChange(142)
        }
      })
    },
    activeCommunityChange(id) {
      this.activeCommunityId = id
      this.getOrgList(id)
    },
    getOrgList(id) {
      this.http.post(`/commandcentre/publicwelfareorganization/community/org`, { id }).then(({ data, code }) => {
        if (code === 0) {
          this.orgDetail = data
        }
      })
    }

  }
}
</script>

<style lang="scss" scoped>
.volunteer-container{
  width: 100%;
  height: 100%;
  .count-list-box{
    height: 112px;
    width: 100%;
    margin: 23px 0 28px 0;
    display: flex;
    justify-content: center;
    .count-item{
      height: 98px;
      width: 422px;
      position: relative;
      &::after{
        content: '';
        width: 3px;
        height: 98px;
        position: absolute;
        background-image: url('../../assets/imgs/分割线.png');
        right: 0;
        top: 0;
      }
      &:last-child::after{
        display: none;
      }
      .count-value{
        height: 63px;
        line-height: 63px;
        width: 100%;
        font-size: 45px;
        color: #FFFFFF;
        letter-spacing: -0.02px;
        text-align: center;
        margin-bottom: 6px;
      }
      .count-name{
        height: 37px;
        line-height: 37px;
        width: 100%;
        font-size: 26px;
        color: #35E7FF;
        letter-spacing: -0.02px;
        text-align: center;
      }
    }
  }
  .community-container{
    height: calc(100% - 112px - 23px - 28px);
    width: 100%;
    display: flex;
    .community-list{
      height: 100%;
      width: 355px;
      background: #032F8C;
      margin-right: 47px;
      .list-item{
        width: 100%;
        height: 69px;
        line-height: 69px;
        display: flex;
        position: relative;
        .arrow-item{
          color: rgb(0, 121, 219);
          position: absolute;
          width: 7px;
          visibility: hidden;
          height: 13px;
          line-height: 13px;
          top: 28px;
          right: 32px;
        }
        cursor: pointer;
        .community-item{
          text-align: left;
          font-size: 18px;
          color: rgb(0, 121, 219);
          letter-spacing: 0;
          width: 50%;
          &.community-title{
            font-weight: bold;
            font-size: 20px;
            color: rgb(0, 145, 255);
            padding-left:54px ;
          }
          &.community-org-count{
            padding-left: 41px;
          }
        }
        &.active-community{
          .community-item{
            background: #0b45bd;
            color: #fff;
          }
          .arrow-item{
            visibility: visible;
          }
        }
        &:hover{
          .community-item ,.community-title{
            color: #fff!important;
            background: #0b45bd!important;
          }
          .arrow-item{
             visibility: visible;
          }
        }
      }
    }
    .org-list{
      width: 2364px;
      height: 100%;
      display: flex;
      .list-item{
        width: 762px;
        height: 451px;
        padding: 36px 29px;
        background-image: url('../../assets/imgs/公益组织框2.png');
        .list-base-info{
          width: 100%;
          height: 220px;
          display: flex;
          .list-img{
            width: 220px;
            height: 220px;
            margin-right: 25px;
          }
          .list-info-content{
            height: 220px;
            width: calc(100% - 220px);
            .top-info{
              height: 138px;
              .info-warper{
                display: flex;
              }
              .info-item{
                font-size: 18px;
                letter-spacing: 0;
                line-height: 46px;
                height: 46px;
                &.img-icon{
                  height: 16px;
                  width: 16px;
                  margin-right: 11px;
                  margin-top: 15px;
                  &.lianxiren{
                     background-image: url('../../assets/imgs/lianxiren.png');
                  }
                  &.dianhua{
                    background-image: url('../../assets/imgs/dianhua.png');
                  }
                  &.dizhi{
                    background-image: url('../../assets/imgs/dizhi.png');
                  }
                }
                &.item-title{
                  color: #32C5FF;
                  margin-right: 20px;
                  text-align: left;
                  width: 72px;
                }
                &.item-value{
                  color: #fff;
                  text-align: left;
                }
              }
            }
            .bottom-info{
              width: 100%;
              height: 65px;
              font-size: 18px;
              line-height: 1.8em;
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              // text-indent: 25px;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              margin-top: 20px;
              color: #fff;
            }
          }
        }
        .count-list{
          width: 703px;
          height: 122px;
          display: flex;
          padding: 20px 0;
          background-image: url('../../assets/imgs/公益组织框1.png');
          margin-top: 36px;
          .count-item{
            width: 183px;
            height: 122px;
            text-align: center;
            .item-value{
              font-size: 32px;
              color: #FFFFFF;
              letter-spacing: -0.01px;
              height: 45px;
              line-height: 45px;
              margin-bottom: 10px;
            }
            .item-title{
              height: 28px;
              line-height: 28px;
              width: 100%;
              font-size: 20px;
              color: #0091FF;
              letter-spacing: 0;
            }
          }
        }
      }
    }
    .activity-content{
      width: 582px;
      height: 100%;
      .activity-chart{
        height: 50%;
        width: 100%;
      }
      .activity-list{
        height: 50%;
        width: 100%;
        .activity-items{
          width: 582px;
          height: 348px;
          margin-top: 22px;
          .activity-item{
            height: 58px;
            line-height: 58px;
            display: flex;
            width: 100%;
            position: relative;
            &::after{
              content: '';
              width: 582px;
              height: 1px;
              position: absolute;
              bottom: 0;
              left: 0;
              background-image: url('../../assets/imgs/近期举办活动-分割线.png');
            }
            &:last-child::after{
              display: none;
            }
            .item-name{
              height: 58px;
              font-size: 20px;
              color: #FFFFFF;
              letter-spacing: 0;
              line-height: 58px;
              width: calc(100% - 176px);
              text-align: left;
              padding-left: 38px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              &.hot-activity{
                &::before{
                  width: 20px;
                  height: 28px;
                  background-image: url('../../assets/imgs/remen.png');
                  position: absolute;
                  top: 15px;
                  left: 0;
                  content: '';
                }
              }
            }
            .item-time{
              width: 176px;
              height: 58px;
              font-size: 20px;
              color: #32C5FF;
              letter-spacing: 0;
              text-align: right;
              line-height: 58px;
            }
          }
        }
      }
      .activity-title{
          width: 518px;
          height: 68px;
          background-image: url('../../assets/imgs/公益祖师框2.png');
          padding-left: 59px;
          .title{
            height: 68px;
            line-height: 68px;
            font-size: 24px;
            color: #35E7FF;
            letter-spacing: 5.07px;
            line-height: 68px;
          }
        }
        .chart-item{
          height: calc(100% - 68px);
          width: 100%;
        }
    }
  }
}
</style>
