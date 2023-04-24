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

  // Páginas públicas
  if (permissionsPage.includes("PUBLIC")) {
    return next();
  }

  if (!permissionsPage.includes("PUBLIC")) {
    if (checkTokenExpired(user) == null || checkUserNotEnabledManager(user)) {
      LoginService.logout();
      return next({ name: "login" });
    }
  }

  // Não está logado, vá para login
  if (to.name !== "login" && !user.logado && !permissionsPage.includes("PUBLIC")) {
    return next({ name: "login" });
  }

  // Apenas ADMIN
  if (permissionsPage.includes("ADMIN") && user.admin) {
    return next();
  }

  // Permissão padrão e estou logado
  if (permissionsPage.includes("TEC") && user.logado) {
    return next();
  }
});

function checkUserNotEnabledManager(user) {
  return typeof user.manager == undefined || user.manager == false;
}

// Verifica se token está expirado
function checkTokenExpired(user) {
  const now = new Date();

  if (!user) return null;

  if (now.getTime() > user.dateExpired) {
    LoginService.logout();
    return null;
  } else {
    return true;
  }
}

export default router;
