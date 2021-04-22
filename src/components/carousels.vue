<template>
  <div class="carousels">
    <el-carousel @change="change" :height="height + 'vh'" :autoplay="false">
      <el-carousel-item v-for="(item, index) in imglist" :key="index">
        <img :src="item.img" alt="" srcset="" />
        <div class="carousel_title">
          <div class="title_text">
            <transition name="el-zoom-in-center">
              <h1 v-if="indexs == index">关于我们</h1>
            </transition>
            <transition name="el-zoom-in-bottom">
              <span v-if="indexs == index" class="el-zoom-in-bottom">455465</span>
            </transition>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  props: ["height", "imglist"],
  data() {
    return {
      indexs:''
    };
  },
  mounted() {
    this.lodata();
  },
  methods: {
    lodata() {
      console.log(this.imglist);
    },
    change(e){
        console.log(e)
        this.indexs = e
    }
  },
};
</script>
<style lang="less" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.carousel_title {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 36%;
  text-align: center;
  color: #fff;
}
</style>