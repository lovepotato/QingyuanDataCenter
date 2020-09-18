<template>
  <div class="Stage">
    <div class="left-container">
      <div class="top-img">
        <span>驿站分布图</span>
      </div>
      <div class="bottom-grid">
        <div
          :key="index"
          class="item"
          v-for="(item, index) in countList"
        >
          <div class="value">{{ item.value }}</div>
          <div class="label">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="right-container">
      <vue-scroll>
        <div class="grid-container">
          <div
            :key="index"
            class="grid-box"
            v-for="(item, index) in stationList"
          >
            <div class="top">
              <div class="img">
                <el-image :src="item.img" class="img-box">

                </el-image>
              </div>
              <div>
                <div class="title">{{ item.name }}</div>
                <div class="detail">
                  <div class="line">
                    <img
                      alt
                      src="../../assets/imgs/lianxiren.png"
                    />
                    <span class="label">联系人</span>
                    <span class="value">{{ item.contacts }}</span>
                  </div>
                  <div class="line">
                    <img
                      alt
                      src="../../assets/imgs/dianhua.png"
                    />
                    <span class="label">联系电话</span>
                    <span class="value">{{ item.mobile }}</span>
                  </div>
                  <div class="line">
                    <img
                      alt
                      src="../../assets/imgs/shijian.png"
                    />
                    <span class="label">开业日期</span>
                    <span class="value">{{ item.businessDate }}</span>
                  </div>
                  <div class="line">
                    <img
                      alt
                      src="../../assets/imgs/mianji.png"
                    />
                    <span class="label">占地面积</span>
                    <span class="value">{{ item.areaSize }}</span>
                  </div>
                  <div class="line">
                    <img
                      alt
                      src="../../assets/imgs/dizhi.png"
                    />
                    <span class="label">详细地址</span>
                    <span class="value">{{ item.address }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom">
              <div class="bottom-img" v-if="item.countList">
                <div class="bottom-item" v-for="(node, i) in item.countList" :key="i">
                  <div class="value">{{ node.value }}</div>
                  <div class="label">{{ node.name }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vue-scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stage',
  data() {
    return {
      stageDetail: {}
    }
  },
  computed: {
    countList() {
      return this.stageDetail.countList || []
    },
    stationList() {
      return this.stageDetail.stationList || []
    }
  },
  created() {
    this.getStageDetail()
  },
  methods: {
    getStageDetail() {
      this.http
        .post(`/commandcentre/communitypoststation/view`)
        .then(({ data }) => {
          this.stageDetail = data
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.Stage {
  padding: 20px 58px 66px 58px;
  display: flex;

  .left-container {
    width: 958px;
    height: 1083px;
    background-image: url('../../assets/imgs/驿站页面Group1.png');
    overflow: hidden;
    margin-right: 34px;

    .top-img {
      width: 915px;
      height: 595px;
      background-image: url('../../assets/imgs/驿站分布图.png');
      margin: 0 auto;
      margin-top: 28px;
      margin-bottom: 57px;
      position: relative;

      span {
        font-family: PingFangSC-Medium;
        font-size: 36px;
        color: #35e7ff;
        letter-spacing: 7.6px;
        line-height: 40px;
        position: absolute;
        top: 14px;
        left: 19px;
      }
    }

    .bottom-grid {
      display: grid;
      grid-template-columns: repeat(3, 264px);
      grid-template-rows: 166px 166px;
      grid-row-gap: 45px;
      grid-column-gap: 40px;
      margin: 0px 43px;

      .item {
        width: 264px;
        height: 166px;
        background-image: url('../../assets/imgs/驿站页面框1.png');
        display: relative;
        text-align: center;

        .value {
          margin-top: 30px;
          font-family: PingFangSC-Medium;
          font-size: 42px;
          color: #ffffff;
          margin-bottom: 18px;
        }

        .label {
          font-family: PingFangSC-Medium;
          font-size: 24px;
          color: #35e7ff;
        }
      }
    }
  }

  .right-container {
    width: calc(100% - 958px - 34px);
    height: 1083px;
    overflow: hidden;

    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 762px);
      grid-template-rows: repeat(auto-fill, 517px);
      grid-column-gap: 30px;
      grid-row-gap: 43px;
      .grid-box {
        width: 762px;
        height: 517px;
        background-image: url("../../assets/imgs/yizhankuang1.png");
        padding: 34px 30px;

        .top {
          margin-bottom: 42px;
          display: flex;

          .img{
            margin-right: 19px;
            .img-box {
              width: 280px;
              height: 280px;
            }
          }

          .title {
            font-family: PingFangSC-Semibold;
            font-size: 26px;
            color: #FFFFFF;
            letter-spacing: 1.3px;
            line-height: 40px;
            margin-bottom: 23px;
          }

          .detail {
            .line {
              display: flex;
              margin-bottom: 28px;

              &:last-child {
                margin-bottom: 0px;
              }
              img {
                margin-right: 11px;
              }
              .label {
                font-family: PingFangSC-Regular;
                font-size: 18px;
                color: #32C5FF;
                letter-spacing: 0;
                width: 72px;
                margin-right: 21px;
                text-align: left;
              }

              .value {
                width: 278px;
                text-align: left;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-family: PingFangSC-Regular;
                font-size: 18px;
                color: #FFFFFF;
                letter-spacing: 0;
              }

            }
          }
        }

        .bottom {
          .bottom-img {
            width: 703px;
            height: 122px;
            background-image: url("../../assets/imgs/驿站页面框2.png");
            display: flex;

            .bottom-item {
              width: 120px;
              text-align: center;

              .value {
                margin-top: 25px;
                margin-bottom: 23px;
                font-family: PingFangSC-Semibold;
                font-size: 24px;
                color: #FFFFFF;
              }

              .label {
                font-family: PingFangSC-Medium;
                font-size: 16px;
                color: #0091FF;
              }
            }
          }
        }
      }
    }
  }
}
</style>
