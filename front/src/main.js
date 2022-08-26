import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import vuetify from "./plugins/vuetify";
import Notifications from "vue-notification";
import VueBlobJsonCsv from "vue-blob-json-csv";

Vue.use(VueBlobJsonCsv);

Vue.use(Notifications);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
