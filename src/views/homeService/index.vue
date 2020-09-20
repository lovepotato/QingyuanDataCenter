<template>
  <div class="homeService-container-box" v-if="pageModel.countList">
    <div class="left-contaier">
      <div class="homeService-map"></div>
      <div class="homeService-info-number">
        <div class="info-item">
          <div class="info-value">{{pageModel.countList[0].value}}</div>
          <div class="info-label">{{pageModel.countList[0].name}}</div>
        </div>
        <div class="info-item">
          <div class="info-value">{{pageModel.countList[1].value}}</div>
          <div class="info-label">{{pageModel.countList[1].name}}</div>
        </div>
        <div class="info-item">
          <div class="info-value">{{pageModel.countList[2].value}}</div>
          <div class="info-label">{{pageModel.countList[2].name}}</div>
        </div>
        <div class="info-item">
          <div class="info-value">{{pageModel.countList[3].value}}</div>
          <div class="info-label">{{pageModel.countList[3].name}}</div>
        </div>
        <div class="info-item">
          <div class="info-value">{{pageModel.countList[4].value}}</div>
          <div class="info-label">{{pageModel.countList[4].name}}</div>
        </div>
      </div>
      <div class="homeService-info-number">
        <div class="info-item">
          <div class="info-value">{{pageModel.countList[5].value}}</div>
          <div class="info-label">{{pageModel.countList[5].name}}</div>
        </div>
        <div class="info-item">
          <div class="info-value">{{pageModel.countList[6].value}}</div>
          <div class="info-label">{{pageModel.countList[6].name}}</div>
        </div>
        <div class="info-item">
          <div class="info-value">{{pageModel.countList[7].value}}</div>
          <div class="info-label">{{pageModel.countList[7].name}}</div>
        </div>
        <div class="info-item">
          <div class="info-value">{{pageModel.countList[8].value}}</div>
          <div class="info-label">{{pageModel.countList[8].name}}</div>
        </div>
        <div class="info-item">
          <div class="info-value">{{pageModel.countList[9].value}}</div>
          <div class="info-label">{{pageModel.countList[9].name}}</div>
        </div>
      </div>
      <div class="homeService-info-wait">
        <div class="info-item">
          <div class="info-value">{{pageModel.countList[10].value}}</div>
          <div class="info-label">{{pageModel.countList[10].name}}</div>
        </div>
        <div class="info-item">
          <div class="info-value">{{pageModel.countList[11].value}}</div>
          <div class="info-label">{{pageModel.countList[11].name}}</div>
        </div>
        <div class="info-item">
          <div class="info-value">{{pageModel.countList[12].value}}</div>
          <div class="info-label">{{pageModel.countList[12].name}}</div>
        </div>
        <div class="info-item">
          <div class="info-value">{{pageModel.countList[13].value}}</div>
          <div class="info-label">{{pageModel.countList[13].name}}</div>
        </div>
        <div class="info-item">
          <div class="info-value">{{pageModel.countList[14].value}}</div>
          <div class="info-label">{{pageModel.countList[14].name}}</div>
        </div>
        <div class="info-item">
          <div class="info-value">{{pageModel.countList[15].value}}</div>
          <div class="info-label">{{pageModel.countList[15].name}}</div>
        </div>
      </div>
    </div>
    <div class="middle-contaier">
      <div class="homeService-map"></div>
      <div class="middle-down-main">
        <div class="homeService-category">
          <div class="info-number">
            <div class="info-item">
              <div class="info-value">{{pageModel.serviceCategoryCount.value}}</div>
              <div class="info-label">{{pageModel.serviceCategoryCount.name}}</div>
            </div>
            <div class="info-item">
              <div class="info-value">{{pageModel.serviceItemCount.value}}</div>
              <div class="info-label">{{pageModel.serviceItemCount.name}}</div>
            </div>
          </div>

          <div class="info-category-list" v-if="pageModel.serviceCategoryList">
            <div
              class="category-name"
              v-for="(item,index) in pageModel.serviceCategoryList"
              :key="index"
            >{{item.name}}({{item.value}})</div>
          </div>
        </div>

        <div class="homeService-service-rank">
          <div class="service-rank-title">热门服务排行</div>

          <div
            class="service-rank-list"
            v-for="(item,index) in pageModel.serviceHotRank"
            :key="index"
          >
            <span :class="'rank-icon icon-num'+(index+1)" v-if="index<3"></span>

            <span class="rank-icon" v-if="index>=3">
              <span class="icon-num">{{index+1}}</span>
            </span>

            <span class="service-name">{{item.name}}</span>
            <span class="service-num">{{item.value}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="right-contaier">
      <div class="homeService-frequency-ranking">
        <div class="frequency-ranking-title">
          服务次数排行榜
          <span class="fontsize-s">（TOP8）</span>
        </div>
        <div class="frequency-ranking-map">
          <div id="charts_bar_1" :style="{width: '100%', height: '400px'}"></div>
        </div>
      </div>
      <div class="homeService-service-record">
        <div class="service-record-title">最近服务记录</div>

        <el-carousel
          height="518px"
          indicator-position="none"
          :interval="this.carouselInterval"
          direction="vertical"
        >
          <el-carousel-item v-for="itemIndex in serviceNum" :key="itemIndex">
            <div
              class="service-record-list"
              v-for="(item, index) in Array.from(serviceModel).slice((itemIndex-1)*3,itemIndex*3)"
              :key="index"
            >
              <div class="homeService-photo">
                <img :src="imgPreUrl+item.img" width="100%" />
              </div>
              <div class="homeService-information">
                <div class="name">
                  <span>{{item.name}}</span>
                  <span>{{item.gender}}</span>
                  <span>{{item.age}}岁</span>
                  <span class="icon-tag icon-advanced-age" v-if="item.tag && item.tag=='高龄'"></span>
                  <span class="icon-tag icon-empty-nest" v-if="!item.tag"></span>
                </div>
                <div>{{item.address}}</div>
                <div class="content">
                  <span>服务内容</span>
                  <span class="project">{{item.service}}</span>
                </div>
              </div>
              <div class="homeService-state">
                <div>工作状态</div>
                <div class="icon-work work-waiting" v-if="item.process[0].active"></div>
                <div class="icon-work work-inservice" v-if="item.process[1].active"></div>
                <div class="icon-work work-complete" v-if="item.process[2].active"></div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  components: {},
  name: 'homeService',
  data() {
    return {
      pageModel: {},
      serviceModel: [],
      serviceNum: 0,
    }
  },
  mounted() {

  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.http
        .post(`/commandcentre/homebasedcareservice/count`)
        .then((res) => {
          if (res.code === 0) {
            this.pageModel = res.data
          }
        })
        .then(res => {
          const axisData = Array.from(this.pageModel.businessServiceCountRank).map((w) => w.name+'')
          const seriesData = Array.from(this.pageModel.businessServiceCountRank).map((w) => w.value)
          this.drawBar('1', axisData, seriesData)
        })

      this.http
        .post(`/commandcentre/homebasedcareservice/lastserviceorder`)
        .then((res) => {
          if (res.code === 0) {
            this.serviceModel = res.data

            this.serviceNum = Math.ceil(Array.from(res.data).length / 3);
          }
        })
    },
    drawBar(id, axisData, seriesData) {
      const chartsBar = this.$echarts.init(document.getElementById('charts_bar_' + id))
      chartsBar.clear();
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          backgroundColor: ['#172F6A'],
          borderColor: ['#35E7FF'],
          borderWidth: 1,
          trigger: 'axis'
        },
        grid: {
          top: 20,
          left: 120,
          right: 60
        },
        color: ['#0091FF'],
        xAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              width: 0,
              color: '#32C5FF'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#32C5FF',
            fontSize: 16
          },
          splitLine: {
            lineStyle: {
              color: '#32C5FF',
              type: 'dashed',
              width: 1
            }
          },
          offset: 0
        },
        yAxis: {
          data: axisData,
          type: 'category',
          
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              width: 0,
              color: '#32C5FF'
            }
          },
          axisLabel: {
            color: '#ffffff',
            fontSize: 16,
            margin: 8,
            formatter: function (params) {
              var val = "";
              if (params.length > 6) {
                val = params.substr(0, 6) + '...';
                return val;
              } else {
                return params;
              }
            }
          },


          offset: 0
        },
        series: [{
          data: seriesData,
          type: 'bar',
          barWidth: 23,
          label: {
            show: true,
            position: 'right',
            color: '#ffffff',
            fontSize: 18
          },
        }]
      };
      chartsBar.setOption(option);
    }
  },
  watch: {

  }
}
</script>


<style lang="scss">
.homeService-container-box {
  width: 100%;
  height: 100%;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  .left-contaier {
    .homeService-map {
      width: 1037px;
      height: 528px;
      background-image: url("../../assets/imgs/居家上门服务Group1.png");
      background-position: 100% 100%;
      background-repeat: no-repeat;
    }
    .homeService-info-number {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      .info-item {
        width: 191px;
        height: 150px;
        padding-top: 35px;
        font-size: 32px;
        text-align: center;
        background-image: url("../../assets/imgs/居家上上门服务框2.png");
        background-position: 100% 100%;
        background-repeat: no-repeat;
        .info-value {
          font-size: 32px;
          color: #ffffff;
        }
        .info-label {
          font-size: 21px;
          color: #35e7ff;
          margin-top: 20px;
        }
      }
    }
    .homeService-info-wait {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      background-image: url("../../assets/imgs/居家上门服务框1.png");
      background-position: 100% 100%;
      background-repeat: no-repeat;
      .info-item {
        width: 100%;
        height: 150px;
        padding-top: 35px;
        font-size: 32px;
        text-align: center;
        .info-value {
          font-size: 32px;
          color: #ffffff;
        }
        .info-label {
          font-size: 21px;
          color: #35e7ff;
          margin-top: 20px;
        }
      }
    }
  }
  .middle-contaier {
    .homeService-map {
      width: 1535px;
      height: 528px;
      background-image: url("../../assets/imgs/居家上门服务Group2.png");
      background-position: 100% 100%;
      background-repeat: no-repeat;
    }
    .middle-down-main {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      .homeService-category {
        width: 1037px;
        height: 525px;
        padding: 40px;
        background-image: url("../../assets/imgs/居家上门服务Group1.png");
        background-position: 100% 100%;
        background-repeat: no-repeat;
        .info-number {
          display: flex;
          justify-content: space-between;
          .info-item {
            width: 452px;
            height: 150px;
            padding-top: 30px;
            font-size: 32px;
            text-align: center;
            background-image: url("../../assets/imgs/居家上门服务框3.png");
            background-position: 100% 100%;
            background-repeat: no-repeat;
            .info-value {
              font-size: 32px;
              color: #ffffff;
            }
            .info-label {
              font-size: 21px;
              color: #35e7ff;
              margin-top: 30px;
            }
          }
        }
        .info-category-list {
          display: flex;
          flex-wrap: wrap;
          text-align: center;
          line-height: 108px;
          font-size: 26px;
          color: #fff;
          .category-name {
            width: 220px;
            height: 108px;
            margin-right: 25px;
            margin-top: 30px;
            background-image: url("../../assets/imgs/居家上门服务框4.png");
            background-position: 100% 100%;
            background-repeat: no-repeat;
          }
          .category-name:nth-child(4n) {
            margin-right: 0;
          }
        }
      }
      .homeService-service-rank {
        overflow: hidden;
        width: 475px;
        height: 525px;
        padding: 40px;
        background-image: url("../../assets/imgs/居家上门服务Group3.png");
        background-position: 100% 100%;
        background-repeat: no-repeat;
        .service-rank-title {
          font-size: 26px;
          color: #35e7ff;
          letter-spacing: 5px;
          margin-bottom: 20px;
        }
        .service-rank-list {
          padding: 20px 0 5px 0;
          font-size: 22px;
          color: #ffffff;
          display: flex;
          justify-content: space-between;
          .rank-icon {
            width: 40px;
            height: 25px;
            font-size: 14px;
            text-align: center;
            .icon-num {
              width: 20px;
              height: 20px;
              display: grid;
              background: #224485;
              border-radius: 100%;
              line-height: 20px;
              margin-top: 3px;
            }
          }
          .icon-num1 {
            background-image: url("../../assets/imgs/第一.png");
            background-repeat: no-repeat;
          }
          .icon-num2 {
            background-image: url("../../assets/imgs/第二.png");
            background-repeat: no-repeat;
          }
          .icon-num3 {
            background-image: url("../../assets/imgs/第三.png");
            background-repeat: no-repeat;
          }
          .service-name {
            width: 320px;
            text-align: left;
          }
          .service-num {
            color: #32c5ff;
          }
        }
      }
    }
  }
  .right-contaier {
    .homeService-frequency-ranking {
      width: 713px;
      height: 528px;
      background-image: url("../../assets/imgs/居家上门服务Group5.png");
      background-position: 100% 100%;
      background-repeat: no-repeat;
      padding: 40px;
      .frequency-ranking-title {
        font-size: 26px;
        color: #35e7ff;
        letter-spacing: 5px;
        margin-bottom: 20px;
        .fontsize-s {
          font-size: 14px;
        }
      }
      .frequency-ranking-map {
        padding-top: 20px;
      }
    }
    .homeService-service-record {
      width: 713px;
      height: 525px;
      background-image: url("../../assets/imgs/居家上门服务Group5.png");
      background-position: 100% 100%;
      background-repeat: no-repeat;
      margin-top: 40px;
      padding: 40px;
      .service-record-title {
        font-size: 26px;
        color: #35e7ff;
        letter-spacing: 5px;
        margin-bottom: 20px;
      }
      .service-record-list {
        border-bottom: #34a6d2 1px solid;
        display: flex;
        color: #fff;
        padding: 20px 0;
        .homeService-photo {
          width: 60px;
          height: 60px;
          img {
            border-radius: 100%;
          }
        }
        .homeService-information {
          font-size: 14px;
          line-height: 30px;
          margin-left: 30px;
          width: 300px;
          .name {
            font-size: 21px;
            display: flex;
            .icon-tag {
              width: 38px;
              height: 24px;
              background-position: 100% 100%;
              background-repeat: no-repeat;
              margin-top: 3px;
            }
            .icon-empty-nest {
              background-image: url("../../assets/imgs/Group 3.png");
            }
            .icon-advanced-age {
              background-image: url("../../assets/imgs/Group 3 Copy.png");
            }
          }
          .content {
            display: flex;
            line-height: 25px;
            .project {
              background: #002e5b;
              width: 151px;
              height: 25px;
              padding-left: 10px;
              border-radius: 5px;
            }
          }
          span {
            margin-right: 10px;
          }
        }
        .homeService-state {
          line-height: 24px;
          font-size: 14px;
          display: flex;
          margin-top: 60px;
          .icon-work {
            margin-left: 10px;
            width: 157px;
            height: 40px;
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
          .work-waiting {
            background-image: url("../../assets/imgs/Group 2 Copy 2.png");
          }
          .work-inservice {
            background-image: url("../../assets/imgs/Group 2 Copy.png");
          }
          .work-complete {
            background-image: url("../../assets/imgs/Group 2.png");
          }
        }
      }
      .service-record-list:nth-child(4n) {
        border-bottom: 0;
      }
    }
  }
}
</style>
