<template>
  <div class="main-container-box">
    <div class="header-block">
      <div :class="getClassIsActivate(0)" @click="onTabsClick(0)">
        <div class="oldman-info-value">{{ pageModel.total_population }}</div>
        <div class="oldman-info-label">{{ pageModel.total_population_label }}</div>
      </div>
      <div :class="getClassIsActivate(1)" @click="onTabsClick(1)">
        <div class="oldman-info-value">{{ pageModel.oldman_count }}</div>
        <div class="oldman-info-label">{{ pageModel.oldman_count_label }}</div>
      </div>
      <div :class="getClassIsActivate(2)" @click="onTabsClick(2)">
        <div class="oldman-info-value">{{ pageModel.foreigner }}</div>
        <div class="oldman-info-label">{{ pageModel.foreigner_label }}</div>
      </div>
      <div :class="getClassIsActivate(3)" @click="onTabsClick(3)">
        <div class="oldman-info-value">{{ pageModel.advanced_age }}</div>
        <div class="oldman-info-label">{{ pageModel.advanced_age_label }}</div>
      </div>
      <div :class="getClassIsActivate(4)" @click="onTabsClick(4)">
        <div class="oldman-info-value">{{ pageModel.empty_nester }}</div>
        <div class="oldman-info-label">{{ pageModel.empty_nester_label }}</div>
      </div>
      <div :class="getClassIsActivate(5)" @click="onTabsClick(5)">
        <div class="oldman-info-value">{{ pageModel.poor_oldman }}</div>
        <div class="oldman-info-label">{{ pageModel.poor_oldman_label }}</div>
      </div>
      <div :class="getClassIsActivate(6)" @click="onTabsClick(6)">
        <div class="oldman-info-value">{{ pageModel.benefits_oldman }}</div>
        <div class="oldman-info-label">{{ pageModel.benefits_oldman_label }}</div>
      </div>
      <div :class="getClassIsActivate(7)" @click="onTabsClick(7)">
        <div class="oldman-info-value">{{ pageModel.loss_oldman }}</div>
        <div class="oldman-info-label">{{ pageModel.loss_oldman_label }}</div>
      </div>
    </div>
    <div class="oldman-info-main">
      <div id="bar_count" :style="{width: '100%', height: '355px'}"></div>
    </div>
    <div class="body-block">
      <div class="oldClassify-item">
        <div class="oldClassify-info-item">
          <div class="oldClassify-info-item-title">老人性别分布</div>
          <div class="oldClassify-info-item-main">
            <!--  <div id="charts_pie1" :style="{width: '520px', height: '422px',marginTop:'-20px'}"></div> -->
            <pie-chart
              :option="oldmanGenderOption"
              :data="oldmanGenderData"
              v-if="oldmanGenderData"
              :style="{width: '520px', height: '422px'}"
            ></pie-chart>
          </div>
        </div>
        <div class="oldClassify-info-item">
          <div class="oldClassify-info-item-title">老人年龄分布</div>
          <div class="oldClassify-info-item-main">
            <pie-chart
              :option="oldmanAgeOption"
              :data="oldmanAgeData"
              v-if="oldmanAgeData"
              :style="{width: '520px', height: '422px'}"
            ></pie-chart>
          </div>
        </div>
        <div class="oldClassify-info-item">
          <div class="oldClassify-info-item-title">本市和外埠户籍分布</div>
          <div class="oldClassify-info-item-main">
            <pie-chart
              :option="localityForeignerOption"
              :data="localityForeignerData"
              v-if="localityForeignerData"
              :style="{width: '520px', height: '422px'}"
            ></pie-chart>
          </div>
        </div>
        <div class="oldClassify-info-item">
          <div class="oldClassify-info-item-title">能力等级分布</div>
          <div class="oldClassify-info-item-main">
            <pie-chart
              :option="degreeOfAbilityOption"
              :data="degreeOfAbilityData"
              v-if="degreeOfAbilityData"
              :style="{width: '520px', height: '422px'}"
            ></pie-chart>
          </div>
        </div>
        <div class="oldClassify-info-item">
          <div class="oldClassify-info-item-title">医保类型分布</div>
          <div class="oldClassify-info-item-main">
            <pie-chart
              :option="healthInsuranceOption"
              :data="healthInsuranceData"
              v-if="healthInsuranceData"
              :style="{width: '520px', height: '422px'}"
            ></pie-chart>
          </div>
        </div>
      </div>
      <div class="disease-rank">
        <div class="disease-rank-title">
          常见疾病种类排行
          <span class="disease-rank-title-fontsize">(TOP8)</span>
        </div>
        <div
          class="disease-rank-list"
          v-for="(item, index) in pageModel.common_diseases"
          :key="index"
        >
          <span :class="'disease-rank-icon icon-num'+(index+1)" v-if="index<3"></span>
          <span class="disease-rank-icon" v-if="index>=3">
            <span class="icon-num">{{ index+1 }}</span>
          </span>
          <span class="disease-name">{{ item.name }}</span>
          <span class="disease-num">{{ item.value }}</span>
        </div>
      </div>
    </div>
    <div class="screen-link">
      <div class="screen-link-btn" @click="onSearch">高级筛选</div>
    </div>
  </div>
</template>

<script>
import pieChart from '../../components/charts/pieChart'
export default {
  components: {
    pieChart,
  },
  name: 'OldClassify',
  data() {
    return {
      overtime: null,
      pageModel: {},
      tabs_active: 0,
      tabs_active_name: ['total_population_data', 'oldman_count_data', 'foreigner_data', 'advanced_age_data', 'empty_nester_data', 'poor_oldman_data', 'benefits_oldman_data', 'loss_oldman_data'],

      oldmanGenderOption: {
        color: ['#0091FF', '#00FFB4']
      },

      oldmanAgeOption: {
        color: ['#665BFF', '#F7F100', '#FD5D5D', '#C431FF']
      },
      localityForeignerOption: {
        color: ['#8367E7', '#FFD768 ']
      },
      degreeOfAbilityOption: {
        color: ['#1DBFFF', '#2AFFCF', '#C1F700', '#FF9132']
      },
      healthInsuranceOption: {
        color: ['#D5FF7F', '#32C5FF', '#A901FD', '#5C6CF2', '#EDAE5D']
      },

      oldmanGenderData: [],
      oldmanAgeData: [],
      localityForeignerData: [],
      degreeOfAbilityData: [],
      healthInsuranceData: [],

    }
  },
  mounted() {

  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.http
        .post(`/communityoldmanbigdataanalyze/oldmanclassify`)
        .then((res) => {
          // console.log('res', res)
          if (res.code === 0) {
            this.pageModel = res.data
            this.onTabsClick(0)
            this.loadPie();
          }
        })
    },
    timer() {
      const _this = this;
      if (this.overtime) {
        clearTimeout(this.overtime)
      }
      this.overtime = setTimeout(() => {
        let active = _this.tabs_active + 1
        if (active >= _this.tabs_active_name.length) {
          active = 0;
        }
        _this.tabs_active = active;
        _this.onTabsClick(_this.tabs_active)
      }, 5000);
    },
    loadPie() {
      // 老人性别分布
      this.oldmanGenderData = this.pageModel.oldman_sex;
      // 老人年龄分布
      this.oldmanAgeData = this.pageModel.oldman_age;
      // 本市和外埠户籍分布
      this.localityForeignerData = this.pageModel.locality_foreigner;
      // 能力等级分布 
      this.degreeOfAbilityData = this.pageModel.degree_of_ability_data_list;
      // 医保类型分布
      this.healthInsuranceData = this.pageModel.health_insurance;

    },
    // tabs点击事件
    onTabsClick(idx) {
      this.tabs_active = idx
      const datas = this.pageModel[this.tabs_active_name[idx]]
      if (idx == 0) {
        const axisData = Array.from(datas).map(
          (w) => w.name
        )
        const seriesData = Array.from(datas).map(
          (w) => w.value
        )
        const series = [
          {
            name: '人数',
            type: 'bar',
            label: {
              show: true,
              position: 'outside',
              color: '#ffffff',
              fontSize: 18
            },
            barWidth: 60,
            data: seriesData
          }
        ]
        this.drawBar(axisData, series)
      }
      else {
        const axisDatas = Array.from(datas.female).map(
          (w) => w.name
        )
        const maleDatas = Array.from(datas.male).map(
          (w) => w.value
        )
        const femaleDatas = Array.from(datas.female).map(
          (w) => w.value
        )
        const totalDatas = [];
        for (let index = 0; index < maleDatas.length; index++) {
          totalDatas.push(maleDatas[index] + femaleDatas[index]);
        }
        const series = [
          {
            name: '男',
            type: 'bar',
            stack: '总量',
            label: {
              show: false,
              position: 'outside',
              color: '#ffffff',
              fontSize: 18
            },
            barWidth: 60,
            data: maleDatas
          },
          {
            color: '#00FFB4',
            name: '女',
            type: 'bar',
            stack: '总量',
            label: {
              show: false,
              position: 'outside',
              color: '#ffffff',
              fontSize: 18
            },
            barWidth: 60,
            data: femaleDatas
          },
          {
            color: 'transparent',
            name: '总计',
            type: 'bar',
            stack: '总计',
            barGap: '-100%',
            smooth: true,
            label: {
              show: true,
              position: 'top',
              color: '#ffffff',
              fontSize: 18
            },
            barWidth: 60,
            data: totalDatas,
          }
        ]
        this.drawBar(axisDatas, series)
      }
      // 设置下一次切换
      this.timer();
    },
    onSearch() {
      this.$router.push('advancedFilter');
    },
    // tabs激活的样式
    getClassIsActivate(idx) {
      if (this.tabs_active === idx) {
        return 'oldman-info-item oldman-info-item-active'
      } else {
        return 'oldman-info-item '
      }
    },
    // 柱状图
    drawBar(axisData, series) {
      const barCount = this.$echarts.init(document.getElementById('bar_count'))
      barCount.clear();
      barCount.setOption({
      /*   dataZoom: [{
          type: 'slider',
          start: 0,
          end: 20
        }, {
          type: 'inside',
          start: 0,
          end: 20
        }], */
        color: ['#0091FF'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          backgroundColor: ['#172F6A'],
          borderColor: ['#35E7FF'],
          borderWidth: 1,
          trigger: 'axis'
        },
        grid: {
          left: 80,
          right: 0
        },
        xAxis: [
          {
            data: axisData,
            axisLine: {
              lineStyle: {
                width: 1,
                color: '#32C5FF'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#ffffff',
              fontSize: 16
            },
            offset: 10
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                width: 0,
                color: '#32C5FF'
              }
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
            offset: 10
          }
        ],
        series: series
      }, {
        notMerge: true,
      })
    },
  },
  watch: {

  }
}
</script>

<style lang="scss">
.main-container-box {
  width: 100%;
  height: 100%;
  .header-block {
    height: 143px;
    display: flex;
    margin: 20px 115px 20px 40px;
    .oldman-info-item {
      position: relative;
      width: 425px;
      height: 100%;
      padding: 20px 0;
      .oldman-info-label {
        font-size: 26px;
        color: #35e7ff;
        letter-spacing: -0.02px;
        text-align: center;
        margin-top: 6px;
      }
      .oldman-info-value {
        font-size: 45px;
        color: #ffffff;
        letter-spacing: -0.02px;
        text-align: center;
      }
      &::after {
        content: "";
        position: absolute;
        width: 3px;
        height: 98px;
        background-image: url("../../assets/imgs/分割线.png");
        right: 0;
        top: 20px;
      }
      &:last-child::after {
        display: none;
      }
    }
    .oldman-info-item-active {
      /*   margin-left: -5px; */
      background-image: url("../../assets/imgs/老人分类-选中框.png");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      width: 425px;
      height: 143px;
    }
  }
  .oldman-info-main {
    margin: 10px 115px 10px 40px;
  }
  .body-block {
    display: flex;
    width: calc(100% - 59px - 65px);
    margin-left: 40px;
    margin-right: 130px;
    margin-top: 40px;
    height: 928px;
    .oldClassify-item {
      width: 2879px;
      height: 505px;
      background-image: url("../../assets/imgs/老人分类-Group1.png");
      display: flex;
      .oldClassify-info-item {
        position: relative;
        height: 100%;
        padding: 10px 10px 0;
        margin: 5px 5px 0;
        .oldClassify-info-item-title {
          padding: 20px;
          font-size: 26px;
          color: #35e7ff;
          letter-spacing: 4px;
        }
        .oldClassify-info-item-main {
          padding: 0 10px 10px;
        }
      }
    }
    .disease-rank {
      width: 406px;
      height: 505px;
      margin-left: 30px;
      background-image: url("../../assets/imgs/老人分类-Group2.png");
      .disease-rank-title {
        padding: 30px 0 20px 30px;
        font-size: 26px;
        color: #35e7ff;
        letter-spacing: 4px;
        .disease-rank-title-fontsize {
          font-size: 16px;
        }
      }
      .disease-rank-list {
        padding: 20px 30px 5px 30px;
        font-size: 22px;
        color: #ffffff;
        display: flex;
        justify-content: space-between;
        .disease-rank-icon {
          width: 40px;
          height: 25px;
          font-size: 14px;
          text-align: center;
          .icon-num {
            width: 20px;
            height: 20px;
            display: grid;
            background: #224485;
            border-radius: 100%;
            line-height: 20px;
            margin-top: 3px;
          }
        }
        .icon-num1 {
          background-image: url("../../assets/imgs/第一.png");
          background-repeat: no-repeat;
        }
        .icon-num2 {
          background-image: url("../../assets/imgs/第二.png");
          background-repeat: no-repeat;
        }
        .icon-num3 {
          background-image: url("../../assets/imgs/第三.png");
          background-repeat: no-repeat;
        }
        .disease-name {
          width: 320px;
          text-align: left;
        }
        .disease-num {
          color: #32c5ff;
        }
      }
    }
  }
  .screen-link {
    width: 74px;
    height: 935px;
    position: absolute;
    right: 0;
    top: 100px;
    /*  background: #fff; */
    background-image: url("../../assets/imgs/高级筛选按钮.png");

    &-btn {
      font-size: 26px;
      color: #35e7ff;
      width: 50px;
      line-height: 59px;
      text-align: center;
      margin-left: 12px;
      margin-right: 12px;
      margin-top: 346px;
      cursor: pointer;
    }
  }
}
</style>
