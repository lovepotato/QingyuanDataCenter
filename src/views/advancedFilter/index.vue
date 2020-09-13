<template>
  <!-- <div><router-link to="/dataAnalyze/dataFilter/result"> <div>高级筛选结果</div></router-link></div> -->
  <div
    class="advancedFilter"
  >
    <div class="left-container">
      <transition
        :duration="1000"
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOutRightBig"
      >
        <div class="img-box" v-show="showImg">
          <img
            alt="人体"
            src="../../assets/imgs/高级筛选-动2 3.gif"
          />
        </div>
      </transition>
      <transition
        :duration="1000"
        enter-active-class="animated fadeInLeftBig"
        leave-active-class="animated fadeOutRightBig"
        name="fade"
      >
        <div
          class="line-box"
          v-show="showLine"
        >
          <img
            alt
            class="img-line1"
            src="../../assets/imgs/线1.png"
          />
          <img
            alt
            class="img-line2"
            src="../../assets/imgs/线2.png"
          />
          <img
            alt
            class="img-line3"
            src="../../assets/imgs/线2.png"
          />
          <img
            alt
            class="img-line4"
            src="../../assets/imgs/线3.png"
          />
        </div>
      </transition>
      <transition
        :duration="1000"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        name="fade"
      >
        <div
          class="filter"
          v-show="showFilter"
        >
          <div
            :key="index"
            v-for="(item, index) in filterDataOrder"
          >
            <div class="filter-item">
              <div
                @click="selectItem(item)"
                class="filter-title"
              >
                {{ item.title }}
                <img
                  alt
                  src="../../assets/imgs/jiantou.png"
                />
              </div>
              <div class="filter-content">
                <vue-scroll>
                  <div>
                    <el-tag
                      :key="nodeIndex"
                      @close="closeData(node)"
                      class="item"
                      closable
                      v-for="(node, nodeIndex) in selectData[item.name].filter(item => {return item.value.length > 0})"
                    >{{ `${node.prop_name}：${getValueReduce(node.value)}` }}</el-tag>
                  </div>
                </vue-scroll>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <div class="filter-button">
        <el-button
          @click="resetData"
          class="reset"
        >重置</el-button>
        <el-button
          @click="searchData"
          class="submit"
        >提交</el-button>
      </div>
    </div>
    <div class="right-container">
      <div class="data-filter-title">
        筛选符合条件的老人共 <span>{{ tableData.total || 0 }}</span> 人
      </div>
      <div class="data-filter-table">
        <el-table
          :data="tableData.dataList"
          border
          element-loading-text="Loading"
          fit
          highlight-current-row
        >
          <el-table-column
            align="center"
            label="老人姓名"
            width="177"
          >
            <template slot-scope="scope">
              <span style="cursor: pointer" @click="goDetail(scope.row)">{{ scope.row.user_name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="性别"
            width="123"
          >
            <template slot-scope="scope">{{ scope.row.user_sex }}</template>
          </el-table-column>
          <el-table-column
            align="center"
            label="年龄"
            width="129"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.user_age }}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="手机号码"
            width="221"
          >
            <template slot-scope="scope">{{ scope.row.user_phone }}</template>
          </el-table-column>
          <el-table-column
            align="center"
            label="身份证号"
            width="279"
          >
            <template slot-scope="scope">{{ scope.row.user_idcard }}</template>
          </el-table-column>
          <el-table-column
            align="center"
            label="能力等级"
            width="238"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.self_care_ability }}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="所属区域"
            width="249"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.org_store_name }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="pagination">
        <el-pagination
          :current-page="currentPage"
          :page-size="10"
          :total="tableData.total"
          @current-change="handlePageChange"
          layout="total, prev, pager, next, jumper"
        />
      </div>
    </div>
    <el-dialog
      :close-on-click-modal="true"
      :visible.sync="showDialog"
      append-to-body
      :lock-scroll="false"
      class="data-fliter"
    >
      <div class="dialog-wrapper">
        <div class="user-title">{{ currentSelectItem.title }}</div>
        <div class="user-content">
          <vue-scroll>
            <el-form
              label-width="130px"
              ref="form"
            >
              <el-form-item
                :key="index"
                :label="item.prop_name + '：'"
                v-for="(item, index) in currentSelectItem.data"
              >
                <el-checkbox-group v-model="selectData[currentSelectItem.code][index].value">
                  <el-checkbox
                    :key="nodeIndex"
                    :label="node"
                    v-for="(node, nodeIndex) in item.childrens"
                  >{{ node.text }}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-form>
          </vue-scroll>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'DataFilter',
  data() {
    return {
      filterData: {},
      currentSelectItem: {},
      currentResult: {},
      fetchLoading: false,
      selectData: {},
      showDialog: false,
      showLine: false,
      showFilter: false,
      showImg: false,
      tableLoading: false,
      currentPage: 1,
      searchJSON: {},
      tableData: {
        dataList: []
      }
    }
  },
  computed: {
    filterDataOrder() {
      const values = Object.values(this.filterData)
      const keys = Object.keys(this.filterData)
      values.forEach((item, index) => {
        item.name = keys[index]
      })
      return values.sort((a, b) => {
        return a.indx - b.indx
      })
    }
  },
  watch: {
    filterData(val) {
      this.selectData = {}
      for (const name in val) {
        const array = []
        val[name].data.forEach((item, index) => {
          const obj = {
            field_name: item.field_name,
            prop_name: item.prop_name,
            value: []
          }
          this.$set(array, index, obj)
        })
        this.$set(this.selectData, name, array)
      }
    }
  },
  created() {
    this.getfilterData()
  },
  methods: {
    getfilterData() {
      this.fetchLoading = true
      this.http
        .post('/bigdataanalyze/advanced_filter')
        .then(({ data, code, msg }) => {
          if (code === 0) {
            this.filterData = data
            this.showImg = true
            setTimeout(() => {
              this.showLine = true
              setTimeout(() => {
                this.showFilter = true
              }, 500)
            }, 1000)
          } else {
            this.$notify.error({
              title: '错误',
              message: `查询失败，原因：${msg}`
            })
          }
        })
        .finally(() => {
          this.fetchLoading = false
        })
    },
    selectItem(item) {
      this.currentSelectItem = item
      this.showDialog = true
    },
    getValueReduce(arr) {
      return arr.reduce((total, current, index) => {
        return index === 0
          ? `${total} ${current.text}`
          : `${total}, ${current.text}`
      }, '')
    },
    resetData() {
      for (const name in this.selectData) {
        this.selectData[name].forEach((item) => {
          item.value = []
        })
      }
    },
    closeData(item) {
      item.value = []
    },
    getPostJson() {
      const postJson = []
      for (const name in this.selectData) {
        const itemData = this.selectData[name]
        itemData.forEach((item) => {
          const valueStr = item.value.reduce((total, current, index) => {
            return index === 0
              ? `${total}${current.value || current.text}`
              : `${total};${current.value || current.text}`
          }, '')
          if (valueStr) {
            postJson.push({
              name: item.prop_name,
              field_name: item.field_name,
              value: valueStr
            })
          }
        })
      }
      return postJson
    },
    searchData() {
      this.searchJSON = this.getPostJson()
      this.currentPage = 1
      this.getFilterResult()
    },
    getFilterResult() {
      this.tableLoading = true
      this.http
        .post('/bigdataanalyze/advanced_filter_result', {
          currentPage: this.currentPage,
          limit: 10,
          searchJSON: this.searchJSON,
          keyword: ''
        })
        .then(({ data, code, msg }) => {
          if (code === 0) {
            this.tableData = data
          } else {
            this.$notify.error({
              title: '错误',
              message: `查询失败，原因：${msg}`
            })
          }
        })
        .finally(() => {
          this.tableLoading = false
        })
    },
    goDetail({ id }) {
      this.$bus.$emit('showAgedDetail', {
        id
      })
    },
    handlePageChange(val) {
      this.currentPage = val
      this.getFilterResult()
    }
  }
}
</script>

<style lang="scss" scoped>
.advancedFilter {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px 62px 70px 62px;

  .left-container {
    width: 1800px;
    height: 100%;
    display: flex;
    position: relative;
    .img-box {
      position: relative;
      width: 536px;

      img{
        position: relative;
        width: 668px;
        height: 1296px;
        top: -148px;
      }
    }
    .line-box {
      width: 321px;
      height: 900px;
      position: relative;
      .img-line1 {
        position: absolute;
        right: -5px;
        top: 72px;
      }
      .img-line2 {
        position: absolute;
        right: -5px;
        top: 314px;
      }
      .img-line3 {
        position: absolute;
        right: -5px;
        top: 555px;
      }
      .img-line4 {
        position: absolute;
        right: -5px;
        top: 737px;
      }
    }
    .filter {
      width: 908px;
      padding-top: 31px;
      position: relative;
    }
    .filter-item {
      width: 100%;
      height: 240px;

      .filter-title {
        position: relative;
        background-image: url('../../assets/imgs/框-高级筛选1.png');
        width: 208px;
        height: 82px;
        line-height: 82px;
        padding-left: 23px;
        box-sizing: border-box;
        margin-bottom: 15px;
        font-family: PingFangSC-Semibold;
        font-size: 22px;
        color: #35e7ff;
        cursor: pointer;

        img {
          position: absolute;
          right: 15px;
          top: 27px;
        }
      }

      .filter-content {
        width: 100%;
        overflow-x: auto;
        word-wrap: none;
        white-space: pre-wrap;
        height: 130px;
        overflow-y: auto;
        overflow-x: hidden;

        .item {
          margin-right: 16px;
          margin-bottom: 15px;
          background: #012776;
          height: 60px;
          padding: 18px;
          font-family: PingFangSC-Regular;
          font-size: 18px;
          color: #ffffff;
        }
      }
    }

    .filter-button {
      position: absolute;
      left: 600px;
      bottom: -10px;
      button {
        font-family: PingFangSC-Semibold;
        font-size: 24px;
        letter-spacing: -0.01px;
        text-align: center;
        width: 294px;
        height: 66px;
      }

      .reset {
        border: 2px solid #35E7FF;
        border-radius: 33px;
        color: #35E7FF;
        background-color: transparent;
        margin-right: 66px;
      }
      .submit {
        color: #fff;
        background: #35E7FF;
        border-radius: 33px;
      }
    }
  }

  .right-container {
    position: relative;
    width: 1527px;
    height: 1083px;
    background-image: url("../../assets/imgs/高级筛选Group1.png");

    .data-filter-title {
      height: 112px;
      width: 100%;
      text-align: center;
      font-family: PingFangSC-Semibold;
      font-size: 32px;
      color: #35E7FF;
      letter-spacing: 3.2px;
      line-height: 112px;

      span {
        font-family: PingFangSC-Semibold;
        font-size: 32px;
        color: #F7B500;
        letter-spacing: 3.2px;
      }
    }
  }
}
</style>

<style lang="scss">
.filter-content {
  .el-tag__close {
    color: #000;
    background: #0091ff;
  }
}
</style>

<style lang="scss">
.data-fliter {
  &.el-dialog__wrapper {
    position: absolute;
    width: 3456px;
    height: 1296px;
  }
  .el-dialog {
    width: 887px !important;
    height: 1082px !important;
    margin: 0px !important;
    position: absolute;
    left: 978px;
    top: 149px;
    background: #3045A2;
    border-radius: 8px 0 0 8px;
  }

  .el-dialog__header {
    padding: 0px !important;
  }

  .el-dialog__body {
    padding: 36px;

    .el-form-item {
      margin-bottom: 0px !important;
    }

    .el-form-item__label {
      font-family: PingFangSC-Medium;
      font-size: 18px;
      color: #35E7FF;
      letter-spacing: 0;
      text-align: right;
    }

    .el-checkbox {
      margin-right: 80px;
      margin-bottom: 10px;
    }

    .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
      border-color: #35E7FF !important;
      color: #35E7FF !important;
    }
    .el-checkbox__inner::after {
        border-color: #35E7FF !important;
        height: 9px;
        left: 6px;
        top: 2px;
        width: 4px;
      }
    .el-checkbox__inner {
      width: 20px;
      height: 20px;
      background: #3045A2;
      border: 1px solid #cccccc;
      border-radius: 4px;
    }

    .el-checkbox__label {
      font-family: PingFangSC-Regular;
      font-size: 18px;
      color: #FFFFFF;
      letter-spacing: 0;
    }
  }

  .user-title {
    padding-left: 14px;
    border-left: 2px solid #35E7FF;
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: #FFFFFF;
    letter-spacing: 5.07px;
    line-height: 40px;
    margin-bottom: 44px;
  }

  .user-content {
    overflow-y: auto;
    height: 900px;
  }
}

.data-filter-table {
  width: 1419px;
  height: 871px;
  margin: 0 auto;

  .el-table__empty-text {
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #FFFFFF;
    letter-spacing: 0;
  }
  .el-table--border, .el-table--group {
    border: 1px solid #0091ff;
  }
  .el-table td, .el-table th.is-leaf {
    border-bottom: 1px solid #0091FF;
  }
  .el-table--border th, .el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed {
    border-right: 1px solid #0091FF;
  }
  .el-table::before {
    height: 0px;
  }
  .el-table--border::after, .el-table--group::after {
    width: 0px;
  }
  .el-table tbody tr:hover>td {
    background-color:transparent !important
  }
  .current-row td{
    background-color:transparent !important
  }
  .el-table {
    background-color: transparent;
  }

  .el-table__header th {
    height: 78px;
    background-color: #002775;

    .cell {
      font-family: PingFangSC-Medium;
      font-size: 26px;
      color: #35E7FF;
    }
  }

  .el-table__body tr {
    background-color: transparent;
    height: 78px;

    &.el-table__row {
      .cell {
        font-family: PingFangSC-Regular;
        font-size: 24px;
        color: #FFFFFF;
        letter-spacing: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}

.advancedFilter {
  .pagination {
    position: absolute;
    bottom: 26px;
    right: 50px;

    .el-pagination__total {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #5DA7F6;
      margin-right: 22px;
    }

    button {
      background-color: transparent;
      color: #5DA7F6;
    }

    .el-pager li{
      background-color: transparent;
      border: 1px solid #5DA7F6;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #5DA7F6;
      line-height: 26px;

      &.active {
        background: #5DA7F6;
        color: #fff;
      }
    }

    .el-pagination__jump {
      margin-left: 64px;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #5DA7F6;
      letter-spacing: 0;

      .el-input {
        margin: 0 12px;
        width: 58px;
        height: 30px;

        input {
          background: #203A72;
          border: 1px solid #5DA7F6;
          border-radius: 4px;
          color: #fff;
        }
      }
    }
  }
}
</style>
