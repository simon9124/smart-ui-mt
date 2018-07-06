<template>
  <div class="header-slot">
    <mt-button icon="more"
               slot="right"
               @click="show=!show"></mt-button>
    <ul class="header-slot-dropdown"
        v-if="show">
      <li class="header-slot-dropdown-item">退出登录</li>
      <li class="header-slot-dropdown-item">修改密码</li>
    </ul>
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
</style>
