<template>
  <div class="home">
    <img alt="Vue logo" src="../../static/img/logos.jpg">
    <HelloWorld msg="aurora" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
</style>