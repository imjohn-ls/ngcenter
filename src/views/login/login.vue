<style lang="less">
@import "./login.less";
</style>

<template>
  <div class="login">
    <div class="img">
      <img :src="logo" alt="" />
    </div>
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录!" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <div class="forget">
            <router-link to="/forgotPassword">忘记密码?</router-link>
            <router-link to="/register" style=" font-size: 12px;"
              >注册</router-link
            >
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from "_c/login-form";
import logo from "@/assets/images/logo.png";
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      logo: logo
    };
  },
  components: {
    LoginForm
  },
  methods: {
    ...mapActions(["handleLogin"]),
    ...mapMutations(["setUserInfo", "setToken"]),
    handleSubmit(data) {
      this.handleLogin({ userNo: data.userName, password: data.password }).then(
        res => {
          this.$router.push({
            name: this.$config.homeName
          });
         /* if (res.data.status === 200) {
            this.$router.push({
              name: this.$config.homeName
            });
          } else {
            this.$Message.error(res.data.data);
          }*/
        }
      );
    }
  }
};
</script>

<style></style>
