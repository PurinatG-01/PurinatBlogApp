<template>
  <div class="profile-main">
    <div class="nav-layer">
      <Navbar selected="2"/>
    </div>
    <div class="main-layer">
      <div class="profile-layer">
        <h1>PROFILE</h1>

        <img src="../assets/IMG_0988@2x.png" alt>
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
.profile-main {
  width: 100vw;
  height: 200vh;
  font-family: "Overpass Mono", monospace;
  font-weight: 100;
  background: #202020;
}
.nav-layer {
  height: 100%;
  width: 100%;
  background: transparent;
  position: absolute;
  z-index: 10;
}

.main-layer {
  height: 100vh;
  width: 100vw;
}
.profile-layer {
  width: 100vw;
  margin: auto;
  height: 200vh;
  /* background: red; */
  position: absolute;
  z-index: 0;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-content: center;
}
h1 {
  margin-top: 300px;
  color: #f5f5f5;
  text-align: center;
  letter-spacing: 0.8em;
  font-weight: 100;
}

img {
  margin-top: 150px;
  width: 12em;
  height: 12em;
  align-self: center;
  border-radius: 50%;
}
</style>
