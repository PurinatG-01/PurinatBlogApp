<template>
  <div class="home-main">
    <div class="nav-layer">
      <Navbar selected="1"/>
    </div>
    <div class="main-layer">
      <div class="main-section-1">
        <div>
          <h1>My name is Purinat</h1>
          <p>I study in faculty of Information and Communication Technology, Mahidol University, Thailand.</p>
        </div>
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
.home-main,
.main-layer {
  background: #454545;
  width: 100vw;
  height: 100vh;
  font-family: "Overpass Mono", monospace;
  font-weight: 100;
}

.nav-layer {
  height: 100%;
  width: 100%;
  background: transparent;
  position: absolute;
  z-index: 10;
}

.main-section-1 {
  width: 100%;
  height: 100vh;
  background: #454545;
  -webkit-box-shadow: 0px 10px 14px 0px rgba(69, 69, 69, 0.11);
  -moz-box-shadow: 0px 10px 14px 0px rgba(69, 69, 69, 0.11);
  box-shadow: 0px 10px 14px 0px rgba(69, 69, 69, 0.11);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.main-section-1 div {
  align-self: center;
  justify-self: center;
  width: 35vw;
  color: #ba3331;
  animation: bounceInfinite 3s infinite;
  /* text-shadow: 2px 2px 2px rgba(69, 69, 69, 0.33),
    0px 0px 10px rgba(69, 69, 69, 0.85), 0px 0px 20px rgba(224, 224, 224, 0.02),
    0px 0px 20px rgba(224, 224, 224, 0.02); */
}

@keyframes bounceInfinite {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.warning {
  background: red;
  font-size: 7vw;
}
</style>
