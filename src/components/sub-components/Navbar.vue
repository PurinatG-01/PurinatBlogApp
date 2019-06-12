<template>
  <nav class="nav-main">
    <div class="nav-main-element">
      <div class="nav-main-element-1">PURINAT</div>
      <hr>
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
      namePage: ["Home", "Gallery", "Contact"],
      linkPage: ["/home", "/gallery", "contact"]
    };
  },
  props: { selected: String }
};
</script>

<style>
.nav-main {
  width: 100vw;
  height: 60vh;
  background-image: url("../../assets/Header2.png");
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  box-shadow: inset 0px 30px 30px -10px #cbcbcb;
}

.nav-main-element {
  background-color: transparent;
  width: 72%;
  height: 20%;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-content: center;
}

.nav-main-element hr {
  border-top: 2px solid #ba3331;
  width: 55%;
  align-self: center;
  margin: auto 10px;
}

.nav-main-element-1 {
  font-family: "Overpass Mono", monospace;
  color: #ba3331;
  letter-spacing: 0.8vw;
  font-size: 20px;
  width: 15%;
  justify-self: center;
  align-self: center;
  text-align: center;
  font-weight: bold;
}
.nav-main-element-2 {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 10px;
}

.nav-button {
  color: #ba3331;
  font-family: "Overpass Mono", monospace;
  font-weight: 100;
  background: transparent;
  width: 33%;
  margin: auto 10px;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  font-size: 15px;
  outline: none;
  height: 41px;
  width: 122px;
}
.nav-button:hover {
  background: #ba3331;
  color: #fafafa;
  border: 2px solid #ba3331;
}

.selected-button {
  border: 2px solid #ba3331;
}
</style>
