<template>
  <div>
    <div class="jibenqingkuang">
      <div class="right-title">
        <span>医疗保<span style="letter-spacing: 0px">险</span></span>
      </div>
      <div class="content-item">
        <div class="item-line" v-for="(item, index) in medicalinsurance.data" :key="index">
          <el-row type="flex">
            <el-col :span="4">
              <div class="label">{{ item.title }}</div>
            </el-col>
            <el-col :span="20">
              <div class="value last">
                <el-checkbox-group
                  :disabled="true"
                  v-if="item.checkList"
                  :value="getSelectValue(item.checkList)"
                >
                  <el-checkbox
                    :key="nodeIndex"
                    :label="node.value || node.text"
                    v-for="(node, nodeIndex) in item.checkList"
                  >{{ node.text }}</el-checkbox>
                </el-checkbox-group>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    medicalinsurance: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    getSelectValue(arr) {
      const value = []
      arr.filter(val => {
        return val.isCheck
      }).map(val => {
        value.push(val.text)
      })

      return value
    }
  }
}
</script>

<style>
</style>
