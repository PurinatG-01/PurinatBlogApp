<template>
  <div id="app">
    <Index/>
  </div>
</template>

<script>
import Index from "./components/Index.vue";
export default {
  name: "app",
  components: { Index }
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
}
</style>