<template>
  <!-- 监控视频分布 -->
  <div class="main-container-box">
    <div class="left-contaier">
      <div class="video-menu-list">
        <div class="video-menu-title" @click="onTreeChange(treeModel.id,treeModel.type)">
          <i class="icon icon-add"></i>
          <span :id="treeModel.id">{{ treeModel.org_name }}</span>
        </div>

        <div
          v-for="(item, index) in treeModel.org_stores"
          :key="index"
          :id="item.id"
          :class="tree_active_id==item.id?'video-menu  video-menu-active':'video-menu '"
          @click="onTreeChange(item.id,item.type)"
        >
          <i :class="tree_active_id==item.id?'icon icon-video':'icon'"></i>
          {{ item.org_name }}
        </div>

        <!--    
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
        </div>-->
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
        <div class="video-main" v-for="(item, index) in pageModel.dataList" :key="index">
          <div class="video-name">
            <span class="color-white">{{ item.title}}</span>
          </div>
          <!-- <img src="../../assets/images/视频.jpg" width="100%" /> -->

          <rtmpVideo :videoSrc="item.url" videoWidth="568" videoHeight="426"></rtmpVideo>
        </div>

        <!--    <div class="video-main">
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
        </div>-->
      </div>

      <div class="video-page">
        <div class="block">
          <el-pagination
            v-if="pagingModel.total>0"
            @current-change="onCurrentChange"
            layout="total, prev, pager, next"
            :current-page.sync="pagingModel.currentPage"
            :page-size="pagingModel.limit"
            :total="pagingModel.total"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import rtmpVideo from '@/components/Video'
export default {
  components: { rtmpVideo },
  name: 'video',
  data() {
    return {
      treeModel: {},
      pageModel: {},
      tree_active_id: 130,
      tree_active_type: 0,
      pagingModel: {
        limit: 10, // 页大小
        currentPage: 1,//当前页面
        total: 0,// 总条数
        totalPages: 0,// 总页数
      },
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
            this.onTreeChange(this.treeModel.id, this.treeModel.type);
          }
        })
    },
    loadVideos(page) {
      this.pagingModel.currentPage = page;
      // 加载视频
      this.http
        .post(`/surveillancecamera/videolist`, { id: this.tree_active_id, type: this.tree_active_type, currentPage: page })
        .then((res) => {
          if (res.code === 0) {
            this.pageModel = res.data

            this.pagingModel.total = res.data.total;
          }
        })
    },
    onTreeChange(id, type) {
      this.tree_active_id = id;
      this.tree_active_type = type;

      this.loadVideos(1);
    },
    onCurrentChange(val) {
      this.loadVideos(val);
    },

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
        cursor: pointer;
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

          background-color: #0029c1;
          font-size: 24px;
          opacity: 0.65;
          filter: alpha(opacity=65);
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
