import Vue from "vue";
import Router from "vue-router";
import montaNataural from "./montaNaturalRouter";
console.log(montaNataural);

Vue.use(Router);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login/Login.vue"),
  },
  {
    path: "/",
    redirect: "/",
    component: () => import("@/layouts/Layout"),

    // montaNataural.forEach(element => {
    //   element
    // }),

    children: [
      // Components
      {
        name: "Home",
        path: "/",
        component: () => import("@/views/Home.vue"),
        meta: {
          breadCrumb: [
            {
              text: "Início",
              disabled: true,
              href: "/",
              icon: "mdi-home",
            },
          ],
          permission: ["ADMIN", "TEC"],
        },
      },
      {
        name: "Dashboard",
        path: "/dashboard",
        component: () => import("@/views/Dashboard/Dashboard.vue"),
        meta: {
          breadCrumb: [
            {
              text: "Dashboard",
              disabled: true,
              href: "/dashboard",
              icon: "mdi-chart-box",
            },
          ],
          permission: ["ADMIN", "TEC"],
        },
      },

      {
        name: "Lista de Usuarios",
        path: "usuarios/listausuarios",
        component: () => import("@/views/Usuarios/ListaUsuarios.vue"),
        meta: {
          breadCrumb: [
            {
              text: "Início",
              disabled: true,
              href: "/",
            },
            {
              text: "Lista de Usuarios",
              to: { name: "" },
              disabled: false,
              href: "index",
            },
          ],
          permission: ["ADMIN"],
        },
      },

      {
        name: "Usuarios Meu Perfil",
        path: "usuarios/perfil",
        component: () => import("@/views/Usuarios/Perfil.vue"),
        meta: {
          breadCrumb: [
            {
              text: "Início",
              disabled: true,
              href: "/",
            },
            {
              text: "Lista de Usuarios",
              to: { name: "" },
              disabled: false,
              href: "listausuarios",
            },
            {
              text: "Meu Perfil",
              to: { name: "" },
              disabled: false,
            },
          ],
          permission: ["ADMIN", "TEC"],
        },
      },

      {
        name: "Novo Usuario",
        path: "usuarios/Add",
        component: () => import("@/views/Usuarios/Add.vue"),
        meta: {
          breadCrumb: [
            {
              text: "Início",
              disabled: true,
              href: "/",
            },
            {
              text: "Lista de Usuarios",
              to: { name: "" },
              disabled: false,
              href: "listausuarios",
            },
            {
              text: "Novo Usuario",
              to: { name: "" },
              disabled: false,
            },
          ],
          permission: ["ADMIN", "TEC"],
        },
      },

      {
        name: "TableSimple",
        path: "Parametros/parametros",
        component: () => import("@/views/Parametros/Parametros.vue"),
        meta: { permission: ["ADMIN", "TEC"] },
      },
      {
        name: "Sobre",
        path: "Sobre/sobre",
        component: () => import("@/views/Sobre/Sobre.vue"),
        meta: { permission: ["ADMIN", "TEC"] },
      },

      {
        name: "Configuracoes",
        path: "Configuracoes/configuracoes",
        component: () => import("@/views/Configuracoes/Configuracoes.vue"),
        meta: { permission: ["ADMIN", "TEC"] },
      },
    ],
  },
];

//Rotas da Monta Ntaural
montaNataural.forEach((element) => {
  routes[1].children.push(element);
});

export default routes;
