<template>
  <!-- 监控视频分布 -->
  <div class="main-container-box-video">
    <div class="left-contaier">
      <div class="video-menu-list">
        <div
          @click="onTreeChange(treeModel.id,treeModel.type,'')"
          class="video-menu-title"
        >
          <i class="icon icon-add"></i>
          <span :id="treeModel.id">{{ treeModel.org_name }}</span>
        </div>
        <div
          :class="tree_active_id==item.id?'video-menu  video-menu-active':'video-menu '"
          :id="item.id"
          :key="index"
          @click="onTreeChange(item.id,item.type,item.org_name)"
          v-for="(item, index) in treeModel.org_stores"
        >
          <i :class="tree_active_id==item.id?'icon icon-video':'icon'"></i>
          {{ item.org_name }}
        </div>
      </div>
    </div>
    <div class="right-contaier">
      <div class="video-crumbs">
        <span class="color-blue">当前位置：</span>
        <span>{{ treeModel.org_name }}</span>
        <span
          class="icon-arrow"
          v-if="crumbs_name"
        ></span>
        <span v-if="crumbs_name">{{ crumbs_name }}</span>
      </div>

      <div class="video-list" v-if="pageModel.dataList">
        <div
          :key="index"
          class="video-main"
          v-for="(item, index) in pageModel.dataList"
        >
          <div class="video-name">
            <span class="color-white">{{ item.title }}</span>
          </div>
          <div
            @click="openDialogVisible(item, index)"
            class="video-click"
          ></div>
          <rtmpVideo
            ref="videos"
            v-if="pageModel.dataList"
            :video-src="item.url"
            style="z-index:1;"
            video-height="426"
            video-width="568"
          ></rtmpVideo>
        </div>
      </div>

      <div class="video-page">
        <div class="block">
          <el-pagination
            :current-page.sync="pagingModel.currentPage"
            :page-size="pagingModel.limit"
            :total="pagingModel.total"
            @current-change="onCurrentChange"
            layout="total, prev, pager, next"
            v-if="pagingModel.total>0"
          ></el-pagination>
        </div>
      </div>
    </div>

    <!-- 弹出 -->
    <el-dialog
      :lock-scroll="false"
      :title="current_paly_item.title"
      :visible.sync="dialogVisible"
      class="mattress-el-dialog"
    >
      <div v-if="dialogVisible">
        <rtmpVideo
          :video-src="current_paly_item.hdUrl"
          video-height="720"
          video-width="1280"
        ></rtmpVideo>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import rtmpVideo from '@/components/Video'
export default {
  name: 'Rtmpvideo',
  components: { rtmpVideo },
  data() {
    return {
      dialogVisible: false,
      current_paly_item: {
        title: '',
        hdUrl: ''
      },
      treeModel: {},
      pageModel: {},
      tree_active_id: 0,
      tree_active_type: 0,
      crumbs_name: '',
      pagingModel: {
        limit: 10, // 页大小
        currentPage: 1, // 当前页面
        total: 0, // 总条数
        totalPages: 0 // 总页数
      }
    }
  },
  watch: {},
  mounted() {},
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      // 加载分类
      this.http.post(`/surveillancecamera/orglist`).then((res) => {
        if (res.code === 0) {
          this.treeModel = res.data
          this.onTreeChange(this.treeModel.id, this.treeModel.type, '')
        }
      })
    },
    loadVideos(page) {
      this.pagingModel.currentPage = page
      // 加载视频
      this.http
        .post(`/surveillancecamera/videolist`, {
          id: this.tree_active_id,
          type: this.tree_active_type,
          currentPage: page
        })
        .then((res) => {
          if (res.code === 0) {
            this.pageModel.dataList = []
            this.$nextTick(() => {
              this.pageModel = res.data
              this.pagingModel.total = res.data.total
            })
          }
        })
    },
    onTreeChange(id, type, org_name) {
      this.tree_active_id = id
      this.tree_active_type = type
      this.crumbs_name = org_name

      this.loadVideos(1)
    },
    onCurrentChange(val) {
      this.loadVideos(val)
    },
    openDialogVisible(item, index) {
      const component = this.$refs.videos[index]
      if (component.notPlay) {
        component.play()
        return
      }
      let title = this.crumbs_name + '(' + item.title + ')'
      if (this.crumbs_name == '') {
        title = this.treeModel.org_name + '(' + item.title + ')'
      }

      this.current_paly_item = { title, hdUrl: item.rtmpHD }
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="scss">
//支持scss语法
.main-container-box-video {
  width: 100%;
  height: 100%;
  display: flex;
  .left-contaier {
    width: 354px;
    height: 100%;
    background: #032f8c;
    .video-menu-list {
      padding: 30px 0;
      line-height: 58px;
      color: #fff;
      font-size: 20px;
      overflow: auto;
      height: 1168px;
      .video-menu-title {
        display: flex;
        padding: 0 30px;
        cursor: pointer;
      }
      .video-menu {
        display: flex;
        padding-left: 43px;
        cursor: pointer;
      }
      .video-menu-active {
        color: #32c5ff;
        background-image: url('../../assets/imgs/箭头01.png');
        background-position: 280px center;
        background-repeat: no-repeat;
      }
    }
    .icon {
      width: 26px;
      height: 26px;
      margin-right: 10px;
      margin-top: 15px;
      background-repeat: no-repeat;
      background-position: center;
    }
    .icon-add {
      background-image: url('../../assets/imgs/清源街道.png');
    }
    .icon-video {
      background-image: url('../../assets/imgs/shipin-8.png');
    }
  }
  .right-contaier {
    width: 100%;
    height: 100%;
    .video-crumbs {
      display: flex;
      font-size: 20px;
      margin: 45px;
      color: #fff;
      .icon-arrow {
        width: 7px;
        height: 10px;
        margin: 5px 10px;
        background-image: url('../../assets/imgs/箭头2.png');
      }
    }
    .video-list {
      width: 3060px;
      height: 960px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 0 50px;
      .video-main {
        position: relative;
        width: 568px;
        height: 426px;
        .video-name {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 72px;
          line-height: 72px;
          text-align: center;

          background-color: #0029c1;
          font-size: 24px;
          opacity: 0.65;
          filter: alpha(opacity=65);
          z-index: 2;
        }
        .video-click {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 426px;
          z-index: 2;
          cursor: pointer;
        }
      }
    }
    .video-page {
      text-align: right;
      margin: 0 50px;
      .el-pagination .btn-next,
      .el-pagination .btn-prev,
      .el-dialog,
      .el-pager li {
        background: none;
      }
      .el-pager {
        border: #5da7f6 1px solid;
        border-radius: 4px;
      }
      .el-pager li {
        border-right: #5da7f6 1px solid;
      }
      .el-pager li:last-child {
        border-right: none;
      }
      .el-pagination__total,
      .el-pagination,
      .el-pager .more::before,
      .el-icon-arrow-left:before,
      .el-icon-arrow-right:before {
        color: #5da7f6;
      }
      .el-pager li.active {
        color: #fff;
        background: #5da7f6;
      }
    }
  }
  //弹出层样式
  .mattress-el-dialog {
    .el-dialog {
      background: #052467;
      color: #fff;
      width: 1368px;
      height: 926px;
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
        padding: 40px 43px;
      }
    }
  }
  .color-blue {
    color: #32c5ff;
  }
  .color-white {
    color: #ffffff;
  }
}
</style>
