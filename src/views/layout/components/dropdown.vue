<template>
  <div class="header-slot">
    <mt-button icon="more"
               slot="right"
               @click="show=!show"></mt-button>
    <transition name="fade">
      <ul class="header-slot-dropdown"
          v-show="show">
        <li class="header-slot-dropdown-item">退出登录</li>
        <li class="header-slot-dropdown-item">修改密码</li>
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
      padding: 10px 30px 10px 15px;
      &:not(:first-child) {
        border-top: 1px solid #fff;
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
