import Vue from "vue";
import Router from "vue-router";
import montaNataural from "./montaNaturalRouter";
import IATF_RT from "./IATFRouter";
import IATF_2_RT from "./IATF_2Router";
import IATF_3_RT from "./IATF_3Router";
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
      {
        name: "Dashboard",
        path: "/",
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
        name: "Simulações",
        path: "/simulacoes",
        component: () => import("@/views/Simulacoes/Simulacoes.vue"),
        meta: {
          breadCrumb: [
            {
              text: "Início",
              disabled: true,
              href: "/",
            },
            {
              text: "Simulações",
              disabled: true,
              href: "/simulacoes",
              icon: "mdi-database",
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
        name: "Sobre",
        path: "Sobre/sobre",
        component: () => import("@/views/Sobre/Sobre.vue"),
        meta: { permission: ["ADMIN", "TEC"] },
      },

      {
        name: "Ajuda",
        path: "Ajuda/ajuda",
        component: () => import("@/views/Ajuda/Ajuda.vue"),
        meta: {
          breadCrumb: [
            {
              text: "Ajuda",
              disabled: true,
              href: "/ajuda",
              icon: "mdi-help",
            },
          ],
          permission: ["ADMIN", "TEC"],
        },
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

//Rotas da IATF + RT
IATF_RT.forEach((element) => {
  routes[1].children.push(element);
});

//Rotas da 2 IATF + RT
IATF_2_RT.forEach((element) => {
  routes[1].children.push(element);
});

//Rotas da 3 IATF + RT
IATF_3_RT.forEach((element) => {
  routes[1].children.push(element);
});


console.log(routes)

export default routes;
