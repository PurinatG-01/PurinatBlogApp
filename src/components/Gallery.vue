<template>
  <div class="gallery-main">
    <div class="nav-layer">
      <Navbar selected="3"/>
    </div>
    <div class="main-layer">
      <h1 v-for="i in 2" :key="i">Current page is unavailable now.</h1>
    </div>
  </div>
</template>

<script>
import Navbar from "./sub-components/Navbar.vue";

export default {
  components: { Navbar }
};
</script>

<style scoped>
.gallery-main,
.main-layer {
  width: 100vw;
  height: 200vh;
  font-family: "Overpass Mono", monospace;
  font-weight: 100;
  background: #202020;
  -webkit-box-shadow: inset 0px 0px 60px 0px rgba(16, 16, 16, 1);
  -moz-box-shadow: inset 0px 0px 60px 0px rgba(16, 16, 16, 1);
  box-shadow: inset 0px 0px 60px 0px rgba(16, 16, 16, 1);
  color: #f5f5f5;
  overflow-y: scroll;
}

.main-layer {
  position: absolute;
  z-index: 0;
}

.nav-layer {
  height: 100%;
  width: 100%;
  background: transparent;
  position: absolute;
  z-index: 10;
}
.main-layer h1 {
  text-align: center;
  margin-top: 20vw;
  background: #ffdd31;
  color: #202020;
}
</style>
