<template>
  <div
    :id="chartUniqueId"
    class="line-charts"
  ></div>
</template>

<script>
import { createGuid } from '../../utils/index'
export default {
  name: 'LineChart',
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    },
    option: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      chartUniqueId: 'line' + createGuid(),
      options: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          }
        },
        grid: {
          left: '70',
          right: '75',
          bottom: '30',
          top: '30'
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLabel: {
            color: '#ffffff',
            fontSize: 16,
            margin: 10
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#32C5FF'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          minInterval: 0,
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
          }
        },
        series: [
          {
            data: [],
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
              color: '#F7B500'
            }
          }
        ],
        ...this.option
      },
      chart: null
    }
  },
  watch: {
    data: {
      handler(old, newval) {
        this.initChart()
      }
    },
    option: {
      handler(old, newval) {
        this.initChart()
      }
    }
  },
  mounted() {
    this.initChart()
  },
  created() {
    /*  if(this.$props.data&&this.$props.data.sData2)
     {

     } */
  },
  beforeDestroy() {
    this.chart && this.chart.dispose()
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(
        document.getElementById(this.chartUniqueId),
        'light'
      )
      this.options.xAxis.data = []
      this.options.series[0].data = []

      if (this.data) {
        // x轴
        // 超过7个，显示头尾。小于等于7,全部显示
        if (this.data.xData && this.data.xData.length > 0) {
          this.options.xAxis.data = this.data.xData
          if (this.data.xData.length > 7) {
            this.options.xAxis.axisLabel.interval = 100000
            this.options.xAxis.axisLabel.showMinLabel = true
            this.options.xAxis.axisLabel.showMaxLabel = true
          }
        }
        // y轴
        // 顶多显示5行
        if (this.data.sData && this.data.sData.length > 0) {
          this.options.series[0].data = this.data.sData
          const max = Math.max(...this.data.sData)
          if (max) {
            this.options.yAxis.minInterval = Math.ceil((max / 4) * 100) / 100
          }
        }
        //
        if (this.data.sData2 && this.data.sData2.length > 0) {
          if (this.options.series.length > 1) {
            this.options.series.pop()
          }
          this.options.series.push({
            data: this.data.sData2,
            type: 'line',
            smooth: false,
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              color: '#FF0000'
            }
          })
          console.log('sssssss', this.options)
        } else {
          if (this.options.series.length > 1) {
            this.options.series.pop()
          }
        }
      }

      this.chart.setOption(this.options, true)
    }
  }
}
</script>
<style scoped>
.line-charts {
  width: 100%;
  height: 100%;
}
</style>
