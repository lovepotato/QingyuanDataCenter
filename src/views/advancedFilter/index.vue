<template>
  <!-- <div><router-link to="/dataAnalyze/dataFilter/result"> <div>高级筛选结果</div></router-link></div> -->
  <div
    class="advancedFilter"
    v-loading="fetchLoading"
  >
    <div class="img-box">
      <img
        alt="人体"
        src="../../assets/imgs/人体.png"
      />
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
    <div class="filter">
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
            <img src="../../assets/imgs/jiantou.png" alt="">
          </div>
          <div class="filter-content">
            <div>
              <el-tag
                :key="nodeIndex"
                @close="closeData(node)"
                class="item"
                closable
                v-for="(node, nodeIndex) in selectData[item.name].filter(item => {return item.value.length > 0})"
              >{{ `${node.prop_name}：${getValueReduce(node.value)}` }}</el-tag>
            </div>
          </div>
        </div>
      </div>
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
    <el-dialog
      :close-on-click-modal="true"
      :visible.sync="showDialog"
      append-to-body
      class="el-dialog-side data-fliter"
    >
      <div class="dialog-wrapper">
        <div class="user-title">{{ currentSelectItem.title }}</div>
        <div>
          <el-form
            label-width="130px"
            ref="form"
          >
            <el-form-item
              :key="index"
              :label="item.prop_name"
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
      showDialog: false
    }
  },
  computed: {
    filterDataOrder() {
      const values = Object.values(this.filterData)
      const keys = Object.keys(this.filterData)
      values.forEach((item, index) => { item.name = keys[index] })
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
    // selectData: {
    //   deep: true,
    //   handler(val) {
    //     console.log(val)
    //     val.forEach((item, index) => {
    //       item
    //     })
    //     // this.currentResult
    //   }
    // }
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
      const postJson = this.getPostJson()
      this.$router.push(
        `/dataAnalyze/dataFilter/result?searchJSON=${JSON.stringify(postJson)}`
      )
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

  .img-box {
    margin-top: 43px;
    margin-left: 30px;
    position: relative;

    .img-line1 {
      position: absolute;
      right: 0px;
      top: 9px;
    }
    .img-line2 {
      position: absolute;
      right: 0px;
      top: 157px;
    }
    .img-line3 {
      position: absolute;
      right: 0px;
      top: 300px;
    }
    .img-line4 {
      position: absolute;
      right: 0px;
      top: 417px;
    }
  }
  .filter {
    width: calc(100% - 420px);
    padding-top: 40px;
  }
  .filter-item {
    width: 100%;
    height: 145px;

    .filter-title {
      position: relative;
      background-image: url("../../assets/imgs/框-高级筛选1.png");
      width: 208px;
      height: 82px;
      line-height: 82px;
      padding-left: 23px;
      box-sizing: border-box;
      margin-bottom: 31px;
      font-family: PingFangSC-Semibold;
      font-size: 22px;
      color: #35E7FF;
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
      height: 80px;
      overflow-y: auto;
      overflow-x: hidden;

      .item {
        margin-right: 20px;
        margin-bottom: 15px;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.data-fliter {
  .el-dialog {
    width: 44.5rem !important;
  }
}

.filter-button {
  margin-top: 40px;
  text-align: right;
  margin-right: 40%;
  button {
    width: 10.71rem;
    height: 2.86rem;
    font-family: PingFangSC-Regular;
    font-size: 16px;
  }

  .reset {
    color: #000;
    background-color: #fff;
  }
  .submit {
    color: #fff;
    background-color: #d72324;

    &:hover {
      background-color: #bb0506;
    }
  }
}
</style>
