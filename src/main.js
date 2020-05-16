import jquery from "jquery";

import "bootstrap-sass/assets/stylesheets/_bootstrap.scss";

import Vue from "vue";
import App from "./App.vue";

window.$ = window.jQuery = jquery;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
