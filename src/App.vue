<template>
  <div id="app">
    <app-header
      :show="show"
      :righticon="righticon"
      :background="background"
      :color="color"
      :logoimg="logoimg"
      @showheader="showheader"
    ></app-header>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import header from "@/components/header";
export default {
  name: "app",
  components: {
    "app-header": header,
  },
  data() {
    return {
      // 导航背景
      background: "background:rgba(61, 61, 65)",
      // 导航文字颜色
      color: "#fff",
      // 导航logo
      logoimg: require("@/../static/img/161907596999064.png"),

      righticon: require("@/../static/img/righticon.png"),
      show: false,
    };
  },
  // watch: {
  //   $route: function (newVal, oldVal) {
  //     console.log(newVal.query.type)
  //     console.log(oldVal)

  //   },
  // },
  mounted() {
    // 监听页面滚动
    // window.addEventListener("scroll", this.handleScroll, true);
    //  let loading =  this.$loading()
    // let loadingInstance = Loading.service();
    this.$nextTick(() => {
      // setTimeout(()=>{
      //   // loading.close();
      // },3000)
      new this.$wow.WOW({
        boxClass: "wow",
        animateClass: "animate__animated",
        live: true,
      }).init();
    });
  },
  methods: {
    showheader(e) {
      console.log(e);
      if (e) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
  },
};
</script>
<style>
.max_width_1200 {
  max-width: 1200px;
  margin: 0 auto !important;
}
</style>
