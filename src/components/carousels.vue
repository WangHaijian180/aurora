<template>
  <div class="carousels">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>