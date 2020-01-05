<template>
  <div class="gallery-main">
    <div class="nav-layer">
      <Navbar selected="3"/>
    </div>
    <div class="main-layer">
      <!-- <h1 v-for="i in 2" :key="i">Current page is unavailable now.</h1> -->
      <div class="container">
        <div class="me"/>
        <div class="t2"/>
        <div class="me"/>
        <div class="t2"/>
        <div class="me"/>
        <div class="t2"/>
        <div class="me"/>
        <div class="t2"/>
        <!-- <div class="t3"/> -->
      </div>
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

img {
  height: 100vh;
}

.container {
  -webkit-column-count: 3;
  -webkit-column-gap: 10px;
  -webkit-column-fill: auto;
  -moz-column-count: 3;
  -moz-column-gap: 10px;
  -moz-column-fill: auto;
  column-count: 3;
  column-gap: 15px;
  column-fill: auto;
}

.me {
  display: inline-block;
  width: 200px;
  -webkit-column-break-inside: avoid;
  -moz-column-break-inside: avoid;
  column-break-inside: avoid;
  margin-bottom: 10px;
  background: red;
  height: 1000px;
}

.t2 {
  display: inline-block;
  width: 400px;
  -webkit-column-break-inside: avoid;
  -moz-column-break-inside: avoid;
  column-break-inside: avoid;
  margin-bottom: 10px;
  background: red;
  height: 700px;
}
</style>
