<template>
  <div>
    <div class="jibenqingkuang">
      <div class="right-title">
        <span>健康状况</span>
      </div>
      <div
        class="content-item"
        style="border-bottom: 1px solid #0091FF"
      >
        <div
          :key="index"
          class="item-line"
          v-for="(item, index) in healthdata.data"
        >
          <el-row type="flex">
            <el-col :span="4">
              <div class="label">{{ item.title }}</div>
            </el-col>
            <el-col :span="20">
              <div class="value last">
                <el-checkbox-group
                  :disabled="true"
                  :value="getSelectValue(item.checkList)"
                  v-if="item.checkList"
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
    healthdata: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    getSelectValue(arr) {
      const value = []
      arr
        .filter((val) => {
          return val.isCheck
        })
        .map((val) => {
          value.push(val.text)
        })

      return value
    }
  }
}
</script>

<style>
</style>
