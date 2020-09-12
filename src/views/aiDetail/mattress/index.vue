<template>
  <!-- 智能床垫 -->
  <div class="main-container-box">
    <div class="left-contaier">
      <div class="mattress-date">
        <div class="mattress-info-date">
          <div class="mattress-info-item">
            <div class="mattress-info-value">990</div>
            <div class="mattress-info-label">在床人数</div>
          </div>
          <div class="mattress-info-item">
            <div class="mattress-info-value">2</div>
            <div class="mattress-info-label">离床未归</div>
          </div>
          <div class="mattress-info-item">
            <div class="mattress-info-value">7</div>
            <div class="mattress-info-label">设备下线</div>
          </div>
          <div class="mattress-info-item">
            <div class="mattress-info-value">999</div>
            <div class="mattress-info-label">检测总数</div>
          </div>
        </div>

        <div class="mattress-info-number">
          <div class="mattress-info-item">
            <div class="mattress-info-value">609</div>
            <div class="mattress-info-label">预警总数</div>
          </div>
          <div class="mattress-info-item">
            <div class="mattress-info-value">329</div>
            <div class="mattress-info-label">已处理</div>
          </div>
          <div class="mattress-info-item">
            <div class="mattress-info-value">609</div>
            <div class="mattress-info-label">未处理</div>
          </div>
        </div>

        <div class="mattress-info-rate">
          <div class="process-rate">
            <img src="../../../assets/images/百分率1.jpg" width="100%" />
          </div>
        </div>
      </div>
      <div class="mattress-type">
        <div class="mattress-type-title">预警类型分布</div>
        <div class="mattress-type-main">
          <img src="../../../assets/images/饼图6.jpg" width="100%" />
        </div>
      </div>
    </div>
    <div class="right-contaier">
      <div class="arrival-button arrival-left">
        <img src="../../../assets/imgs/jiantou-不可点击.png" width="100%" />
      </div>
      <div class="arrival-button arrival-right">
        <img src="../../../assets/imgs/jiantou-可点击.png" width="100%" />
      </div>

      <div class="mattress-main-list">
        <div class="mattress-main">
          <div class="mattress-personal-infor">
            <div class="mattress-photo">
              <img src="../../../assets/images/photo-head.jpg" width="100%" />
            </div>
            <div class="mattress-information">
              <div>
                <span class="name">张奶奶</span>
                <span>女</span>
                <span>72岁</span>
              </div>
              <div>枣园北里</div>
            </div>
            <div class="mattress-state">
              <span class="icon icon-heart"></span>
              <span class="color-red">心率异常</span>
            </div>
          </div>

          <div class="mattress-personal-value">
            <div class="mattress-info-item">
              <div class="mattress-info-value">54.45</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">21.86</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">6h23m</div>
              <div class="mattress-info-label">时长</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">
                <span class="color-orange">99%</span>
              </div>
              <div class="mattress-info-label">质量</div>
            </div>
          </div>

          <div class="mattress-personal-sleep">
            <div class="mattress-personal-title">睡眠质量折线图</div>
            <div class="mattress-personal-main">
              <img src="../../../assets/images/曲线图1.jpg" width="100%" />
            </div>
          </div>
        </div>

        <div class="mattress-main">
          <div class="mattress-personal-infor">
            <div class="mattress-photo">
              <img src="../../../assets/images/photo-head.jpg" width="100%" />
            </div>
            <div class="mattress-information">
              <div>
                <span class="name">张奶奶</span>
                <span>女</span>
                <span>72岁</span>
              </div>
              <div>枣园北里</div>
            </div>
            <div class="mattress-state">
              <span class="icon icon-outbed"></span>
              <span class="color-purple">离床未归</span>
            </div>
          </div>

          <div class="mattress-personal-value">
            <div class="mattress-info-item">
              <div class="mattress-info-value">54.45</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">21.86</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">6h23m</div>
              <div class="mattress-info-label">时长</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">
                <span class="color-orange">99%</span>
              </div>
              <div class="mattress-info-label">质量</div>
            </div>
          </div>

          <div class="mattress-personal-sleep">
            <div class="mattress-personal-title">睡眠质量折线图</div>
            <div class="mattress-personal-main">
              <img src="../../../assets/images/曲线图1.jpg" width="100%" />
            </div>
          </div>
        </div>

        <div class="mattress-main">
          <div class="mattress-personal-infor">
            <div class="mattress-photo">
              <img src="../../../assets/images/photo-head.jpg" width="100%" />
            </div>
            <div class="mattress-information">
              <div>
                <span class="name">张奶奶</span>
                <span>女</span>
                <span>72岁</span>
              </div>
              <div>枣园北里</div>
            </div>
            <div class="mattress-state">
              <span class="icon icon-movement"></span>
              <span class="color-blue">体动过多</span>
            </div>
          </div>

          <div class="mattress-personal-value">
            <div class="mattress-info-item">
              <div class="mattress-info-value">54.45</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">21.86</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">6h23m</div>
              <div class="mattress-info-label">时长</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">
                <span class="color-orange">99%</span>
              </div>
              <div class="mattress-info-label">质量</div>
            </div>
          </div>

          <div class="mattress-personal-sleep">
            <div class="mattress-personal-title">睡眠质量折线图</div>
            <div class="mattress-personal-main">
              <img src="../../../assets/images/曲线图1.jpg" width="100%" />
            </div>
          </div>
        </div>

        <div class="mattress-main">
          <div class="mattress-personal-infor">
            <div class="mattress-photo">
              <img src="../../../assets/images/photo-head.jpg" width="100%" />
            </div>
            <div class="mattress-information">
              <div>
                <span class="name">张奶奶</span>
                <span>女</span>
                <span>72岁</span>
              </div>
              <div>枣园北里</div>
            </div>
            <div class="mattress-state"></div>
          </div>

          <div class="mattress-personal-value">
            <div class="mattress-info-item">
              <div class="mattress-info-value">54.45</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">21.86</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">6h23m</div>
              <div class="mattress-info-label">时长</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">
                <span class="color-orange">99%</span>
              </div>
              <div class="mattress-info-label">质量</div>
            </div>
          </div>

          <div class="mattress-personal-sleep">
            <div class="mattress-personal-title">睡眠质量折线图</div>
            <div class="mattress-personal-main">
              <img src="../../../assets/images/曲线图1.jpg" width="100%" />
            </div>
          </div>
        </div>

        <div class="mattress-main">
          <div class="mattress-personal-infor">
            <div class="mattress-photo">
              <img src="../../../assets/images/photo-head.jpg" width="100%" />
            </div>
            <div class="mattress-information">
              <div>
                <span class="name">张奶奶</span>
                <span>女</span>
                <span>72岁</span>
              </div>
              <div>枣园北里</div>
            </div>
            <div class="mattress-state"></div>
          </div>

          <div class="mattress-personal-value">
            <div class="mattress-info-item">
              <div class="mattress-info-value">54.45</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">21.86</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">6h23m</div>
              <div class="mattress-info-label">时长</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">
                <span class="color-orange">99%</span>
              </div>
              <div class="mattress-info-label">质量</div>
            </div>
          </div>

          <div class="mattress-personal-sleep">
            <div class="mattress-personal-title">睡眠质量折线图</div>
            <div class="mattress-personal-main">
              <img src="../../../assets/images/曲线图1.jpg" width="100%" />
            </div>
          </div>
        </div>

        <div class="mattress-main">
          <div class="mattress-personal-infor">
            <div class="mattress-photo">
              <img src="../../../assets/images/photo-head.jpg" width="100%" />
            </div>
            <div class="mattress-information">
              <div>
                <span class="name">张奶奶</span>
                <span>女</span>
                <span>72岁</span>
              </div>
              <div>枣园北里</div>
            </div>
            <div class="mattress-state"></div>
          </div>

          <div class="mattress-personal-value">
            <div class="mattress-info-item">
              <div class="mattress-info-value">54.45</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">21.86</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">6h23m</div>
              <div class="mattress-info-label">时长</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">
                <span class="color-orange">99%</span>
              </div>
              <div class="mattress-info-label">质量</div>
            </div>
          </div>

          <div class="mattress-personal-sleep">
            <div class="mattress-personal-title">睡眠质量折线图</div>
            <div class="mattress-personal-main">
              <img src="../../../assets/images/曲线图1.jpg" width="100%" />
            </div>
          </div>
        </div>

        <div class="mattress-main">
          <div class="mattress-personal-infor">
            <div class="mattress-photo">
              <img src="../../../assets/images/photo-head.jpg" width="100%" />
            </div>
            <div class="mattress-information">
              <div>
                <span class="name">张奶奶</span>
                <span>女</span>
                <span>72岁</span>
              </div>
              <div>枣园北里</div>
            </div>
            <div class="mattress-state"></div>
          </div>

          <div class="mattress-personal-value">
            <div class="mattress-info-item">
              <div class="mattress-info-value">54.45</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">21.86</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">6h23m</div>
              <div class="mattress-info-label">时长</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">
                <span class="color-orange">99%</span>
              </div>
              <div class="mattress-info-label">质量</div>
            </div>
          </div>

          <div class="mattress-personal-sleep">
            <div class="mattress-personal-title">睡眠质量折线图</div>
            <div class="mattress-personal-main">
              <img src="../../../assets/images/曲线图1.jpg" width="100%" />
            </div>
          </div>
        </div>

        <div class="mattress-main">
          <div class="mattress-personal-infor">
            <div class="mattress-photo">
              <img src="../../../assets/images/photo-head.jpg" width="100%" />
            </div>
            <div class="mattress-information">
              <div>
                <span class="name">张奶奶</span>
                <span>女</span>
                <span>72岁</span>
              </div>
              <div>枣园北里</div>
            </div>
            <div class="mattress-state"></div>
          </div>

          <div class="mattress-personal-value">
            <div class="mattress-info-item">
              <div class="mattress-info-value">54.45</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">21.86</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">6h23m</div>
              <div class="mattress-info-label">时长</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">
                <span class="color-orange">99%</span>
              </div>
              <div class="mattress-info-label">质量</div>
            </div>
          </div>

          <div class="mattress-personal-sleep">
            <div class="mattress-personal-title">睡眠质量折线图</div>
            <div class="mattress-personal-main">
              <img src="../../../assets/images/曲线图1.jpg" width="100%" />
            </div>
          </div>
        </div>

        <div class="mattress-main">
          <div class="mattress-personal-infor">
            <div class="mattress-photo">
              <img src="../../../assets/images/photo-head.jpg" width="100%" />
            </div>
            <div class="mattress-information">
              <div>
                <span class="name">张奶奶</span>
                <span>女</span>
                <span>72岁</span>
              </div>
              <div>枣园北里</div>
            </div>
            <div class="mattress-state"></div>
          </div>

          <div class="mattress-personal-value">
            <div class="mattress-info-item">
              <div class="mattress-info-value">54.45</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">21.86</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">6h23m</div>
              <div class="mattress-info-label">时长</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">
                <span class="color-orange">99%</span>
              </div>
              <div class="mattress-info-label">质量</div>
            </div>
          </div>

          <div class="mattress-personal-sleep">
            <div class="mattress-personal-title">睡眠质量折线图</div>
            <div class="mattress-personal-main">
              <img src="../../../assets/images/曲线图1.jpg" width="100%" />
            </div>
          </div>
        </div>

        <div class="mattress-main">
          <div class="mattress-personal-infor">
            <div class="mattress-photo">
              <img src="../../../assets/images/photo-head.jpg" width="100%" />
            </div>
            <div class="mattress-information">
              <div>
                <span class="name">张奶奶</span>
                <span>女</span>
                <span>72岁</span>
              </div>
              <div>枣园北里</div>
            </div>
            <div class="mattress-state"></div>
          </div>

          <div class="mattress-personal-value">
            <div class="mattress-info-item">
              <div class="mattress-info-value">54.45</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">21.86</div>
              <div class="mattress-info-label">心率</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">6h23m</div>
              <div class="mattress-info-label">时长</div>
            </div>
            <div class="mattress-info-item">
              <div class="mattress-info-value">
                <span class="color-orange">99%</span>
              </div>
              <div class="mattress-info-label">质量</div>
            </div>
          </div>

          <div class="mattress-personal-sleep">
            <div class="mattress-personal-title">睡眠质量折线图</div>
            <div class="mattress-personal-main">
              <img src="../../../assets/images/曲线图1.jpg" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>



<style lang="scss">
//支持scss语法
.main-container-box {
  width: 100%;
  height: 100%;
  display: flex;
  .left-contaier {
    width: 850px;
    height: 100%;
    background-color: transparent;
    .mattress-date {
      width: 788px;
      height: 520px;
      padding: 30px 0;
      background-image: url("../../../assets/imgs/行为识别Group1.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .mattress-info-date {
        width: 721px;
        height: 122px;
        margin: 0 30px;
        background-image: url("../../../assets/imgs/框-智能床垫1.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        .mattress-info-item {
          width: 100%;
          padding-top: 25px;
          font-size: 32px;
          text-align: center;
          .mattress-info-value {
            font-size: 32px;
            color: #ffffff;
          }
          .mattress-info-label {
            font-size: 21px;
            color: #35e7ff;
            margin-top: 10px;
          }
        }
      }
      .mattress-info-number {
        width: 721px;
        height: 122px;
        display: flex;
        justify-content: space-between;
        margin: 30px;
        .mattress-info-item {
          width: 220px;
          padding-top: 25px;
          font-size: 32px;
          text-align: center;
          background-image: url("../../../assets/imgs/框-智能床垫2.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          .mattress-info-value {
            font-size: 32px;
            color: #ffffff;
          }
          .mattress-info-label {
            font-size: 21px;
            color: #35e7ff;
            margin-top: 10px;
          }
        }
      }
      .mattress-info-rate {
        width: 775px;
        height: 142px;
        margin: 30px auto;
        background-image: url("../../../assets/imgs/处理率底.png");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        .process-rate {
          width: 142px;
          height: 142px;
          margin: 0 auto;
        }
      }
    }
    .mattress-type {
      width: 788px;
      height: 460px;
      background-image: url("../../../assets/imgs/行为识别Group2.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin-top: 20px;
      .mattress-type-title {
        padding: 30px;
        font-size: 24px;
        color: #35e7ff;
      }
      .mattress-type-main {
        padding: 0 30px;
      }
    }
  }
  .right-contaier {
    position: relative;
    width: 2500px;
    height: 100%;
    .arrival-button {
      width: 24px;
      height: 37px;
      position: absolute;
      top: 500px;
    }
    .arrival-left {
      left: 0;
    }
    .arrival-right {
      right: 0;
    }
    .mattress-main-list {
      width: 2395px;
      height: 1030px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 0 60px;
      .mattress-main {
        width: 463px;
        height: 473px;
        border: #35e7ff 2px solid;
        border-radius: 20px;
        .mattress-personal-infor {
          display: flex;
          justify-content: space-around;
          color: #fff;
          padding: 20px;
          .mattress-photo {
            width: 60px;
            height: 60px;
            img {
              border-radius: 100%;
            }
          }
          .mattress-information {
            font-size: 16px;
            line-height: 30px;
            width: 210px;
            .name {
              font-size: 18px;
            }
            span {
              margin-right: 10px;
            }
          }
          .mattress-state {
            width: 120px;
            line-height: 60px;
            font-size: 20px;
            display: flex;
            .icon {
              margin-top: 16px;
              margin-right: 10px;
              width: 28px;
              height: 28px;
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
            .icon-heart {
              background-image: url("../../../assets/imgs/心率.png");
            }
            .icon-outbed {
              background-image: url("../../../assets/imgs/离床.png");
            }
            .icon-movement {
              background-image: url("../../../assets/imgs/体动.png");
            }
          }
        }
        .mattress-personal-value {
          background: #0f417d;
          display: flex;
          justify-content: center;
          .mattress-info-item {
            width: 100%;
            height: 76px;
            text-align: center;
            .mattress-info-value {
              font-size: 20px;
              color: #ffffff;
              margin-top: 12px;
            }
            .mattress-info-label {
              font-size: 16px;
              color: #35e7ff;
              margin-top: 10px;
            }
          }
        }
        .mattress-personal-sleep {
          .mattress-personal-title {
            padding: 20px 20px 0;
            font-size: 18px;
            color: #35e7ff;
          }
          .mattress-personal-main {
            padding: 20px;
          }
        }
      }
    }
  }
}
.color-red {
  color: #ff4f4f;
}
.color-purple {
  color: #8d6dff;
}
.color-blue {
  color: #32c5ff;
}
.color-orange {
  color: #f7b500;
}
</style>