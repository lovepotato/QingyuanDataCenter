<template>
  <!-- 智能床垫 -->
  <div class="main-container-box">
    <!-- 左 -->
    <div class="left-contaier">
      <div class="mattress-date">
        <div class="mattress-info-date">
          <div class="mattress-info-item">
            <div class="mattress-info-value">{{ leftModel.inbed }}</div>
            <div class="mattress-info-label">在床人数</div>
          </div>
          <div class="mattress-info-item">
            <div class="mattress-info-value">{{ leftModel.outbed }}</div>
            <div class="mattress-info-label">离床未归</div>
          </div>
          <div class="mattress-info-item">
            <div class="mattress-info-value">{{ leftModel.offline }}</div>
            <div class="mattress-info-label">设备下线</div>
          </div>
          <div class="mattress-info-item">
            <div class="mattress-info-value">{{ leftModel.supervise }}</div>
            <div class="mattress-info-label">检测总数</div>
          </div>
        </div>

        <div class="mattress-info-number">
          <div class="mattress-info-item">
            <div class="mattress-info-value">{{ leftModel.warningCount }}</div>
            <div class="mattress-info-label">预警总数</div>
          </div>
          <div class="mattress-info-item">
            <div class="mattress-info-value">{{ leftModel.dispose }}</div>
            <div class="mattress-info-label">已处理</div>
          </div>
          <div class="mattress-info-item">
            <div class="mattress-info-value">{{ leftModel.undispose }}</div>
            <div class="mattress-info-label">未处理</div>
          </div>
        </div>

        <div class="mattress-info-rate">
          <div class="process-rate">
            <!--  <img src="../../../assets/images/百分率1.jpg" width="100%" /> -->
            <el-progress
              type="circle"
              :percentage="disposeRateInt"
              :stroke-width="20"
              :width="142"
              :show-text="false"
            ></el-progress>
            <div class="rate">
              <div class="title">{{ leftModel.disposeRate }}</div>
              <div class="desc">处理率</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mattress-type">
        <div class="mattress-type-title">预警类型分布</div>
        <div class="mattress-type-main">
          <!--    <img src="../../../assets/images/饼图6.jpg" width="100%" /> -->
          <div id="charts_pie1" :style="{width: '726px', height: '350px'}"></div>
        </div>
      </div>
    </div>
    <!-- 右 -->
    <div class="right-contaier">
      <div class="arrival-button arrival-left">
        <img src="../../../assets/imgs/jiantou-不可点击.png" width="100%" />
      </div>
      <div class="arrival-button arrival-right">
        <!-- <img src="../../../assets/imgs/jiantou-不可点击.png" width="100%" /> -->
         <img src="../../../assets/imgs/jiantou-可点击.png" width="100%" />
      </div>

      <div class="mattress-main-list">
        <div class="mattress-main" v-for="(item, index) in rightModel.dataList" :key="index">
          <div class="mattress-personal-infor">
            <div class="mattress-photo">
              <!-- <img :src="imgPreUrl+item.user_img" width="100%" /> -->
              <el-image style="width: 60px;height:60px" :src="imgPreUrl+item.user_img" fit="cover"></el-image>
            </div>
            <div class="mattress-information">
              <div>
                <span class="name">{{ item.user_name }}</span>
                <span>{{ item.user_sex }}</span>
                <span>{{ item.user_age }}岁</span>
              </div>
              <div>{{ item.company }}</div>
            </div>
            <div class="mattress-state">
              <span class="icon icon-heart" v-if="item.warning"></span>
              <span class="color-red">{{ item.warning }}</span>
            </div>
          </div>

          <div class="mattress-personal-value">
            <div class="mattress-info-item">
              <div class="mattress-info-value">{{ item.bed_data.heart_rate }}</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">{{ item.bed_data.breathe }}</div>
              <div class="mattress-info-label">呼吸</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">{{ item.bed_data.timeStr }}</div>
              <div class="mattress-info-label">时长</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">
                <span class="color-orange">{{ item.bed_data.quality }}</span>
              </div>
              <div class="mattress-info-label">质量</div>
            </div>
          </div>

          <div class="mattress-personal-sleep">
            <div class="mattress-personal-title">睡眠质量折线图</div>
            <div class="mattress-personal-main">
              <!-- <img src="../../../assets/images/曲线图1.jpg" width="100%" /> -->
              <div :id="'charts_line_'+item.id" :style="{width: '100%', height: '255px'}"></div>
            </div>
          </div>
        </div>
        <!-- 
        <div class="mattress-main">
          <div class="mattress-personal-infor">
            <div class="mattress-photo">
              <img src="../../../assets/images/photo-head.jpg" width="100%" />
            </div>
            <div class="mattress-information">
              <div>
                <span class="name">张奶奶</span>
                <span>女</span>
                <span>72岁</span>
              </div>
              <div>枣园北里</div>
            </div>
            <div class="mattress-state">
              <span class="icon icon-outbed"></span>
              <span class="color-purple">离床未归</span>
            </div>
          </div>

          <div class="mattress-personal-value">
            <div class="mattress-info-item">
              <div class="mattress-info-value">54.45</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">21.86</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">6h23m</div>
              <div class="mattress-info-label">时长</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">
                <span class="color-orange">99%</span>
              </div>
              <div class="mattress-info-label">质量</div>
            </div>
          </div>

          <div class="mattress-personal-sleep">
            <div class="mattress-personal-title">睡眠质量折线图</div>
            <div class="mattress-personal-main">
              <img src="../../../assets/images/曲线图1.jpg" width="100%" />
            </div>
          </div>
        </div>

        <div class="mattress-main">
          <div class="mattress-personal-infor">
            <div class="mattress-photo">
              <img src="../../../assets/images/photo-head.jpg" width="100%" />
            </div>
            <div class="mattress-information">
              <div>
                <span class="name">张奶奶</span>
                <span>女</span>
                <span>72岁</span>
              </div>
              <div>枣园北里</div>
            </div>
            <div class="mattress-state">
              <span class="icon icon-movement"></span>
              <span class="color-blue">体动过多</span>
            </div>
          </div>

          <div class="mattress-personal-value">
            <div class="mattress-info-item">
              <div class="mattress-info-value">54.45</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">21.86</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">6h23m</div>
              <div class="mattress-info-label">时长</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">
                <span class="color-orange">99%</span>
              </div>
              <div class="mattress-info-label">质量</div>
            </div>
          </div>

          <div class="mattress-personal-sleep">
            <div class="mattress-personal-title">睡眠质量折线图</div>
            <div class="mattress-personal-main">
              <img src="../../../assets/images/曲线图1.jpg" width="100%" />
            </div>
          </div>
        </div>

        <div class="mattress-main">
          <div class="mattress-personal-infor">
            <div class="mattress-photo">
              <img src="../../../assets/images/photo-head.jpg" width="100%" />
            </div>
            <div class="mattress-information">
              <div>
                <span class="name">张奶奶</span>
                <span>女</span>
                <span>72岁</span>
              </div>
              <div>枣园北里</div>
            </div>
            <div class="mattress-state"></div>
          </div>

          <div class="mattress-personal-value">
            <div class="mattress-info-item">
              <div class="mattress-info-value">54.45</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">21.86</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">6h23m</div>
              <div class="mattress-info-label">时长</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">
                <span class="color-orange">99%</span>
              </div>
              <div class="mattress-info-label">质量</div>
            </div>
          </div>

          <div class="mattress-personal-sleep">
            <div class="mattress-personal-title">睡眠质量折线图</div>
            <div class="mattress-personal-main">
              <img src="../../../assets/images/曲线图1.jpg" width="100%" />
            </div>
          </div>
        </div>

        <div class="mattress-main">
          <div class="mattress-personal-infor">
            <div class="mattress-photo">
              <img src="../../../assets/images/photo-head.jpg" width="100%" />
            </div>
            <div class="mattress-information">
              <div>
                <span class="name">张奶奶</span>
                <span>女</span>
                <span>72岁</span>
              </div>
              <div>枣园北里</div>
            </div>
            <div class="mattress-state"></div>
          </div>

          <div class="mattress-personal-value">
            <div class="mattress-info-item">
              <div class="mattress-info-value">54.45</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">21.86</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">6h23m</div>
              <div class="mattress-info-label">时长</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">
                <span class="color-orange">99%</span>
              </div>
              <div class="mattress-info-label">质量</div>
            </div>
          </div>

          <div class="mattress-personal-sleep">
            <div class="mattress-personal-title">睡眠质量折线图</div>
            <div class="mattress-personal-main">
              <img src="../../../assets/images/曲线图1.jpg" width="100%" />
            </div>
          </div>
        </div>

        <div class="mattress-main">
          <div class="mattress-personal-infor">
            <div class="mattress-photo">
              <img src="../../../assets/images/photo-head.jpg" width="100%" />
            </div>
            <div class="mattress-information">
              <div>
                <span class="name">张奶奶</span>
                <span>女</span>
                <span>72岁</span>
              </div>
              <div>枣园北里</div>
            </div>
            <div class="mattress-state"></div>
          </div>

          <div class="mattress-personal-value">
            <div class="mattress-info-item">
              <div class="mattress-info-value">54.45</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">21.86</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">6h23m</div>
              <div class="mattress-info-label">时长</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">
                <span class="color-orange">99%</span>
              </div>
              <div class="mattress-info-label">质量</div>
            </div>
          </div>

          <div class="mattress-personal-sleep">
            <div class="mattress-personal-title">睡眠质量折线图</div>
            <div class="mattress-personal-main">
              <img src="../../../assets/images/曲线图1.jpg" width="100%" />
            </div>
          </div>
        </div>

        <div class="mattress-main">
          <div class="mattress-personal-infor">
            <div class="mattress-photo">
              <img src="../../../assets/images/photo-head.jpg" width="100%" />
            </div>
            <div class="mattress-information">
              <div>
                <span class="name">张奶奶</span>
                <span>女</span>
                <span>72岁</span>
              </div>
              <div>枣园北里</div>
            </div>
            <div class="mattress-state"></div>
          </div>

          <div class="mattress-personal-value">
            <div class="mattress-info-item">
              <div class="mattress-info-value">54.45</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">21.86</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">6h23m</div>
              <div class="mattress-info-label">时长</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">
                <span class="color-orange">99%</span>
              </div>
              <div class="mattress-info-label">质量</div>
            </div>
          </div>

          <div class="mattress-personal-sleep">
            <div class="mattress-personal-title">睡眠质量折线图</div>
            <div class="mattress-personal-main">
              <img src="../../../assets/images/曲线图1.jpg" width="100%" />
            </div>
          </div>
        </div>

        <div class="mattress-main">
          <div class="mattress-personal-infor">
            <div class="mattress-photo">
              <img src="../../../assets/images/photo-head.jpg" width="100%" />
            </div>
            <div class="mattress-information">
              <div>
                <span class="name">张奶奶</span>
                <span>女</span>
                <span>72岁</span>
              </div>
              <div>枣园北里</div>
            </div>
            <div class="mattress-state"></div>
          </div>

          <div class="mattress-personal-value">
            <div class="mattress-info-item">
              <div class="mattress-info-value">54.45</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">21.86</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">6h23m</div>
              <div class="mattress-info-label">时长</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">
                <span class="color-orange">99%</span>
              </div>
              <div class="mattress-info-label">质量</div>
            </div>
          </div>

          <div class="mattress-personal-sleep">
            <div class="mattress-personal-title">睡眠质量折线图</div>
            <div class="mattress-personal-main">
              <img src="../../../assets/images/曲线图1.jpg" width="100%" />
            </div>
          </div>
        </div>

        <div class="mattress-main">
          <div class="mattress-personal-infor">
            <div class="mattress-photo">
              <img src="../../../assets/images/photo-head.jpg" width="100%" />
            </div>
            <div class="mattress-information">
              <div>
                <span class="name">张奶奶</span>
                <span>女</span>
                <span>72岁</span>
              </div>
              <div>枣园北里</div>
            </div>
            <div class="mattress-state"></div>
          </div>

          <div class="mattress-personal-value">
            <div class="mattress-info-item">
              <div class="mattress-info-value">54.45</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">21.86</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">6h23m</div>
              <div class="mattress-info-label">时长</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">
                <span class="color-orange">99%</span>
              </div>
              <div class="mattress-info-label">质量</div>
            </div>
          </div>

          <div class="mattress-personal-sleep">
            <div class="mattress-personal-title">睡眠质量折线图</div>
            <div class="mattress-personal-main">
              <img src="../../../assets/images/曲线图1.jpg" width="100%" />
            </div>
          </div>
        </div>

        <div class="mattress-main">
          <div class="mattress-personal-infor">
            <div class="mattress-photo">
              <img src="../../../assets/images/photo-head.jpg" width="100%" />
            </div>
            <div class="mattress-information">
              <div>
                <span class="name">张奶奶</span>
                <span>女</span>
                <span>72岁</span>
              </div>
              <div>枣园北里</div>
            </div>
            <div class="mattress-state"></div>
          </div>

          <div class="mattress-personal-value">
            <div class="mattress-info-item">
              <div class="mattress-info-value">54.45</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">21.86</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">6h23m</div>
              <div class="mattress-info-label">时长</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">
                <span class="color-orange">99%</span>
              </div>
              <div class="mattress-info-label">质量</div>
            </div>
          </div>

          <div class="mattress-personal-sleep">
            <div class="mattress-personal-title">睡眠质量折线图</div>
            <div class="mattress-personal-main">
              <img src="../../../assets/images/曲线图1.jpg" width="100%" />
            </div>
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>


<script>

export default {
  components: {},
  name: 'matress',
  data() {
    return {
      leftModel: {},
      rightModel: {},
      disposeRateInt: 0,
      pagingModel: {
        limit: 20, // 页大小
        currentPage: 1,//当前页面
        total: 0,// 总条数
        totalPages: 0,// 总页数
      },
    }
  },
  mounted() {

  },
  created() {

    this.loadData()


  },
  methods: {
    loadData() {
      const _this = this;
      // 加载左则数据
      this.http
        .post(`/smartbed/index`)
        .then((res) => {
          if (res.code === 0) {
            this.leftModel = res.data
            this.disposeRateInt = parseInt(res.data.disposeRate)

            this.drawpie('1', res.data.warningType_distribute)
          }
        })

      // 加载右侧数据
      this.http
        .post(`/smartbed/beddata_list`, { currentPage: this.pagingModel.currentPage, limit: this.pagingModel.limit })
        .then((res) => {
          if (res.code === 0) {
            this.rightModel = res.data
          }
        })

    },
    // 饼图
    drawpie(id, seriesData) {
      const chartsPie = this.$echarts.init(document.getElementById('charts_pie' + id), 'light')
      chartsPie.clear();
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: "3%",
          bottom: "20%",
          textStyle: {
            fontSize: 20,
            color: "#fff",
          }
        },
        series: [
          {
            left: '-180',
            name: '',
            type: 'pie',
            radius: '70%',
            data: seriesData,
            label: {
              color: "#fff",
              fontSize: 20,
              formatter: '{c} ({d}%)',
            }
          }
        ]
      };
      chartsPie.setOption(option);
    },
    drawline(id, datas) {
      /*  const axisDatas = Array.from(datas).map(
         (w) => w.title
       )
       const seriesDatas = Array.from(datas).map(
         (w) => w.data
       ) */

      const chartsLine = this.$echarts.init(document.getElementById('charts_line_' + id), 'light')
      const option = {
        grid: {
          top: 20
        },
        xAxis: {
          type: 'category',
          data: ['20:00', '22:00', '0:00', '2:00', '4:00', '6:00', '8:00'],
          axisLabel: {
            color: '#ffffff',
            fontSize: 16
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#32C5FF"
            }
          },
          axisTick: {
            show: false
          },

        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
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
        },
        series: [{

          data: [0.8, 0.6, 1, 0.6, 0.75, 0.45, 0.65],
          type: 'line',
          smooth: true,
          symbol: "none",
          lineStyle: {
            color: "#F7B500"
          }
        }]
      };
      chartsLine.setOption(option);

    }

  },
  watch: {
    rightModel: function () {
      this.$nextTick(function () {
        const _this = this;
        Array.from(this.rightModel.dataList).forEach(function (item, index) {
          _this.drawline(item.id, item.quality.data)
        })
      })
    }
  }
}
</script>



<style lang="scss">
//支持scss语法
.main-container-box {
  width: 100%;
  height: 100%;
  display: flex;
  .left-contaier {
    width: 850px;
    height: 100%;
    background-color: transparent;
    .mattress-date {
      width: 788px;
      height: 520px;
      padding: 30px 0;
      background-image: url("../../../assets/imgs/行为识别Group1.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .mattress-info-date {
        width: 721px;
        height: 122px;
        margin: 0 30px;
        background-image: url("../../../assets/imgs/框-智能床垫1.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        .mattress-info-item {
          width: 100%;
          padding-top: 25px;
          font-size: 32px;
          text-align: center;
          .mattress-info-value {
            font-size: 32px;
            color: #ffffff;
          }
          .mattress-info-label {
            font-size: 21px;
            color: #35e7ff;
            margin-top: 10px;
          }
        }
      }
      .mattress-info-number {
        width: 721px;
        height: 122px;
        display: flex;
        justify-content: space-between;
        margin: 30px;
        .mattress-info-item {
          width: 220px;
          padding-top: 25px;
          font-size: 32px;
          text-align: center;
          background-image: url("../../../assets/imgs/框-智能床垫2.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          .mattress-info-value {
            font-size: 32px;
            color: #ffffff;
          }
          .mattress-info-label {
            font-size: 21px;
            color: #35e7ff;
            margin-top: 10px;
          }
        }
      }
      .mattress-info-rate {
        width: 775px;
        height: 142px;
        margin: 30px auto;
        background-image: url("../../../assets/imgs/处理率底.png");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        .process-rate {
          width: 142px;
          height: 142px;
          margin: 0 auto;
          text-align: center;
          .rate {
            margin-top: -100px;
          }
          .title {
            font-family: "PingFangSC-Medium", "Arial Narrow", Arial, sans-serif;
            color: #c3f72f;
            font-size: 30px;
          }
          .desc {
            color: #ffffff;
            font-size: 16px;
          }
        }
      }
    }
    .mattress-type {
      width: 788px;
      height: 460px;
      background-image: url("../../../assets/imgs/行为识别Group2.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin-top: 20px;
      .mattress-type-title {
        padding: 30px;
        font-size: 24px;
        color: #35e7ff;
      }
      .mattress-type-main {
        padding: 0 30px;
      }
    }
  }
  .right-contaier {
    position: relative;
    width: 2500px;
    height: 100%;
    .arrival-button {
      width: 24px;
      height: 37px;
      position: absolute;
      top: 500px;
    }
    .arrival-left {
      left: 0;
    }
    .arrival-right {
      right: 0;
    }
    .mattress-main-list {
      width: 2395px;
      height: 1030px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 0 60px;
      .mattress-main {
        width: 463px;
        height: 473px;
        border: #35e7ff 2px solid;
        border-radius: 20px;
        .mattress-personal-infor {
          display: flex;
          justify-content: space-around;
          color: #fff;
          padding: 20px;
          .mattress-photo {
            width: 60px;
            height: 60px;
            img {
              border-radius: 100%;
            }
          }
          .mattress-information {
            font-size: 16px;
            line-height: 30px;
            width: 210px;
            .name {
              font-size: 18px;
            }
            span {
              margin-right: 10px;
            }
          }
          .mattress-state {
            width: 120px;
            line-height: 60px;
            font-size: 20px;
            display: flex;
            .icon {
              margin-top: 16px;
              margin-right: 10px;
              width: 28px;
              height: 28px;
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
            .icon-heart {
              background-image: url("../../../assets/imgs/心率.png");
            }
            .icon-outbed {
              background-image: url("../../../assets/imgs/离床.png");
            }
            .icon-movement {
              background-image: url("../../../assets/imgs/体动.png");
            }
          }
        }
        .mattress-personal-value {
          background: #0f417d;
          display: flex;
          justify-content: center;
          .mattress-info-item {
            width: 100%;
            height: 76px;
            text-align: center;
            .mattress-info-value {
              font-size: 20px;
              color: #ffffff;
              margin-top: 12px;
            }
            .mattress-info-label {
              font-size: 16px;
              color: #35e7ff;
              margin-top: 10px;
            }
          }
        }
        .mattress-personal-sleep {
          .mattress-personal-title {
            padding: 20px 20px 0;
            font-size: 18px;
            color: #35e7ff;
          }
          .mattress-personal-main {
            padding: 10px;
          }
        }
      }
    }
  }
}
.color-red {
  color: #ff4f4f;
}
.color-purple {
  color: #8d6dff;
}
.color-blue {
  color: #32c5ff;
}
.color-orange {
  color: #f7b500;
}
.el-progress-circle .el-progress-circle__path {
  background-image: linear-gradient(to right, #3587d8, #53ff54);
}
</style>