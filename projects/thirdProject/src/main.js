import Vue from "vue";

import App from "./App.vue";
import ServerStatus from "./components/server/ServerStatus.vue";

/* Possible solution using bus instead of passing events down
export const serverBus = new Vue({}); */

Vue.component("server-status", ServerStatus);

new Vue({
  el: "#app",
  render: h => h(App)
});
