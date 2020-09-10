<template>
  <div :id="chartUniqueId" class="ring-charts">
  </div>
</template>

<script>
import { createGuid } from '../../utils/index'
// const colorList = ['#F25C5D', '#EDAE5D', '#F93F00', '#00FFF0', '#04C8F9 ', '#A901FD']
export default {
  name: 'RingChart',
  props: {
    data: {
      type: Array,
      default() {
        return []
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
      chartUniqueId: 'ring' + createGuid(),
      options: {
        // backgroundColor: '#0A1934',
        ...this.option,
        series: [{
          itemStyle: {
            normal: {
              borderColor: '#0A1934',
              borderWidth: 5,
              color: (params) => {
                return this.option.colorList[params.dataIndex]
              }
            }
          },
          type: 'pie',
          radius: ['40%', '80%'],
          center: ['50%', '35%'],
          label: { show: false },
          data: []
        }, {
          itemStyle: {
            normal: {
              borderColor: '#0A1934',
              borderWidth: 5,
              color: (params) => {
                return this.option.colorList[params.dataIndex]
              }
            }
          },
          type: 'pie',
          silent: true, // 取消高亮
          label: { show: false },
          radius: ['40%', '80%'],
          center: ['50%', '35%'],

          labelLine: {
            normal: {
              length: 30,
              length2: 0,
              lineStyle: {
                color: 'transparent'
              }
            }
          },
          data: [],
          z: -1
        }, {
          itemStyle: {
            normal: {
              borderColor: '#0A1934',
              borderWidth: 5,
              color: (params) => {
                return this.option.colorList[params.dataIndex]
              }
            }
          },
          type: 'pie',
          silent: true, // 取消高亮
          label: { show: false },
          radius: ['40%', '80%'],
          center: ['50%', '35%'],
          labelLine: {
            normal: {
              length: 30,
              length2: 0,
              lineStyle: {
                color: 'transparent'
              }
            }
          },
          data: [],
          z: -1
        }]
      },
      chart: null
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
      this.chart = this.$echarts.init(document.getElementById(this.chartUniqueId))
      this.options.series[0].data = this.data
      this.options.series[1].data = this.data
      this.options.series[2].data = this.data
      this.chart.setOption(this.options)
    }
  }
}
</script>
<style scoped>
.ring-charts{
  width: 100%;
  height: 100%;
}
</style>
