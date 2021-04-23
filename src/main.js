import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './index.scss';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate/dist/vee-validate.full.esm';
Vue.component('ValidationProvider',ValidationProvider)
Vue.component('ValidationObserver',ValidationObserver)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
