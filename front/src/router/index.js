import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./router";

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

  //console.log(user);
  //console.log(permissionsPage);

  if (to.fullPath == "/dashboard") {
    return next({ name: "Dashboard" });
  }

  if (typeof permissionsPage == "undefined") {
    return next({ name: "login" });
  }

  //else {
  //console.log("else");

  //Checar token expirado +1 dia
  if (to.name !== "login") {
    if (checkTokenExpired(user) == null) return next({ name: "login" });
  }

  // Páginas públicas
  if (permissionsPage.includes("PUBLIC")) {
    return next();
  }

  // Não está logado, vá para login
  if (to.name !== "login" && !user.logado && !permissionsPage.includes("PUBLIC")) {
    return next({ name: "login" });
  }

  // Apenas ADMIN
  if (permissionsPage.includes("ADMIN") && user.admin) {
    return next();
  }

  //  if (permissionsPage.includes("ADMIN") && !user.admin) {
  //    return next({ name: "Dashboard" });
  //  }

  // Permissão padrão e estou logado
  if (permissionsPage.includes("TEC") && user.logado) {
    return next();
  }
  //}
});

// Verifica se token está expirado
function checkTokenExpired(user) {
  if (!user) {
    return null;
  }

  const now = new Date();

  if (now.getTime() > user.dateExpired) {
    LoginService.logout();
    return null;
  }

  return true;
}

export default router;
