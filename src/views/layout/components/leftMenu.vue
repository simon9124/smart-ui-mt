<template>
  <div class="header-slot">
    <!-- 遮罩层 -->
    <div v-show="show"
         class='header-slot-mask'
         @click='show=!show'
         ref='cover'></div>
    <!-- 面包屑按钮 -->
    <mt-button slot="right"
               @click="show=!show">
      <i class="icon iconfont icon-menu"></i>
    </mt-button>
    <!-- 菜单栏 -->
    <transition name="fade">
      <div>
        <!-- <h3>SmartBCM 业务连续性管理系统</h3> -->
        <ul class="header-slot-leftmenu"
            v-show="show">
          <a class="header-slot-leftmenu-item"
             href='#/'>首页</a>
          <a class="header-slot-leftmenu-item"
             href='#/settings'>系统设置</a>
          <a class="header-slot-leftmenu-item"
             href='#/userManager'>用户管理</a>
          <a class="header-slot-leftmenu-item"
             href='#/tree'>树形结构</a>
          <a class="header-slot-leftmenu-item">智能图表</a>
          <a class="header-slot-leftmenu-item">功能组件</a>
          <a class="header-slot-leftmenu-item">动态皮肤</a>
        </ul>
      </div>
    </transition>
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
    position: absolute;
    top: 40px;
    right: 0;
    background: #2e3238;
    margin: 0;
    padding: 0;
    &-item {
      display: block;
      color: #fff;
      text-decoration: none;
      // list-style: none;
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
