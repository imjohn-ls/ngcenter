<template>
  <div class="home">
    <div class="content">
      <div class="content-item">
        <div class="title">
          <Button @click="test" style="background: #00e9bc; color: #fff"
            >拉取数据
          </Button>
          {{ msg }}
        </div>
        <div class="title"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { test } from "../../api/login";
export default {
  name: "overview",
  components: {},
  data() {
    return {
      msg: "test"
    };
  },
  methods: {
    async test() {
      let res = await test({ item: "5555" });
      debugger;
      if (res.body.code === "200") {
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import "./overview.less";
</style>
