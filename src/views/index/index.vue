<template>
  <div class="index">
      
  </div>
</template>

<script>
export default {
  components:{
  },
  name: 'index',
  data () {
    return {
      list:[]
    }
  },
  created(){
    this.listdata();
  },
  methods:{
    listdata(){
      this.axios.get('http://127.0.0.1:1016/user/select').then((res) => {
         this.list = res.data
         console.log(res.data)
        })
    }
  }
}
</script>
<style scoped>

</style>