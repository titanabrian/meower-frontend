/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import axios from "./config/axios";
import notifications from "vue-notification";
import cookies from "vue-cookies";

Vue.use(Buefy);
Vue.use(notifications);
Vue.use(cookies);

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
