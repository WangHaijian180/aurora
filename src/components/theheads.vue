<template>
  <div class="theheads">
    <el-row :gutter="10">
      <el-col :xs="10"
        ><div class="grid-content bg-purple hidden-xs-only">
          <nav class="navtab">
            <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item index="1">处理中心</el-menu-item>
              <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="3" disabled>消息中心</el-menu-item>
            </el-menu>
          </nav>
        </div></el-col
      >
      <el-col :lg="10"
        ><div class="grid-content bg-purple-light hidden-md-and-up">
          <div class="grid-content display_jc_sb">
            <div class="right">
              <img src="/assets/logo.png" alt="" srcset="" />
            </div>
            <div class="left" @click="iscollapspcklck">
              <i class="el-icon-more-outline"></i>
            </div>
          </div>
          <transition name="el-zoom-in-center">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              v-show="isCollapse"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </transition>
        </div></el-col
      >
    </el-row>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    iscollapspcklck() {
      if (this.isCollapse) {
        this.isCollapse = false;
      } else {
        this.isCollapse = true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.bg-purple {
  background: #555b64;
}
.bg-purple-light {
  background: #555b64;
}
.grid-content {
  min-height: 50px;
}
.navtab {
  width: 1200px;
  margin: 0 auto;
  min-height: 50px;
}
.el-menu.el-menu--horizontal {
  border: 0px;
}
.display_jc_sb {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
}
</style>