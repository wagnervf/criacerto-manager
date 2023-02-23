import Vue from "vue";
import Router from "vue-router";
import Rotas from "./rotasDoSistema";

Vue.use(Router);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login/Login.vue"),
    meta: {
      permission: ["PUBLIC"],
    },
  },
  {
    path: "/",
    redirect: "/",
    component: () => import("@/layouts/Layout"),
    meta: {
      permission: ["PUBLIC"],
    },

    children: [],
  },
];

// Rotas Importadas
Rotas.forEach((element) => {
  routes[1].children.push(element);
});

export default routes;
