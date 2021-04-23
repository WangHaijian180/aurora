<template>
  <div class="carousels">
    <el-carousel @change="change" :height="height + 'vh'" :autoplay="false">
      <el-carousel-item v-for="(item, index) in imglist" :key="index">
        <img :src="item.img" alt="" srcset="" />
        <div class="carousel_title">
          <div class="title_text">
            <h1 class="wow animate__animated animate__backInUp">关于我们</h1>
            <span
              style="display: block"
              class="animate__animated animate__backInUp"
              >455465</span
            >
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
    return {};
  },
  mounted() {
    // console.log(
    //   new this.$wow.WOW({
    //     boxClass: "wow", //需要执行动画元素的Class
    //     animateClass: "animated", //animation.css动画的Class
    //     offset: 0, //距离可视区域多少开始执行动画
    //     mobile: true, //是否在移动设备执行动画
    //     live: false, //异步加载的内容是否有效
    //   }).init()
    // );
    // var wow = new WOW();
    // wow.init();
    // this.$nextTick(() => {
    //   new this.$wow.WOW({
    //     boxClass: "wow",
    //     animateClass: "animated",
    //     live: false,
    //   }).init();
    // });
  },

  methods: {
    lodata() {
      console.log(this.imglist);
    },
    change(e) {
      console.log(e);
    },
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