<template>
  <div :id="chartUniqueId" class="pie-charts">
  </div>
</template>

<script>
import { createGuid } from '../../utils/index'
export default {
  name: 'PieChart',
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
    const colorList = ['#D5FF7F', '#32C5FF', '#32C5FF', ' #5C6CF2', '#EDAE5D ', '#FD5D5D ', '#665BFF']
    return {
      chartUniqueId: 'pie' + createGuid(),
      options: {
        legend: {
          top: '75%',
          itemWidth: 10,
          itemHeight: 10,
          icon: 'circle',
          textStyle: {
            color: '#fff',
            fontSize: 18
          }
        },
        series: [{
          itemStyle: {
            normal: {
              color: (params) => {
                return this.option.colorList ? this.option.colorList[params.dataIndex] : colorList[params.dataIndex]
              }
            }
          },
          type: 'pie',
          radius: ['0%', '65%'],
          center: ['50%', '35%'],
          label: {
            normal: {
              position: 'outer'
            }
          },
          data: []
        }],
        ...this.option
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
      this.options.series[0].data = this.data
      this.chart.setOption(this.options)
    }
  }
}
</script>
<style scoped>
.pie-charts{
  width: 100%;
  height: 100%;
}
</style>
