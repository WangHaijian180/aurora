<template>
  <header class="headers" :style="background">
    <div class="max_width_1200">
      <div class="header_pc hidden-xs-only">
        <div class="logo">
          <img :src="logoimg" alt="" srcset="" />
        </div>
        <div class="menu">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="rgba(61, 61, 65,0)"
            :text-color="color"
            :router="true"
            active-text-color="#fef3c9"
          >
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/about">处理中心</el-menu-item>
            <el-menu-item index="3">关于我们</el-menu-item>
          </el-menu>
        </div>
      </div>
      <div class="header_phone hidden-sm-and-up">
        <div class="cover"></div>
        <div class="header_phones">
          <div class="logo">
            <img src="@/assets/161907596999064s.png" alt="" srcset="" />
          </div>
          <div class="menu" @click="menushow">
            <img :src="righticon" alt="" />
          </div>
        </div>
        <div v-show="show">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="1">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "headers",
  props: ["background", "color", "logoimg", "righticon","show"],
  data() {
    return {
      activeIndex: "0"
    };
  },
  methods: {
    handleSelect(key,keyPath) {
      this.activeIndex = key;
      console.log(keyPath)
    },
    menushow(){
      this.$emit("showheader",this.show)
      // if(this.show){
      //   this.show = false
      //   this.background = 'background:rgba(61, 61, 65,0.4)'
      //   this.righticon = require("@/assets/righticon.png")
      // }else{
      //   this.show = true
      //   this.background = 'background:rgba(255,255,255)'
      //   this.righticon = require("@/assets/righticons.png")
      // }
    },
    handleOpen(){

    },
    handleClose(){

    }
  },
};
</script>

<style lang="less" scoped>
.headers {
  width: 100%;
  position: fixed;
  // background-color: rgba(61, 61, 65,0.4);
  color: #fff !important;
  z-index: 999;
  .header_pc {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    .el-menu-demo {
      border: 0 !important;
    }
    // .el-menu--horizontal{
    //     background-color: rgba(61, 61, 65,0.4);
    // }
    .logo {
      height: 60px;
      //   width: 180px;
      //   background-image: url('../assets/diugai.com161907286619186.png');
      //   background-size: 100% 100%;
      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
  }
}
.header_phones {
  width: 100%;
  // background-color: rgba(61, 61, 65,0.4);
  color: #fff !important;
  padding: 10px 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  .menu {
    padding-right: 12px;
  }
}
</style>