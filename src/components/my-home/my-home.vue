<template>
  <Layout class="main" style="height: 100%;">
    <header-bar></header-bar>
    <Layout style="height: 100%;overflow: hidden">
      <div class="container">
        <div class="aside">
          <my-aside></my-aside>
        </div>
        <div class="content">
          <router-view />
        </div>
      </div>
    </Layout>
  </Layout>
</template>
<script>
import "./my-home.less";
import HeaderBar from "./components/header/header";
import MyAside from "../layout/components/aside/aside";
import Logo from "@/assets/images/logo.png";
export default {
  name: "MyHome",
  data() {
    return {
      Logo
    };
  },
  components: {
    HeaderBar,
    MyAside
  }
};
</script>
