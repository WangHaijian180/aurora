<template>
  <header class="headers">
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
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#1da335"
          >
            <template v-for="(item, iex) in data">
              <el-menu-item
                v-if="!item.list"
                :key="iex"
                :index="iex.toString()"
                >{{ item.text }}</el-menu-item
              >
              <el-submenu
                v-else-if="item.list"
                :key="iex"
                :index="iex.toString()"
              >
                <template slot="title">{{ item.text }}</template>
                <el-menu-item
                  v-for="(n, inde) in item.list"
                  :key="inde"
                  :index="iex.toString() + '-' + inde.toString()"
                  >{{ n.text }}</el-menu-item
                >
              </el-submenu>
            </template>
          </el-menu>
        </div>
      </div>
      <div class="header_phone hidden-sm-and-up">
        <div class="cover"></div>
        <div class="header_phones">
          <div class="logo">
            <img src="@/../static/img/161907596999064s.png" alt="" srcset="" />
          </div>
          <div class="menu" @click="menushow">
            <img :src="righticon" alt="" />
          </div>
        </div>
        <div v-show="show">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#1da335"
            @open="handleOpen"
            @close="handleClose"
          >
             <template v-for="(item, iex) in data">
              <el-menu-item
                v-if="!item.list"
                :key="iex"
                :index="iex.toString()"
                >{{ item.text }}</el-menu-item
              >
              <el-submenu
                v-else-if="item.list"
                :key="iex"
                :index="iex.toString()"
              >
                <template slot="title">{{ item.text }}</template>
                <el-menu-item
                  v-for="(n, inde) in item.list"
                  :key="inde"
                  :index="iex.toString() + '-' + inde.toString()"
                  >{{ n.text }}</el-menu-item
                >
              </el-submenu>
            </template>
          </el-menu>
        </div>
      </div>
    </div>
  </header>
</template>
<script>

export default {
  name: "headers",
  props: ["background", "color", "logoimg", "righticon", "show"],
  data() {
    return {
      activeIndex: "0",
      data: [
        { text: "首页" },
        { text: "Vue" },
        { text: "小程序" },
        { text: "前端其他", list: [{ text: "css" }, { text: "html" }] },
        { text: "java" },
        { text: "数据库" },
        { text: "其他" },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key,keyPath)
      this.activeIndex = key;
      let path = '';
      if(keyPath.length == 1){
        path = this.data[keyPath[0]].text
      }else{
        path = this.data[keyPath[0]].list[keyPath[1].substring(keyPath[1].lastIndexOf("-")+1)].text
      }
      if(path == '首页'){
        this.$router.push({path:'/'});
      }else{
        this.$router.push({path:'/about',query:{type:path}});
      }
    },
    menushow() {
      this.$emit("showheader", this.show);
    },
    handleOpen() {},
    handleClose() {},
  },
};
</script>

<style lang="less" scoped>
.headers {
  width: 100%;
  // position: fixed;
  background-color: #545c64;
  color: #fff !important;
  z-index: 999;
  .header_pc {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    .el-menu-demo {
      border: 0 !important;
    }
    .logo {
      height: 60px;
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