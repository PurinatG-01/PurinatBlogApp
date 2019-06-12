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

<style>
@import url("https://fonts.googleapis.com/css?family=Overpass+Mono:300,400,600,700&display=swap");

#app {
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
  cursor: url("./assets/cursor_red.png"), auto;
}
</style>