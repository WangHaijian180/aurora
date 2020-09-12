<template>
  <div class="music">
    <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=1443838552&auto=1&height=66"></iframe>
  </div>
</template>

<script>
// import aplayer from 'vue-aplayer'
export default {
  name: 'music',

  data () {
    return {
      videoUpload: {
        //progress: false,
        // progressPercent: 0,
        // successPercent: 0,
        theme: '#ffc0cb',
        autoplay: true,
        repeat: 'repeat-one', // 轮播模式。值可以是 'repeat-one'（单曲循环）'repeat-all'（列表循环）或者 'no-repeat'（不循环）。为了好记，还可以使用对应的 'music' 'list' 'none'
        mini: true, // 迷你模式
        float: true, // 浮动模式。你可以在页面上随意拖放你的播放器
        music: { // 当前播放的音乐
          title: '能够成家吗',
          author: '咖啡少年',
          url: 'http://music.163.com/song?id=1443838552&userid=497797567', pic: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2366432289,1795558543&fm=26&gp=0.jpg' // 封面图片
        }
      }

    }
  }
}
</script>

<style scoped>
.music {
  position: absolute;
  right: 0;
}
</style>