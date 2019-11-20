<style lang="less">
@import "./login-form.less";
</style>
<template>
  <Form
    ref="loginForm"
    :model="form"
    :rules="rules"
    @keydown.enter.native="handleSubmit"
  >
    <FormItem prop="userName">
      <label>
        <Input v-model="form.userName" placeholder="请输入用户名">
          <span slot="prepend">
            <Icon :size="22" type="md-person"></Icon>
          </span>
        </Input>
      </label>
    </FormItem>
    <FormItem prop="password">
      <label>
        <Input type="password" v-model="form.password" placeholder="请输入密码">
          <span slot="prepend">
            <Icon :size="22" type="md-lock"></Icon>
          </span>
        </Input>
      </label>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" lang>登&nbsp&nbsp录</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  name: "LoginForm",
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "账号不能为空", trigger: "blur" }];
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "密码不能为空", trigger: "blur" }];
      }
    }
  },
  data() {
    return {
      form: {
        userName: "",
        password: ""
      }
    };
  },
  computed: {
    rules() {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      };
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$emit("on-success-valid", {
            userName: this.form.userName,
            password: this.form.password
          });
        }
      });
    }
  }
};
</script>
