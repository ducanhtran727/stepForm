import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formGroup: {
      email: "",
      fullName: "",
      number: "",
      company: "",
      info: "",
      statusCheck:null,
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
