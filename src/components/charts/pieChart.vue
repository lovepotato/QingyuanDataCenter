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
    const color = ['#D5FF7F', '#32C5FF', '#32C5FF', ' #5C6CF2', '#EDAE5D ', '#FD5D5D ', '#665BFF']
    return {
      chartUniqueId: 'pie' + createGuid(),
      options: {
        legend: {
          top: '80%',
          itemWidth: 10,
          itemHeight: 10,
          icon: 'circle',
          textStyle: {
            color: '#fff',
            fontSize: 18,
            padding: [
              0, // 上
              20, // 右
              0, // 下
              0 // 左
            ]
          }
        },
        series: [{
          itemStyle: {
            normal: {
              color: (params) => {
                return this.option.color ? this.option.color[params.dataIndex] : color[params.dataIndex]
              }
            }
          },
          type: 'pie',
          radius: ['0%', '50%'],
          center: ['50%', '40%'],
          label: {
            color: '#fff',
            fontSize: 20,
            formatter: '{c}\n{d}%',
            padding: [
              0, // 上
              0, // 右
              15, // 下
              0 // 左
            ]
          },
          data: []
        }],
        ...this.option
      },
      chart: null
    }
  },
  watch: {
    data: {
      handler(old, newval) {
        this.initPieChart()
      }
    },
    option: {
      handler(old, newval) {
        this.initPieChart()
      }
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
      this.options.series[0].data = this.data.filter(item => item.value > 0)
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
