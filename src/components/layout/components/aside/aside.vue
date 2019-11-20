<template>
  <div class="aside-wrap">
    <label>
      <Input
        suffix="ios-search"
        placeholder="输入系统名搜索"
        v-model="searchText"
        clearable
      >
      </Input>
    </label>
    <div class="aside-list">
      <div
        class="aside-item"
        v-for="(i, index) in sidelist"
        @click="changeActive(index, i)"
      >
        <div class="title">
          <Icon type="md-power" color="#00e9bc" size="20"></Icon>
          {{ i.sysname }}
        </div>
        <div class="info">{{ i.sysaliasname }}</div>
      </div>
    </div>

    <div style="display: flex; justify-content: center">
      <div class="add-list" @click="addNbModel = true">
        <!--      <span>添加</span>-->
        <Icon type="md-add" color="#fff" :size="25"></Icon>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapMutations, mapState, mapActions } from 'vuex'
export default {
  name: "MyAside",
  data() {
    return {
      formValidate: {
        nbName: "",
        nbCode: ""
      },
      ruleValidate: {
        nbCode: [
          { required: true, message: "nbCode不能为空", trigger: "blur" }
        ],
        nbName: [{ required: true, message: "nbName不能为空", trigger: "blur" }]
      },
      searchText: "",
      applyModel: false,
      applyForm: {
        nbCode: "",
        applyReason: ""
      },
      applyRules: {
        nbCode: [{ required: true, message: "nbCode不能为空", trigger: "blur" }]
      },
      activeGroup: ""
    };
  },
  computed: {
    ...mapState({
      activeNb: state => state.app.activeNb,
      sidelist: state => state.app.sidelist,
    })
  },
  methods: {
    ...mapActions([
      'getsidelist'
    ]),
    ...mapMutations([
      'setsidelist','setActiveNb'
    ]),
    getAllNbList (refresh) {
      this.getsidelist(refresh)
    },
    changeActive(index, item) {
      this.setActiveNb(item)
      this.$router.push({ path: this.$route.path, query: { ng: item.sysaliasname } })
    }
  },
  mounted () {
    this.getAllNbList(true)
  },
  beforeDestroy () {

  },
};
</script>
<style lang="less" scoped>
@import "aside";
</style>
