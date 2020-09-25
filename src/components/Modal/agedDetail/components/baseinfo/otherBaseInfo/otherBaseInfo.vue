<template>
  <div>
    <div class="jibenqingkuang">
      <div class="right-title">
        <span>基本资料</span>
      </div>
      <div class="content-item">
        <div class="item-line avatar-line">
          <el-row style="width: 100%" type="flex">
            <el-col
              :span="4"
              style="height: 100%"
            >
              <div class="avatar">
                <el-image
                  :src="baseInfo.image | formatImageSrc"
                  style="width: 100px; height: 100px"
                ></el-image>
              </div>
            </el-col>
            <el-col :span="20">
              <div class="avatar-left">
                <el-row type="flex">
                  <el-col :span="3">
                    <div class="label">姓名</div>
                  </el-col>
                  <el-col :span="5">
                    <div class="value">{{ baseInfo.realname }}</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="label">性别</div>
                  </el-col>
                  <el-col :span="5">
                    <div class="value">{{ baseInfo.gender }}</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="label">年龄</div>
                  </el-col>
                  <el-col :span="5">
                    <div class="value last">{{ baseInfo.age }}</div>
                  </el-col>
                </el-row>
                <el-row type="flex">
                  <el-col :span="3">
                    <div class="label">民族</div>
                  </el-col>
                  <el-col :span="5">
                    <div class="value">{{ baseInfo.nation }}</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="label">身份证号</div>
                  </el-col>
                  <el-col :span="5">
                    <div class="value">{{ baseInfo.id_card }}</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="label">出生年月</div>
                  </el-col>
                  <el-col :span="5">
                    <div class="value last">{{ baseInfo.birth }}</div>
                  </el-col>
                </el-row>
                <el-row type="flex">
                  <el-col :span="3">
                    <div class="label">手机号码</div>
                  </el-col>
                  <el-col :span="5">
                    <div class="value">{{ baseInfo.mobile }}</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="label">住养类型</div>
                  </el-col>
                  <el-col :span="5">
                    <div class="value">{{ baseInfo.oldmantype || '&nbsp;' }}</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="label">当前状态</div>
                  </el-col>
                  <el-col :span="5">
                    <div class="value last">{{ baseInfo.status }}</div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="item-line">
          <el-row type="flex">
            <el-col :span="4">
              <div class="label">家庭住址</div>
            </el-col>
            <el-col :span="8">
              <div class="value">{{ baseInfo.addr }}</div>
            </el-col>
            <el-col :span="4">
              <div class="label">备注说明</div>
            </el-col>
            <el-col :span="8">
              <div class="value last">{{ baseInfo.remark }}</div>
            </el-col>
          </el-row>
        </div>
        <div class="item-line" v-for="(item, index) in baseInfo.dataList" :key="index">
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
        <div class="item-line">
          <el-row type="flex">
            <el-col :span="4">
              <div class="label">社保卡号</div>
            </el-col>
            <el-col :span="8">
              <div class="value">{{ baseInfo.health_no }}</div>
            </el-col>
            <el-col :span="4">
              <div class="label">档案编号</div>
            </el-col>
            <el-col :span="8">
              <div class="value last">{{ baseInfo.record_no }}</div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="zinvxinxi">
      <div class="right-title">
        <span>子女信息</span>
      </div>
      <div class="content-item">
        <div class="item-line">
          <el-row type="flex">
            <el-col :span="24">
              <div class="value last">
                <div
                  :key="index"
                  class="value-item"
                  v-for="(item, index) in familydata.data || []"
                >
                  <span>姓名：{{ item.realname }}</span>
                  <span>电话：{{ item.mobile }}</span>
                  <span>性别：{{ item.gender }}</span>
                  <span>年龄：{{ item.age }}</span>
                  <span>家属关系：{{ item.relation }}</span>
                  <span>家庭地址：{{ item.addr }}</span>
                </div>
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
    baseInfo: {
      type: Object,
      default() {
        return {}
      }
    },
    familydata: {
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
