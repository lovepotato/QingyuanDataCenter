<template>
  <el-dialog
    :close-on-click-modal="true"
    :lock-scroll="false"
    :visible.sync="showModal"
    append-to-body
    class="workorder-detail-modal el-dialog-side"
  >
    <div class="dialog-title">
      <div class="title">工单详情</div>
      <div
        @click="showModal = false"
        class="close"
      >
        <img
          alt
          src="../../../assets/imgs/guanbi-5.png"
        />
      </div>
    </div>
    <div class="dialog-content">
      <vue-scroll>
        <div class="content-header">
          <div>
            <div class="avatar">
              <el-avatar
                :size="126"
                :src="member.imgs | formatImageSrc"
                @error="errorHandler"
              >
                <img
                  alt
                  src="../../../assets/imgs/头像-圆.png"
                />
              </el-avatar>
            </div>
          </div>
          <div class="field">
            <el-row>
              <el-col
                :span="8"
                class="field-line"
              >
                <span>姓名</span>
                <div>{{ member.member_name }}</div>
              </el-col>
              <el-col
                :span="8"
                class="field-line"
              >
                <span>联系方式</span>
                <div>{{ member.member_mobile }}</div>
              </el-col>
              <el-col
                :span="8"
                class="field-line"
              >
                <span>所在社区</span>
                <div>{{ member.org_str }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col
                :span="8"
                class="field-line"
              >
                <span>身份证号</span>
                <div>{{ member.member_idcard }}</div>
              </el-col>
              <el-col
                :span="8"
                class="field-line"
              >
                <span>出生年月</span>
                <div>{{ member.member_birth }}</div>
              </el-col>
              <el-col
                :span="8"
                class="field-line"
              >
                <span>年龄</span>
                <div>{{ member.member_age }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col
                :span="24"
                class="field-row"
              >
                <span>家庭地址</span>
                <div>{{ member.member_addr }}</div>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="content-form">
          <div class="one-form">
            <el-form
              :inline="true"
              class="inline-form"
              label-position="left"
              label-width="120px"
            >
              <el-form-item label="服务名称">
                <span>{{ seat_recode.server_name }}</span>
              </el-form-item>
              <el-form-item label="预计服务时间">
                <span>{{ seat_recode.server_time }}</span>
              </el-form-item>
              <el-form-item label="服务数量">
                <span>{{ seat_recode.server_number }}</span>
              </el-form-item>
              <el-form-item label="服务规格">
                <span>{{ seat_recode.server_spf_name }}</span>
              </el-form-item>
              <el-form-item label="工单类型">
                <span>{{ seat_recode.work_type }}</span>
              </el-form-item>
              <el-form-item label="通话内容">
                <span>{{ seat_recode.call_content }}</span>
              </el-form-item>
              <el-form-item label="联系人">
                <span>{{ seat_recode.lianxi_name }}</span>
              </el-form-item>
              <el-form-item label="联系电话">
                <span>{{ seat_recode.lianxi_mobile }}</span>
              </el-form-item>
              <el-form-item label="家庭地址">
                <span>{{ seat_recode.addr }}</span>
              </el-form-item>
            </el-form>
          </div>
          <div class="one-form">
            <el-form
              :inline="true"
              class="inline-form"
              label-position="left"
              label-width="120px"
            >
              <el-form-item label="服务来源">
                <span>{{ seat_recode.server_source === 0 ? '服务商' : '自营' }}</span>
              </el-form-item>
              <el-form-item label="服务人员">
                <span>{{ seat_recode.server_source }}</span>
              </el-form-item>
              <el-form-item label="开始时间">
                <span>{{ seat_recode.start_server_time }}</span>
              </el-form-item>
              <el-form-item label="服务时长">
                <span>{{ seat_recode.server_time_len }}</span>
              </el-form-item>
              <el-form-item
                class="imgs"
                label="服务地点"
              >
                <div class="content-imgs">
                  <el-image
                    :key="index"
                    :preview-src-list="getImgList(seat_recode.start_server_imgs)"
                    :src="imgs"
                    class="content-img"
                    v-for="(imgs, index) in getImgList(seat_recode.start_server_imgs)"
                  ></el-image>
                </div>
              </el-form-item>
              <el-form-item
                class="imgs"
                label="服务记录"
              >
                <div class="content-imgs">
                  <el-image
                    :key="index"
                    :preview-src-list="getImgList(seat_recode.end_server_imgs)"
                    :src="imgs"
                    class="content-img"
                    v-for="(imgs, index) in getImgList(seat_recode.end_server_imgs)"
                  ></el-image>
                </div>
              </el-form-item>
              <el-form-item label="结束时间">
                <span>{{ seat_recode.end_server_time }}</span>
              </el-form-item>
            </el-form>
          </div>
          <div class="one-form">
            <el-form
              label-position="left"
              label-width="120px"
            >
              <el-form-item label="评价态度">
                <el-rate
                  :value="getInt(seat_eval.eval_attitude)"
                  disabled
                ></el-rate>
              </el-form-item>
              <el-form-item label="服务评价">
                <span>{{ seat_eval.eval_server }}</span>
              </el-form-item>
              <el-form-item label="评价备注">
                <span>{{ seat_eval.eval_remark }}</span>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </vue-scroll>
    </div>

    <!-- <el-form-item label="反馈图片">
          <div class="content-imgs">
            <el-image
              :key="index"
              :preview-src-list="currentItem.imgs"
              :src="imgs"
              class="content-img"
              v-for="(imgs, index) in currentItem.imgs"
            ></el-image>
          </div>
    </el-form-item>-->
    <!-- <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>-->
  </el-dialog>
</template>

<script>
export default {
  name: 'WorkorderDetailModal',
  data() {
    return {
      showModal: false,
      detail: {},
      loading: false,
      id: ''
    }
  },
  computed: {
    member() {
      return this.detail.member || {}
    },
    seat_eval() {
      return this.detail.seat_eval || {}
    },
    seat_recode() {
      return this.detail.seat_recode || {}
    }
  },
  mounted() {
    this.$bus.$on('showWorkOrderDetail', ({ id }) => {
      this.showModal = true
      this.id = id
      this.getDetail(id)
    })
  },
  destroyed() {
    this.$bus.$off('showWorkOrderDetail')
  },
  methods: {
    getInt(value) {
      if (isNaN(Number(value))) {
        return 1
      } else {
        return Number(value)
      }
    },
    getDetail(id) {
      this.loading = true
      this.http
        .post('/seat/one', {
          id
        })
        .then(({ data, code, msg }) => {
          if (code === 0) {
            this.detail = data
          } else {
            this.$notify.error({
              title: '错误',
              message: `查询失败，原因：${msg}`
            })
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
    getImgList(string = '') {
      if (!string) return []
      return string.split(',').map((item) => this.formatImageSrc(item))
    },
    errorHandler() {
      return true
    }
  }
}
</script>

<style lang="scss">
.workorder-detail-modal {
  &.el-dialog__wrapper {
    position: absolute;
    width: 3456px;
    height: 1296px;
  }

  .el-dialog__header {
    padding: 0px;
    height: 0px;

    button {
      display: none;
    }
  }

  .el-dialog__body {
    padding: 0px;
    height: 1296px;
  }

  .el-avatar {
    background-color: transparent;

    img {
      width: 100%;
    }
  }

  &.el-dialog-side .el-dialog {
    right: 0 !important;
    top: 0;
    bottom: 0;
    min-height: 100%;
    margin: 0 !important;
    border-radius: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    // position: absolute;
    position: fixed;
    height: 100%;
    width: 1296px;
    background-color: transparent;
  }

  .dialog-title {
    height: 118px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    padding-top: 54px;
    .title {
      font-family: PingFangSC-Semibold;
      font-size: 32px;
      color: #35e7ff;
      letter-spacing: 0;
    }

    .close {
      margin-right: 45px;
      img {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
  }

  .dialog-content {
    background-color: #052467;
    height: calc(100% - 118px);
    width: 100%;
  }

  .dialog-content {
    padding: 0px;

    .el-rate {
      line-height: 54px;
      .el-rate__icon {
        font-size: 28px;
      }
    }

    .content-header {
      display: flex;
      padding: 54px 45px 0px 45px;
      overflow: hidden;
      .avatar {
        width: 126px;
        margin-right: 15px;
      }

      .field {
        width: calc(100% - 126px - 15px);

        .el-row {
          margin-bottom: 18px !important;
        }

        .field-line,
        .field-row {
          display: flex;
          align-items: center;
          color: #000;

          span {
            width: 80px;
            text-align: right;
            margin-right: 14px;
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: #32c5ff;
            letter-spacing: 0;
            text-align: right;
          }

          div {
            height: 30px;
            line-height: 26px;
            background: #fbfbfb;
            padding-left: 15px;
            width: 270px;
            background: #203a72;
            border: 1px solid #5da7f6;
            border-radius: 4px;
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: #ffffff;
          }
        }

        .field-row {
          div {
            width: 982px;
          }
        }
      }
    }

    .content-form {
      padding: 10px 45px 20px 45px;

      .one-form {
        &:first-child {
          border-top: 1px solid #0091ff;
        }
        border-bottom: 1px solid #0091ff;
        padding: 24px 0;
        // margin-bottom: 20px;
      }

      .inline-form {
        .el-form-item {
          width: 49%;
        }

        .imgs {
          width: 99% !important;
        }
      }

      .el-form-item {
        margin-bottom: 5px;

        .el-form-item__label {
          font-family: PingFangSC-Regular;
          font-size: 16px;
          color: #32c5ff;
        }

        .el-form-item__content {
          font-family: PingFangSC-Regular;
          font-size: 16px;
          color: #ffffff;
          letter-spacing: 0;
          // line-height: 18px;
        }
      }

      .content-imgs {
        display: flex;
        flex-wrap: wrap;

        .content-img {
          width: 86px;
          height: 86px;
          margin-right: 12px;
          // background-color: pink;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
