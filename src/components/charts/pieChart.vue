<template>
  <div :id="pieChartUniqueId" class="pie-charts">
  </div>
</template>

<script>
import { Pie } from '@antv/g2plot'
import { createGuid } from '../../utils/index'
export default {
  name: 'PieChart',
  props: {
    piechartData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      pieChartUniqueId: 'pie' + createGuid()
    }
  },
  mounted() {
    this.initPieChart()
  },
  beforeDestroy() {},
  methods: {
    // 初始化饼图
    initPieChart() {
      const piePlot = new Pie(document.getElementById(this.pieChartUniqueId), {
        forceFit: false,
        radius: 0.8,
        data: this.piechartData,
        angleField: 'value',
        colorField: 'type',
        label: {
          visible: true,
          type: 'outer'
        }
      })
      piePlot.render()
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
