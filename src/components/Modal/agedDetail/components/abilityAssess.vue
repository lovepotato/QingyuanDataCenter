<template>
  <div class="ability-assess">
    <div
      class="user-title"
      style="clean: both"
    >能力评估</div>
    <div class="ability-form">
      <div class="ability-content">
        <div class="content-item">
          <div class="item-line avatar-line">
            <el-row style="width: 100%">
              <el-col
                :span="4"
                style="height: 100%"
              >
                <div class="avatar">
                  <el-image
                    :src="memberinfo.img | formatImageSrc"
                    style="width: 100px; height: 100px"
                  >
                    <img src="../../../../assets/imgs/icontouxiang.png" alt="" slot="error" style="width: 100px;">
                  </el-image>
                </div>
              </el-col>
              <el-col :span="20">
                <div class="avatar-left">
                  <el-row type="flex">
                    <el-col :span="2">
                      <div class="label">姓名</div>
                    </el-col>
                    <el-col :span="4">
                      <div class="value">{{ memberinfo.user_name }}</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="label">性别</div>
                    </el-col>
                    <el-col :span="4">
                      <div class="value">{{ memberinfo.user_sex }}</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="label">年龄</div>
                    </el-col>
                    <el-col :span="4">
                      <div class="value last">{{ memberinfo.user_age }}</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="label">出生年月</div>
                    </el-col>
                    <el-col :span="4">
                      <div class="value last">{{ memberinfo.user_birth }}</div>
                    </el-col>
                  </el-row>
                  <el-row type="flex">
                    <el-col :span="2">
                      <div class="label">民族</div>
                    </el-col>
                    <el-col :span="4">
                      <div class="value">{{ memberinfo.nation }}</div>
                    </el-col>
                    <el-col :span="4">
                      <div class="label">籍贯</div>
                    </el-col>
                    <el-col :span="14">
                      <div class="value last">{{ memberinfo.native_place }}</div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="item-line">
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">评估人</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">{{ evaluateinfo.add_user }}</div>
              </el-col>
            </el-row>
          </div>
          <div class="item-line">
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">评估时间</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">{{ evaluateinfo.createtime }}</div>
              </el-col>
            </el-row>
          </div>
          <div class="item-line">
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">评估原因</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">
                  <div v-if="evaluateinfo.evaluate_cause">
                    <el-checkbox
                      :disabled="true"
                      :key="nodeIndex"
                      :label="node.name"
                      :value="node.ischeck ? true : false"
                      v-for="(node, nodeIndex) in evaluateinfo.evaluate_cause"
                    >{{ node.name }}</el-checkbox>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <template v-if="evaluateinfo.evaluate_table">
            <div
              :key="index"
              v-for="(item, index) in evaluateinfo.evaluate_table"
            >
              <div class="item-line">
                <el-row type="flex">
                  <el-col :span="24">
                    <div
                      class="value last"
                      style="justify-content: center"
                    >{{ `${cNum[index]}、${item.name}` }}</div>
                  </el-col>
                </el-row>
              </div>
              <div class="item-line">
                <el-row type="flex">
                  <el-col :span="4">
                    <div class="label">指标事项</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="label">评估选项</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="label last">得分</div>
                  </el-col>
                </el-row>
              </div>
              <template v-if="item.question">
                <div
                  :key="questionIndex"
                  class="item-line"
                  v-for="(question, questionIndex) in item.question"
                >
                  <el-row type="flex">
                    <el-col :span="4">
                      <div class="label">{{ question.name }}</div>
                    </el-col>
                    <el-col :span="16">
                      <div class="value">
                        <template v-if="question.answer || question.content ">
                          <div v-if="question.type === 0">
                            <el-radio
                              :disabled="true"
                              :key="answerIndex"
                              :label="true"
                              :value="answer.ischeck ? true : false "
                              v-for="(answer, answerIndex) in question.answer"
                            >{{ answer.name }}</el-radio>
                          </div>
                          <div v-else-if="question.type === 1">
                            <el-checkbox
                              :disabled="true"
                              :key="answerIndex"
                              :label="true"
                              :value="answer.ischeck ? true : false "
                              v-for="(answer, answerIndex) in question.answer"
                            >{{ answer.name }}</el-checkbox>
                          </div>
                          <div v-else-if="question.type === 2">
                            <span>{{ question.content }}</span>
                          </div>
                        </template>
                      </div>
                    </el-col>
                    <el-col :span="4">
                      <div class="value last">{{ question.answer_score }}</div>
                    </el-col>
                  </el-row>
                </div>
              </template>
              <div class="item-line">
                <el-row type="flex">
                  <el-col :span="4">
                    <div class="label">得分</div>
                  </el-col>
                  <el-col :span="20">
                    <div class="value last">
                      <span class="item-score">{{ `${item.score || 0}分` }}</span>
                      {{ item.leave }}
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </template>
          <div class="item-line">
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">一级指标分级</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">
                  <div v-if="evaluateinfo.evaluate_table">
                    <span
                      :key="questionIndex"
                      class="multi-text"
                      v-for="(question, questionIndex) in evaluateinfo.evaluate_table"
                    >{{ `${cNum[questionIndex]}、${question.name}：${question.leave}` }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="item-line">
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">老年人能力初步等级</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">{{ evaluateinfo.start_leave }}</div>
              </el-col>
            </el-row>
          </div>
          <div class="item-line">
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">等级变更条款</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">{{ evaluateinfo.change_contract }}</div>
              </el-col>
            </el-row>
          </div>
          <div class="item-line">
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">老年人能力最终等级</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">{{ evaluateinfo.end_leave }}</div>
              </el-col>
            </el-row>
          </div>
          <div class="item-line">
            <el-row type="flex">
              <el-col :span="24">
                <div class="value last">
                  备注：
                  <span style="color: #D72324">{{ evaluateinfo.remark }}</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AbilityEvaluation',
  props: {
    abilityEvaluation: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      cNum: ['一', '二', '三', '四', '五']
    }
  },
  computed: {
    memberinfo() {
      return this.abilityEvaluation.memberinfo || {}
    },
    evaluateinfo() {
      return this.abilityEvaluation.evaluateinfo || {}
    }
  }
}
</script>

<style>
</style>
