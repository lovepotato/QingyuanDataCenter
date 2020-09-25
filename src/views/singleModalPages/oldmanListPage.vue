<template>
  <div class="search-detail-modal">
    <div class="dialog-title">
      <div class="title">搜索结果</div>
      <div class="close" @click="showDialog = false"><img src="../../assets/imgs/guanbi-5.png" alt=""></div>
    </div>
    <div class="dialog-content">
      <vue-scroll>
        <div class="list-container">
          <template v-if="list.length > 0">
            <div class="item" v-for="(item, index) in list" :key="index" @click="jumpDetail(item.id)">
              <div class="item-img">
                <el-avatar :src="item.image | formatImageSrc" :size="99"></el-avatar>
              </div>
              <div>
                <div class="item-info">
                  <span>{{ item.user_name }}</span>
                  <span>{{ item.user_gender }}</span>
                  <span>{{ item.user_age }}</span>
                </div>
                <div class="item-addr">{{ item.org_name }}</div>
              </div>
            </div>
          </template>
          <template v-else-if="hasFetchd && list.length < 1">
            <div class="empty-img">
              <img src="../../assets/imgs/无内容占位图.png" alt="">
              <span class="">暂无内容</span>
            </div>
          </template>
        </div>
      </vue-scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OldmanListPage',
  data(vm) {
    return {
      showDialog: false,
      key: this.$route.query.key || '',
      list: [],
      loading: false,
      hasFetchd: false
    }
  },
  created() {
    this.loading = false
    this.http.post(`/smartcloud/oldman_search`, {
      keyword: this.key
    }).then(({ data }) => {
      this.list = data.list
      this.hasFetchd = true
    }).finally(() => {
      this.loading = true
    })
  },
  methods: {
    jumpDetail(id) {
      this.$router.push(`/oldmanDetailPage?id=${id}`)
    }
  }
}
</script>

<style lang="scss">
.search-detail-modal {
  height: 100%;
  &.el-dialog__wrapper {
    position: absolute;
    width: 3456px;
    height: 1296px;
  }

  .el-dialog__header {
    padding: 0px;
    height: 0px;

    button {
      display: none;
    }
  }

  .el-dialog__body {
    padding: 0px;
    height: 1296px;
  }

  &.el-dialog-side .el-dialog {
    right: 0 !important;
    top: 0;
    bottom: 0;
    min-height: 100%;
    margin: 0 !important;
    border-radius: 0;
    overflow-x: hidden;
    overflow-y: auto;
    // position: absolute;
    position: fixed;
    height: 100%;
    width: 886px;
    background-color: transparent;
  }

  .dialog-title {
    height: 118px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    padding-top: 54px;
    background-color: #052467;
    .title {
      font-family: PingFangSC-Semibold;
      font-size: 32px;
      color: #35E7FF;
      letter-spacing: 0;
    }

    .close {
      margin-right: 45px;
      img {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
  }

  .dialog-content {
    background-color: #052467;
    height: calc(100% - 118px);
    width: 100%;

    .list-container {
      min-height: 1000px;
      .item {
        width: 100%;
        min-width: 500px;
        height: 189px;
        background-color: #032F8C;
        margin-bottom: 16px;
        padding: 45px 39px 45px 39px;
        display: flex;

        .item-img {
          margin-right: 27px;
        }

        .item-info {
          font-family: PingFangSC-Regular;
          font-size: 18px;
          color: #F9F9F9;
          letter-spacing: 0;
          line-height: 30px;
          margin-bottom: 26px;
          margin-top: 10px;

          span {
            margin-right: 27px;
          }
          span:first-child {
            font-size: 28px;
          }
        }

        .item-addr {
          font-family: PingFangSC-Regular;
          font-size: 18px;
          color: #F9F9F9;
          letter-spacing: 0;
          line-height: 30px;
        }
      }

      .empty-img {
        display: block;
        margin: 0 auto;
        margin-top: 320px;
        width: 474px;
        text-align: center;

        span {
          font-family: PingFangSC-Regular;
          font-size: 40px;
          color: #80A4D9;
          letter-spacing: 0;
        };
      }
    }
  }
}
</style>

<style>
body {
  width: 100%;
}
</style>
