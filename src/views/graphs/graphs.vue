<template>

	<div id="fit">
		<Button @click="test2()">拉取数据</Button>
		<Table v-if="showtable" :columns="columns1" :data="data1"></Table>
	</div>

</template>

<script>
  import { test } from "../../api/login";
export default {
  name: "graphs",
  data(){
    return{
      showtable:false,
      item:'eeee',
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Tel',
          key: 'tel'
        },
        {
          title: 'Id',
          key: 'id'
        }
      ],
	  data1:[]
	}
  },
  methods:{
	async test2 () {
	  this.showtable =true;
	  let res = await test()
	  debugger
	  if (res.data.code === 200) {
		this.data1=res.data.data;
	  }

	},
  }
};
</script>

<style scoped></style>
