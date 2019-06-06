<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style scoped>
#app {
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
  cursor: url("./assets/cursor_red.png"), auto;
}
</style>