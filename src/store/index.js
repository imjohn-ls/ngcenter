import Vue from "vue";
import Vuex from "vuex";

import app from "./module/app";
import user from "./module/user";
import login from "./module/login";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    app,
    login
  }
});
