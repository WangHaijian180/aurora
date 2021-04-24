<template>
  <div class="index">
    <!-- 高度vh -->
    <!-- <carousels :height="60" :imglist="imglist"></carousels> -->
    <div class="main max_width_1200">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="'/index?type='+type">{{type}}</el-breadcrumb-item>
          <el-breadcrumb-item>{{type}}</el-breadcrumb-item>
        </el-breadcrumb>
        <maindefault :type="type"></maindefault>
    </div>
  </div>
</template>

<script>
// import carousels from "@/components/carousels";
import maindefault from '@/components/main_default'
export default {
  components: {
    // carousels,
    maindefault
  },
  name: "index",
  data() {
    return {
      // imglist: [
      //   { img: require("@/../static/img/13720.jpg") },
      //   { img: require("@/../static/img/13099.jpg") },
      //   { img: require("@/../static/img/15156.jpg") },
      // ],
      type:''
    };
  },
  mounted() {
    this.type = this.$route.query.type
  },
  created() {},
  methods: {

  },
};
</script>
<style lang="less" scoped>
.index {
  width: 100%;
  height: 100%;
}
.main {
  padding: 10px 0;
  .list {
    width: 100%;
    .item {
      height: 200px;
      display: flex;
      .left {
        height: 100%;
        width: 200px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .right {
        padding: 10px;
        box-sizing: border-box;
      }
    }
    .item:nth-child(even) {
      flex-flow: row-reverse;
    }
  }
}
</style>