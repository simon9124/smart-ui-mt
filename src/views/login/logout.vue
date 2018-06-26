<template>
</template>

<script>
export default {
  created() {
    this.logout()
  },
  methods: {
    logout() {
      this.$store
        .dispatch('LogOut')
        .then(() => {
          this.loading = false
          this.$router.push({ path: '/login' })
        })
        .catch(() => {
          this.loading = false
        })
    }
  }
}
</script>
