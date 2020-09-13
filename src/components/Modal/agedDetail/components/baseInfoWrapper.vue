<template>
  <div class="aged-details-baseinfo">
    <div
      class="user-title"
      style="clean: both"
    >{{ "基础信息" }}</div>
    <div class="baseinfo-form">
      <!-- 待组件化 -->
      <base-info
        :base-info="baseInfo"
        :data-dict="dataDict"
      ></base-info>
      <list-status
        :base-info="baseInfo"
        :data-dict="dataDict"
      ></list-status>
      <self-life
        :base-info="baseInfo"
        :data-dict="dataDict"
      ></self-life>
      <health-status
        :base-info="baseInfo"
        :data-dict="dataDict"
      ></health-status>
    </div>
  </div>
</template>

<script>
import baseInfo from './baseinfo/baseInfo'
import listStatus from './baseinfo/listStatus'
import healthStatus from './baseinfo/healthStatus'
import selfLife from './baseinfo/selfLife'

export default {
  name: 'AgedDetailsBaseinfo',
  components: {
    baseInfo,
    listStatus,
    healthStatus,
    selfLife
  },
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {}
      }
    },
    dataDict: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  }
}
</script>
