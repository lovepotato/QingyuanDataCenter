<template>
  <div
    class="container"
    v-loading="detailLoading"
  >
    <div class="aged-details-content">
      <base-info-wrapper
        :base-info="base_info.data"
        :data-dict="data_dict.data"
        :ref="base_info.code"
      ></base-info-wrapper>
      <ability-assess
        :ability-evaluation="ability_evaluation.data"
        :ref="ability_evaluation.code"
      ></ability-assess>
      <monitor
        :intelligent-monitoring="intelligent_monitoring.data"
        :ref="intelligent_monitoring.code"
      ></monitor>
      <physical-report
        :physical-fitness-assessment="physical_fitness_assessment.url"
        :ref="physical_fitness_assessment.code"
      ></physical-report>
      <health-report
        :healthmonitoring-report="healthmonitoring_report.url"
        :ref="healthmonitoring_report.code"
      ></health-report>
    </div>
  </div>
</template>

<script>
import baseInfoWrapper from './baseInfoWrapper'
import abilityAssess from './abilityAssess'
import monitor from './monitor'
import physicalReport from './physicalReport'
import healthReport from './healthReport'

export default {
  name: 'AgedDetails',
  components: {
    baseInfoWrapper,
    abilityAssess,
    monitor,
    physicalReport,
    healthReport
  },
  props: {
    currentId: {
      type: [String, Number],
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      agedDetail: {},
      detailLoading: false,
      base_info: { data: {}},
      ability_evaluation: {},
      data_dict: { data: {}},
      healthmonitoring_report: {},
      intelligent_monitoring: {},
      physical_fitness_assessment: {},
      currentScrollId: ''
    }
  },
  computed: {
    copyAgedDetail() {
      const temp = { ...this.agedDetail }
      delete temp.data_dict
      return temp
    }
  },
  watch: {
    currentScrollId(val) {
      if (!val) return
      this.scrollTo(val)
    },
    currentId: {
      immediate: true,
      handler(val) {
        if (val) {
          this.getAgedDetail(val)
        }
      }
    }
  },
  methods: {
    getAgedDetail(id) {
      this.detailLoading = false
      this.http
        .post(`/elderlyrecordscentre/elderly_detail`, { id })
        .then((res) => {
          if (res.code === 0) {
            this.agedDetail = res.data
            const {
              base_info,
              ability_evaluation,
              data_dict,
              healthmonitoring_report,
              intelligent_monitoring,
              physical_fitness_assessment
            } = res.data
            this.base_info = base_info
            this.ability_evaluation = ability_evaluation
            this.data_dict = data_dict
            this.healthmonitoring_report = healthmonitoring_report
            this.intelligent_monitoring = intelligent_monitoring
            this.physical_fitness_assessment = physical_fitness_assessment
            this.currentScrollId = base_info.code
          } else {
            this.$notify.error({
              title: '错误',
              message: `请求失败，${res.msg}`
            })
          }
        })
        .finally(() => {
          this.detailLoading = false
        })
    },
    errorHandler() {
      return true
    },
    scrollTo(ref) {
      this.$nextTick(() => {
        if (!this.$refs[ref] || !this.$refs[ref].$el) return
        window.scrollTo({
          top: this.$refs[ref].$el.offsetTop - 100,
          behavior: 'smooth'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
// .app-view {
//   background-color: transparent !important;
//   padding: 15px 5px !important;
// }
</style>

<style lang="scss" scoped>
.header-container {
  background-color: #fff;
  margin-bottom: 8px;
}

.name {
  font-family: PingFangSC-Semibold;
  font-size: 20px;
  color: #000000;
  margin-left: 10px;
}

.phone {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #000000;
  margin-left: 13px;
}

.aged-details-content {
  background-color: transparent;
}
</style>
