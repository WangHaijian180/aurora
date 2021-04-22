<template>
  <div class="index">
      
  </div>
</template>

<script>
// import theheads from "../../components/theheads";
export default {
  components:{
    // theheads
  },
  name: 'index',
  data () {
    return {
      list:[]
    }
  },
  created(){
    // this.listdata();
  },
  methods:{
    // listdata(){
    //   this.axios.get('http://127.0.0.1:1016/user/select').then((res) => {
    //      this.list = res.data
    //      console.log(res.data)
    //     })
    // }
  }
}
</script>
<style lang="less" scoped>
  .index{
    width: 100%;
    height: 100%;
  }
</style>