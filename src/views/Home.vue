<template>
  <div class="home">
    <img alt="Vue logo" src="/static/img/logoy.jpgd">
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
