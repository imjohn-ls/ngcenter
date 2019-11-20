import Vue from "vue";
import Router from "vue-router";
import { routers } from "./routers";
import iView from "iview";
import config from "@/config";
const { homeName } = config;

Vue.use(Router);
const router = new Router({
  routes: routers,
  mode: "history"
  //base: '/NacCenter/'
});

export default router;
