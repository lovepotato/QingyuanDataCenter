<template>
  <div class="jibenqingkuang">
    <div class="right-title">
      <span>健康状况</span>
    </div>
    <div class="content-item">
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">血型</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.blood_type ? baseInfo.blood_type.split(';') : []"
                v-if="dataDict.blood_type"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.blood_type.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">视力</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.eyesight ? baseInfo.eyesight.split(';') : []"
                v-if="dataDict.eyesight"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.eyesight.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">听力</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.hearing ? baseInfo.hearing.split(';') : []"
                v-if="dataDict.hearing"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.hearing.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">能力程度</div>
          </el-col>
          <el-col :span="8">
            <div class="value">{{ baseInfo.self_care_ability }}</div>
          </el-col>
          <el-col :span="4">
            <div class="label">护理级别</div>
          </el-col>
          <el-col :span="8">
            <div class="value last">{{ baseInfo.nursing_level }}</div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">意识状态</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.conscious_state ? baseInfo.conscious_state.split(';') : []"
                v-if="dataDict.conscious_state"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.conscious_state.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">睡眠状况</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.sleep_state ? baseInfo.sleep_state.split(';') : []"
                v-if="dataDict.sleep_state"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.sleep_state.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">睡眠时长</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">{{ baseInfo.sleep_hour }}</div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">辅助睡眠药物</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.sleep_aid ? baseInfo.sleep_aid.split(';') : []"
                v-if="dataDict.sleep_aid"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.sleep_aid.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">语言沟通</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.verbal_communication ? baseInfo.verbal_communication.split(';') : []"
                v-if="dataDict.verbal_communication"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.verbal_communication.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">吸烟</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.smoke ? baseInfo.smoke.split(';') : []"
                v-if="dataDict.smoke"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.smoke.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">饮酒</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.drink_wine ? baseInfo.drink_wine.split(';') : []"
                v-if="dataDict.drink_wine"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.drink_wine.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">生活自理能力</div>
          </el-col>
          <el-col :span="20">
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">进食</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">
                  <el-checkbox-group
                    :disabled="true"
                    :value="baseInfo.self_ability_feed ? baseInfo.self_ability_feed.split(';') : []"
                    v-if="dataDict.self_ability_feed"
                  >
                    <el-checkbox
                      :key="nodeIndex"
                      :label="node.value || node.text"
                      v-for="(node, nodeIndex) in dataDict.self_ability_feed.childrens"
                    >{{ node.text }}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">个人卫生</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">
                  <el-checkbox-group
                    :disabled="true"
                    :value="baseInfo.self_ability_personal_hygiene ? baseInfo.self_ability_personal_hygiene.split(';') : []"
                    v-if="dataDict.self_ability_personal_hygiene"
                  >
                    <el-checkbox
                      :key="nodeIndex"
                      :label="node.value || node.text"
                      v-for="(node, nodeIndex) in dataDict.self_ability_personal_hygiene.childrens"
                    >{{ node.text }}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">行走</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">
                  <el-checkbox-group
                    :disabled="true"
                    :value="baseInfo.self_ability_walk ? baseInfo.self_ability_walk.split(';') : []"
                    v-if="dataDict.self_ability_walk"
                  >
                    <el-checkbox
                      :key="nodeIndex"
                      :label="node.value || node.text"
                      v-for="(node, nodeIndex) in dataDict.self_ability_walk.childrens"
                    >{{ node.text }}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">上下床</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">
                  <el-checkbox-group
                    :disabled="true"
                    :value="baseInfo.self_ability_up_down_bed ? baseInfo.self_ability_up_down_bed.split(';') : []"
                    v-if="dataDict.self_ability_up_down_bed"
                  >
                    <el-checkbox
                      :key="nodeIndex"
                      :label="node.value || node.text"
                      v-for="(node, nodeIndex) in dataDict.self_ability_up_down_bed.childrens"
                    >{{ node.text }}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">近30天内意外事件</div>
          </el-col>
          <el-col :span="20">
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">跌倒</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">
                  <el-checkbox-group
                    :disabled="true"
                    :value="baseInfo.accident_tumble ? baseInfo.accident_tumble.split(';') : []"
                    v-if="dataDict.accident_tumble"
                  >
                    <el-checkbox
                      :key="nodeIndex"
                      :label="node.value || node.text"
                      v-for="(node, nodeIndex) in dataDict.accident_tumble.childrens"
                    >{{ node.text }}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">走失</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">
                  <el-checkbox-group
                    :disabled="true"
                    :value="baseInfo.accident_wander_away ? baseInfo.accident_wander_away.split(';') : []"
                    v-if="dataDict.accident_wander_away"
                  >
                    <el-checkbox
                      :key="nodeIndex"
                      :label="node.value || node.text"
                      v-for="(node, nodeIndex) in dataDict.accident_wander_away.childrens"
                    >{{ node.text }}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">噎食</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">
                  <el-checkbox-group
                    :disabled="true"
                    :value="baseInfo.accident_choke_feed ? baseInfo.accident_choke_feed.split(';') : []"
                    v-if="dataDict.accident_choke_feed"
                  >
                    <el-checkbox
                      :key="nodeIndex"
                      :label="node.value || node.text"
                      v-for="(node, nodeIndex) in dataDict.accident_choke_feed.childrens"
                    >{{ node.text }}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">自杀</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">
                  <el-checkbox-group
                    :disabled="true"
                    :value="baseInfo.accident_suicide ? baseInfo.accident_suicide.split(';') : []"
                    v-if="dataDict.accident_suicide"
                  >
                    <el-checkbox
                      :key="nodeIndex"
                      :label="node.value || node.text"
                      v-for="(node, nodeIndex) in dataDict.accident_suicide.childrens"
                    >{{ node.text }}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">其他</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">{{ baseInfo.accident_other }}</div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">现病史</div>
          </el-col>
          <el-col :span="20">
            <div class="value last multi-line">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.history_of_present_illness ? baseInfo.history_of_present_illness.split(';') : []"
                v-if="dataDict.history_of_present_illness"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.history_of_present_illness.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">既往史</div>
          </el-col>
          <el-col :span="20">
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">疾病</div>
              </el-col>
              <el-col :span="20">
                <div class="value last multi-line">
                  <el-checkbox-group
                    :disabled="true"
                    :value="baseInfo.prev_history_disease ? baseInfo.prev_history_disease.split(';') : []"
                    v-if="dataDict.prev_history_disease"
                  >
                    <el-checkbox
                      :key="nodeIndex"
                      :label="node.value || node.text"
                      v-for="(node, nodeIndex) in dataDict.prev_history_disease.childrens"
                    >{{ node.text }}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">手术</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">
                  <el-checkbox-group
                    :disabled="true"
                    :value="baseInfo.prev_history_operation ? baseInfo.prev_history_operation.split(';') : []"
                    v-if="dataDict.prev_history_operation"
                  >
                    <el-checkbox
                      :key="nodeIndex"
                      :label="node.value || node.text"
                      v-for="(node, nodeIndex) in dataDict.prev_history_operation.childrens"
                    >{{ node.text }}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">外伤</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">
                  <el-checkbox-group
                    :disabled="true"
                    :value="baseInfo.prev_history_traumatism ? baseInfo.prev_history_traumatism.split(';') : []"
                    v-if="dataDict.prev_history_traumatism"
                  >
                    <el-checkbox
                      :key="nodeIndex"
                      :label="node.value || node.text"
                      v-for="(node, nodeIndex) in dataDict.prev_history_traumatism.childrens"
                    >{{ node.text }}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">输血</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">
                  <el-checkbox-group
                    :disabled="true"
                    :value="baseInfo.prev_history_transfusion ? baseInfo.prev_history_transfusion.split(';') : []"
                    v-if="dataDict.prev_history_transfusion"
                  >
                    <el-checkbox
                      :key="nodeIndex"
                      :label="node.value || node.text"
                      v-for="(node, nodeIndex) in dataDict.prev_history_transfusion.childrens"
                    >{{ node.text }}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">家族史</div>
          </el-col>
          <el-col :span="20">
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">父亲</div>
              </el-col>
              <el-col :span="20">
                <div class="value last multi-line">
                  <el-checkbox-group
                    :disabled="true"
                    :value="baseInfo.family_history_father ? baseInfo.family_history_father.split(';') : []"
                    v-if="dataDict.family_history"
                  >
                    <el-checkbox
                      :key="nodeIndex"
                      :label="node.value || node.text"
                      v-for="(node, nodeIndex) in dataDict.family_history.childrens"
                    >{{ node.text }}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">母亲</div>
              </el-col>
              <el-col :span="20">
                <div class="value last multi-line">
                  <el-checkbox-group
                    :disabled="true"
                    :value="baseInfo.family_history_mother ? baseInfo.family_history_mother.split(';') : []"
                    v-if="dataDict.family_history"
                  >
                    <el-checkbox
                      :key="nodeIndex"
                      :label="node.value || node.text"
                      v-for="(node, nodeIndex) in dataDict.family_history.childrens"
                    >{{ node.text }}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">兄弟姐妹</div>
              </el-col>
              <el-col :span="20">
                <div class="value last multi-line">
                  <el-checkbox-group
                    :disabled="true"
                    :value="baseInfo.family_history_brothers_sisters ? baseInfo.family_history_brothers_sisters.split(';') : []"
                    v-if="dataDict.family_history"
                  >
                    <el-checkbox
                      :key="nodeIndex"
                      :label="node.value || node.text"
                      v-for="(node, nodeIndex) in dataDict.family_history.childrens"
                    >{{ node.text }}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">子女</div>
              </el-col>
              <el-col :span="20">
                <div class="value last multi-line">
                  <el-checkbox-group
                    :disabled="true"
                    :value="baseInfo.family_history_children ? baseInfo.family_history_children.split(';') : []"
                    v-if="dataDict.family_history"
                  >
                    <el-checkbox
                      :key="nodeIndex"
                      :label="node.value || node.text"
                      v-for="(node, nodeIndex) in dataDict.family_history.childrens"
                    >{{ node.text }}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">遗传病史</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.genetic_history ? baseInfo.genetic_history.split(';') : []"
                v-if="dataDict.genetic_history"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.genetic_history.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">残疾情况</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.history_of_disability ? baseInfo.history_of_disability.split(';') : []"
                v-if="dataDict.history_of_disability"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.history_of_disability.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">过敏史</div>
          </el-col>
          <el-col :span="20">
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">药物</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">
                  <el-checkbox-group
                    :disabled="true"
                    :value="baseInfo.allergy_medicine ? baseInfo.allergy_medicine.split(';') : []"
                    v-if="dataDict.allergy_medicine"
                  >
                    <el-checkbox
                      :key="nodeIndex"
                      :label="node.value || node.text"
                      v-for="(node, nodeIndex) in dataDict.allergy_medicine.childrens"
                    >{{ node.text }}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">食物</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">
                  <el-checkbox-group
                    :disabled="true"
                    :value="baseInfo.allergy_food ? baseInfo.allergy_food.split(';') : []"
                    v-if="dataDict.allergy_food"
                  >
                    <el-checkbox
                      :key="nodeIndex"
                      :label="node.value || node.text"
                      v-for="(node, nodeIndex) in dataDict.allergy_food.childrens"
                    >{{ node.text }}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="4">
                <div class="label">环境</div>
              </el-col>
              <el-col :span="20">
                <div class="value last">
                  <el-checkbox-group
                    :disabled="true"
                    :value="baseInfo.allergy_environment ? baseInfo.allergy_environment.split(';') : []"
                    v-if="dataDict.allergy_environment"
                  >
                    <el-checkbox
                      :key="nodeIndex"
                      :label="node.value || node.text"
                      v-for="(node, nodeIndex) in dataDict.allergy_environment.childrens"
                    >{{ node.text }}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">传染性疾病</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.infectious_disease ? baseInfo.infectious_disease.split(';') : []"
                v-if="dataDict.infectious_disease"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.infectious_disease.childrens"
                >{{ node.text }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-line">
        <el-row type="flex">
          <el-col :span="4">
            <div class="label">暴露史</div>
          </el-col>
          <el-col :span="20">
            <div class="value last">
              <el-checkbox-group
                :disabled="true"
                :value="baseInfo.exposure_history ? baseInfo.exposure_history.split(';') : []"
                v-if="dataDict.exposure_history"
              >
                <el-checkbox
                  :key="nodeIndex"
                  :label="node.value || node.text"
                  v-for="(node, nodeIndex) in dataDict.exposure_history.childrens"
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
