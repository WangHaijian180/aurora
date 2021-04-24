<template>
  <footer class="footers">
    <div class="max_width_1200">
      <div class="footers_list">
        <ul v-for="(i, index) in listdata" :key="index">
          <span>{{ i.title }}</span>
          <li v-for="(m, indexm) in i.list" :key="indexm">
            {{ m.text }}
          </li>
        </ul>
        <div class="qecode">
            <img src="@/../static/img/diugai.com161907264044021.png" alt="">
            <p>扫描二维码</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "footers",
  data() {
    return {
      listdata: [
        {
          title: "作品欣赏",
          list: [
            { text: "甜蜜客户案例" },
            { text: "婚纱摄影系列" },
            { text: "个人艺术写真" },
            { text: "甜蜜客户案例" },
          ],
        },
        {
          title: "新闻动态",
          list: [
            { text: "行业资讯" },
            { text: "最新活动" },
            { text: "摄影交流" },
          ],
        },
        {
          title: "婚礼场地",
        },
        {
          title: "联系我们",
          list: [
            { text: "关于我们" },
            { text: "服务流程" },
            { text: "人才招聘" },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
*{
    padding: 0; 
    margin: 0;
}
.footers {
  color: #fff;
  background-color: #000;
  padding: 10px 0;
  .footers_list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    span {
      font-size: 20px;
    }
    ul{
        padding: 10px;
    }
    li {
      font-size: 14px;
      padding-top: 10px;
      font-weight: 200;
    }
    span,
    li {
      white-space: nowrap;
      list-style-type: none;
    }
    .qecode{
        padding: 10px;
        img{
            width: 150px;
            height: 150px;
            border: 2px solid #fff;
        }
        p{
            font-size: 14px;
            margin: 0;
            padding: 4px 0;
        }
    }
  }
}
</style>