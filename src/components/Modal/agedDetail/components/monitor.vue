<template>
  <div class="monitor">
    <div
      class="user-title"
      style="clean: both"
    >智能检测</div>
    <div class="charts-header">
      <div class="charts-header-content">
        <div class="item">
          <!-- <el-popover
            placement="top-start"
            trigger="hover"
            width="200"
          >
            <p>{{ `${intelligentMonitoring.heart_rate_from}` || '--' }}</p>
            <p>{{ `${intelligentMonitoring.heart_rate_time}` || '--' }}</p>

          </el-popover>-->
          <div
            class="value"
            slot="reference"
          >{{ intelligentMonitoring.heart_rate || '--' }}</div>
          <div class="label">心率</div>
        </div>
        <div class="border"></div>
        <div class="item">
          <!-- <el-popover
            placement="top-start"
            trigger="hover"
            width="200"
          >
            <p>{{ `${intelligentMonitoring.breathe_from || '--'}` }}</p>
            <p>{{ `${intelligentMonitoring.breathe_time || '--'}` }}</p>

          </el-popover>-->
          <div
            class="value"
            slot="reference"
          >{{ intelligentMonitoring.breathe || '--' }}</div>
          <div class="label">呼吸</div>
        </div>
        <div class="border"></div>
        <div class="item">
          <!-- <el-popover
            placement="top-start"
            trigger="hover"
            width="200"
          >
            <p>{{ `${intelligentMonitoring.blood_pressure_from || '--'}` }}</p>
            <p>{{ `${intelligentMonitoring.blood_pressure_time || '--'}` }}</p>

          </el-popover>-->
          <div
            class="value"
            slot="reference"
          >{{ intelligentMonitoring.blood_pressure || '--' }}</div>
          <div class="label">血压</div>
        </div>
        <div class="border"></div>
        <div class="item">
          <!-- <el-popover
            placement="top-start"
            trigger="hover"
            width="200"
          >
            <p>{{ `${intelligentMonitoring.sleep_time_from || '--'}` }}</p>
            <p>{{ `${intelligentMonitoring.sleep_time_time || '--'}` }}</p>

          </el-popover>-->
          <div
            class="value"
            slot="reference"
          >{{ intelligentMonitoring.sleep_time || '--' }}</div>
          <div class="label">睡眠时长</div>
        </div>
        <div class="border"></div>
        <div class="item">
          <!-- <el-popover
            placement="top-start"
            trigger="hover"
            width="200"
          >
            <p>{{ `${intelligentMonitoring.temperature_from || '--'}` }}</p>
            <p>{{ `${intelligentMonitoring.temperature_time || '--'}` }}</p>

          </el-popover>-->
          <div
            class="value"
            slot="reference"
          >{{ intelligentMonitoring.temperature || '--' }}</div>
          <div class="label">室内温度</div>
        </div>
        <div class="border"></div>
        <div class="item">
          <!-- <el-popover
            placement="top-start"
            trigger="hover"
            width="200"
          >
            <p>{{ `${intelligentMonitoring.humidity_from || '--'}` }}</p>
            <p>{{ `${intelligentMonitoring.humidity_time || '--'}` }}</p>

          </el-popover>-->
          <div
            class="value"
            slot="reference"
          >{{ intelligentMonitoring.humidity || '--' }}</div>
          <div class="label">室内湿度</div>
        </div>
      </div>
    </div>

    <div class="charts-content">
      <div
        class="heart-rate-chart chart-item"
        id="heart-rate"
      ></div>
      <div
        class="blood-pressure-chart chart-item"
        id="blood-pressure"
      ></div>
      <div
        class="sleep-time-chart chart-item"
        id="sleep-time"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    intelligentMonitoring: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      heartReteChart: {},
      sleepTimeChart: {},
      bloodPressureChart: {},
      heartRateOption: {
        backgroundColor: '',
        grid: {
          left: '5%',
          right: '10%',
          top: '20%',
          bottom: '15%',
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'item'
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            axisLabel: {
              color: '#A8BEFF',
              padding: [20, 0, 0, 0]
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#A8BEFF'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: '#A8BEFF'
              }
            },
            data: []
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '心率',
            min: 40,
            max: 100,
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#A8BEFF'
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#A8BEFF'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: '#A8BEFF',
                type: 'dashed'
              }
            },
            nameTextStyle: {
              color: '#A8BEFF',
              fontSize: 14,
              padding: [0, 0, 20, -10]
            }
          }
        ],
        series: [
          {
            name: '心率',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: '#FF5C5C',
                lineStyle: {
                  color: '#FF5C5C',
                  width: 1
                }
              }
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: '#FF5C5C'
                }
              }
            },
            data: []
          }
        ]
      },
      sleepTimeOption: {
        backgroundColor: '',
        grid: {
          left: '5%',
          right: '10%',
          top: '20%',
          bottom: '15%',
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'item'
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            axisLabel: {
              color: '#A8BEFF',
              padding: [20, 0, 0, 0]
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#A8BEFF'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: '#A8BEFF'
              }
            },
            data: []
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '睡眠时长',
            min: 0,
            max: 20,
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#A8BEFF'
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#A8BEFF'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: '#A8BEFF',
                type: 'dashed'
              }
            },
            nameTextStyle: {
              color: '#A8BEFF',
              fontSize: 14,
              padding: [0, 0, 20, -10]
            }
          }
        ],
        series: [
          {
            name: '睡眠时长',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: '#F7B500',
                lineStyle: {
                  color: '#F7B500 ',
                  width: 1
                }
              }
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: '#FA6400'
                }
              }
            },
            data: []
          }
        ]
      },
      bloodPressureOption: {
        backgroundColor: '',
        grid: {
          left: '5%',
          right: '10%',
          top: '20%',
          bottom: '15%',
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'item'
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            axisLabel: {
              color: '#A8BEFF'
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#A8BEFF'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: '#A8BEFF'
              }
            },
            data: []
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '血压',
            min: 50,
            max: 250,
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#A8BEFF',
                padding: [20, 0, 0, 0]
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#A8BEFF'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: '#A8BEFF',
                type: 'dashed'
              }
            },
            nameTextStyle: {
              color: '#A8BEFF',
              fontSize: 14,
              padding: [0, 0, 20, -10]
            }
          }
        ],
        series: [
          {
            name: '高血压',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: '#C036FF',
                lineStyle: {
                  color: '#C036FF ',
                  width: 1
                }
              }
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: '#B620E0'
                }
              }
            },
            data: []
          },
          {
            name: '低血压',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: '#32C5FF ',
                lineStyle: {
                  color: '#32C5FF ',
                  width: 1
                }
              }
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: '#32C5FF'
                }
              }
            },
            data: []
          }
        ]
      }
    }
  },
  mounted() {
    this.initHeartReteChart()
    this.initBloodPressureChart()
    this.initSleepTimeChart()
    window.addEventListener('resize', this.chartResize)
  },
  beforeDestroy() {
    // this.heartReteChart && this.heartReteChart.dispose()
    this.heartReteChart = {}
    // this.sleepTimeChart && this.sleepTimeChart.dispose()
    this.sleepTimeChart = {}
    window.removeEventListener('resize', this.chartResize)
  },
  methods: {
    initHeartReteChart() {
      const data = this.intelligentMonitoring.heart_rate_data
      // if (!data) return
      const xAxisList = []
      const valueList = []
      if (data && data.length > 0) {
        data.map((item) => {
          xAxisList.push(item.name)
          valueList.push(item.value)
        })
      }
      this.heartRateOption.xAxis[0].data = xAxisList
      this.heartRateOption.series[0].data = valueList
      this.heartReteChart = this.$echarts.init(
        document.getElementById('heart-rate')
      )
      this.heartReteChart.setOption(this.heartRateOption)
    },
    initSleepTimeChart() {
      const data = this.intelligentMonitoring.sleep_time_data
      // if (!data) return
      const xAxisList = []
      const valueList = []
      if (data && data.length > 0) {
        data.map((item) => {
          xAxisList.push(item.name)
          valueList.push(item.value)
        })
      }
      this.sleepTimeOption.xAxis[0].data = xAxisList
      this.sleepTimeOption.series[0].data = valueList
      this.sleepTimeChart = this.$echarts.init(
        document.getElementById('sleep-time')
      )
      this.sleepTimeChart.setOption(this.sleepTimeOption)
    },
    initBloodPressureChart() {
      const lowData = this.intelligentMonitoring.blood_pressure_low_data
      const highData = this.intelligentMonitoring.blood_pressure_high_data
      // if (!highData || !lowData) return
      const xAxisList = []
      const valueLowList = []
      const valueHighList = []
      if (
        (lowData && lowData.length > 0) ||
        (highData && highData.length > 0)
      ) {
        lowData.map((item) => {
          xAxisList.push(item.name)
          valueLowList.push(item.value)
        })
        highData.map((item) => {
          valueHighList.push(item.value)
        })
      }
      this.bloodPressureOption.xAxis[0].data = xAxisList
      this.bloodPressureOption.series[0].data = valueHighList
      this.bloodPressureOption.series[1].data = valueLowList
      this.bloodPressureChart = this.$echarts.init(
        document.getElementById('blood-pressure')
      )
      this.bloodPressureChart.setOption(this.bloodPressureOption)
    },
    chartResize() {}
  }
}
</script>

<style lang="scss">
.monitor {
  .chart-item {
    height: 500px;
    width: 100%;
  }
}
.charts-header {
  padding: 0 40px;
}

.charts-header-content {
  background: #032f8c;
  border-radius: 8px;
  height: 147px;
  width: 100%;
  min-width: 1100px;
  display: flex;

  .item {
    width: 16.6%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &:last-child {
      border-right: 0px;
    }
    .value {
      font-family: PingFangSC-Semibold;
      font-size: 30px;
      color: #fff;
      margin-bottom: 10px;
    }

    .label {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #32c5ff;
    }
  }

  .border {
    height: 60px;
    width: 2px;
    background: linear-gradient(#032f8c, #32c5ff, #032f8c);
    position: relative;
    top: 30%;
  }
}
</style>
