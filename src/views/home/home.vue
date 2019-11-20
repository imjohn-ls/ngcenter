<template>
  <div class="home">
    <div class="content">
      <div class="content-item">
        <div class="title">
          {{activeNb.sysaliasname}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions,mapState } from "vuex";
export default {
  name: "home",
  components: {},
  data() {
    return {
      msg: "test"
    };
  },
  mounted: {

  },
  computed: {
    ...mapState({
      activeNb: state => state.app.activeNb,
    })
  },
  methods: {
    ...mapActions(["getsidelist"]),
  },
  mounted () {
    this.getsidelist(true);
  }

};
</script>
<style lang="less" scoped>
@import "./home.less";
</style>
