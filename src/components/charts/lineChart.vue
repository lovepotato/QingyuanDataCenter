<template>
  <div :id="chartUniqueId" class="line-charts"></div>
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
            margin: 10,
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
          data: [],
          type: 'line',
          smooth: true,
          symbol: "none",
          lineStyle: {
            color: "#F7B500"
          }
        }],
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
  beforeDestroy() {
    this.chart && this.chart.dispose()
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(document.getElementById(this.chartUniqueId), 'light')
      if (this.data) {
        if (this.data.xData)
          this.options.xAxis.data = this.data.xData
        if (this.data.sData)
          this.options.series[0].data = this.data.sData
      }
      this.chart.setOption(this.options)
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
