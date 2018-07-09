<template>
  <div class="header-slot">
    <mt-button icon="more"
               slot="right"
               @click="show=!show"></mt-button>
    <transition name="fade">
      <ul class="header-slot-dropdown"
          v-show="show">
        <li class="header-slot-dropdown-item"
            @click="handleLogout">
          <i class="mint-toast-icon mintui mintui-back"></i>退出登录
        </li>
        <li class="header-slot-dropdown-item">
          <i class="mint-toast-icon mintui mintui-back"></i>修改密码
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  components: {
  },
  created () {
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleLogout () {
      // 退出登录
      this.$store.dispatch('LogOut').then(() => {
        location.reload()
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.header-slot {
  position: relative;
  &-dropdown {
    position: absolute;
    top: 40px;
    right: 0;
    background: #2e3238;
    margin: 0;
    padding: 0;
    &-item {
      list-style: none;
      padding: 10px 20px 10px 15px;
      &:not(:first-child) {
        border-top: 1px solid #fff;
      }
      i {
        display: inline-block;
        margin-right: 5px;
      }
    }
  }
}

// 淡入淡出
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
