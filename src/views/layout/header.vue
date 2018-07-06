<template>
  <div>
    <mt-header title="DashBoard">
      <router-link to="/"
                   slot="left">
        <mt-button icon="back">全部功能</mt-button>
      </router-link>

      <!-- 右侧组件 -->
      <DropDown slot="right"></DropDown>
      <!-- <g-dropdown slot="right">
        <mt-button icon="more"
                   slot="btn"></mt-button>
        <g-dropdown-item>退出</g-dropdown-item>
        <g-dropdown-item>点也是</g-dropdown-item>
        <g-dropdown-item>没用的</g-dropdown-item>
      </g-dropdown> -->
    </mt-header>
  </div>
</template>

<script>
import DropDown from './components/dropdown'

export default {
  name: 'mtheader',
  components: { DropDown },
  created () {
    // this.$bus.$on('set-theme', (color) => {
    //   this.$el.querySelector('.mint-header').style.backgroundColor = color
    // })
  },
  data () {
    return {
      // theme: '#2e3238'
    }
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.mint-header {
  // background-color: #2e3238;
}
</style>
