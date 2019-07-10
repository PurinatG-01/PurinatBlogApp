<template>
  <transition name="fade">
    <div class="home-main">
      <div class="nav-layer">
        <Navbar selected="1"/>
      </div>
      <div class="main-layer">
        <div class="main-section-1">
          <div class="center-card">
            <ProfileCard/>
          </div>
        </div>
        <div class="main-section-2">
          <div class="tester" data-aos="fade-up" data-aos-anchor-placement="top-bottom"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Navbar from "./sub-components/Navbar.vue";
import ProfileCard from "./sub-components/ProfileCard.vue";

export default {
  components: { Navbar, ProfileCard }
};
</script>

<style scoped>
.home-main,
.main-layer {
  /* background: #202020; */
  width: 100vw;
  height: 4718px;
  font-family: "Overpass Mono", monospace;
  font-weight: 100;
  background: rgb(35, 35, 35);
  background: linear-gradient(
    135deg,
    #202020 0%,
    rgba(37, 41, 56, 1) 34%,
    rgba(95, 101, 124, 1) 67%,
    rgba(226, 226, 226, 1) 100%
  );
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: bounceInfinite 3s ease-in-out infinite;
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

.center-card {
  width: 72%;
  margin-top: 50px;
  height: 60%;
}
/* safasf */

.tester {
  width: 150px;
  height: 100px;
  background: #f2f2f2;
  margin: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
