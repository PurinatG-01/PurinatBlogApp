import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import IndexPage from "./components/Index";
import HomePage from "./components/Home";
import ProfilePage from "./components/Profile";
import GalleryPage from "./components/Gallery";

// News Link
import Game1 from "./components/utilities/game-1";

import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: IndexPage },
  { path: "/home", component: HomePage },
  { path: "/profile", component: ProfilePage },
  { path: "/gallery", component: GalleryPage },
  { path: "/game-1", component: Game1}

];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
