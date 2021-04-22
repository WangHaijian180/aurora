<template>
  <div id="app">
    <app-header @showheader="showheader" :show="show" :righticon='righticon' :background="background" :color="color" :logoimg="logoimg"></app-header>
    <router-view />
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
      background: "background:rgba(61, 61, 65,0.4)",
      // 导航文字颜色
      color:'#fff',
      // 导航logo
      logoimg:require("@/assets/161907596999064.png"),

      righticon:require("@/assets/righticon.png"),
      show:false
    };
  },
  mounted() {
    // 监听页面滚动
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    // 滚动导航头部背景改变
    handleScroll(e) {
      if (e.target.documentElement.scrollTop > 10) {
        this.background = 'background:rgba(255,255,255,0.9)'
        this.color = "#000"
        this.righticon = require("@/assets/righticons.png")
      }else{
        this.background = 'background:rgba(61, 61, 65,0.4)'
        this.color = "#fff"
         this.righticon = require("@/assets/righticon.png")
      }
    },
    showheader(e){
      console.log(e);
      if(e){
        this.show = false
        this.background = 'background:rgba(61, 61, 65,0.4)'
        this.righticon = require("@/assets/righticon.png")
      }else{
        this.show = true
        this.background = 'background:rgba(255,255,255)'
        this.righticon = require("@/assets/righticons.png")
      }
    }
  },
};
</script>
<style>
.max_width_1200 {
  max-width: 1200px;
  margin: 0 auto !important;
}
</style>
