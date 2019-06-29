<template>
  <nav class="nav-main">
    <div class="nav-main-element">
      <div class="nav-main-element-1" @click="$router.push('/')">
        <img src="../../assets/light_logo.png">
        <div>PURINAT</div>
      </div>
      <div class="hr-nav"/>
      <div class="nav-main-element-2">
        <button
          v-for="n in 3"
          :class="{'nav-button':true,'selected-button':(selected == n)}"
          :key="n"
          @click="$router.push(linkPage[n-1])"
        >{{namePage[n-1]}}</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      namePage: ["Home", "Profile", "Gallery"],
      linkPage: ["/home", "/profile", "/gallery"]
    };
  },
  props: { selected: String }
};
</script>

<style>
.nav-main {
  width: 100vw;
  height: 60vh;
  /* background-image: url("../../assets/Header2.png"); */
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* position: fixed; */
  /* box-shadow: inset 0px 30px 30px -10px #cbcbcb; */
}

.nav-main-element {
  background-color: transparent;
  width: 80%;
  height: 20%;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-content: center;
}

.nav-main-element .hr-nav {
  /* border-top: 2px solid #ba3331; */
  padding: 0;
  background: transparent;
  width: 50%;
  align-self: center;
  margin: auto 10px;
}

.nav-main-element-1 {
  font-family: "Overpass Mono", monospace;
  color: #f5f5f5;
  letter-spacing: 0.8vw;
  font-size: 1em;
  width: 15%;
  justify-self: center;
  align-self: center;
  text-align: center;
  font-weight: 400;
  display: flex;
  justify-items: center;
  align-items: center;
}

.nav-main-element-2 {
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 10px;
  /* background: #f5f5f5; */
}

.nav-button {
  color: #f5f5f5;
  font-family: "Overpass Mono", monospace;
  font-weight: 100;
  background: transparent;
  width: 33%;
  margin: auto 10px;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  font-size: 0.7em;
  outline: none;
  height: 41px;
}
.nav-button:hover {
  background: #f5f5f5;
  color: #202020;
  border: 2px solid #f5f5f5;
}

.selected-button {
  border: 2px solid #f5f5f5;
}
</style>
