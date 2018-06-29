<template>
  <div class="login-container">
    123

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
    // 切换密码显示
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = 'text'
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
