import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Error from "@/views/Error";
import About from "@/views/About";

Vue.use(Router); // vue usa los rutas progresivamente

export default new Router({
  mode: "history", // history mode de html

  // cada ruta es un objeto
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/about",
      name: "about",
      component: About
    },

    {
      path: "*", // en caso url no exista
      name: "error",
      component: Error
    }
  ]
});
