<template>
  <div class="healthManage-container-box">
    <div class="left-contaier">
      <div class="healthManage-service">
        <div class="title">健康管理服务</div>

        <el-carousel height="300px" indicator-position="none" :interval="this.carouselInterval">
          <el-carousel-item v-for="itemIndex in serviceListNum" :key="itemIndex">
            <div class="healthManage-service-list">
              <div
                class="healthManage-service-main"
                v-for="(item, index) in Array.from(pageModel.serviceList).slice((itemIndex-1)*5,itemIndex*5)"
                :key="index"
              >
                <div class="photo">
                  <img :src="imgPreUrl+item.value" width="100%" />
                </div>
                <div class="name">
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="healthManage-piechart">
        <div class="healthManage-piechart-main">
          <div class="title">医生职称划分</div>
          <div class="photo">
            <div id="charts_pie1" :style="{width: '530px', height: '410px'}"></div>
          </div>
        </div>
        <div class="healthManage-piechart-main">
          <div class="title">学科占比划分</div>
          <div class="photo">
            <div id="charts_pie2" :style="{width: '530px', height: '410px'}"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="middle-contaier">
      <div class="healthManage-distribution">
        <img src="../../../assets/imgs/健康管理-地图.png" width="100%" />
      </div>
      <div class="healthManage-resources">
        <div class="resources-local">
          <div class="title">本地资源</div>
          <div class="resources-info-date" v-if="pageModel.localCountList">
            <div class="resources-info-item">
              <div class="resources-info-value">{{pageModel.localCountList[0].value}}</div>
              <div class="resources-info-label">{{pageModel.localCountList[0].name}}</div>
            </div>
            <div class="resources-info-item">
              <div class="resources-info-value">{{pageModel.localCountList[1].value}}</div>
              <div class="resources-info-label">{{pageModel.localCountList[1].name}}</div>
            </div>
            <div class="resources-info-item">
              <div class="resources-info-value">{{pageModel.localCountList[2].value}}</div>
              <div class="resources-info-label">{{pageModel.localCountList[2].name}}</div>
            </div>
            <div class="resources-info-item">
              <div class="resources-info-value">{{pageModel.localCountList[3].value}}</div>
              <div class="resources-info-label">{{pageModel.localCountList[3].name}}</div>
            </div>
          </div>
        </div>
        <div class="resources-foreign">
          <div class="title">外埠资源</div>
          <div class="resources-info-date" v-if="pageModel.outCountList">
            <div class="resources-info-item">
              <div class="resources-info-value">{{pageModel.outCountList[0].value}}</div>
              <div class="resources-info-label">{{pageModel.outCountList[0].name}}</div>
            </div>
            <div class="resources-info-item">
              <div class="resources-info-value">{{pageModel.outCountList[1].value}}</div>
              <div class="resources-info-label">{{pageModel.outCountList[1].name}}</div>
            </div>
            <div class="resources-info-item">
              <div class="resources-info-value">{{pageModel.outCountList[2].value}}</div>
              <div class="resources-info-label">{{pageModel.outCountList[2].name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-contaier">
      <div class="healthManage-monitoringdata">
        <div class="healthManage-info-date" v-if="pageModel.countList">
          <div class="healthManage-info-item">
            <div class="healthManage-info-value">{{pageModel.countList[0].value}}</div>
            <div class="healthManage-info-label">{{pageModel.countList[0].name}}</div>
          </div>
          <div class="healthManage-info-item">
            <div class="healthManage-info-value">{{pageModel.countList[1].value}}</div>
            <div class="healthManage-info-label">{{pageModel.countList[1].name}}</div>
          </div>
          <div class="healthManage-info-item">
            <div class="healthManage-info-value">{{pageModel.countList[2].value}}</div>
            <div class="healthManage-info-label">{{pageModel.countList[2].name}}</div>
          </div>
          <div class="healthManage-info-item">
            <div class="healthManage-info-value">{{pageModel.countList[3].value}}</div>
            <div class="healthManage-info-label">{{pageModel.countList[3].name}}</div>
          </div>
          <div class="healthManage-info-item">
            <div class="healthManage-info-value">{{pageModel.countList[4].value}}</div>
            <div class="healthManage-info-label">{{pageModel.countList[4].name}}</div>
          </div>
        </div>
        <div class="healthManage-video">
          <!-- 接口返回  videoList   video:'url' 待处理 -->
          <div class="video-box">
            <img src="../../../assets/images/video.jpg" width="100%" />
          </div>
          <div class="video-box">
            <img src="../../../assets/images/video.jpg" width="100%" />
          </div>
        </div>
      </div>
      <div class="healthManage-recordlast">
        <div class="healthManage-recordlast-main">
          <div class="title">最近评测记录</div>

          <el-carousel height="434px" indicator-position="none" :interval="this.carouselInterval" direction="vertical">
            <el-carousel-item v-for="itemIndex in lastTestListNum" :key="itemIndex">
              <div
                class="healthManage-recordlast-list"
                v-for="(item, index) in Array.from(pageModel.lastTestList).slice((itemIndex-1)*3,itemIndex*3)"
                :key="index"
              >
                <div class="healthManage-photo">
                  <img :src="imgPreUrl+item.img" width="100%" />
                </div>
                <div class="healthManage-information">
                  <div class="info-box">
                    <span class="name">{{item.name}}</span>
                    <span>{{item.date}}</span>
                  </div>
                  <div class="info-box">{{item.gender}} {{item.age}}岁</div>
                  <div class="info-box">
                    <span>枣园北里</span>
                    <span class="color-red" v-if='item.text=="不佳"'>{{item.text}}</span>
                    <span class="color-green" v-if='item.text=="良好"'>{{item.text}}</span>
                    <span class="color-blue" v-if='item.text=="普通"'>{{item.text}}</span>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>

        
        </div>
        <div class="healthManage-recordlast-main">
          <div class="title">最近远程问诊</div>

 <el-carousel height="434px" indicator-position="none" :interval="this.carouselInterval" direction="vertical">
            <el-carousel-item v-for="itemIndex in lastRemoteListNum" :key="itemIndex">
              <div
                class="healthManage-recordlast-list"
                v-for="(item, index) in Array.from(pageModel.lastRemoteList).slice((itemIndex-1)*3,itemIndex*3)"
                :key="index"
              >
                <div class="healthManage-photo">
                  <img :src="imgPreUrl+item.img" width="100%" />
                </div>
                <div class="healthManage-information">
                  <div class="info-box">
                    <span class="name">{{item.name}}</span>
                    <span>{{item.date}}</span>
                  </div>
                  <div class="info-box">{{item.gender}} {{item.age}}岁</div>
                  <div class="info-box">
                    <span>枣园北里</span>
                    <span class="color-blue">{{item.text}}</span>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>



         <!--  <div class="healthManage-recordlast-list">
            <div class="healthManage-photo">
              <img src="../../../assets/images/photo-head.jpg" width="100%" />
            </div>
            <div class="healthManage-information">
              <div class="info-box">
                <span class="name">陈奶奶</span>
                <span>2020-09-12 13:39</span>
              </div>
              <div class="info-box">女 70岁</div>
              <div class="info-box">
                <span>枣园北里</span>
                <span class="color-blue">咨询血压升高</span>
              </div>
            </div>
          </div> -->
       
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rtmpVideo from '@/components/Video'
export default {
  components: { rtmpVideo },
  name: 'healtManage',
  data() {
    return {
      videoDialogVisible: false,
      PdfDialogVisible: false,
      pageModel: {
        serviceList: [],
      },
      serviceListNum: 0,
      lastTestListNum: 0,
      lastRemoteListNum: 0,
    }
  },
  mounted() {

  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      // 加载页面数据
      this.http
        .post(`/commandcentre/healthmanager/data`)
        .then((res) => {
          if (res.code === 0) {
            this.pageModel = res.data
            this.serviceListNum = Math.ceil(Array.from(res.data.serviceList).length / 5);
            this.lastTestListNum = Math.ceil(Array.from(res.data.lastTestList).length / 3);
            this.lastRemoteListNum = Math.ceil(Array.from(res.data.lastRemoteList).length / 3);

            this.drawPie('1', res.data.jobTitleList)
            this.drawPie('2', res.data.subjectList)
          }
        })
    },
    // 饼图
    drawPie(id, seriesData) {
      const chartsPie = this.$echarts.init(document.getElementById('charts_pie' + id), 'light')
      chartsPie.clear();
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        legend: {
          bottom: "0",
          textStyle: {
            fontSize: 20,
            color: "#fff",
          }
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: '65%',
            data: seriesData,
            label: {
              color: "#fff",
              fontSize: 20,
              formatter: '{c}\n{d}%'
            }
          }
        ]
      };
      chartsPie.setOption(option);
    }

  },
  watch: {

  }
}
</script>

<style lang="scss">
.healthManage-container-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .left-contaier {
    .healthManage-service {
      width: 1194px;
      height: 438px;
      padding: 35px;
      background-image: url("../../../assets/imgs/健康管理Group1.png");
      background-position: 100% 100%;
      background-repeat: no-repeat;
      .title {
        font-size: 24px;
        color: #35e7ff;
        margin-bottom: 30px;
        letter-spacing: 4px;
      }
      .healthManage-service-list {
        overflow: hidden;
        display: flex;
        .healthManage-service-main {
          width: 200px;
          background: #012776;
          margin-right: 30px;
          color: #fff;
          .photo {
            width: 100%;
            height: 200px;
          }
          .name {
            width: 200px;
            height: 84px;
            padding: 20px;
            font-size: 18px;
            line-height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            display: -webkit-box;
            -webkit-line-clamp: 2; //显示3行
            -webkit-box-orient: vertical;
          }
        }
      }
    }
    .healthManage-piechart {
      width: 1194px;
      height: 527px;
      padding: 35px;
      background-image: url("../../../assets/imgs/健康管理Group2.png");
      background-position: 100% 100%;
      background-repeat: no-repeat;
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      .healthManage-piechart-main {
        width: 530px;
        .title {
          font-size: 24px;
          color: #35e7ff;
          margin-bottom: 30px;
          letter-spacing: 4px;
        }
      }
    }
  }
  .middle-contaier {
    .healthManage-distribution {
      width: 1133px;
      height: 734px;
      margin: 32px 0;
    }
    .healthManage-resources {
      display: flex;
      justify-content: space-between;
      .resources-local {
        width: 619px;
        height: 203px;
        background-image: url("../../../assets/imgs/健康管理框1.png");
        background-position: center bottom;
        background-repeat: no-repeat;
        .resources-info-date {
          display: flex;
          justify-content: center;
          .resources-info-item {
            width: 100%;
            padding: 35px 0;
            text-align: center;
            background-image: url("../../../assets/imgs/分割线.png");
            background-position: right center;
            background-repeat: no-repeat;
            .resources-info-value {
              font-size: 30px;
              color: #35e7ff;
            }
            .resources-info-label {
              font-size: 18px;
              color: #ffffff;
              margin-top: 15px;
            }
          }
          .resources-info-item:nth-child(4n) {
            background: none;
          }
        }
      }
      .resources-foreign {
        width: 473px;
        height: 203px;
        background-image: url("../../../assets/imgs/健康管理框2.png");
        background-position: center bottom;
        background-repeat: no-repeat;
        .resources-info-date {
          display: flex;
          justify-content: center;
          .resources-info-item {
            width: 100%;
            padding: 35px 0;
            text-align: center;
            background-image: url("../../../assets/imgs/分割线.png");
            background-position: right center;
            background-repeat: no-repeat;
            .resources-info-value {
              font-size: 30px;
              color: #35e7ff;
            }
            .resources-info-label {
              font-size: 18px;
              color: #ffffff;
              margin-top: 15px;
            }
          }
          .resources-info-item:nth-child(3n) {
            background: none;
          }
        }
      }
      .title {
        font-size: 20px;
        text-align: center;
        color: #fff;
        letter-spacing: 4px;
        line-height: 56px;
        height: 56px;
      }
    }
  }
  .right-contaier {
    .healthManage-monitoringdata {
      width: 908px;
      height: 460px;
      padding: 35px;
      background-image: url("../../../assets/imgs/健康管理Group3.png");
      background-position: 100% 100%;
      background-repeat: no-repeat;
      .healthManage-info-date {
        width: 840px;
        height: 125px;
        margin-bottom: 40px;
        background-image: url("../../../assets/imgs/健康管理框3.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        .healthManage-info-item {
          width: 100%;
          padding-top: 25px;
          font-size: 32px;
          text-align: center;
          .healthManage-info-value {
            font-size: 32px;
            color: #ffffff;
          }
          .healthManage-info-label {
            font-size: 21px;
            color: #35e7ff;
            margin-top: 10px;
          }
        }
      }
      .healthManage-video {
        display: flex;
        justify-content: space-between;
        .video-box {
          width: 384px;
          height: 216px;
        }
      }
    }
    .healthManage-recordlast {
      display: flex;
      justify-content: space-between;
      .healthManage-recordlast-main {
        width: 440px;
        height: 503px;
        background-image: url("../../../assets/imgs/健康管理Group4.png");
        background-position: 100% 100%;
        background-repeat: no-repeat;
        margin-top: 40px;
        .title {
          font-size: 24px;
          color: #35e7ff;
          padding: 30px 30px 0;
          letter-spacing: 4px;
        }
        .healthManage-recordlast-list {
          width: 420px;
          margin: 10px;
          padding: 20px;
          background-image: url("../../../assets/imgs/近期举办活动-分割线.png");
          background-position: center bottom;
          background-repeat: no-repeat;
          display: flex;
          color: #fff;
          .healthManage-photo {
            width: 96px;
            height: 96px;
            img {
              border-radius: 100%;
            }
          }
          .healthManage-information {
            margin-left: 20px;
            font-size: 16px;
            width: 260px;
            .info-box {
              display: flex;
              justify-content: space-between;
              line-height: 28px;
              margin-bottom: 5px;
              .name {
                font-size: 20px;
              }
            }
          }
        }
        .healthManage-recordlast-list:nth-child(4n) {
          background: none;
        }
      }
    }
  }
  .color-red {
    color: #ff4b4b;
  }
  .color-green {
    color: #44d7b6;
  }
  .color-blue {
    color: #32c5ff;
  }
}
</style>
