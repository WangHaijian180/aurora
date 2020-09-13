<template>
  <div class="music">
      <!-- <div class="radius">
          <img src="../../static/img/logos.jpg" alt="" srcset="">
      </div> -->
  </div>
</template>

<script>
export default {
  name: 'music',

  data () {
    return {
    }
  }
}
</script>

<style scoped>
.music {
  position: absolute;
  right: 0;
  bottom: 16%;
}
.radius{
  height: 50px;
  width: 60px;
  position: absolute;
  right: 0;
  border-top-left-radius: 46%;
  border-bottom-left-radius: 46%;
  background: #7e3f3e;
  display: flex;
  justify-content: center;
  align-items: center;
}
.radius img{
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
</style>