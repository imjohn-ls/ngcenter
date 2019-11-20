import { sidelist } from "../../api/sidelist";

export default {
  state: {
    activeNb: null,
    asideList: []
  },
  getters: {},
  mutations: {
    setActiveNb(state, item) {
      state.activeNb = item;
    },
    setsidelist(state, list) {
      state.sidelist = list;
    }
  },
  actions: {
    getsidelist({ commit }, refresh) {
      return new Promise((resolve, reject) => {
        sidelist()
          .then(res => {
            //console.log(res)
            if (res.data.code === 200) {
              let arr = [];
              res.data.data.map((item, index) => {
                arr.push(item);
              });
              commit("setsidelist", arr);
              // 当前 nbCode不存在时 或者 refresh 为true 时 重置 activeNb
              if (!this.state.app.activeNb || refresh) {
                commit('setActiveNb', arr[0] || { nbCode: 'test' })
              }
              resolve(res);
            }
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
};
