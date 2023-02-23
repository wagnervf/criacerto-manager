import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./router";
//import NProgress from "nprogress";

import LoginService from "../services/LoginService";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let user = LoginService.getUserStorage();
  const permissionsPage = to.meta.permission;

  console.log(to);
  console.log(user);

  // Páginas públicas
  if (permissionsPage.includes("PUBLIC")) {
    console.log("Apenas PUBLIC");
    next();
  }

  // Não está logado, vá para login
  if (to.name !== "login" && !user.logado && !permissionsPage.includes("PUBLIC")) {
    next({ name: "Dashboard" });
    console.log("NÃO LOGADO");
  }

  // Apenas ADMIN
  if (permissionsPage.includes("ADMIN") && user.admin) {
    console.log("apenas páginas admin");
    next();
  }

  // Permissão padrão e estou logado
  if (permissionsPage.includes("TEC") && user.logado) {
    console.log("técnico");
    next();
  }
});

export default router;
