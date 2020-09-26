<template>
  <div class="message-box" v-show="isShow" @mouseover="mouseover" @mouseleave="mouseleave">
    <div class="title">
      <span>消息通知</span>
      <img src="../../assets/imgs/yidu.png" alt="" @click="readAll">
    </div>
    <div class="content">
      <vue-scroll ref="scroll">
        <div class="item" v-for="(item, index) in messageList" :key="index" @click="openMessageDetail(item)">
          <div class="top">
            <div class="left">
              <span class="dot"></span>
              <span class="left-title">{{ item.title }}</span>
            </div>
            <div class="time">{{ item.time }}</div>
          </div>
          <div class="bottom">
            {{ item.content }}
          </div>
        </div>
      </vue-scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageBox',
  data() {
    return {
      isShow: false,
      setIntervalMessageBox: '',
      messageList: [],
      isHover: false
    }
  },
  watch: {
    isShow(val) {
      if (val) {
        this.$refs.scroll.scrollTo({ y: -30 })
      }
    }
  },
  mounted() {
    this.$bus.$on('showMessageBox', () => {
      this.isShow = true
    })

    this.$bus.$on('closeMessageBox', () => {
      this.isHover ? void 0 : this.isShow = false
    })
    this.setIntervalMessageBox = setInterval(this.timerRequestMessageBox(), 3000)
  },
  destroyed() {
    this.$bus.$off('showMessageBox')
    if (this.setIntervalMessageBox) {
      clearInterval(this.timerRequestMessageBox)
    }
  },
  methods: {
    timerRequestMessageBox() {
      this.http.post('/commandcenter/message/notify_bell').then(({ code, data }) => {
        if (code === 0) {
          this.messageList = data.list
          data.list.length > 0 ? this.$bus.$emit('hasMessage') : this.$bus.$emit('emptyMessage')
        } else {
          return
        }
      })
      return this.timerRequestMessageBox
    },
    mouseover() {
      this.isShow = true
      this.isHover = true
    },
    mouseleave() {
      this.isShow = false
      this.isHover = false
    },
    openMessageDetail(item) {
      switch (item.type) {
        case 1:
          this.$bus.$emit('showPDFDetail', {
            url: item.data.url || []
          })
          this.readMessage(item.id)
          break
        case 2:
          this.$bus.$emit('showConsultationDetail', {
            id: item.data.id || ''
          })
          this.readMessage(item.id)
          break
        case 3:
          this.$bus.$emit('showPDFDetail', {
            url: item.data.url || []
          })
          this.readMessage(item.id)
          break
        case 4:
          this.$bus.$emit('showWorkOrderDetail', {
            id: item.data.id || ''
          })
          this.readMessage(item.id)
          break
        default:
          break
      }
    },
    readAll() {
      this.readMessage(-1)
    },
    readMessage(id) {
      this.http.post('/commandcenter/message/isread', { id })
      this.timerRequestMessageBox()
    }
  }
}
</script>

<style lang="scss" scoped>
.message-box {
  width: 380px;
  height: 334px;
  background-color: #032f8c;
  position: absolute;
  border-radius: 4px;
  right: 105px;
  top: 68px;
  z-index: 1000;
  .transparent-title {
    height: 20px;
    width: 100%;
    background-color: transparent;
  }
  .title {
    height: 65px;
    width: 100%;
    border-bottom: 1px solid #000;
    line-height: 65px;
    font-family: PingFangSC-Semibold;
    padding: 0 21px;
    display: flex;
    justify-content: space-between;

    span {
      font-size: 20px;
      color: #ffffff;
    }

    img {
      width: 20px;
      height: 20px;
      margin-top: 22px;
      cursor: pointer;
    }
  }

  .content {
    height: 268px;
    padding: 14px 21px;

    .item {
      width: 100%;
      margin-bottom: 28px;
      cursor: pointer;

      &:last-child {
        margin-bottom: 0px;
      }
      .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        .left {
          .dot {
            height: 7px;
            width: 7px;
            border-radius: 7px;
            background-color: #FFB200;
            display: inline-block;
            position: relative;
            top: -3px;
            margin-right: 8px;
          }

          .left-title {
            font-family: PingFangSC-Semibold;
            font-size: 18px;
            color: #35E7FF;
          }
        }
        .time {
          font-family: PingFangSC-Regular;
          font-size: 16px;
          color: #35E7FF;
        }
      }
      .bottom {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #FFFFFF;
        margin-left: 15px;;
      }
    }
  }
}
</style>
