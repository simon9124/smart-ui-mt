export function closeView(_this, viewName) {
  const visitedViews = _this.$store.state.tagsView.visitedViews
  for (const i in visitedViews) {
    // 获取已打开标签组中 viewName 的位置
    if (visitedViews[i].name === viewName) {
      _this.$store
        .dispatch('delVisitedViews', visitedViews[i])
        .then(views => {
          const latestView = views.slice(-1)[0]
          if (latestView) {
            _this.$router.push(latestView.path)
          } else {
            _this.$router.push('/')
          }
        })
      return
    }
  }
}
