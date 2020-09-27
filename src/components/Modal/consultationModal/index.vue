<template>
  <el-dialog
    :close-on-click-modal="true"
    :visible.sync="showDialog"
    append-to-body
    :lock-scroll="false"
    class="el-dialog-side consultation-detail-modal"
  >
    <div class="dialog-title">
      <div class="title">问诊记录详情</div>
      <div class="close" @click="showDialog = false"><img src="../../../assets/imgs/guanbi-5.png" alt=""></div>
    </div>
    <div class="dialog-content">
      <vue-scroll>
        <div class="content-info" v-if="recordDetail && Object.keys(recordDetail).length > 0 ">
          <div class="consultation-header">
            <div class="header-img">
              <el-avatar :size="99" :src="recordDetail.img | formatImageSrc"></el-avatar>
            </div>
            <div class="header-content">
              <div class="oldman-info info-item"><span class="name">{{ recordDetail.name }}</span><span class="gender">{{ recordDetail.sex }}</span><span class="age">{{ recordDetail.age }}岁</span></div>
              <div class="address info-item">{{ recordDetail.org_name }}</div>
              <div class="time info-item">就诊时间: {{ recordDetail.createTime }}</div>
            </div>
          </div>
          <div class="content-body">
            <div class="doctor-info-title consultation-title">医生信息</div>
            <div class="doctor-info-content consultation-item">
              <div class="doctor-img">
                <el-avatar :size="55" :src="recordDetail.medicrecord.medicRecordSummaryData.medicRecordDoctorData.headlogo | formatImageSrc"></el-avatar>
              </div>
              <div class="doctor-name">{{ recordDetail.medicrecord.medicRecordSummaryData.medicRecordDoctorData.name + ',' +recordDetail.medicrecord.medicRecordSummaryData.medicRecordDoctorData.dept }}</div>
            </div>
            <div class="mainSuit-info-title consultation-title">主述</div>
            <div class="text-info-content consultation-item">
              {{ recordDetail.medicrecord.medicRecordSummaryData.mainSuit }}
            </div>
            <div class="diseaseDescn-info-title consultation-title">现病史</div>
            <div class="text-info-content consultation-item">
              {{ recordDetail.medicrecord.medicRecordSummaryData.diseaseDescn }}
            </div>
            <div class="pastHis-info-title consultation-title">既往史</div>
            <div class="text-info-content consultation-item">
              {{ recordDetail.medicrecord.medicRecordSummaryData.pastHis }}
            </div>
            <div class="famHis-info-title consultation-title">家族史</div>
            <div class="text-info-content consultation-item">
              {{ recordDetail.medicrecord.medicRecordSummaryData.famHis }}
            </div>
            <div class="allergy-info-title consultation-title">过敏史</div>
            <div class="text-info-content consultation-item">
              {{ recordDetail.medicrecord.medicRecordSummaryData.allergy }}
            </div>
            <div class="summary-info-title consultation-title">指导建议</div>
            <div class="text-info-content consultation-item">
              {{ recordDetail.medicrecord.medicRecordSummaryData.summary }}
            </div>
            <div class="medications-info-title consultation-title">建议用药</div>
            <div class="medications-items consultation-item">
              <div v-for="(medicationItem, index) in recordDetail.medicrecord.medicRecordSummaryData.medications" :key="index" class="medications-item">
                <div class="medication">
                  <div class="medication-name">{{ medicationItem.name }}</div>
                  <div class="medication-use-info">{{ medicationItem.remark + '; 每次'+ medicationItem.count + '丸' }}</div>
                </div>
                <div class="medication">
                  <div class="medical-info">{{ medicationItem.spec }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vue-scroll>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'ConsultationModal',
  data() {
    return {
      showDialog: false,
      recordDetail: {}
    }
  },
  created() {
    this.$bus.$on('showConsultationDetail', ({ id }) => {
      this.http.post('/medicrecord/detail', { id }).then(res => {
        if (res.code === 0) {
          this.recordDetail = res.data
        }
      })
      this.showDialog = true
    })
  }
}
</script>

<style lang="scss">
.consultation-detail-modal {
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
    width: 886px;
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
      color: #35E7FF;
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
    .consultation-header{
      height: 198px;
      width: 100%;
      display: flex;
      padding: 47px 0 0 39px;
      background: #032F8C;
      .header-img{
        width: 99px;
        height: 99px;
        margin-right: 27px;
      }
      .header-content{
        height: 99px;
        width: calc(100% - 99px - 27px);
        .info-item{
          line-height: 30px;
          margin-bottom: 9px;
          font-size: 16px;
        }
        .oldman-info{
          font-size: 16px;
          color: #F9F9F9;
          letter-spacing: 0;
          .name{
            font-size: 18px;
            color: #FFFFFF;
            letter-spacing: 0;
            height: 30px;
            width: 54px;
            line-height: 30px;
            font-weight: 800;
          }
          .gender{
            padding: 0 30px;
          }
        }
        .address, .time{
          color: #fff;
        }
      }
    }
    .content-body{
      color: #fff;
      padding-left: 39px;
      padding-right: 39px;
      .consultation-title {
        position: relative;
        font-size: 18px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 30px;
        font-weight: 800;
        &::before{
          content: '';
          height: 16px;
          width: 4px;
          border-radius: 3.5px;
          border-radius: 3.5px;
          position: absolute;
          left: -12px;
          top: 7px;
          font-size: 18px;
          background:#35E7FF;
        }
      }
      .consultation-item{
        padding-left: 16px;
        margin: 17px 0 30px 0;
        font-size: 18px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 36px;
      }
      .doctor-info-title{
        margin-top: 33px;
      }
      .doctor-info-content{
        height: 50px;
        width: 100%;
        display: flex;
        .doctor-img{
          width: 50px;
          height: 50px;
          margin-right: 13px;

          img {
            width: 100%;
          }
        }
        .doctor-name{
          height: 30px;
          line-height: 30px;
          font-size: 18px;
          color: #FFFFFF;
          letter-spacing: 0;
          width: calc(100% - 50px);
          margin-top: 10px;
        }
      }
      .medications-items{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        .medications-item{
          width: 386px;
          height: 126px;
          background: #052467;
          box-shadow: 0 2px 10px 0 rgba(0,0,0,0.50);
          border: 1px solid #35E7FF;
          padding: 27px 26px;
          border-radius: 4px;
          margin-right: 19px;
          &:nth-child(2n){
            margin-right: 0;
          }
          .medication{
            height: 30px;
            line-height: 30px;
            margin-bottom: 14px;
            .medication-name{
              font-size:20px ;
              height: 30px;
              width: 50%;
              text-align: left;
              float: left;
            }
            .medication-use-info{
              font-family: PingFangSC-Regular;
              font-size: 16px;
              color: #32C5FF;
              letter-spacing: 0;
              line-height: 30px;
              width: 50%;
              float: right;
              text-align: right;
            }
            .medical-info{
              width: 100%;
              text-align: left;
              font-size: 16px;
              color: #32C5FF;
              letter-spacing: 0;
              line-height: 30px;
            }
          }
        }
      }

    }
  }
}
</style>
