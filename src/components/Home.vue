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
          <h1>NEWS</h1>
          <p>Some cards waiting for adding some stories</p>
          <div>
            <div class="news-card">
              <div class="card game-card"  v-on:click='$router.push("/game-1")' ></div>
              <p>Simple Javascript game</p>
            </div>
            <div class="news-card">
              <p>There will be something in here</p>
              <div class="card"></div>
            </div>
             <div class="news-card">
              <div class="card"></div>
              <p>There will be something in here</p>
            </div>
            <div class="news-card">
              <p>There will be something in here</p>
              <div class="card"></div>
            </div>
          </div>
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
  height: 3500px;
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
.main-layer {
  background: transparent;
}

.home-main {
  overflow: scroll;
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

.main-section-2 {
  margin: auto;
  margin-top: 200px;
  margin-bottom: 200px;
  /* background: #f2f2f2; */
  color: #f5f5f5;
  /* background: aquamarine; */
  width: 60%;
}

.main-section-2 h1,
.main-section-2 p {
  text-align: center;
}

.news-card {
  margin-top: 200px;
  /* background: transparent; */
  width: 100%;
  height: 400px;
  display: flex;
}

.news-card p {
  color: #f5f5f5;
  /* background: red; */
  margin: auto;
  justify-self: center;
  align-self: center;
  padding: 30px;
}

.card {
  height: 100%;
  width: 300px;
  border: solid #f5f5f5 10px;
  border-radius: 10px;
  background: transparent;
  -webkit-box-shadow: 0px 0px 62px 0px rgba(245, 245, 245, 1),
    inset 0px 0px 62px 0px rgba(245, 245, 245, 1);
  -moz-box-shadow: 0px 0px 62px 0px rgba(245, 245, 245, 1),
    inset 0px 0px 62px 0px rgba(245, 245, 245, 1);
  box-shadow: 0px 0px 62px 0px rgba(245, 245, 245, 1),
    inset 0px 0px 62px 0px rgba(245, 245, 245, 1);
}

.game-card{
  background: #1cb774;

  transition: all 0.2s ease-in-out;
}

.game-card:hover{
  transform: scale(1.02);
}
</style>
