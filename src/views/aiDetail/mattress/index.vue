<template>
  <!-- 智能床垫 -->
  <div class="main-container-box-mattress">
    <!-- 左 -->
    <div class="left-contaier">
      <div class="mattress-date">
        <div class="mattress-info-date">
          <div class="mattress-info-item">
            <div class="mattress-info-value">{{ leftModel.inbed }}</div>
            <div class="mattress-info-label">在床人数</div>
          </div>
          <div class="mattress-info-item">
            <div class="mattress-info-value">{{ leftModel.outbed }}</div>
            <div class="mattress-info-label">离床未归</div>
          </div>
          <div class="mattress-info-item">
            <div class="mattress-info-value">{{ leftModel.offline }}</div>
            <div class="mattress-info-label">设备下线</div>
          </div>
          <div class="mattress-info-item">
            <div class="mattress-info-value">{{ leftModel.supervise }}</div>
            <div class="mattress-info-label">检测总数</div>
          </div>
        </div>

        <div class="mattress-info-number">
          <div class="mattress-info-item">
            <div class="mattress-info-value">{{ leftModel.warningCount }}</div>
            <div class="mattress-info-label">预警总数</div>
          </div>
          <div class="mattress-info-item">
            <div class="mattress-info-value">{{ leftModel.dispose }}</div>
            <div class="mattress-info-label">已处理</div>
          </div>
          <div class="mattress-info-item">
            <div class="mattress-info-value">{{ leftModel.undispose }}</div>
            <div class="mattress-info-label">未处理</div>
          </div>
        </div>

        <div class="mattress-info-rate">
          <div class="process-rate">
            <el-progress
              type="circle"
              :percentage="disposeRateInt"
              :stroke-width="20"
              :width="142"
              :show-text="false"
            ></el-progress>
            <div class="rate">
              <div class="title">{{ leftModel.disposeRate }}</div>
              <div class="desc">处理率</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mattress-type">
        <div class="mattress-type-title">预警类型分布</div>
        <div class="mattress-type-main">
          <pie-chart
            :option="warningTypeDistributeOption"
            :data="warningTypeDistributeData"
            v-if="warningTypeDistributeData"
            :style="{ width: '726px', height: '350px' }"
          ></pie-chart>
          <!-- <div id="charts_pie1" :style="{width: '726px', height: '350px'}"></div> -->
        </div>
      </div>
    </div>
    <!-- 右 -->
    <div class="right-contaier">
      <div class="arrival-button arrival-left">
        <img
          src="../../../assets/imgs/jiantou-pre-可点击.png"
          width="100%"
          @click="onPrev"
          v-if="carouselActive != 1"
        />
        <img
          src="../../../assets/imgs/jiantou-pre-不可点击.png"
          width="100%"
          v-if="carouselActive == 1"
          style="cursor: no-drop"
        />
      </div>
      <div class="arrival-button arrival-right">
        <img
          src="../../../assets/imgs/jiantou-next-可点击.png"
          width="100%"
          @click="onNext"
          v-if="carouselActive != pagingModel.totalPages"
        />
        <img
          src="../../../assets/imgs/jiantou-next-不可点击.png"
          width="100%"
          v-if="carouselActive == pagingModel.totalPages"
          style="cursor: no-drop"
        />
      </div>

      <el-carousel
        :interval="5000"
        arrow="never"
        height="1030px"
        ref="mycarousel"
        :autoplay="false"
        :loop="false"
        indicator-position="none"
      >
        <el-carousel-item
          v-for="carouselItem in pagingModel.totalPages"
          :key="carouselItem"
        >
          <div class="mattress-main-list">
            <template v-for="(item, index) in getListData(carouselItem)">
              <div
                class="mattress-main"
                :key="index"
                v-if="index < 10"
                @click="onOpenDialog(item)"
              >
                <div class="mattress-personal-infor">
                  <div class="mattress-photo">
                    <el-image
                      v-if="item.user_img"
                      style="width: 60px; height: 60px"
                      :src="item.user_img | formatImageSrc"
                      fit="cover"
                    >
                    </el-image>
                    <img
                      v-if="!item.user_img"
                      style="width: 60px; height: 60px"
                      src="../../../assets/imgs/头像-圆.png"
                    />
                  </div>
                  <div class="mattress-information">
                    <div>
                      <span class="name">{{ item.user_name }}</span>
                      <span>{{ item.user_sex }}</span>
                      <span>{{ item.user_age }}岁</span>
                    </div>
                    <div style="margin-top: 8px">{{ item.company }}</div>
                  </div>
                  <div class="mattress-state" v-if="item.warning == ''"></div>
                  <div
                    class="mattress-state"
                    v-if="
                      item.warning &&
                        (item.warning == '心率异常' ||
                          item.warning == '心率过低' ||
                          item.warning == '心率过高')
                    "
                  >
                    <span class="icon icon-heart"></span>
                    <span class="color-red">{{ item.warning }}</span>
                  </div>
                  <div
                    class="mattress-state"
                    v-if="item.warning && item.warning == '离床未归'"
                  >
                    <span class="icon icon-outbed"></span>
                    <span class="color-purple">{{ item.warning }}</span>
                  </div>

                  <div
                    class="mattress-state"
                    v-if="
                      item.warning &&
                        (item.warning == '体动过多' || item.warning == '体动过少')
                    "
                  >
                    <span class="icon icon-movement"></span>
                    <span class="color-blue">{{ item.warning }}</span>
                  </div>
                </div>

                <div class="mattress-personal-value">
                  <div class="mattress-info-item">
                    <div class="mattress-info-value">
                      {{ item.bed_data.heart_rate }}
                    </div>
                    <div class="mattress-info-label">心率</div>
                  </div>
                  <div class="mattress-info-item">
                    <div class="mattress-info-value">
                      {{ item.bed_data.breathe }}
                    </div>
                    <div class="mattress-info-label">呼吸</div>
                  </div>
                  <div class="mattress-info-item">
                    <div class="mattress-info-value">
                      {{ item.bed_data.timeStr }}
                    </div>
                    <div class="mattress-info-label">时长</div>
                  </div>
                  <div class="mattress-info-item">
                    <div class="mattress-info-value">
                      <span class="color-orange">{{
                        item.bed_data.quality
                      }}</span>
                    </div>
                    <div class="mattress-info-label">质量</div>
                  </div>
                </div>

                <div class="mattress-personal-sleep">
                  <div class="mattress-personal-title">睡眠质量折线图</div>
                  <div class="mattress-personal-main">
                    <div
                      :id="'charts_line_' + item.id"
                      :style="{ width: '100%', height: '255px' }"
                    ></div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 弹出 -->
    <el-dialog
      :title="dialogItem.user_name + '智能床垫数据报告'"
      :visible.sync="dialogTableVisible"
      class="mattress-el-dialog"
      @closed="onDialogClosed"
      :lock-scroll="false"
    >
      <el-tabs
        v-model="activeName"
        type="card"
        class="tab"
        @tab-click="onTabClick"
      >
        <el-tab-pane label="实时分析" name="real-time-analysis">
          <!--实时分析-->
          <div class="mattress-el-tab">
            <div style="height: 30px"></div>
            <div class="info-date">
              <div class="info-item">
                <div class="info-value">
                  {{ this.dialogModel.realtime_analyze.heat }}
                </div>
                <div class="info-label">当前心率</div>
              </div>
              <div class="info-item">
                <div class="info-value">
                  {{ this.dialogModel.realtime_analyze.heat_avg }}
                </div>
                <div class="info-label">平均心率</div>
              </div>
              <div class="info-item">
                <div class="info-value">
                  {{ this.dialogModel.realtime_analyze.breathe }}
                </div>
                <div class="info-label">当前呼吸</div>
              </div>
              <div class="info-item">
                <div class="info-value">
                  {{ this.dialogModel.realtime_analyze.breathe_avg }}
                </div>
                <div class="info-label">平均呼吸</div>
              </div>
            </div>
            <div class="mattress-el-value">
              <div class="mattress-value-info">
                <div class="mattress-value-title">心率</div>
                <div class="mattress-value-main">
                  <div
                    :id="'charts_line_999'"
                    :style="{ width: '640px', height: '400px' }"
                  ></div>
                  <!--  <line-chart
                    :option="{
                      series: [
                        {
                          type: 'line',
                          smooth: false,
                          symbol: 'circle',
                          symbolSize: 8,
                          itemStyle: {
                            color: '#F7B500',
                          },
                        },
                      ],
                    }"
                    :data="chartHeatData"
                    v-if="chartHeatData"
                    :style="{ width: '640px', height: '400px' }"
                  ></line-chart> -->
                </div>
              </div>
              <div class="mattress-value-info">
                <div class="mattress-value-title">呼吸</div>
                <div class="mattress-value-main">
                  <div
                    :id="'charts_line_998'"
                    :style="{ width: '640px', height: '400px' }"
                  ></div>
                  <!--   <line-chart
                    :option="{
                      series: [
                        {
                          type: 'line',
                          smooth: false,
                          symbol: 'circle',
                          symbolSize: 8,
                          itemStyle: {
                            color: '#20FFCD',
                          },
                        },
                      ],
                    }"
                    :data="chartBreatheData"
                    v-if="chartBreatheData"
                    :style="{ width: '640px', height: '400px' }"
                  ></line-chart> -->
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="日报告" name="daily-report">
          <!--日报告-->
          <div class="mattress-el-tab">
            <div class="date-screen">
              <div class="icon-time"></div>
              <el-date-picker
                v-model="requestData.date"
                type="date"
                class="date-main"
                placeholder="选择日期"
                @change="onDateChange"
                value-format="yyyy-MM-dd"
                align="center"
              ></el-date-picker>
              <el-button
                type="primary"
                @click="loadDailyReport"
                :loading="btnLoading"
              >筛选</el-button>
            </div>
            <div class="info-date">
              <div class="info-item">
                <div class="info-value">
                  {{ this.dialogModel.daily_report.Grade }}
                </div>
                <div class="info-label">睡眠质量</div>
              </div>
              <div class="info-item">
                <div class="info-value">
                  {{ this.dialogModel.daily_report.AllTotalSleepTime }}
                </div>
                <div class="info-label">睡眠时间</div>
              </div>
              <div class="info-item">
                <div class="info-value">
                  {{ this.dialogModel.daily_report.HeartHealthIndex }}
                </div>
                <div class="info-label">心率健康</div>
              </div>
              <div class="info-item">
                <div class="info-value">
                  {{ this.dialogModel.daily_report.BreathingHealthIndex }}
                </div>
                <div class="info-label">呼吸健康</div>
              </div>
              <div class="info-item">
                <div class="info-value">
                  {{ this.dialogModel.daily_report.LeaveBedNumbers }}
                  <span>次</span>
                </div>
                <div class="info-label">离床次数</div>
              </div>
              <div class="info-item">
                <div class="info-value">
                  {{ this.dialogModel.daily_report.BodyMovementNumbers }}
                  <span>次</span>
                </div>
                <div class="info-label">体动次数</div>
              </div>
              <div class="info-item">
                <div class="info-value">
                  {{ this.dialogModel.daily_report.ArrhythmiaConclusion }}
                </div>
                <div class="info-label">心脏健康</div>
              </div>
              <div class="info-item">
                <div class="info-value">
                  {{ this.dialogModel.daily_report.HeartHealthConclusion }}
                </div>
                <div class="info-label">心率不齐</div>
              </div>
            </div>
            <div class="info-number">
              <div class="info-item">
                <div class="info-value">
                  {{ this.dialogModel.daily_report.GoToBedTime }}
                </div>
                <div class="info-label">上床时间</div>
              </div>
              <div class="info-item">
                <div class="info-value">
                  {{ this.dialogModel.daily_report.LeaveBedTime }}
                </div>
                <div class="info-label">起床时间</div>
              </div>
              <div class="info-item">
                <div class="info-value">
                  {{ this.dialogModel.daily_report.HeartbeatRate }}
                  <span>次/分钟</span>
                </div>
                <div class="info-label">平均心率</div>
              </div>
              <div class="info-item">
                <div class="info-value">
                  {{ this.dialogModel.daily_report.BreathingRate }}
                  <span>次/分钟</span>
                </div>
                <div class="info-label">平均呼吸率</div>
              </div>
              <div class="info-item">
                <div class="info-value">
                  {{ this.dialogModel.daily_report.SDBTotalTime }}
                  <span>秒</span>
                </div>
                <div class="info-label">累计呼吸暂停</div>
              </div>
              <div class="info-item">
                <div class="info-value">
                  {{ this.dialogModel.daily_report.SBDNumbers }}
                  <span>次</span>
                </div>
                <div class="info-label">暂停次数</div>
              </div>
            </div>
            <div class="mattress-el-text">
              <span class="color-orange">综合结论：</span>
              {{ this.dialogModel.daily_report.Conclusion }}
            </div>
            <div class="mattress-el-value">
              <div class="mattress-value-info">
                <div class="mattress-value-title">睡眠质量</div>
                <div class="mattress-value-main">
                  <line-chart
                    :option="{
                      // xAxis: xAxisOption,
                      series: [
                        {
                          type: 'line',
                          smooth: false,
                          symbol: 'circle',
                          symbolSize: 8,
                          itemStyle: {
                            color: '#C67CFF',
                          },
                        },
                      ],
                    }"
                    :data="SleepQualityIndexData"
                    v-if="SleepQualityIndexData"
                    :style="{ width: '640px', height: '400px' }"
                  ></line-chart>
                  <!-- <div :id="'charts_line_1011'" :style="{width: '640px', height: '400px'}"></div> -->
                </div>
              </div>
              <div class="mattress-value-info">
                <div class="mattress-value-title">体动指数</div>
                <div class="mattress-value-main">
                  <line-chart
                    :option="{
                      series: [
                        {
                          type: 'line',
                          smooth: false,
                          symbol: 'circle',
                          symbolSize: 8,
                          itemStyle: {
                            color: '#FF5F6A',
                          },
                        },
                      ],
                    }"
                    :data="BodyActivityIndexData"
                    v-if="BodyActivityIndexData"
                    :style="{ width: '640px', height: '400px' }"
                  ></line-chart>
                  <!--    <div :id="'charts_line_1012'" :style="{width: '640px', height: '400px'}"></div> -->
                </div>
              </div>
              <div class="mattress-value-info">
                <div class="mattress-value-title">心率</div>
                <div class="mattress-value-main">
                  <line-chart
                    :option="{
                      // xAxis: xAxisOption,
                      series: [
                        {
                          type: 'line',
                          smooth: false,
                          symbol: 'circle',
                          symbolSize: 8,
                          itemStyle: {
                            color: '#F7B500',
                          },
                        },
                      ],
                    }"
                    :data="HeartbeatRatesData"
                    v-if="HeartbeatRatesData"
                    :style="{ width: '640px', height: '400px' }"
                  ></line-chart>
                  <!-- <div :id="'charts_line_1013'" :style="{width: '640px', height: '400px'}"></div> -->
                </div>
              </div>
              <div class="mattress-value-info">
                <div class="mattress-value-title">呼吸障碍指数</div>
                <div class="mattress-value-main">
                  <line-chart
                    :option="{
                      // xAxis: xAxisOption,
                      series: [
                        {
                          type: 'line',
                          smooth: false,
                          symbol: 'circle',
                          symbolSize: 8,
                          itemStyle: {
                            color: '#20FFCD',
                          },
                        },
                      ],
                    }"
                    :data="OSAHSIndexData"
                    v-if="OSAHSIndexData"
                    :style="{ width: '640px', height: '400px' }"
                  ></line-chart>
                </div>
              </div>
              <div class="mattress-value-info">
                <div class="mattress-value-title">翻身记录</div>
                <div class="mattress-value-main">
                  <line-chart
                    :option="{
                      // xAxis: xAxisOption,
                      series: [
                        {
                          type: 'line',
                          smooth: false,
                          symbol: 'circle',
                          symbolSize: 8,
                          itemStyle: {
                            color: '#D9F700',
                          },
                        },
                      ],
                    }"
                    :data="TurningTimesData"
                    v-if="TurningTimesData"
                    :style="{ width: '640px', height: '400px' }"
                  ></line-chart>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="历史数据" name="historical-data">
          <!--历史数据-->
          <div class="mattress-el-tab">
            <div class="date-screen">
              <div class="icon-time"></div>
              <el-date-picker
                v-model="requestData.daterange_date"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions"
                style="margin-left: 10px"
                @change="onDaterangeChange"
                value-format="yyyy-MM-dd"
              ></el-date-picker>

              <!--    <el-date-picker type="date" class="date-main" placeholder="开始日期"></el-date-picker>
              <span>-</span>
              <el-date-picker type="date" class="date-main" placeholder="结束日期"></el-date-picker>-->
              <el-button
                type="primary"
                style="margin-left: 10px"
                @click="loadHistoryData"
                :loading="btnLoading"
              >筛选</el-button>
            </div>
            <div class="info-datetwo">
              <div class="info-item">
                <div class="info-value">
                  {{ this.dialogModel.history_data.health }}
                </div>
                <div class="info-label">平均健康得分</div>
              </div>
              <div class="info-item">
                <div class="info-value">
                  {{ this.dialogModel.history_data.sleeptime }}
                </div>
                <div class="info-label">平均睡眠时间</div>
              </div>
            </div>
            <div class="mattress-el-value">
              <div class="mattress-value-info">
                <div class="mattress-value-title">健康得分</div>
                <div class="mattress-value-main">
                  <!--  <div :id="'charts_line_1021'" :style="{width: '640px', height: '400px'}"></div> -->
                  <line-chart
                    :option="{
                      // xAxis: xAxisOption,
                      series: [
                        {
                          type: 'line',
                          smooth: false,
                          symbol: 'circle',
                          symbolSize: 8,
                          itemStyle: {
                            color: '#F7B500',
                          },
                        },
                      ],
                    }"
                    :data="healthData"
                    v-if="healthData"
                    :style="{ width: '640px', height: '400px' }"
                  ></line-chart>
                </div>
              </div>
              <div class="mattress-value-info">
                <div class="mattress-value-title">睡眠时长</div>
                <div class="mattress-value-main">
                  <line-chart
                    :option="{
                      //xAxis: xAxisOption,
                      series: [
                        {
                          type: 'line',
                          smooth: false,
                          symbol: 'circle',
                          symbolSize: 8,
                          itemStyle: {
                            color: '#20FFCD ',
                          },
                        },
                      ],
                    }"
                    :data="sleeptimeData"
                    v-if="sleeptimeData"
                    :style="{ width: '640px', height: '400px' }"
                  ></line-chart>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import pieChart from '@/components/charts/pieChart'
import lineChart from '@/components/charts/lineChart'
import { log } from 'video.js'
export default {
  name: 'Matress',
  components: { pieChart, lineChart },
  data() {
    return {
      btnLoading: false,
      leftModel: {},
      rightModel: {},
      dialogModel: {
        realtime_analyze: {
          'heat': '',
          'heat_avg': '',
          'breathe': '',
          'breathe_avg': '',
          'heat_data': [],
          'breathe_data': []
        },
        daily_report: {
          'Grade': '',
          'AllTotalSleepTime': '',
          'BreathingHealthIndex': '',
          'HeartHealthIndex': '',
          'LeaveBedNumbers': '',
          'BodyMovementNumbers': '',
          'ArrhythmiaConclusion': '',
          'HeartHealthConclusion': '',
          'LeaveBedTime': '',
          'GoToBedTime': '',
          'BreathingRate': '',
          'HeartbeatRate': '',
          'SBDNumbers': '',
          'SDBTotalTime': '',
          'Conclusion': '',
          'SleepQualityIndex': [],
          'TurningTimes': [],
          'BodyActivityIndex': [],
          'HeartbeatRates': [],
          'OSAHSIndex': []
        },
        history_data: {
          'health': '',
          'sleeptime': '',
          'sleeptime_data': [],
          'health_data': []
        }

      },
      pagingModel: {
        limit: 10, // 页大小
        currentPage: 1, // 当前页面
        total: 0, // 总条数
        totalPages: 2 // 总页数
      },
      dialogItem: {},

      disposeRateInt: 0,
      carouselActive: 1,
      activeName: 'real-time-analysis',
      dialogTableVisible: false,
      requestData: {
        date: '',
        daterange_date: []
      },
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      warningTypeDistributeOption: {
        color: ['#7467FF', '#FFE87B', '#FFB32F', '#F26363', '#2AFFCF', '#32C5FF'],
        legend: {
          itemWidth: 10,
          itemHeight: 10,
          icon: 'circle',
          orient: 'vertical',
          right: '40px',
          bottom: '82px',
          textStyle: {
            fontSize: 18,
            color: '#fff'
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['0%', '80%'],
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
            }
          }
        ]
      },
      warningTypeDistributeData: [],

      /* 图片数据 */
      chartHeatData: {},
      chartBreatheData: {},
      SleepQualityIndexData: {},
      TurningTimesData: {},
      BodyActivityIndexData: {},
      HeartbeatRatesData: {},
      OSAHSIndexData: {},
      healthData: {},
      sleeptimeData: {},
      xAxisOption: {
        type: 'category',
        axisLabel: {
          color: '#ffffff',
          fontSize: 16,
          margin: 10,
          interval: 100000,
          showMinLabel: true,
          showMaxLabel: true
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#32C5FF'
          }
        },
        axisTick: {
          show: false
        }
      },
      intervalList: []
    }
  },
  watch: {
    rightModel: function() {
      this.$nextTick(function() {
        const _this = this
        Array.from(this.rightModel.dataList).forEach(function(item, index) {
          _this.drawline(item.id, item.quality)
        })
      })
    }
  },
  mounted() {

  },
  created() {
    const date = dayjs()
    this.requestData.date = date.add(-1, 'day').format('YYYY-MM-DD')
    const start_time = date.add(-1, 'week').format('YYYY-MM-DD')
    const end_time = date.format('YYYY-MM-DD')
    this.requestData.daterange_date = [start_time, end_time]
    this.loadData()
  },
  methods: {
    loadData() {
      // 加载左则数据
      this.http
        .post(`/smartbed/index`)
        .then((res) => {
          if (res.code === 0) {
            this.leftModel = res.data
            this.disposeRateInt = parseInt(res.data.disposeRate)

            this.warningTypeDistributeData = Array.from(res.data.warningType_distribute)
          }
        })

      this.loadLeftData()
    },
    loadLeftData(cb = () => {}) {
      // 加载右侧数据
      this.http
        .post(`/smartbed/beddata_list`, { currentPage: this.pagingModel.currentPage, limit: this.pagingModel.limit })
        .then((res) => {
          if (res.code === 0) {
            this.pagingModel.total = res.data.total
            this.pagingModel.totalPages = res.data.totalPages
            this.rightModel = res.data
            this.$nextTick(() => {
              cb()
            })
          }
        })
    },
    drawline(id, datas, options) {
      if (!datas) {
        return
      }
      const axisDatas = Array.from(datas).map(
        // (w) => w.title
        (w) => w.name
      )
      const seriesDatas = Array.from(datas).map(
        // (w) => w.data
        (w) => w.value
      )
      const chartsLine = this.$echarts.init(document.getElementById('charts_line_' + id), 'light')
      let option = {
        grid: {
          top: 60,
          bottom: 60,
          right: '10%',
          left: '10%'
        },
        xAxis: {
          type: 'category',
          data: axisDatas,
          axisLabel: {
            color: '#ffffff',
            fontSize: 16,
            margin: 10
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#32C5FF'
            }
          },
          axisTick: {
            show: false
          }

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
          }
        },
        series: [{
          data: seriesDatas,
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: {
            color: '#F7B500'
          }
        }]
      }

      if (options) {
        option = { ...option, ...options }
      }
      chartsLine.setOption(option)
    },
    drawlineDynamic(id, datas, color) {
      if (!datas || Array.from(datas).length == 0) {
        return
      }
      const axisDatas = Array.from(datas).map(
        (w) => w.name
      )
      const seriesDatas = Array.from(datas).map(
        (w) => Number(w.value)
      )

      /* if (this.data.xData && this.data.xData.length > 0) {
          this.options.xAxis.data = this.data.xData
          if (this.data.xData.length > 7) {
            this.options.xAxis.axisLabel.interval = 100000
            this.options.xAxis.axisLabel.showMinLabel = true
            this.options.xAxis.axisLabel.showMaxLabel = true
          }
        } */

      const chartsLine = this.$echarts.init(document.getElementById('charts_line_' + id), 'light')
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          }
        },
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
            margin: 10
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#32C5FF'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          minInterval: 0,
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
          }
        },
        series: [{
          data: [],
          type: 'line',
          smooth: false,
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: {
            color: color
          }
        }]
      }

      // 顶多显示5行
      const max = Math.max(...seriesDatas)
      if (max) {
        option.yAxis.minInterval = Math.ceil(Math.ceil((max / 4) * 100) / 100)
      }
      chartsLine.setOption(option)

      const len = Array.from(datas).length
      let num = 7
      const axisList = axisDatas.slice(0, num)
      const seriesList = seriesDatas.slice(0, num)

      var _interval = setInterval(function() {
        if (num < len) {
          axisList.push(axisDatas[num])
          seriesList.push(seriesDatas[num])
          if (axisList.length > 7) {
            axisList.shift()
            seriesList.shift()
          }
          chartsLine.setOption({
            xAxis: {
              data: axisList
            },
            series: [{
              data: seriesList
            }]
          })
          num++
        }
      }, 1000)
      if (num >= len) {
        clearInterval(_interval)
      }
      this.intervalList.push(_interval)
    },
    onPrev() {
      this.carouselActive -= 1
      this.pagingModel.currentPage--
      this.loadLeftData(() => {
        this.$refs.mycarousel.prev()
      })
    },
    onNext() {
      this.carouselActive += 1
      this.pagingModel.currentPage++
      this.loadLeftData(() => {
        this.$refs.mycarousel.next()
      })
    },
    onOpenDialog(item) {
      this.dialogTableVisible = true
      this.dialogItem = item
      this.loadRealtime()
      // this.loadDailyReport();
      // this.loadHistoryData();
      // setInterval(this.loadRealtime(), 53000)
    },
    onDialogClosed() {
      this.activeName = 'real-time-analysis'
    },
    onTabClick(e, b, c) {
      switch (this.activeName) {
        case 'real-time-analysis':
          this.loadRealtime()
          break
        case 'daily-report':
          this.loadDailyReport()
          break
        case 'historical-data':
          this.loadHistoryData()
          break
      }
    },
    clearIntervalList() {
      this.intervalList.forEach(w => {
        clearInterval(w)
      })
    },
    // 实时分析
    loadRealtime() {
      this.clearIntervalList()
      this.http
        .post(`/smartbed/realtime_analyze`, {
          imei: this.dialogItem.imei,
          oldmanid: this.dialogItem.id,
          org_str: this.dialogItem.org_str
        })
        .then((res) => {
          if (res.code === 0) {
            this.dialogModel.realtime_analyze = res.data

            const chartHeat = Array.from(res.data.heat_data).map(w => { return { value: w.value, name: dayjs(w.name).format('hh:mm:ss') } })
            this.chartHeatData = { xData: chartHeat.map((w) => w.name), sData: chartHeat.map((w) => w.value) }

            const chartBreathe = Array.from(res.data.breathe_data).map(w => { return { value: w.value, name: dayjs(w.name).format('hh:mm:ss') } })
            this.chartBreatheData = { xData: chartBreathe.map((w) => w.name), sData: chartBreathe.map((w) => w.value) }

            this.drawlineDynamic('999', chartHeat, '#F7B500')
            this.drawlineDynamic('998', chartBreathe, '#20FFCD')
          }
        })
    },
    // 日报告
    loadDailyReport() {
      this.btnLoading = true
      this.http
        .post(`/smartbed/daily_report`, {
          imei: this.dialogItem.imei,
          oldmanid: this.dialogItem.id,
          date: this.requestData.date
        })
        .then((res) => {
          if (res.code === 0) {
            this.dialogModel.daily_report = res.data

            if (res.data.SleepQualityIndex) {
              const SleepQualityIndex = Array.from(res.data.SleepQualityIndex).map(w => { return { value: w.value, name: w.name } })
              this.SleepQualityIndexData = { xData: SleepQualityIndex.map((w) => w.name), sData: SleepQualityIndex.map((w) => w.value) }
            } else {
              this.SleepQualityIndexData = { xData: [], sData: [] }
            }

            if (res.data.BodyActivityIndex) {
              const BodyActivityIndex = Array.from(res.data.BodyActivityIndex).map(w => { return { value: w.value, name: dayjs(w.name).format('hh:mm') } })
              this.BodyActivityIndexData = { xData: BodyActivityIndex.map((w) => w.name), sData: BodyActivityIndex.map((w) => w.value) }
            } else {
              this.BodyActivityIndexData = { xData: [], sData: [] }
            }

            if (res.data.HeartbeatRates) {
              const HeartbeatRates = Array.from(res.data.HeartbeatRates).map(w => { return { value: w.value, name: dayjs(w.name).format('hh:mm') } })
              this.HeartbeatRatesData = { xData: HeartbeatRates.map((w) => w.name), sData: HeartbeatRates.map((w) => w.value) }
            } else {
              this.HeartbeatRatesData = { xData: [], sData: [] }
            }

            if (res.data.OSAHSIndex) {
              const OSAHSIndex = Array.from(res.data.OSAHSIndex).map(w => { return { value: w.value, name: w.name } })
              this.OSAHSIndexData = { xData: OSAHSIndex.map((w) => w.name), sData: OSAHSIndex.map((w) => w.value) }
            } else {
              this.OSAHSIndexData = { xData: [], sData: [] }
            }

            if (res.data.TurningTimes) {
              const TurningTimes = Array.from(res.data.TurningTimes).map(w => { return { value: w.value, name: w.name } })
              this.TurningTimesData = { xData: TurningTimes.map((w) => w.name), sData: TurningTimes.map((w) => w.value) }
            } else {
              this.TurningTimesData = { xData: [], sData: [] }
            }

            this.btnLoading = false
          }
        })
    },
    // 历史记录
    loadHistoryData() {
      this.btnLoading = true
      this.http
        .post(`/smartbed/history_data`, {
          imei: this.dialogItem.imei,
          oldman_id: this.dialogItem.id,
          start_time: this.requestData.daterange_date[0],
          end_time: this.requestData.daterange_date[1]
        })
        .then((res) => {
          if (res.code === 0) {
            this.dialogModel.history_data = res.data

            if (res.data.health_data) {
              const health_data = Array.from(res.data.health_data).map(w => { return { value: w.value, name: w.name } })
              this.healthData = { xData: health_data.map((w) => w.name), sData: health_data.map((w) => w.value) }
            } else {
              this.healthData = { xData: [], sData: [] }
            }

            if (res.data.sleeptime_data) {
              const sleeptime_data = Array.from(res.data.sleeptime_data).map(w => { return { value: w.value, name: w.name } })
              this.sleeptimeData = { xData: sleeptime_data.map((w) => w.name), sData: sleeptime_data.map((w) => w.value) }
            } else {
              this.sleeptimeData = { xData: [], sData: [] }
            }
          }
          this.btnLoading = false
        })
    },
    getListData(currPage) {
      if (!this.rightModel.dataList) {
        return []
      }
      const page = currPage - 1
      const start = page * 10
      const end = start + 10
      return this.rightModel.dataList// .slice(start, end)
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    onDateChange(dates) {
      this.requestData.date = dates
      // loadDailyReport();
    },
    onDaterangeChange(dates) {
      this.requestData.daterange_date = dates
      // loadHistoryData();
    }
  }
}
</script>

<style lang="scss">
//支持scss语法
.main-container-box-mattress {
  width: 100%;
  height: 100%;
  display: flex;
  .left-contaier {
    width: 850px;
    height: 100%;
    background-color: transparent;
    .mattress-date {
      width: 788px;
      height: 520px;
      padding: 30px 0;
      background-image: url("../../../assets/imgs/行为识别Group1.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .mattress-info-date {
        width: 721px;
        height: 122px;
        margin: 0 30px;
        background-image: url("../../../assets/imgs/框-智能床垫1.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        .mattress-info-item {
          width: 100%;
          padding-top: 25px;
          font-size: 32px;
          text-align: center;
          .mattress-info-value {
            font-size: 32px;
            color: #ffffff;
          }
          .mattress-info-label {
            font-size: 21px;
            color: #35e7ff;
            margin-top: 10px;
          }
        }
      }
      .mattress-info-number {
        width: 721px;
        height: 122px;
        display: flex;
        justify-content: space-between;
        margin: 30px;
        .mattress-info-item {
          width: 220px;
          padding-top: 25px;
          font-size: 32px;
          text-align: center;
          background-image: url("../../../assets/imgs/框-智能床垫2.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          .mattress-info-value {
            font-size: 32px;
            color: #ffffff;
          }
          .mattress-info-label {
            font-size: 21px;
            color: #35e7ff;
            margin-top: 10px;
          }
        }
      }
      .mattress-info-rate {
        width: 775px;
        height: 142px;
        margin: 30px auto;
        background-image: url("../../../assets/imgs/处理率底.png");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        .process-rate {
          width: 142px;
          height: 142px;
          margin: 0 auto;
          text-align: center;
          .rate {
            margin-top: -100px;
          }
          .title {
            font-family: "PingFangSC-Medium", "Arial Narrow", Arial, sans-serif;
            color: #c3f72f;
            font-size: 30px;
          }
          .desc {
            color: #ffffff;
            font-size: 16px;
          }
        }
      }
    }
    .mattress-type {
      width: 788px;
      height: 460px;
      background-image: url("../../../assets/imgs/行为识别Group2.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin-top: 20px;
      .mattress-type-title {
        padding: 30px;
        font-size: 24px;
        color: #35e7ff;
      }
      .mattress-type-main {
        padding: 0 30px;
      }
    }
  }
  .right-contaier {
    position: relative;
    width: 2500px;
    height: 100%;
    .arrival-button {
      width: 24px;
      height: 37px;
      position: absolute;
      top: 500px;
      cursor: pointer;
      z-index: 999;
    }
    .arrival-left {
      left: 0;
    }
    .arrival-right {
      right: 0;
    }
    .mattress-main-list {
      width: 2395px;
      height: 1030px;
      display: flex;
      justify-content: left;

      flex-wrap: wrap;
      margin: 0 60px;
      .mattress-main:nth-child(5n) {
        margin-right: 0px;
      }

      .mattress-main {
        margin-right: 20px;
        width: 463px;
        height: 473px;
        border: #35e7ff 2px solid;
        border-radius: 20px;
        .mattress-personal-infor {
          display: flex;
          justify-content: space-around;
          color: #fff;
          padding: 20px;
          .mattress-photo {
            width: 60px;
            height: 60px;
            img {
              border-radius: 100%;
            }
          }
          .mattress-information {
            font-size: 16px;
            line-height: 30px;
            width: 210px;
            .name {
              font-size: 18px;
            }
            span {
              margin-right: 30px;
            }
          }
          .mattress-state {
            width: 120px;
            line-height: 60px;
            font-size: 20px;
            display: flex;
            .icon {
              margin-top: 16px;
              margin-right: 10px;
              width: 28px;
              height: 28px;
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
            .icon-heart {
              background-image: url("../../../assets/imgs/心率.png");
            }
            .icon-outbed {
              background-image: url("../../../assets/imgs/离床.png");
            }
            .icon-movement {
              background-image: url("../../../assets/imgs/体动.png");
            }
          }
        }
        .mattress-personal-value {
          background: #0f417d;
          display: flex;
          justify-content: center;
          .mattress-info-item {
            width: 100%;
            height: 76px;
            text-align: center;
            .mattress-info-value {
              font-size: 20px;
              color: #ffffff;
              margin-top: 12px;
            }
            .mattress-info-label {
              font-size: 16px;
              color: #35e7ff;
              margin-top: 10px;
            }
          }
        }
        .mattress-personal-sleep {
          .mattress-personal-title {
            padding: 20px 20px 0;
            font-size: 18px;
            color: #35e7ff;
          }
          .mattress-personal-main {
            padding: 10px;
          }
        }
      }
    }
  }
  //弹出层样式
  .mattress-el-dialog {
    font-family: PingFangSC-Semibold;
    .el-dialog {
      background: #052467;
      color: #fff;
      width: 1427px;
      .el-dialog__header {
        padding: 40px 43px 10px;
        .el-dialog__title {
          color: #35e7ff;
          font-size: 32px;
        }
        .el-dialog__headerbtn {
          font-size: 21px;
          .el-icon-close:before {
            color: #35e7ff;
          }
        }
      }
      .el-dialog__body {
        padding: 20px 43px;
      }
      .el-tabs__item {
        width: 152px;
        height: 51px;
        line-height: 51px;
        font-size: 20px;
        margin-right: 0;
        text-align: center;
      }
      .el-tabs--top.el-tabs--card
        > .el-tabs__header
        .el-tabs__item:nth-child(2),
      .el-tabs--top.el-tabs--card > .el-tabs__header .el-tabs__item:last-child {
        padding: 0;
      }
    }
    .mattress-el-tab {
      .date-screen {
        display: flex;
        margin: 30px 0;
        line-height: 45px;
        font-size: 32px;
        color: #32c5ff;
        .icon-time {
          width: 37px;
          height: 37px;
          background-image: url("../../../assets/imgs/shijian-13.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          margin-top: 3px;
        }
        .date-main {
          width: 260px;
          height: 45px;
          margin: 0 10px;
          input:placeholder {
            color: #0091ff;
          }
        }
        .el-input--prefix .el-input__inner {
          padding: 0 10px;
          height: 45px;
          line-height: 45px;
          background: none;
          border: #32c5ff 1px solid;
          font-size: 19px;
          color: #fff;
        }

        .el-input__icon {
          display: none;
        }
        .el-button {
          font-size: 19px;
        }
      }
      .info-date {
        width: 1341px;
        height: 122px;
        background-image: url("../../../assets/imgs/框-智能床垫1.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        .info-item {
          width: 100%;
          padding-top: 25px;
          font-size: 32px;
          text-align: center;
          .info-value {
            font-size: 32px;
            color: #ffffff;
            span {
              font-size: 16px;
            }
          }
          .info-label {
            font-size: 21px;
            color: #35e7ff;
            margin-top: 10px;
          }
        }
      }
      .info-datetwo {
        width: 1341px;
        height: 122px;
        display: flex;
        justify-content: space-between;
        .info-item {
          width: 649px;
          padding-top: 25px;
          font-size: 32px;
          text-align: center;
          background-image: url("../../../assets/imgs/历史数据框1.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          .info-value {
            font-size: 32px;
            color: #ffffff;
            span {
              font-size: 16px;
            }
          }
          .info-label {
            font-size: 21px;
            color: #35e7ff;
            margin-top: 10px;
          }
        }
      }
      .info-number {
        width: 1341px;
        height: 122px;
        display: flex;
        justify-content: space-between;
        margin: 30px 0;
        .info-item {
          width: 205px;
          padding-top: 25px;
          font-size: 32px;
          text-align: center;
          background-image: url("../../../assets/imgs/框-智能床垫2.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          .info-value {
            font-size: 32px;
            color: #ffffff;
            span {
              font-size: 16px;
            }
          }
          .info-label {
            font-size: 21px;
            color: #35e7ff;
            margin-top: 10px;
          }
        }
      }
      .mattress-el-text {
        font-size: 24px;
        margin-top: 20px;
        color: #fff;
      }
      .mattress-el-value {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .mattress-value-info {
          margin-top: 20px;
          .mattress-value-title {
            padding: 20px 0;
            font-size: 18px;
            color: #fff;
          }
          .mattress-value-main {
            padding: 0;
          }
        }
      }
    }
    .el-tabs__nav-scroll {
      border-bottom: 1px solid #0091ff;
    }
    .el-date-editor .el-range-separator {
      color: #0091ff;
      height: 43px;
      line-height: 43px;
    }
    .el-input__inner {
      padding: 0 10px;
      height: 45px;
      line-height: 45px;
      background: none;
      border: #32c5ff 1px solid;
      font-size: 19px;
      color: #0091ff;
    }
    .el-range-editor .el-range-input {
      background-color: transparent;
      font-size: 19px;
      color: #fff;
    }
  }
}
.color-red {
  color: #ff4f4f;
}
.color-purple {
  color: #8d6dff;
}
.color-blue {
  color: #32c5ff;
}
.color-orange {
  color: #f7b500;
}
.el-date-picker {
  top: 340px !important;
  left: 1080px !important;
}
.el-date-range-picker {
  top: 340px !important;
  left: 1080px !important;
}
.popper__arrow {
  left: 100px !important;
}
</style>
