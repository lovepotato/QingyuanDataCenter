<template>
  <div class="community-contanier">
    <div class="community-list-tab">
      <div class="community-item" v-for="i in 11" :key="i" :class="{'active-community':i == activeCommunityIndex}" @click="activeCommunityChange(i)">
        <div class="name">滨河西里北区</div>
      </div>
    </div>
    <div class="community-info"></div>
  </div>
</template>

<script>
export default {
  name: 'Community',
  data() {
    return {
      activeCommunityIndex: 1
    }
  },
  methods: {
    activeCommunityChange(index) {
      this.activeCommunityIndex = index
    }
  }
}
</script>

<style lang="scss">
.community-contanier{
  width: 100%;
  height: 100%;
  padding: 0 59px;
  .community-list-tab{
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 69px;
    justify-content: flex-start;
    border-bottom: 0.5px solid #1257C9;
    margin-top: 17px;
    .active-community{
      background: #032F8C;
      border-radius: 8px 8px 0 0;
    }
    .community-item{
      width: 208px;
      height: 69px;
      line-height: 69px;
      font-family: PingFangSC-Regular;
      font-size: 26px;
      color: #0091FF;
      letter-spacing: 0;
      text-align: center;
      font-weight: bold;
      padding: 0 13px;
      cursor: pointer;
      .name{
        width: 182px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        height: 69px;
      }
    }
  }
  .community-info{
    height: 996px;
    width: 100%;
  }
}
</style>
