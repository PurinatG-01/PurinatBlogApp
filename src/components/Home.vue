<template>
  <div class="home-main">
    <div class="nav-layer">
      <Navbar selected="1"/>
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
.home-main {
  background: #fafafa;
  width: 100vw;
  height: 800vh;
}

.nav-layer {
  height: 100%;
  width: 100%;
  background: transparent;
  position: absolute;
  z-index: 10;
}
</style>
