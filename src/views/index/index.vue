<template>
  <div class="index">
    <!-- 高度vh -->
    <carousels :height="60" :imglist="imglist"></carousels>
    <div class="main">

    </div>
    <footers></footers>
  </div>
</template>

<script>
import carousels from "@/components/carousels";
import footers from "@/components/footer"
export default {
  components: {
    carousels,
    footers
  },
  name: "index",
  data() {
    return {
      imglist: [
        { img: require("@/assets/13720.jpg") },
        { img: require("@/assets/13099.jpg") },
        // { img: require("@/assets/t01d2624f1672570e70.jpg") },
        // { img: require("@/assets/t0192ba04b5e77a3c6a.jpg") },
        // { img: require("@/assets/t015343fb0658b3cffd.jpg") },
        // { img: require("@/assets/t01376952f5589c328d.jpg") },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.index {
  width: 100%;
  height: 100%;
}
</style>