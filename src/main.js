import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './index.scss';
import { ValidationProvider ,extend } from 'vee-validate';
import { ValidationObserver } from 'vee-validate';
import { required } from 'vee-validate/dist/rules'
Vue.config.productionTip = false;
extend('required',{
  ...required,
  message:'input required',
})
Vue.component('ValidationProvider',ValidationProvider)
Vue.component('ValidationObserver',ValidationObserver)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
