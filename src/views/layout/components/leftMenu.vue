<template>
  <div class="header-slot">
    <!-- 遮罩层 -->
    <transition name="fade">
      <div v-show="show"
           class='header-slot-mask'
           @click='menuHide();show=!show'
           ref='cover'>
      </div>
    </transition>
    <!-- 面包屑按钮 -->
    <mt-button slot="right"
               @click="menuShow();show=!show">
      <i class="icon iconfont icon-menu"></i>
    </mt-button>
    <!-- 菜单栏 -->
    <ul ref="leftmenu"
        class="header-slot-leftmenu"
        @click="menuHide();show=!show">
      <h3 class="header-slot-leftmenu-title">SmartBCM</h3>
      <h5 class="header-slot-leftmenu-title">业务连续性管理系统</h5>
      <a class="header-slot-leftmenu-item"
         href='#/'>
        <i class="icon iconfont icon-all"></i>首页</a>
      <a class="header-slot-leftmenu-item"
         href='#/settings'>
        <i class="icon iconfont icon-set"></i>系统设置</a>
      <a class="header-slot-leftmenu-item"
         href='#/userManager'>
        <i class="icon iconfont icon-account"></i>用户管理</a>
      <a class="header-slot-leftmenu-item"
         href='#/tree'>
        <i class="icon iconfont icon-agriculture"></i>树形结构</a>
      <a class="header-slot-leftmenu-item">
        <i class="icon iconfont icon-data"></i>智能图表</a>
      <a class="header-slot-leftmenu-item">
        <i class="icon iconfont icon-box"></i>功能组件</a>
      <a class="header-slot-leftmenu-item">
        <i class="icon iconfont icon-color"></i>动态皮肤</a>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'leftmenu',
  components: {
  },
  created () {
  },
  data () {
    return {
      // 控制菜单及遮罩层显示与否
      show: false,
    }
  },
  methods: {
    menuShow () {
      // 菜单显示
      const leftMenu = this.$refs.leftmenu
      leftMenu.style.left = '0'
    },
    menuHide () {
      // 菜单隐藏
      const leftMenu = this.$refs.leftmenu
      leftMenu.style.left = '-200px'
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.header-slot {
  position: relative;
  &-mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #2c3b41;
    opacity: 0.5;
    z-index: 1111;
  }
  &-leftmenu {
    position: fixed;
    top: 0;
    bottom: 0;
    left: -200px;
    margin: 0;
    padding: 15px 0;
    min-width: 200px;
    background: black;
    z-index: 1200;
    transition: all ease 0.4s;
    overflow: auto;
    font-size: 16px;
    &-title {
      margin: 0;
      padding: 5px 10px;
      color: gray;
      &:not(:first-child) {
        letter-spacing: 1px;
        margin-bottom: 10px;
      }
    }
    &-item {
      display: block;
      color: #fff;
      text-decoration: none;
      padding: 15px 10px;
      font-size: 0.9rem;
      .icon {
        font-size: 0.9rem;
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
