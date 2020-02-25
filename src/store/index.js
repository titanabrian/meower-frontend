import Vue from "vue";
import Vuex from "vuex";

import message from "./message"
import user from "./user"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    message,
    user
  }
});
