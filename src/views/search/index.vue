<template>
  <div class="smart-cloud-search">
    <div class="img-box">
      <img src="../../assets/imgs/搜索框.png" alt="">
      <el-input class="search-input" placeholder="请输入内容..." v-model="searchText" @keyup.enter.native="search"></el-input>
    </div>
    <img class="background-img" src="../../assets/imgs/搜索框底部图.png" alt="">
    <list-modal ref="modal" :keyword="searchText"></list-modal>
  </div>
</template>

<script>
import listModal from './listModal'

export default {
  name: 'Search',
  components: {
    listModal
  },
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    search() {
      this.$refs.modal.showDialog = true
      // this.http.post(`/smartcloud/oldman_search`, {
      //   keyword: this.searchText
      // }).then(res => {
      //   this.$refs.modal.showDialog = true
      //   console.log(res)
      // })
    }
  }
}
</script>

<style lang="scss">
.smart-cloud-search {
  position: relative;
  width: 100%;
  height: 100%;
  .background-img {
    position: absolute;
    bottom: 0px;
    width: 100%;
  }

  .img-box {
    text-align: center;

    img {
      margin-top: 30px;
    }

    .search-input {
      width: 1233px;
      position: absolute;
      left: 1111px;
      top: 452px;
      input {
        height: 152px;
        font-family: PingFangSC-Regular;
        font-size: 40px;
        color: #fff;
        background-color: transparent;
        border: 0px;
        padding-left: 150px;
      }
    }
  }
}
</style>
