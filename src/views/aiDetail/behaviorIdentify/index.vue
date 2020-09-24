<template>
  <div class="behaviorIdentify">
    <div class="left-contaier">
      <div class="title">{{ basecontent.title_label }}</div>
      <div class="img-wrapper">
        <div class="img"></div>
      </div>
      <div class="box-wrapper">
        <div class="box">
          <div class="num">{{ basecontent.base_tag_num }}</div>
          <div class="label">{{ basecontent.base_tag_label }}</div>
        </div>
        <div class="box">
          <div class="num">{{ basecontent.qy_tag_num }}</div>
          <div class="label">{{ basecontent.qy_tag_label }}</div>
        </div>
      </div>
      <div class="bottom-imgs">
        <div class="left-title">
          <span class="text">{{ basecontent.scenes_label }}</span>
        </div>
        <div class="right-imgs">
          <div class="line-imgs">
            <div class="one-img">
              <el-image
                :src="imgsArray[0]"
                class="l-img"
              >
                <div
                  class="image-slot"
                  slot="error"
                ></div>
              </el-image>
            </div>
            <div class="one-img">
              <el-image
                :src="imgsArray[1]"
                class="l-img"
              >
                <div
                  class="image-slot"
                  slot="error"
                ></div>
              </el-image>
            </div>
            <div class="one-img">
              <el-image
                :src="imgsArray[2]"
                class="l-img"
              >
                <div
                  class="image-slot"
                  slot="error"
                ></div>
              </el-image>
            </div>
          </div>
          <div class="line-imgs">
            <div class="one-img">
              <el-image
                :src="imgsArray[3]"
                class="l-img"
              >
                <div
                  class="image-slot"
                  slot="error"
                ></div>
              </el-image>
            </div>
            <div class="one-img">
              <el-image
                :src="imgsArray[4]"
                class="l-img"
              >
                <div
                  class="image-slot"
                  slot="error"
                ></div>
              </el-image>
            </div>
            <div class="one-img">
              <el-image
                :src="imgsArray[5]"
                class="l-img"
              >
                <div
                  class="image-slot"
                  slot="error"
                ></div>
              </el-image>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <div class="middle-contaier">
      <div class="shouhu-title">
        <span>{{ guard.guard_label }}</span>
      </div>
      <div class="guard-num">
        <div
          :key="index"
          :style="{'margin-right': index===guardNum.length-1 ? '0px' : (index+1)%3 ? '5px' : '24px'}"
          class="numbox"
          v-for="(num, index) in guardNum"
        >
          <span ref="numBox">0123456789</span>
        </div>
      </div>
      <div class="guard-info">
        <div
          class="guard-box"
          style="width: 155px"
        >
          <div class="value">{{ guard.warning_total }}</div>
          <div class="label">{{ guard.warning_total_label }}</div>
        </div>
        <div class="guard-box">
          <div class="value">{{ guard.fall_down }}</div>
          <div class="label">{{ guard.fall_down_label }}</div>
        </div>
        <div class="guard-box">
          <div class="value">{{ guard.sos }}</div>
          <div class="label">{{ guard.sos_label }}</div>
        </div>
        <div class="guard-box">
          <div class="value">{{ guard.wait_affirm }}</div>
          <div class="label">{{ guard.wait_affirm_label }}</div>
        </div>
        <div class="guard-box">
          <div class="value">{{ guard.wait_dispose }}</div>
          <div class="label">{{ guard.wait_dispose_label }}</div>
        </div>
        <div
          class="guard-box"
          style="width: 155px;"
        >
          <div
            class="value"
            style="color: #F7B500;"
          >{{ guard.accuracy_rate }}</div>
          <div class="label">识别准确率</div>
        </div>
      </div>
      <div class="shequfenbu">
        <span class="dianwei-title">{{ guard.comuhome_distribute_label }}：{{ guard.comuhome_distribute }}</span>
      </div>
    </div>
    <div class="right-chart">
      <div class="title">{{ distribute.warning_distribute_label }}</div>
      <div class="pie-chart" ref="pie1"></div>
      <div class="title">{{ distribute.dispose_distribute_label }}</div>
      <div class="pie-chart" ref="pie2"></div>
    </div>
    <div class="right-container">
      <div class="right-top">
        <div class="title">最近报警记录</div>
        <warning-list :warning-list="warning.warning_list"></warning-list>
      </div>
      <div class="right-bottom">
        <rtmpVideo
          :video-src="warning.warning_video.url"
          v-if="warning.warning_video"
          video-height="385"
          video-width="577"
          :title="warning.warning_video.title"
        ></rtmpVideo>
      </div>
    </div>
  </div>
</template>

<script>
import { deepClone } from '@/utils'
import rtmpVideo from '../../../components/Video'
import warningList from './list'

export default {
  name: 'BehaviorIdentify',
  components: {
    rtmpVideo,
    warningList
  },
  data() {
    return {
      baseData: {},
      setIntervalDetail: null,
      randomNum: ''
    }
  },
  computed: {
    basecontent() {
      return this.baseData.basecontent || {}
    },
    imgsArray() {
      if (this.basecontent.scenes) {
        const array = this.basecontent.scenes
        return array.map((item) => this.imgPreUrl + item.url)
      } else {
        return ['', '', '', '', '', '']
      }
    },
    guard() {
      return this.baseData.guard || {}
    },
    distribute() {
      return this.baseData.distribute || {}
    },
    warning() {
      return this.baseData.warning || {}
    },
    guardNum() {
      let number = this.guard.guard_num
      if (number) {
        if (isNaN(Number(number))) {
          return '000000000000000'
        } else {
          if (number.length > 15) {
            number = number.substring(0, 15)
          } else {
            const sub = 15 - number.length
            let subString = ''
            for (let i = 0; i < sub; i++) {
              subString += '0'
            }
            number = subString + number
          }
          return number
        }
      } else {
        return '000000000000000'
      }
    }
  },
  watch: {
    distribute(val) {
      if (val && val.warning_distribute_data) {
        this.drawPie(this.$refs.pie1, val.warning_distribute_data, 1)
      }
      if (val && val.dispose_distribute_data) {
        this.drawPie(this.$refs.pie2, val.dispose_distribute_data, 2)
      }
    },
    guardNum(val) {
      Object.values(val).forEach((item, index) => {
        this.$refs['numBox'][index].style.transform = `translate(-50%, -${Number(item) * 10}%)`
      })
    },
    randomNum(val) {
      Object.values(val).forEach((item, index) => {
        this.$refs['numBox'][index].style.transform = `translate(-50%, -${Number(item) * 10}%)`
      })
    }
  },
  created() {
    this.setIntervalDetail = setInterval(this.timerGetDetail(), 10000)
    // setInterval(() => {
    //   let num = ''
    //   for (let i = 0; i < 15; i++) {
    //     num += Math.floor(Math.random() * 10)
    //   }
    //   this.randomNum = num
    // }, 2000)
  },
  destroyed() {
    this.setIntervalDetail ? clearInterval(this.setIntervalDetail) : void 0
  },
  methods: {
    timerGetDetail() {
      this.http.post(`/cloudvideo/index`).then(({ data }) => {
        this.baseData = data
      })
      return this.timerGetDetail
    },
    // 饼图
    drawPie(el, seriesData, type) {
      const chartsPie = this.$echarts.init(el)
      const originData = deepClone(seriesData)
      let newData = deepClone(seriesData)
      let zeroCount = 0
      newData = newData.map(item => {
        if (item.value === 0) {
          item.value = ''
          zeroCount++
        }
        return item
      })
      if (zeroCount === newData.length) {
        newData = originData
      }
      chartsPie.clear()
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} {d}%'
        },
        legend: {
          bottom: type === 1 ? '16%' : 0,
          itemWidth: 10,
          itemHeight: 10,
          icon: 'circle',
          textStyle: {
            fontSize: 20,
            color: '#fff',
            marginRight: 10
          },
          // width: 550,
          align: 'left',
          lineHeight: 20,
          padding: [
            20, 40, 0, 40
          ]
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: '50%',
            data: newData,
            label: {
              color: '#fff',
              fontSize: 20,
              formatter: '{c}\n{d}%'
            },
            top: '-12%'
          }
        ],
        color: type === 1 ? ['#FD5D5D', '#665BFF'] : ['#00FFB4', '#EDAE5D', '#5C6CF2', '#A901FD', '#32C5FF']
      }
      chartsPie.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.behaviorIdentify {
  width: 100%;
  height: 1000px;
  display: flex;

  .left-contaier {
    background-image: url('../../../assets/imgs/行为识别Group1.png');
    width: 949px;
    height: 994px;
    background-repeat: no-repeat;
    background-size: 100%;

    .title {
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: #35e7ff;
      letter-spacing: 5.07px;
      line-height: 40px;
      text-align: center;
      margin-top: 24px;
      margin-bottom: 15px;
    }
    .img-wrapper {
      width: 889px;
      margin: 0 auto;
      background-image: url('../../../assets/imgs/流程底图.png');
      background-repeat: no-repeat;
      text-align: center;
      margin-bottom: 30px;
      .img {
        width: 889px;
        height: 328px;
        background-image: url('../../../assets/imgs/行为识别-流程图.png');
        background-repeat: no-repeat;
      }
    }

    .box-wrapper {
      display: flex;
      width: 100%;
      padding: 0 60px;
      justify-content: space-between;
      margin-bottom: 30px;
      height: 150px;

      .box {
        background-image: url('../../../assets/imgs/基础标记库.png');
        background-repeat: no-repeat;
        background-size: 100%;
        width: 150px;
        width: 394px;
        text-align: center;

        .num {
          font-family: PingFangSC-Semibold;
          font-size: 32px;
          color: #ffffff;
          margin-top: 30px;
          margin-bottom: 16px;
        }

        .label {
          font-family: PingFangSC-Medium;
          font-size: 20px;
          color: #35e7ff;
        }
      }
    }

    .bottom-imgs {
      width: 100%;
      padding: 0 34px;
      display: flex;
      height: 326px;

      .left-title {
        height: 100%;
        width: 50px;
        background-image: url('../../../assets/imgs/模拟数据场景图.png');
        background-repeat: no-repeat;
        text-align: center;
        position: relative;
        margin-right: 24px;

        .text {
          font-family: PingFangSC-Medium;
          font-size: 24px;
          color: #35e7ff;
          letter-spacing: 5.07px;
          line-height: 40px;
          height: 300px;
          top: 22px;
          margin-top: -150px;
          position: relative;
        }
      }

      .right-imgs {
        width: calc(100% - 70px);
        height: 100%;
        .line-imgs {
          width: 100%;
          margin-bottom: 32px;
          display: flex;

          .one-img {
            width: 248px;
            height: 146px;
            margin-right: 30px;

            &:last-child {
              margin-right: 0px;
            }

            .l-img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }

  .middle-contaier {
    margin: 0 38px;

    .shouhu-title {
      width: 518px;
      height: 68px;
      background-image: url('../../../assets/imgs/框-行为识别1.png');
      line-height: 68px;
      padding-left: 58px;
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: #35e7ff;
      letter-spacing: 5px;
      margin-bottom: 30px;
    }

    .guard-num {
      display: flex;
      margin-bottom: 33px;
      .numbox {
        height: 75px;
        width: 57px;
        line-height: 75px;
        background-image: url('../../../assets/imgs/位图.png');
        font-family: DS-Digital-Bold;
        font-size: 50px;
        color: #ffffff;
        letter-spacing: 10px;
        text-align: center;
        writing-mode: vertical-lr;
        text-orientation: upright;
        position: relative;
        overflow: hidden;

        & > span {
          position: absolute;
          top: 14px;
          left: 50%;
          transform: translateX(-50%);
          transition: transform 0.5s ease-in-out;
        }
      }
    }

    .guard-info {
      background-image: url('../../../assets/imgs/框框.png');
      width: 998px;
      height: 111px;
      overflow: hidden;
      display: flex;
      margin-bottom: 35px;

      .guard-box {
        width: 172px;
        height: 111px;
        text-align: center;

        .value {
          font-family: PingFangSC-Semibold;
          font-size: 24px;
          color: #ffffff;
          margin-top: 22px;
          margin-bottom: 16px;
        }

        .label {
          font-family: PingFangSC-Medium;
          font-size: 17px;
          color: #35e7ff;
        }
      }
    }

    .shequfenbu {
      background-image: url("../../../assets/imgs/社区点位分布图.png");
      width: 998px;
      height: 639px;
      position: relative;

      .dianwei-title {
        position: absolute;
        width: 518px;
        height: 68px;
        background-image: url('../../../assets/imgs/框-行为识别1.png');
        line-height: 68px;
        padding-left: 58px;
        font-family: PingFangSC-Medium;
        font-size: 24px;
        color: #35e7ff;
        letter-spacing: 5px;
      }
    }
  }

  .right-chart {
    width: 673px;
    height: 994px;
    background-image: url('../../../assets/imgs/行为识别Group2.png');
    margin-right: 27px;
    padding: 24px 37px;

    .title {
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: #35E7FF;
      letter-spacing: 5.07px;
    }

    .pie-chart {
      height: 433px;
      width: 100%;
    }
  }

  .right-container {
    .right-top {
      width: 617px;
      height: 515px;
      margin-bottom: 30px;
      background-image: url('../../../assets/imgs/行为识别Group3.png');
      padding: 25px;
      overflow: hidden;

      .title {
        font-family: PingFangSC-Medium;
        font-size: 24px;
        color: #35E7FF;
        letter-spacing: 5.07px;
        line-height: 40px;
        margin-bottom: 28px;
      }
    }

    .right-bottom {
      width: 618px;
      height: 449px;
      background-image: url('../../../assets/imgs/行为识别Group4.png');
      padding: 30px 18px 26px 18px;
    }
  }
}
</style>
