<template>
  <div class="index">
    <!-- 高度vh -->
    <carousels :height="60" :imglist="imglist"></carousels>
    <div class="main max_width_1200">
        <div class="list">
            <div class="item">
              <div class="left">
                <img src="@/assets/13099.jpg" alt="" srcset="">
              </div>
              <div class="right">
                <p>暗恋是一种礼貌 暗地里盖一座城堡。</p>
                 <p>我从未拥有过你一秒钟，心里却失去过你千万次。。</p>
              </div>
            </div>
             <div class="item">
              <div class="left">
                <img src="@/assets/13720.jpg" alt="" srcset="">
              </div>
              <div class="right">
                <p>暗恋是一种礼貌 暗地里盖一座城堡。</p>
                 <p>我从未拥有过你一秒钟，心里却失去过你千万次。。</p>
              </div>
            </div>
             <div class="item">
              <div class="left">
                <img src="@/assets/13099.jpg" alt="" srcset="">
              </div>
              <div class="right">
                <p>暗恋是一种礼貌 暗地里盖一座城堡。</p>
                 <p>我从未拥有过你一秒钟，心里却失去过你千万次。。</p>
              </div>
            </div>
             <div class="item">
              <div class="left">
                <img src="@/assets/13720.jpg" alt="" srcset="">
              </div>
              <div class="right">
                <p>暗恋是一种礼貌 暗地里盖一座城堡。</p>
                 <p>我从未拥有过你一秒钟，心里却失去过你千万次。。</p>
              </div>
            </div>
             <div class="item">
              <div class="left">
                <img src="@/assets/13099.jpg" alt="" srcset="">
              </div>
              <div class="right">
                <p>暗恋是一种礼貌 暗地里盖一座城堡。</p>
                 <p>我从未拥有过你一秒钟，心里却失去过你千万次。。</p>
              </div>
            </div>
             <div class="item">
              <div class="left">
                <img src="@/assets/13720.jpg" alt="" srcset="">
              </div>
              <div class="right">
                <p>暗恋是一种礼貌 暗地里盖一座城堡。</p>
                 <p>我从未拥有过你一秒钟，心里却失去过你千万次。。</p>
              </div>
            </div>
             <div class="item">
              <div class="left">
                <img src="@/assets/13099.jpg" alt="" srcset="">
              </div>
              <div class="right">
                <p>暗恋是一种礼貌 暗地里盖一座城堡。</p>
                 <p>我从未拥有过你一秒钟，心里却失去过你千万次。。</p>
              </div>
            </div>
             <div class="item">
              <div class="left">
                <img src="@/assets/13720.jpg" alt="" srcset="">
              </div>
              <div class="right">
                <p>暗恋是一种礼貌 暗地里盖一座城堡。</p>
                 <p>我从未拥有过你一秒钟，心里却失去过你千万次。。</p>
              </div>
            </div>
             <div class="item">
              <div class="left">
                <img src="@/assets/13099.jpg" alt="" srcset="">
              </div>
              <div class="right">
                <p>暗恋是一种礼貌 暗地里盖一座城堡。</p>
                 <p>我从未拥有过你一秒钟，心里却失去过你千万次。。</p>
              </div>
            </div>
             <div class="item">
              <div class="left">
                <img src="@/assets/13720.jpg" alt="" srcset="">
              </div>
              <div class="right">
                <p>暗恋是一种礼貌 暗地里盖一座城堡。</p>
                 <p>我从未拥有过你一秒钟，心里却失去过你千万次。。</p>
              </div>
            </div>
        </div>
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
.main{
  padding: 10px 0;
  .list{
    width: 100%;
    .item{
      height: 200px;
      display: flex;
      .left{
        height: 100%;
        width: 200px;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .right{
        padding: 10px;
        box-sizing: border-box;
      }
    }
    .item:nth-child(even){
      flex-flow: row-reverse;
    }
  }
}
</style>