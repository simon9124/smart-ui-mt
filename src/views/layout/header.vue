<template>
  <div>
    <mt-header title="DashBoard">
      <!-- 左侧组件 -->
      <LeftMenu slot="left"></LeftMenu>

      <!-- 右侧组件 -->
      <DropDown slot="right"></DropDown>
    </mt-header>
  </div>
</template>

<script>
import DropDown from './components/dropdown'
import LeftMenu from './components/leftmenu'

export default {
  name: 'mtheader',
  components: { DropDown, LeftMenu },
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
