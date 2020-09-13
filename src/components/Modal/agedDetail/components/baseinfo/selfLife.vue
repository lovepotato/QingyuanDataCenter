<template>
  <div class="jibenqingkuang">
    <div class="right-title">
      <span>个性生活</span>
    </div>
    <div class="content-item">
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">性格</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.character ? baseInfo.character.split(';') : []"
                v-if="dataDict.character"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.character.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">爱好特长</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.hobby ? baseInfo.hobby.split('&') : []"
                v-if="dataDict.hobby"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.hobby.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">宗教信仰</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.religious_belief ? baseInfo.religious_belief.split(';') : []"
                v-if="dataDict.religious_belief"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.religious_belief.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">养老方式</div>
          </el-col>
          <el-col :span="20">
            <div class="value last multi-line">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.pension_mode ? baseInfo.pension_mode.split(';') : []"
                v-if="dataDict.pension_mode"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.pension_mode.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">服务类型</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.service_type ? baseInfo.service_type.split(';') : []"
                v-if="dataDict.service_type"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.service_type.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">个人需求</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.personal_needs ? baseInfo.personal_needs.split(';') : []"
                v-if="dataDict.personal_needs"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.personal_needs.childrens"
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
