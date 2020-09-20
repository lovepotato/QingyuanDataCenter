<template>
  <div class="aged-details-baseinfo">
    <div
      class="user-title"
      style="clean: both"
    >{{ "基础信息" }}</div>
    <div class="baseinfo-form">
      <!-- 待组件化 -->
      <template v-if="type !== 2">
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
      </template>
      <template v-else>
        <other-base-info
          :base-info="basedata"
          :familydata="familydata"
        >
        </other-base-info>
        <other-health-status
          :healthdata="healthdata"
        >
        </other-health-status>
        <other-insurance
          :medicalinsurance="medicalinsurance"
        >
        </other-insurance>
      </template>
    </div>
  </div>
</template>

<script>
import baseInfo from './baseinfo/baseInfo'
import listStatus from './baseinfo/listStatus'
import healthStatus from './baseinfo/healthStatus'
import selfLife from './baseinfo/selfLife'
import otherBaseInfo from './baseinfo/otherBaseInfo/otherBaseInfo'
import otherHealthStatus from './baseinfo/otherBaseInfo/otherHealthStatus'
import otherInsurance from './baseinfo/otherBaseInfo/otherInsurance'

export default {
  name: 'AgedDetailsBaseinfo',
  components: {
    baseInfo,
    listStatus,
    healthStatus,
    selfLife,
    otherBaseInfo,
    otherHealthStatus,
    otherInsurance
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
    },
    basedata: {
      type: Object,
      default() {
        return {}
      }
    },
    familydata: {
      type: Object,
      default() {
        return {}
      }
    },
    healthdata: {
      type: Object,
      default() {
        return {}
      }
    },
    medicalinsurance: {
      type: Object,
      default() {
        return {}
      }
    },
    type: {
      type: [Number, String],
      default() {
        return 0
      }
    }
  },
  data() {
    return {}
  }
}
</script>
