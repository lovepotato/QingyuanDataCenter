<template>
  <div class="jibenqingkuang">
    <div class="right-title">
      <span>生活状况</span>
    </div>
    <div class="content-item">
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">经济来源</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.economic_source ? baseInfo.economic_source.split('&') : []"
                v-if="dataDict.economic_source"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.economic_source.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">住房情况</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.housing ? baseInfo.housing.split('&') : []"
                v-if="dataDict.housing"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.housing.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">居住情况</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.new_housing ? baseInfo.new_housing.split('&') : []"
                v-if="dataDict.new_housing"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.new_housing.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">可支配月收入</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.month_income ? baseInfo.month_income.split('&') : []"
                v-if="dataDict.month_income"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.month_income.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">月养老支出预算</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.month_pension_amount ? baseInfo.month_pension_amount.split('&') : []"
                v-if="dataDict.month_pension_amount"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.month_pension_amount.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">消费类型</div>
          </el-col>
          <el-col :span="20">
            <div class="value last multi-line">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.consume_type ? baseInfo.consume_type.split('&') : []"
                v-if="dataDict.consume_type"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.consume_type.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {}
      }
    },
    dataDict: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
</style>
