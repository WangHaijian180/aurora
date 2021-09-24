<template>
  <div class="index">
      <carousels></carousels>
  </div>
</template>

<script>
import carousels from '@/components/carousels'
export default {
  components: {
    carousels
  },
  name: "index",
  data() {
    return {
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