<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">whj</router-link> |
      <router-link to="/about">About</router-link> |
      <a href="https://notes.wanghaijian.cn" target="_blank">笔记</a>
    </div>
    <music></music>
    <router-view />
  </div>
</template>

<script>
import music from '@/components/Music.vue'
export default {
  components:{
    music
  }
}
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  z-index: 9999;
  position: fixed;
  left: 0;
  right: 0;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
