import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

import router from "@/route"; // importan las rutas
import {dollarFilter,percentFilter} from '@/filters';

// funcionde filtros de vue
Vue.filter('dollar',dollarFilter)

Vue.filter('percent',percentFilter)


Vue.config.productionTip = false;

new Vue({
  router: router, // declara el router
  //nombre de propiedad es igual a la variable se puede escribir una sola vez
  // router,
  render: h => h(App)
}).$mount("#app");
