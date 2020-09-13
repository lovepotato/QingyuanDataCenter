<template>
  <div :id="chartUniqueId" class="bar-charts">
  </div>
</template>

<script>
import { createGuid } from '../../utils/index'
export default {
  name: 'BarChart',
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
      chartUniqueId: 'bar' + createGuid(),
      options: {
        grid: {
          left: '170',
          right: '75',
          bottom: '30',
          top: '30'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          }
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            margin: 5,
            color: '#32C5FF',
            textStyle: {
              fontSize: '16'
            }
          },
          splitNumber: 5,
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dash',
              color: '#32C5FF'
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'category',
          margin: 17,
          inverse: true,
          axisLabel: {
            textStyle: {
              color: '#fff',
              fontSize: '16'
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#32C5FF',
              width: 0.5
            }
          },
          data: []
        },
        series: [{
          name: '值',
          type: 'bar',
          zlevel: 1,
          xAxisIndex: 0,
          barWidth: 23,
          color: '#0091FF',
          data: []
        }
        ]
      },
      chart: null
    }
  },
  mounted() {
    this.initPieChart()
  },
  beforeDestroy() {},
  methods: {
    // 初始化饼图
    initPieChart() {
      this.chart = this.$echarts.init(document.getElementById(this.chartUniqueId))
      this.options.series[0].data = this.data.xData
      this.options.yAxis.data = this.data.yData
      this.chart.setOption(this.options)
    }
  }
}
</script>
<style scoped>
.bar-charts{
  width: 100%;
  height: 100%;
}
</style>
