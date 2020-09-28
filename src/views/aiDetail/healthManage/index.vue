<template>
  <div class="healthManage-container-box">
    <div class="left-contaier">
      <div class="healthManage-service">
        <div class="title">健康管理服务</div>

        <el-carousel
          height="300px"
          indicator-position="none"
          :interval="this.carouselInterval"
        >
          <el-carousel-item
            v-for="itemIndex in serviceListNum"
            :key="itemIndex"
          >
            <div class="healthManage-service-list">
              <div
                class="healthManage-service-main"
                v-for="(item, index) in Array.from(pageModel.serviceList).slice(
                  (itemIndex - 1) * 5,
                  itemIndex * 5
                )"
                :key="index"
              >
                <div class="photo">
                  <img
                    :src="item.value | formatImageSrc"
                    width="100%"
                    :alt="item.value ? '' : '暂无图片'"
                  />
                </div>
                <div class="name">
                  <span>{{ item.name }}</span>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="healthManage-piechart">
        <div class="healthManage-piechart-main">
          <div class="title">医生职称划分</div>
          <div class="photo">
            <pie-chart
              :option="jobTitleListOption"
              :data="pageModel.jobTitleList"
              v-if="pageModel.jobTitleList"
              :style="{ width: '530px', height: '400px' }"
            ></pie-chart>
          </div>
        </div>
        <div class="healthManage-piechart-main">
          <div class="title">学科占比划分</div>
          <div class="photo">
            <pie-chart
              :option="subjectListOption"
              :data="pageModel.subjectList"
              v-if="pageModel.subjectList"
              :style="{ width: '530px', height: '400px' }"
            ></pie-chart>
          </div>
        </div>
      </div>
    </div>
    <div class="middle-contaier">
      <div class="healthManage-distribution">
        <img
          src="../../../assets/imgs/健康管理-药店诊所分布.png"
          width="100%"
        />
      </div>
      <div class="healthManage-resources">
        <div class="resources-local">
          <div class="title">本地资源</div>
          <div class="resources-info-date" v-if="pageModel.localCountList">
            <div class="resources-info-item">
              <div class="resources-info-value">
                {{ pageModel.localCountList[0].value }}
              </div>
              <div class="resources-info-label">
                {{ pageModel.localCountList[0].name }}
              </div>
            </div>
            <div class="resources-info-item">
              <div class="resources-info-value">
                {{ pageModel.localCountList[1].value }}
              </div>
              <div class="resources-info-label">
                {{ pageModel.localCountList[1].name }}
              </div>
            </div>
            <div class="resources-info-item">
              <div class="resources-info-value">
                {{ pageModel.localCountList[2].value }}
              </div>
              <div class="resources-info-label">
                {{ pageModel.localCountList[2].name }}
              </div>
            </div>
            <div class="resources-info-item">
              <div class="resources-info-value">
                {{ pageModel.localCountList[3].value }}
              </div>
              <div class="resources-info-label">
                {{ pageModel.localCountList[3].name }}
              </div>
            </div>
          </div>
        </div>
        <div class="resources-foreign">
          <div class="title">外埠资源</div>
          <div class="resources-info-date" v-if="pageModel.outCountList">
            <div class="resources-info-item">
              <div class="resources-info-value">
                {{ pageModel.outCountList[0].value }}
              </div>
              <div class="resources-info-label">
                {{ pageModel.outCountList[0].name }}
              </div>
            </div>
            <div class="resources-info-item">
              <div class="resources-info-value">
                {{ pageModel.outCountList[1].value }}
              </div>
              <div class="resources-info-label">
                {{ pageModel.outCountList[1].name }}
              </div>
            </div>
            <div class="resources-info-item">
              <div class="resources-info-value">
                {{ pageModel.outCountList[2].value }}
              </div>
              <div class="resources-info-label">
                {{ pageModel.outCountList[2].name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-contaier">
      <div class="healthManage-monitoringdata">
        <div class="healthManage-info-date" v-if="pageModel.countList">
          <template v-for="(item, index) in pageModel.countList">
            <div class="healthManage-info-item" :key="index">
              <div class="healthManage-info-value">
                {{ item.value }}
              </div>
              <div class="healthManage-info-label">
                {{ item.name }}
              </div>
            </div>
          </template>
        </div>
        <div class="healthManage-video">
          <!-- 接口返回  videoList   video:'url' 待处理 -->
          <div class="video-box">
            <img
              src="../../../assets/images/运动康复.png"
              @click="
                onOpenPlayVideoDialog(
                  pageModel.videoList[0].name,
                  pageModel.videoList[0].value
                )
              "
              width="100%"
            />
          </div>
          <div class="video-box">
            <img
              src="../../../assets/images/远程问诊.png"
              @click="
                onOpenPlayVideoDialog(
                  pageModel.videoList[1].name,
                  pageModel.videoList[1].value
                )
              "
              width="100%"
            />
          </div>
        </div>
      </div>
      <div class="healthManage-recordlast">
        <div class="healthManage-recordlast-main">
          <div class="title">最近评测记录</div>

          <swiper
            class="swiper"
            v-if="
              pageModel.lastTestList &&
                Array.from(pageModel.lastTestList).length > 0
            "
            :options="swiperOptions2"
            ref="mySwiper2"
            :auto-update="true"
            @click-slide="handleClickSlideLastTestList"
          >
            <swiper-slide
              v-for="(item, index) in Array.from(pageModel.lastTestList)"
              :key="index"
            >
              <!-- @click="onShowPDF(item.detail)" -->
              <div
                class="healthManage-recordlast-list"
              >
                <div class="healthManage-photo">
                  <img :src="item.img | formatImageSrc" width="100%" />
                </div>
                <div class="healthManage-information">
                  <div class="info-box">
                    <span class="name">{{ item.name }}</span>
                    <span>{{ item.date }}</span>
                  </div>
                  <div class="info-box">{{ item.gender }} {{ item.age }}岁</div>
                  <div class="info-box">
                    <span>{{ item.address }}</span>
                    <span class="color-red" v-if="item.text == '不佳'">{{
                      item.text
                    }}</span>
                    <span class="color-green" v-if="item.text == '良好'">{{
                      item.text
                    }}</span>
                    <span class="color-blue" v-if="item.text == '普通'">{{
                      item.text
                    }}</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="healthManage-recordlast-main">
          <div class="title">最近远程问诊</div>
          <swiper
            class="swiper"
            v-if="
              pageModel.lastRemoteList &&
                Array.from(pageModel.lastRemoteList).length > 0
            "
            :options="swiperOptions"
            ref="mySwiper"
            :auto-update="true"
            @click-slide="handleClickSlideRemoteList"
          >
            <swiper-slide
              v-for="(item, index) in Array.from(pageModel.lastRemoteList)"
              :key="index"
            >
              <!-- @click="onShowlastRemoteList(item)" -->
              <div
                class="healthManage-recordlast-list"
              >
                <div class="healthManage-photo">
                  <el-image style="width: 96px; height: 96px" :src="item.img | formatImageSrc" fit="cover"></el-image>
                  <!--  <el-avatar :size="96" :src="item.img | formatImageSrc" fit="cover"></el-avatar> -->
                  <!--  <img :src="item.img | formatImageSrc" width="100%" height="100%" /> -->
                </div>
                <div class="healthManage-information">
                  <div class="info-box">
                    <span class="name">{{ item.name }}</span>
                    <span>{{ item.date }}</span>
                  </div>
                  <div class="info-box">{{ item.gender }} {{ item.age }}岁</div>
                  <div class="info-box">
                    <span>{{ item.address }}</span>
                    <span class="color-blue">{{ item.text }}</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <el-dialog
      width="1368px"
      custom-class="videoPlayDialog"
      :title="currentVideo.title"
      :visible.sync="videoDialogVisible"
      @opened="videoDialogOpened"
      @closed="videoDialogCloseed"
    >
      <mp4Video
        :video-src="currentVideo.url"
        video-width="1280"
        video-height="720"
        ref="myVideo"
      ></mp4Video>
    </el-dialog>
  </div>
</template>

<script>
import pieChart from '@/components/charts/pieChart'
import mp4Video from '@/components/Video/mp4'
export default {
  name: 'HealtManage',
  components: { pieChart, mp4Video },
  data() {
    return {
      videoDialogVisible: false,
      PdfDialogVisible: false,
      pageModel: {
        serviceList: []
      },
      serviceListNum: 0,
      lastTestListNum: 0,
      lastRemoteListNum: 0,
      jobTitleListOption: {
        color: ['#665BFF', '#F7F100', '#FD5D5D', '#C431FF']
      },
      subjectListOption: {
        color: ['#1DBFFF', '#2AFFCF', '#C1F700', '#FF9132', '#665BFF']
      },
      currentVideo: {
        title: '',
        url: ''
      }
    }
  },
  computed: {
    swiperOptions() {
      return {
        loop: this.pageModel.lastRemoteList.length >= 3,
        spaceBetween: 0,
        autoplay: {
          autoplay: true,
          disableOnInteraction: false,
          delay: 5000
        },
        direction: 'vertical',
        slidesPerView: 3,
        observeParents: true
      }
    },
    swiperOptions2() {
      return {
        loop: this.pageModel.lastTestList.length >= 3,
        spaceBetween: 0,
        autoplay: {
          autoplay: true,
          disableOnInteraction: false,
          delay: 5000
        },
        direction: 'vertical',
        slidesPerView: 3,
        observeParents: true
      }
    }

  },
  watch: {

  },
  mounted() {

  },
  created() {
    this.loadData()
    this.$bus.$on('newConsultation', this.reloadData)
    this.$bus.$on('newHealthPDF', this.reloadData)
  },
  beforeDestroy() {
    this.$bus.$off('newConsultation')
    this.$bus.$off('newHealthPDF')
  },
  methods: {
    handleClickSlideRemoteList(a, b) {
      this.onShowlastRemoteList(this.pageModel.lastRemoteList[b])
    },
    handleClickSlideLastTestList(a, b) {
      this.onShowPDF(this.pageModel.lastTestList[b].detail)
    },
    getName(name, list) {
      const item = Array.from(list).find(w => w.name === name)
      if (item) { return item.name } else { return '' }
    },
    getValue(name, list) {
      const item = Array.from(list).find(w => w.name === name)
      if (item) { return item.value } else { return '' }
    },
    videoDialogOpened() {
      this.$refs.myVideo.play()
    },
    videoDialogCloseed() {
      this.$refs.myVideo.pause()
    },
    onOpenPlayVideoDialog(title, url) {
      this.currentVideo = { title: title, url: this.formatImageSrc(url) }
      this.videoDialogVisible = true
    },
    onShowlastRemoteList(data) {
      if (!data || !data.id) {
        this.$message({
          message: '无用户Id',
          type: 'warning'
        })
      } else {
        this.$bus.$emit('showConsultationDetail', {
          id: data.id || ''
        })
      }
    },
    onShowPDF(urls) {
      if (!urls) {
        this.$message({
          message: '暂无评论报告',
          type: 'warning'
        })
      } else {
        console.log('urls', urls)
        const urlss = Array.from(urls).map(w => w.indexOf('http') == -1 ? 'https://qyhardware.qyyanglao.com/business/' + w : w)
        console.log('urlss', urlss)
        this.$bus.$emit('showPDFDetail', {
          url: urlss || []
        })
      }
    },
    loadData() {
      // 加载页面数据
      this.http
        .post(`/commandcentre/healthmanager/data`)
        .then((res) => {
          if (res.code === 0) {
            this.pageModel = res.data
            if (!this.pageModel.serviceList) { this.pageModel.serviceList = [] }
            if (!this.pageModel.lastTestList) { this.pageModel.lastTestList = [] }
            if (!this.pageModel.lastRemoteList) { this.pageModel.lastRemoteList = [] }

            this.serviceListNum = Math.ceil(Array.from(this.pageModel.serviceList).length / 5)
            this.lastTestListNum = Math.ceil(Array.from(this.pageModel.lastTestList).length / 3)
            this.lastRemoteListNum = Math.ceil(Array.from(this.pageModel.lastRemoteList).length / 3)
          }
        })
    },
    reloadData() {
      this.http
        .post(`/commandcentre/healthmanager/data`)
        .then((res) => {
          if (res.code === 0) {
            if (!this.pageModel.lastTestList) { this.pageModel.lastTestList = [] }
            if (!this.pageModel.lastRemoteList) { this.pageModel.lastRemoteList = [] }
          }
        })
    }
  }
}
</script>

<style lang="scss">
.videoPlayDialog {
  overflow: visible;
  min-width: "1280px";
  min-height: "720px";
  background-color: #052467;
  .el-dialog__headerbtn .el-dialog__close {
    color: #35e7ff;
    font-size: 20px;
  }
  .el-dialog__title {
    font-size: 32px;
    color: #35e7ff;
  }
}
.healthManage-container-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .left-contaier {
    .healthManage-service {
      width: 1194px;
      height: 438px;
      padding: 35px;
      background-image: url("../../../assets/imgs/健康管理Group1.png");
      background-position: 100% 100%;
      background-repeat: no-repeat;
      .title {
        font-size: 24px;
        color: #35e7ff;
        margin-bottom: 30px;
        letter-spacing: 4px;
      }
      .healthManage-service-list {
        overflow: hidden;
        display: flex;
        .healthManage-service-main {
          width: 200px;
          background: #012776;
          margin-right: 30px;
          color: #fff;
          .photo {
            width: 100%;
            height: 200px;
          }
          .name {
            width: 200px;
            height: 84px;
            padding: 20px;
            font-size: 18px;
            line-height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            display: -webkit-box;
            -webkit-line-clamp: 2; //显示3行
            -webkit-box-orient: vertical;
          }
        }
      }
    }
    .healthManage-piechart {
      width: 1194px;
      height: 527px;
      padding: 35px;
      background-image: url("../../../assets/imgs/健康管理Group2.png");
      background-position: 100% 100%;
      background-repeat: no-repeat;
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      .healthManage-piechart-main {
        width: 530px;
        .title {
          font-size: 24px;
          color: #35e7ff;
          margin-bottom: 30px;
          letter-spacing: 4px;
        }
      }
    }
  }
  .middle-contaier {
    .healthManage-distribution {
      width: 1133px;
      height: 734px;
      margin: 32px 0;
    }
    .healthManage-resources {
      display: flex;
      justify-content: space-between;
      .resources-local {
        width: 619px;
        height: 203px;
        background-image: url("../../../assets/imgs/健康管理框1.png");
        background-position: center bottom;
        background-repeat: no-repeat;
        .resources-info-date {
          display: flex;
          justify-content: center;
          .resources-info-item {
            width: 100%;
            padding: 35px 0;
            text-align: center;
            background-image: url("../../../assets/imgs/分割线.png");
            background-position: right center;
            background-repeat: no-repeat;
            .resources-info-value {
              font-size: 30px;
              color: #35e7ff;
            }
            .resources-info-label {
              font-size: 18px;
              color: #ffffff;
              margin-top: 15px;
            }
          }
          .resources-info-item:nth-child(4n) {
            background: none;
          }
        }
      }
      .resources-foreign {
        width: 473px;
        height: 203px;
        background-image: url("../../../assets/imgs/健康管理框2.png");
        background-position: center bottom;
        background-repeat: no-repeat;
        .resources-info-date {
          display: flex;
          justify-content: center;
          .resources-info-item {
            width: 100%;
            padding: 35px 0;
            text-align: center;
            background-image: url("../../../assets/imgs/分割线.png");
            background-position: right center;
            background-repeat: no-repeat;
            .resources-info-value {
              font-size: 30px;
              color: #35e7ff;
            }
            .resources-info-label {
              font-size: 18px;
              color: #ffffff;
              margin-top: 15px;
            }
          }
          .resources-info-item:nth-child(3n) {
            background: none;
          }
        }
      }
      .title {
        font-size: 20px;
        text-align: center;
        color: #fff;
        letter-spacing: 4px;
        line-height: 56px;
        height: 56px;
      }
    }
  }
  .right-contaier {
    .healthManage-monitoringdata {
      width: 908px;
      height: 460px;
      padding: 35px;
      background-image: url("../../../assets/imgs/健康管理Group3.png");
      background-position: 100% 100%;
      background-repeat: no-repeat;
      .healthManage-info-date {
        width: 840px;
        height: 125px;
        margin-bottom: 40px;
        background-image: url("../../../assets/imgs/健康管理框3.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: flex-start;
        .healthManage-info-item {
          width: 168px;
          padding-top: 25px;
          font-size: 32px;
          text-align: center;
          .healthManage-info-value {
            font-size: 32px;
            color: #ffffff;
          }
          .healthManage-info-label {
            font-size: 21px;
            color: #35e7ff;
            margin-top: 10px;
          }
        }
      }
      .healthManage-video {
        display: flex;
        justify-content: space-between;
        .video-box {
          width: 384px;
          height: 216px;
        }
      }
    }
    .healthManage-recordlast {
      display: flex;
      justify-content: space-between;
      .healthManage-recordlast-main {
        overflow: hidden;
        width: 440px;
        height: 503px;
        background-image: url("../../../assets/imgs/健康管理Group4.png");
        background-position: 100% 100%;
        background-repeat: no-repeat;
        margin-top: 40px;
        .title {
          margin-bottom: 20px;
          font-size: 24px;
          height: 24px;
          line-height: 24px;
          color: #35e7ff;
          padding: 30px 0px 20px 30px;

          /*  padding: 30px 30px 0; */
          letter-spacing: 4px;
        }
        .healthManage-recordlast-list {
          width: 420px;

          padding: 22px 30px;
          background-image: url("../../../assets/imgs/近期举办活动-分割线.png");
          background-position: center bottom;
          background-repeat: no-repeat;
          display: flex;
          color: #fff;
          .healthManage-photo {
            width: 96px;
            height: 96px;
            img {
              border-radius: 100%;
            }
          }
          .healthManage-information {
            margin-left: 20px;
            font-size: 16px;
            width: 260px;
            .info-box {
              display: flex;
              justify-content: space-between;
              line-height: 28px;
              margin-bottom: 5px;
              .name {
                font-size: 20px;
              }
            }
          }
        }
        .healthManage-recordlast-list:nth-child(4n) {
          background: none;
        }
      }
    }
  }
  .color-red {
    color: #ff4b4b;
  }
  .color-green {
    color: #44d7b6;
  }
  .color-blue {
    color: #32c5ff;
  }

  .swiper-slide {
    height: 143px !important;
    // margin-top: 25px;
  }
  .swiper-container {
    height: 429px;
  }
  .swiper-wrapper {
    height: 429px;
  }
}
</style>
