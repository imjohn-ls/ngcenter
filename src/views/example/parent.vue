<template>
  <div class="parent">
    <h2>{{ msg }}</h2>
    <p>父组件接手到的内容：{{ username }}</p>
    <kids psMsg="父传子的内容:叫爸爸" @transfer="getUser"></kids>  <!--绑定自定义事件transfer-->
  </div>
</template>

<script>
  import kids from './components/son'
  export default {
    name: "parent",
    components:{
      kids
    },
    data () {
      return{
        msg:'父组件',
        username:'',
      }
    },
    methods:{
      getUser(msg){
        this.username=msg;
      }
    }
  }
</script>

<style scoped>

</style>