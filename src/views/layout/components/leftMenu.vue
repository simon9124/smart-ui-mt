<template>
  <div class="header-slot">
    <mt-button slot="right"
               @click="show=!show">
      <i class="icon iconfont icon-menu"></i>
    </mt-button>
    <transition name="fade">
      <div>
        <!-- <h3>SmartBCM 业务连续性管理系统</h3> -->
        <ul class="header-slot-leftmenu"
            v-show="show">
          <li class="header-slot-leftmenu-item">系统设置</li>
          <li class="header-slot-leftmenu-item">用户管理</li>
          <li class="header-slot-leftmenu-item">树形结构</li>
          <li class="header-slot-leftmenu-item">智能图表</li>
          <li class="header-slot-leftmenu-item">功能组件</li>
          <li class="header-slot-leftmenu-item">动态皮肤</li>
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
  &-leftmenu {
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
