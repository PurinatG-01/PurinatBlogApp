<template>
  <div id="app">
    <transition name="fade" class="page">
      <router-view></router-view>
    </transition>
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
  background-color: #202020;
  cursor: url("./assets/cursor_white.png"), auto;
}

.fade-enter-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.page {
  position: fixed;
  width: inherit;
}
</style>
