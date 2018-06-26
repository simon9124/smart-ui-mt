<template>
  <div class="login-container">
    123
    <!-- <el-form class="login-form"
             autoComplete="on"
             :model="loginForm"
             :rules="loginRules"
             ref="loginForm"
             label-position="left">
      <div class="title-container">
        <h3 class="title">系统登录</h3>
      </div>
      <el-form-item prop="userName">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user" />
        </span>
        <el-input name="userName"
                  type="text"
                  v-model="loginForm.userName"
                  autoComplete="on"
                  placeholder="用户名" />
      </el-form-item>

      <el-form-item prop="userPassword">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input name="userPassword"
                  :type="passwordType"
                  @keyup.enter.native="handleLogin"
                  v-model="loginForm.userPassword"
                  autoComplete="on"
                  placeholder="密码" />
        <span class="show-pwd"
              @click="showPwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>

      <el-button type="primary"
                 style="width:100%;margin-bottom:30px;"
                 :loading="loading"
                 @click.native.prevent="handleLogin">登录</el-button> -->
    </el-form>

  </div>
</template>

<script>
export default {
  // components: { LangSelect, SocialSign },
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value.length === 0) {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码至少6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        userName: '',
        userPassword: ''
      },
      loginRules: {
        userName: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        userPassword: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch('LoginByUsername', this.loginForm)
            .then(() => {
              this.loading = false
              this.$router.push({ path: '/' })
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          // console.log('error submit!!')
          return false
        }
      })
    },
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #283442;
$light_gray: #eee;
</style>
