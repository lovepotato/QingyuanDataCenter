<template>
  <div>
    <div class="jibenqingkuang">
      <div class="right-title">
        <span>基本情况</span>
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
                  :src="baseInfo.user_img | formatImageSrc"
                  style="width: 100px; height: 100px"
                >
                  <img src="../../../../../assets/imgs/icontouxiang.png" alt="" slot="error" style="width: 100px;">
                </el-image>
              </div>
            </el-col>
            <el-col :span="20">
              <div class="avatar-left">
                <el-row type="flex">
                  <el-col :span="3">
                    <div class="label">姓名</div>
                  </el-col>
                  <el-col :span="5">
                    <div class="value">{{ baseInfo.user_name }}</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="label">性别</div>
                  </el-col>
                  <el-col :span="5">
                    <div class="value">{{ baseInfo.user_sex }}</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="label">年龄</div>
                  </el-col>
                  <el-col :span="5">
                    <div class="value last">{{ baseInfo.user_age }}</div>
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
                    <div class="value">{{ baseInfo.user_idcard }}</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="label">出生年月</div>
                  </el-col>
                  <el-col :span="5">
                    <div class="value last">{{ baseInfo.user_birth }}</div>
                  </el-col>
                </el-row>
                <el-row type="flex">
                  <el-col :span="3">
                    <div class="label">手机号码</div>
                  </el-col>
                  <el-col :span="5">
                    <div class="value">{{ baseInfo.user_phone }}</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="label">座机号</div>
                  </el-col>
                  <el-col :span="5">
                    <div class="value">{{ baseInfo.user_landline || '&nbsp;' }}</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="label">所属社区</div>
                  </el-col>
                  <el-col :span="5">
                    <div class="value last">{{ baseInfo.org_store_name }}</div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="item-line">
          <el-row type="flex">
            <el-col :span="4">
              <div class="label">籍贯地址</div>
            </el-col>
            <el-col :span="8">
              <div class="value">{{ baseInfo.native_place }}</div>
            </el-col>
            <el-col :span="4">
              <div class="label">现居地地址</div>
            </el-col>
            <el-col :span="8">
              <div class="value last">{{ baseInfo.user_addr }}</div>
            </el-col>
          </el-row>
        </div>
        <div class="item-line">
          <el-row type="flex">
            <el-col :span="4">
              <div class="label">重点关注</div>
            </el-col>
            <el-col :span="20">
              <div class="value last">
                <el-checkbox-group
                  :disabled="true"
                  :value="baseInfo.attention ? baseInfo.attention.split('&') : []"
                  v-if="dataDict.attention"
                >
                  <el-checkbox
                    :key="nodeIndex"
                    :label="node.value || node.text"
                    v-for="(node, nodeIndex) in dataDict.attention.childrens"
                  >{{ node.text }}</el-checkbox>
                </el-checkbox-group>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="item-line">
          <el-row type="flex">
            <el-col :span="4">
              <div class="label">其他标签</div>
            </el-col>
            <el-col :span="20">
              <div class="value last">
                <el-checkbox-group
                  :disabled="true"
                  :value="baseInfo.other_label ? baseInfo.other_label.split('&') : []"
                  v-if="dataDict.other_label"
                >
                  <el-checkbox
                    :key="nodeIndex"
                    :label="node.value || node.text"
                    v-for="(node, nodeIndex) in dataDict.other_label.childrens"
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
              <div class="value">{{ baseInfo.user_social }}</div>
            </el-col>
            <el-col :span="4">
              <div class="label">子女数</div>
            </el-col>
            <el-col :span="8">
              <div class="value last">{{ baseInfo.user_children }}</div>
            </el-col>
          </el-row>
        </div>
        <div class="item-line">
          <el-row type="flex">
            <el-col :span="4">
              <div class="label">医保类型</div>
            </el-col>
            <el-col :span="20">
              <div class="value last">
                <el-checkbox-group
                  :disabled="true"
                  :value="baseInfo.health_insurance ? baseInfo.health_insurance.split('&') : []"
                  v-if="dataDict.health_insurance"
                >
                  <el-checkbox
                    :key="nodeIndex"
                    :label="node.value || node.text"
                    v-for="(node, nodeIndex) in dataDict.health_insurance.childrens"
                  >{{ node.text }}</el-checkbox>
                </el-checkbox-group>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="item-line">
          <el-row type="flex">
            <el-col :span="4">
              <div class="label">文化程度</div>
            </el-col>
            <el-col :span="20">
              <div class="value last">
                <el-checkbox-group
                  :disabled="true"
                  :value="baseInfo.user_culture ? baseInfo.user_culture.split('&') : []"
                  v-if="dataDict.user_culture"
                >
                  <el-checkbox
                    :key="nodeIndex"
                    :label="node.value || node.text"
                    v-for="(node, nodeIndex) in dataDict.user_culture.childrens"
                  >{{ node.text }}</el-checkbox>
                </el-checkbox-group>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="item-line">
          <el-row type="flex">
            <el-col :span="4">
              <div class="label">政治面貌</div>
            </el-col>
            <el-col :span="20">
              <div class="value last">
                <el-checkbox-group
                  :disabled="true"
                  :value="baseInfo.user_political ? baseInfo.user_political.split('&') : []"
                  v-if="dataDict.user_political"
                >
                  <el-checkbox
                    :key="nodeIndex"
                    :label="node.value || node.text"
                    v-for="(node, nodeIndex) in dataDict.user_political.childrens"
                  >{{ node.text }}</el-checkbox>
                </el-checkbox-group>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="item-line">
          <el-row type="flex">
            <el-col :span="4">
              <div class="label">曾经职业</div>
            </el-col>
            <el-col :span="20">
              <div class="value last">
                <el-checkbox-group
                  :disabled="true"
                  :value="baseInfo.occupation ? baseInfo.occupation.split('&') : []"
                  v-if="dataDict.occupation"
                >
                  <el-checkbox
                    :key="nodeIndex"
                    :label="node.value || node.text"
                    v-for="(node, nodeIndex) in dataDict.occupation.childrens"
                  >{{ node.text }}</el-checkbox>
                </el-checkbox-group>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="item-line">
          <el-row type="flex">
            <el-col :span="4">
              <div class="label">退休方式</div>
            </el-col>
            <el-col :span="8">
              <div class="value">
                <el-checkbox-group
                  :disabled="true"
                  :value="baseInfo.retirement_way ? baseInfo.retirement_way.split('&') : []"
                  v-if="dataDict.retirement_way"
                >
                  <el-checkbox
                    :key="nodeIndex"
                    :label="node.value || node.text"
                    v-for="(node, nodeIndex) in dataDict.retirement_way.childrens"
                  >{{ node.text }}</el-checkbox>
                </el-checkbox-group>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="label">原单位</div>
            </el-col>
            <el-col :span="8">
              <div class="value last">{{ baseInfo.user_company }}</div>
            </el-col>
          </el-row>
        </div>
        <div class="item-line">
          <el-row type="flex">
            <el-col :span="4">
              <div class="label">婚姻状况</div>
            </el-col>
            <el-col :span="20">
              <div class="value last">
                <el-checkbox-group
                  :disabled="true"
                  :value="baseInfo.user_marriage ? baseInfo.user_marriage.split('&') : []"
                  v-if="dataDict.user_marriage"
                >
                  <el-checkbox
                    :key="nodeIndex"
                    :label="node.value || node.text"
                    v-for="(node, nodeIndex) in dataDict.user_marriage.childrens"
                  >{{ node.text }}</el-checkbox>
                </el-checkbox-group>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="item-line">
          <el-row type="flex">
            <el-col :span="4">
              <div class="label">医疗费用支付方式</div>
            </el-col>
            <el-col :span="20">
              <div class="value last multi-line">
                <el-checkbox-group
                  :disabled="true"
                  :value="baseInfo.hospitalization_costs_pay_type ? baseInfo.hospitalization_costs_pay_type.split('&') : []"
                  v-if="dataDict.hospitalization_costs_pay_type"
                >
                  <el-checkbox
                    :key="nodeIndex"
                    :label="node.value || node.text"
                    v-for="(node, nodeIndex) in dataDict.hospitalization_costs_pay_type.childrens"
                  >{{ node.text }}</el-checkbox>
                </el-checkbox-group>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="item-line">
          <el-row type="flex">
            <el-col :span="4">
              <div class="label">商业保险</div>
            </el-col>
            <el-col :span="20">
              <div class="value last">
                <el-checkbox-group
                  :disabled="true"
                  :value="baseInfo.commercial_insurance ? baseInfo.commercial_insurance.split('&') : []"
                  v-if="dataDict.commercial_insurance"
                >
                  <el-checkbox
                    :key="nodeIndex"
                    :label="node.value || node.text"
                    v-for="(node, nodeIndex) in dataDict.commercial_insurance.childrens"
                  >{{ node.text }}</el-checkbox>
                </el-checkbox-group>
              </div>
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
                  v-for="(item, index) in baseInfo.member_userinfo_family || []"
                >
                  <span>姓名：{{ item.family_name }}</span>
                  <span>电话：{{ item.family_phone }}</span>
                  <span>性别：{{ item.family_sex }}</span>
                  <span>年龄：{{ item.family_age }}</span>
                  <span>家属关系：{{ item.family_relation }}</span>
                  <span>工作单位：{{ item.family_company }}</span>
                  <span>家庭地址：{{ item.family_addr }}</span>
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
