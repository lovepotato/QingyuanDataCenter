<template>
  <div>监控视频页面
    <rtmp-video
      video-src="rtmp://rtmp.open.ys7.com/openlive/c6a3173827d44e56b712ad5dbf6a4ab7.hd"
    />
  </div>
</template>

<script>
import rtmpVideo from '../../components/Video'

export default {
  components: { rtmpVideo }
}
</script>

<style>

</style>
