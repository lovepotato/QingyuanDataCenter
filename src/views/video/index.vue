<template>
  <!-- 监控视频分布 -->
  <div class="main-container-box">
    <div class="left-contaier">
      <div class="video-menu-list">
        <div class="video-menu-title">
          <i class="icon icon-add"></i>
          <span :id="treeModel.id">{{ treeModel.org_name }}</span>
        </div>
        <div class="video-menu video-menu-active">
          <i class="icon icon-video"></i>兴华园
        </div>
        <div class="video-menu">
          <i class="icon"></i>50号院
        </div>
        <div class="video-menu">
          <i class="icon"></i>189
        </div>
        <div class="video-menu">
          <i class="icon"></i>康馨园
        </div>
        <div class="video-menu">
          <i class="icon"></i>康秀园
        </div>
        <div class="video-menu">
          <i class="icon"></i>康宜园
        </div>
        <div class="video-menu">
          <i class="icon"></i>丽园
        </div>
        <div class="video-menu">
          <i class="icon"></i>丽园南区
        </div>
        <div class="video-menu">
          <i class="icon"></i>丽园北里
        </div>
        <div class="video-menu">
          <i class="icon"></i>兴华园
        </div>
        <div class="video-menu">
          <i class="icon"></i>50号院
        </div>
        <div class="video-menu">
          <i class="icon"></i>189
        </div>
        <div class="video-menu">
          <i class="icon"></i>康馨园
        </div>
        <div class="video-menu">
          <i class="icon"></i>康秀园
        </div>
        <div class="video-menu">
          <i class="icon"></i>康宜园
        </div>
        <div class="video-menu">
          <i class="icon"></i>丽园
        </div>
        <div class="video-menu">
          <i class="icon"></i>丽园南区
        </div>
        <div class="video-menu">
          <i class="icon"></i>丽园北里
        </div>
      </div>
    </div>
    <div class="right-contaier">
      <div class="video-crumbs">
        <span class="color-blue">当前位置：</span>
        <span>清源街道</span>
        <span class="icon-arrow"></span>
        <span>兴华苑</span>
      </div>

      <div class="video-list">
        <div class="video-main">
          <div class="video-name">
            <span class="color-white">兴华苑</span>
          </div>
          <img src="../../assets/images/视频.jpg" width="100%" />
        </div>

        <div class="video-main">
          <div class="video-name">
            <span class="color-white">兴华苑</span>
          </div>
          <img src="../../assets/images/视频.jpg" width="100%" />
        </div>

        <div class="video-main">
          <div class="video-name">
            <span class="color-white">兴华苑</span>
          </div>
          <img src="../../assets/images/视频.jpg" width="100%" />
        </div>

        <div class="video-main">
          <div class="video-name">
            <span class="color-white">兴华苑</span>
          </div>
          <img src="../../assets/images/视频.jpg" width="100%" />
        </div>

        <div class="video-main">
          <div class="video-name">
            <span class="color-white">兴华苑</span>
          </div>
          <img src="../../assets/images/视频.jpg" width="100%" />
        </div>

        <div class="video-main">
          <div class="video-name">
            <span class="color-white">兴华苑</span>
          </div>
          <img src="../../assets/images/视频.jpg" width="100%" />
        </div>

        <div class="video-main">
          <div class="video-name">
            <span class="color-white">兴华苑</span>
          </div>
          <img src="../../assets/images/视频.jpg" width="100%" />
        </div>

        <div class="video-main">
          <div class="video-name">
            <span class="color-white">兴华苑</span>
          </div>
          <img src="../../assets/images/视频.jpg" width="100%" />
        </div>

        <div class="video-main">
          <div class="video-name">
            <span class="color-white">兴华苑</span>
          </div>
          <img src="../../assets/images/视频.jpg" width="100%" />
        </div>

        <div class="video-main">
          <div class="video-name">
            <span class="color-white">兴华苑</span>
          </div>
          <img src="../../assets/images/视频.jpg" width="100%" />
        </div>
      </div>

      <div class="video-page">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="1000"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'video',
  data() {
    return {
      treeModel: {},
      pageModel: {},
    }
  },
  mounted() {

  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      // 加载分类
      this.http
        .post(`/surveillancecamera/orglist`)
        .then((res) => {
          if (res.code === 0) {
            this.treeModel = res.data
          }
        })
    }

  },
  watch: {

  }
}
</script>

<style lang="scss">
//支持scss语法
.main-container-box {
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
      }
      .video-menu {
        display: flex;
        padding-left: 66px;
        cursor: pointer;
      }
      .video-menu-active {
        color: #32c5ff;
        background-image: url("../../assets/imgs/箭头01.png");
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
      background-image: url("../../assets/imgs/清源街道.png");
    }
    .icon-video {
      background-image: url("../../assets/imgs/shipin-8.png");
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
        background-image: url("../../assets/imgs/箭头2.png");
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
          background-color: rgba(0, 41, 193, 0.65);
          font-size: 24px;
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
      .el-icon-arrow-left:before {
        color: #5da7f6;
      }
      .el-pager li.active {
        color: #fff;
        background: #5da7f6;
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
