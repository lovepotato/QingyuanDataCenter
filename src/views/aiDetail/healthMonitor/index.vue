<template>
  <!-- 健康监测 -->
  <div class="main-container-box-hm">
    <div class="left-contaier">
      <div class="healthMonitor-map">
        <img src="../../../assets/imgs/设备点位分布图.png" width="100%" />
      </div>

      <div class="healthMonitor-value">
        <div class="healthMonitor-info-item">
          <div class="healthMonitor-info-value">{{ pageModel.equipment_count }}</div>
          <div class="healthMonitor-info-label">设备数量</div>
        </div>
        <div class="healthMonitor-info-item">
          <div class="healthMonitor-info-value">{{ pageModel.inspect_item_count }}</div>
          <div class="healthMonitor-info-label">检测项目</div>
        </div>
        <div class="healthMonitor-info-item">
          <div class="healthMonitor-info-value">{{ pageModel.inspect_person_time }}</div>
          <div class="healthMonitor-info-label">检测人次</div>
        </div>
        <div class="healthMonitor-info-item">
          <div class="healthMonitor-info-value">{{ pageModel.average_daily_inspect }}</div>
          <div class="healthMonitor-info-label">日均检测</div>
        </div>
      </div>

      <div class="healthMonitor-total">
        <div class="healthMonitor-total-info color-white">
          完成健康监测老人总数
          <span class="font-size54">{{pageModel.inspect_oldman_finish}}</span> 人
        </div>
        <div class="healthMonitor-total-info color-blue">
          覆盖全街道老人
          <span class="font-size28">{{pageModel.coverage_oldman_percentage}}%</span>
        </div>
      </div>
    </div>
    <div class="middle-contaier">
      <el-carousel trigger="click" height="990px" :interval="5000" arrow="never">
        <el-carousel-item>
          <div class="healthMonitor-exponential-info">
            <div class="healthMonitor-pie-chart">
              <div class="pie-chart-title">BMI指数</div>
              <div class="pie-chart-value">
                <div id="charts_pie1" :style="{width: '510px', height: '400px'}"></div>
              </div>
            </div>
            <div class="healthMonitor-pie-chart">
              <div class="pie-chart-title">血压</div>
              <div class="pie-chart-value">
                <div id="charts_pie2" :style="{width: '510px', height: '400px'}"></div>
              </div>
            </div>
            <div class="healthMonitor-pie-chart">
              <div class="pie-chart-title">血氧饱和度</div>
              <div class="pie-chart-value">
                <div id="charts_pie3" :style="{width: '510px', height: '400px'}"></div>
              </div>
            </div>
          </div>
          <div class="healthMonitor-histograms">
            <div class="histograms-title">血脂四项</div>
            <div class="histograms-value">
              <div id="charts_bar1" :style="{width: '1638px', height: '375px'}"></div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="healthMonitor-exponential-info">
            <div class="healthMonitor-pie-chart">
              <div class="pie-chart-title">胆固醇</div>
              <div class="pie-chart-value">
                <div id="charts_pie4" :style="{width: '510px', height: '400px'}"></div>
              </div>
            </div>
            <div class="healthMonitor-pie-chart">
              <div class="pie-chart-title">血糖</div>
              <div class="pie-chart-value">
                <div id="charts_pie5" :style="{width: '510px', height: '400px'}"></div>
              </div>
            </div>
            <div class="healthMonitor-pie-chart">
              <div class="pie-chart-title">尿酸</div>
              <div class="pie-chart-value">
                <div id="charts_pie6" :style="{width: '510px', height: '400px'}"></div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="right-contaier">
      <el-carousel height="202px" @change="onCarouselChange" ref="mycarousel">
        <el-carousel-item v-for="(item,index) in pageModel.last_inspect_record_list" :key="index">
          <div class="healthMonitor-personnel-info">
            <div class="personnel-photo">
              <img :src="item.member_userinfo.user_img" width="100%" />
            </div>
            <div class="personnel-info-volue">
              <div class="personnel-name">
                <span>{{ item.member_userinfo.user_name}}</span>
                <span>{{ item.member_userinfo.user_sex}}</span>
                <span>{{ item.member_userinfo.user_age}}岁</span>
              </div>
              <div class="personnel-add">{{ item.member_userinfo.store_name}}</div>
              <div class="personnel-time-results">
                <div>检测时间：{{ item.member_userinfo.inspect_time}}</div>
                <div>
                  检测结果：
                  <span class="color-orange">{{ item.member_userinfo.abnormity_label}}</span>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>

      <div class="healthMonitor-personnel-result" v-if="pageModel.last_inspect_record_list">
        <div class="personnel-result-list"  v-if="pageModel.last_inspect_record_list.length>0">
          <div class="personnel-result-main personnel-result-fatrate">
            <p>
              <img :src="getHealthmonitoringItem('脂肪率').img" width="100%" />
            </p>
            <p
              :class="getHealthmonitoringItem('脂肪率').color"
            >{{getHealthmonitoringItem('脂肪率').title}}</p>
          </div>

          <div class="personnel-result-main personnel-result-bloodpressure">
            <p>
              <img :src="getHealthmonitoringItem('血压').img" width="100%" />
            </p>
            <p :class="getHealthmonitoringItem('血压').color">{{getHealthmonitoringItem('血压').title}}</p>
          </div>

          <div class="personnel-result-main personnel-result-BMI">
            <p>
              <img :src="getHealthmonitoringItem('bmi').img" width="100%" />
            </p>
            <p
              :class="getHealthmonitoringItem('bmi').color"
            >{{getHealthmonitoringItem('bmi').title}}</p>
          </div>

          <div class="personnel-result-main personnel-result-bloodsugar">
            <p>
              <img :src="getHealthmonitoringItem('血糖').img" width="100%" />
            </p>
            <p :class="getHealthmonitoringItem('血糖').color">{{getHealthmonitoringItem('血糖').title}}</p>
          </div>

          <div class="personnel-result-main personnel-result-uricacid">
            <p>
              <img :src="getHealthmonitoringItem('尿酸').img" width="100%" />
            </p>
            <p :class="getHealthmonitoringItem('尿酸').color">{{getHealthmonitoringItem('尿酸').title}}</p>
          </div>

          <div class="personnel-result-main personnel-result-cholesterol">
            <p>
              <img :src="getHealthmonitoringItem('胆固醇').img" width="100%" />
            </p>
            <p
              :class="getHealthmonitoringItem('胆固醇').color"
            >{{getHealthmonitoringItem('胆固醇').title}}</p>
          </div>

          <div class="personnel-result-main personnel-result-bloodfat">
            <p>
              <img :src="getHealthmonitoringItem('血脂').img" width="100%" />
            </p>
            <p :class="getHealthmonitoringItem('血脂').color">{{getHealthmonitoringItem('血脂').title}}</p>
          </div>

          <div class="personnel-result-main personnel-result-constitution">
            <p>
              <img :src="getHealthmonitoringItem('体质').img" width="100%" />
            </p>
            <p :class="getHealthmonitoringItem('体质').color">{{getHealthmonitoringItem('体质').title}}</p>
          </div>

          <div class="personnel-result-main personnel-result-temperature">
            <p>
              <img :src="getHealthmonitoringItem('体温').img" width="100%" />
            </p>
            <p :class="getHealthmonitoringItem('体温').color">{{getHealthmonitoringItem('体温').title}}</p>
          </div>

          <div class="personnel-result-main personnel-result-weight">
            <p>
              <img :src="getHealthmonitoringItem('体重').img" width="100%" />
            </p>
            <p :class="getHealthmonitoringItem('体重').color">{{getHealthmonitoringItem('体重').title}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rtmpVideo from '@/components/Video'
export default {
  components: { rtmpVideo },
  name: 'healthMonitor',
  data() {
    return {
      pageModel: {},
      carouselActive: 0,
    }
  },
  mounted() {

  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      // 加载分类
      this.http
        .post(`/health-monitoring/monitoring`)
        .then((res) => {
          if (res.code === 0) {
            this.pageModel = res.data

            // BMI
            this.drawPie('1', this.pageModel.bmi_data)
            // 血压
            this.drawPie('2', this.pageModel.blood_pressure_data)
            // 血氧饱和度
            this.drawPie('3', this.pageModel.oxygensaturation_data)
            // 胆固醇
            this.drawPie('4', this.pageModel.cholesterol_data)
            // 血糖
            this.drawPie('5', this.pageModel.bloodsugar_data)
            // 尿酸
            this.drawPie('6', this.pageModel.uricacid_data)


            //血脂
            const axisData = ['总胆固醇', '甘油三酯', '高密度蛋白', '低密度蛋白']

            const totalData = Array.from(this.pageModel.blood_fat_data.total_cholesterol_data).map(
              (w) => w.value
            )
            const triglyceridesData = Array.from(this.pageModel.blood_fat_data.triglycerides_data).map(
              (w) => w.value
            )
            const heightData = Array.from(this.pageModel.blood_fat_data.height_lipoprotein_data).map(
              (w) => w.value
            )
            const lowData = Array.from(this.pageModel.blood_fat_data.low_lipoprotein_data).map(
              (w) => w.value
            )


            const series = [
              {
                name: '总胆固醇',
                type: 'bar',
                barWidth: 40,
                data: totalData
              },
              {
                name: '甘油三酯',
                type: 'bar',
                barWidth: 40,
                data: triglyceridesData
              },
              {
                name: '高密度蛋白',
                type: 'bar',
                barWidth: 40,
                data: heightData,
              },
              {
                name: '低密度蛋白',
                type: 'bar',
                barWidth: 40,
                data: lowData,
              }
            ]
            this.drawBar('1', axisData, series);
          }
        })
    },
    getHealthmonitoringItem(name) {

      let result = {
        title: '',
        img: '',
        color: '',
      };
      if (!this.pageModel.last_inspect_record_list) {
        return result;
      }
      if (Array.from(this.pageModel.last_inspect_record_list).length == 0 ||
        this.carouselActive <= Array.from(this.pageModel.last_inspect_record_list).length) {
        return result;

      }
      debugger
      let list = this.pageModel.last_inspect_record_list[this.carouselActive].healthmonitoring_physical_data_brief;
      let item = Array.from(list).find(w => w.title == name);
      if (item.status_label == '') {
        item.status_label = '未检测';
      }
      const title = item.title + item.status_label;
      const img = require('../../../assets/imgs/健康图标/' + title + '.png')
      let color = '';
      switch (item.status_label) {
        case '正常':
          color = '';
          break;
        case '偏高':
          color = 'color-red';
          break;
        case '偏低':
          color = 'color-orange';
          break;
        case '未检测':
          color = 'color-purple';
          break;
      }
      return { title, img, color };
    },
    onCarouselChange(currIndex, preIndex) {
      this.carouselActive = currIndex;
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
            center: ['50%', '40%'],
            name: '',
            type: 'pie',
            radius: '60%',
            data: seriesData,
            label: {
              color: "#fff",
              fontSize: 20
            }
          }
        ]
      };
      chartsPie.setOption(option);
    },
    drawBar(id, axisData, seriesData) {
      const chartsBar = this.$echarts.init(document.getElementById('charts_bar' + id), 'light')
      chartsBar.clear();
      const option = {
        grid: {
          left: 0,
          right: 20,
          bottom: 100,
        },
        legend: {
          data: axisData,
          bottom: "0",
          textStyle: {
            fontSize: 20,
            color: "#fff",
          }
        },
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
        xAxis: {
          type: 'category',
          data: axisData,
          axisLine: {
            lineStyle: {
              width: 1,
              color: '#32C5FF'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#ffffff',
            fontSize: 16
          },
          offset: 10
        },
        yAxis: {
          type: 'value',
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
          offset: 10
        },
        series: seriesData
      };
      chartsBar.setOption(option);
    }
  },
  watch: {

  }
}
</script>

<style lang="scss">
//支持scss语法
.main-container-box-hm {
  .el-carousel__indicators--horizontal {
    display: none;
  }
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  .left-contaier {
    width: 837px;
    height: 992px;
    padding: 25px;
    background-image: url("../../../assets/imgs/健康监测Group1.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .healthMonitor-map {
      width: 100%;
      height: 530px;
    }
    .healthMonitor-value {
      width: 100%;
      height: 142px;
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      .healthMonitor-info-item {
        width: 190px;
        height: 142px;
        text-align: center;
        background-image: url("../../../assets/imgs/健康监测框2.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        .healthMonitor-info-value {
          font-size: 32px;
          color: #ffffff;
          margin-top: 30px;
        }
        .healthMonitor-info-label {
          font-size: 20px;
          color: #35e7ff;
          margin-top: 20px;
        }
      }
    }
    .healthMonitor-total {
      width: 100%;
      height: 175px;
      margin-top: 50px;
      padding-top: 5px;
      background-image: url("../../../assets/imgs/完成健康监测人数框.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      font-size: 22px;
      .healthMonitor-total-info {
        margin-left: 320px;
        margin-top: 20px;
      }
      .font-size54 {
        font-size: 54px;
      }
      .font-size28 {
        font-size: 28px;
      }
    }
  }
  .middle-contaier {
    width: 1693px;
    height: 991px;
    background-image: url("../../../assets/imgs/健康监测Group2.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .healthMonitor-exponential-info {
      width: 100%;
      height: 500px;
      display: flex;
      justify-content: space-between;
      .healthMonitor-pie-chart {
        width: 100%;
        padding: 10px;
        .pie-chart-title {
          color: #32c5ff;
          font-size: 24px;
          padding: 30px 20px;
        }
        .pie-chart-value {
          width: 510px;
          height: 400px;
        }
      }
    }
    .healthMonitor-histograms {
      width: 100%;
      padding: 10px;
      .histograms-title {
        color: #32c5ff;
        font-size: 24px;
        padding: 30px 20px;
      }
      .histograms-value {
        width: 100%;
        padding: 0 30px;
      }
    }
  }
  .right-contaier {
    width: 725px;
    height: 991px;
    background-image: url("../../../assets/imgs/健康监测Group3.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .healthMonitor-personnel-info {
      width: 100%;
      height: 202px;
      padding: 0 50px;
      display: flex;
      justify-content: space-between;
      .personnel-photo {
        width: 115px;
        height: 115px;
        margin-top: 55px;
        img {
          border-radius: 100%;
        }
      }
      .personnel-info-volue {
        width: 100%;
        margin-left: 30px;
        margin-top: 55px;
        color: #fff;
        font-size: 18px;
        .personnel-name {
          font-size: 22px;
          span {
            margin-right: 30px;
          }
        }
        .personnel-add {
          margin: 15px 0;
        }
        .personnel-time-results {
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .healthMonitor-personnel-result {
      width: 100%;
      height: 770px;
      background-image: url("../../../assets/imgs/中间-人.png");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 279px 409px;
      .personnel-result-list {
        background-image: url("../../../assets/imgs/圈.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 594px 592px;
        position: relative;
        width: 100%;
        height: 770px;
        .personnel-result-main {
          position: absolute;
          width: 125px;
          height: 115px;
          text-align: center;
          color: #fff;
          font-size: 18px;
          p {
            margin: 10px 0;
          }
          img {
            width: 72px;
            height: 72px;
          }
        }
        .personnel-result-fatrate {
          left: 305px;
          top: 30px;
        }
        .personnel-result-bloodpressure {
          left: 470px;
          top: 95px;
        }
        .personnel-result-BMI {
          left: 580px;
          top: 235px;
        }
        .personnel-result-bloodsugar {
          left: 580px;
          top: 415px;
        }
        .personnel-result-uricacid {
          left: 470px;
          top: 570px;
        }
        .personnel-result-cholesterol {
          left: 305px;
          top: 630px;
        }
        .personnel-result-bloodfat {
          left: 135px;
          top: 570px;
        }
        .personnel-result-constitution {
          left: 20px;
          top: 415px;
        }
        .personnel-result-temperature {
          left: 20px;
          top: 235px;
        }
        .personnel-result-weight {
          left: 135px;
          top: 95px;
        }
      }
    }
  }
  .color-blue {
    color: #32c5ff;
  }
  .color-white {
    color: #ffffff;
  }
  .color-orange {
    color: #f7b500;
  }
  .color-red {
    color: #f26363;
  }
  .color-purple {
    color: #8d6dff;
  }
}
</style>
