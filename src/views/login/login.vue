<template>
  <div class="login-container">
    <h2 class="title">系统登录</h2>
    <el-form autoComplete="on"
             :model="loginForm"
             :rules="loginRules"
             ref="loginForm">
      <el-form-item prop="userName">
        <mt-field placeholder="用户名："
                  type="text"
                  v-model="loginForm.userName"
                  name="userName"
                  autoComplete="on"></mt-field>
      </el-form-item>
      <el-form-item prop="userPassword">
        <mt-field placeholder="密码："
                  :type="passwordType"
                  v-model="loginForm.userPassword"
                  name="userPassword"
                  autoComplete="on">
          <!-- <mt-button @click.native="showPwd">
            <i class="iconfont icon-close-eyes">
            </i>
          </mt-button> -->
        </mt-field>
      </el-form-item>
    </el-form>
    <mt-button type="primary"
               size="large"
               @click.native="handleLogin">登 录</mt-button>
    </el-form>

  </div>
</template>

<script>
import { getRoleAll } from '@/api/login/login'

export default {
  // components: { LangSelect, SocialSign },
  name: 'login',
  data () {
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
      showDialog: false
    }
  },
  methods: {
    // 切换密码显示
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store
            .dispatch('LoginByUsername', this.loginForm)
            .then(() => {
              this.$router.push({ path: '/' })
            })
            .catch(() => {
            })
        } else {
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
