export default [
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
      permission: ["PUBLIC"],
    },
  },

  {
    name: "Todas as Simulações",
    path: "/simulacoes/index",
    component: () => import("@/views/Simulacoes/index.vue"),
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
          href: "/simulacoes/index",
          icon: "mdi-list-box-outline",
        },
      ],
      permission: ["ADMIN", "TEC"],
    },
  },

  {
    name: "Parametros",
    path: "/parametros",
    component: () => import("@/views/Parametros/Index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "Parâmetros",
          disabled: true,
          href: "/parametros",
          icon: "mdi-list-box-outline",
        },
      ],
      permission: ["ADMIN", "TEC"],
    },
  },
  {
    name: "Gerenciar Parâmetros",
    path: "/gerenciarparametros",
    component: () => import("@/views/GerenciarParametros/Index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "Gerenciar Parâmetros",
          disabled: true,
          href: "/index",
          icon: "mdi-database",
        },
      ],
      permission: ["ADMIN"],
    },
  },
  {
    name: "Dados Basicos",
    path: "gerenciarparametros/dadosbasicos",
    component: () => import("@/views/GerenciarParametros/DadosBasicos.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "Gerenciar Parâmetros",
          to: { name: "" },
          disabled: false,
          href: "/gerenciarparametros",
        },
        {
          text: "Dados Básicos das Simulações",
          to: { name: "" },
          disabled: false,
        },
      ],
      permission: ["ADMIN"],
    },
  },

  {
    name: "Monta Natural",
    path: "montanatural/index",
    component: () => import("@/views/MontaNatural/Index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "Gerenciar Parâmetros",
          disabled: false,
          href: "/gerenciarparametros",
          icon: "mdi-database",
        },
        {
          text: "Monta Natural",
          to: { name: "" },
          disabled: false,
        },
      ],
      permission: ["ADMIN"],
    },
  },

  {
    name: "IATF + RT",
    path: "iatf/index",
    component: () => import("@/views/Iatf/Index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "Gerenciar Parâmetros",
          disabled: false,
          href: "/gerenciarparametros",
          icon: "mdi-database",
        },
        {
          text: "IATF + RT",
          to: { name: "" },
          disabled: false,
        },
      ],
      permission: ["ADMIN"],
    },
  },

  {
    name: "2 IATF + RT",
    path: "iatf2/index",
    component: () => import("@/views/Iatf_2/Index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "Gerenciar Parâmetros",
          disabled: false,
          href: "/gerenciarparametros",
          icon: "mdi-database",
        },
        {
          text: "2 IATF + RT",
          to: { name: "" },
          disabled: false,
        },
      ],
      permission: ["ADMIN"],
    },
  },

  {
    name: "3 IATF + RT",
    path: "iatf3/index",
    component: () => import("@/views/Iatf_3/Index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "Gerenciar Parâmetros",
          disabled: false,
          href: "/gerenciarparametros",
          icon: "mdi-database",
        },
        {
          text: "3 IATF + RT",
          to: { name: "" },
          disabled: false,
        },
      ],
      permission: ["ADMIN"],
    },
  },

  {
    name: "Gerenciar Usuarios",
    path: "usuarios/gerenciar",
    component: () => import("@/views/Usuarios/GerenciarUsuarios.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "Gerenciar Usuários",
          to: { name: "" },
          disabled: false,
          href: "index",
        },
      ],
      permission: ["ADMIN"],
    },
  },

  // {
  //   name: "Usuarios Meu Perfil",
  //   path: "usuarios/perfil",
  //   component: () => import("@/views/Usuarios/Perfil.vue"),
  //   meta: {
  //     breadCrumb: [
  //       {
  //         text: "Início",
  //         disabled: true,
  //         href: "/",
  //       },
  //       {
  //         text: "Meu Perfil",
  //         href: "/usuarios/perfil",
  //         disabled: false,
  //       },
  //     ],
  //     permission: ["ADMIN", "TEC"],
  //   },
  // },

  {
    name: "Ajuda",
    path: "Ajuda/ajuda",
    component: () => import("@/views/Ajuda/Ajuda.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "Ajuda",
          disabled: false,
          href: "/ajuda",
          icon: "mdi-help",
        },
      ],
      permission: ["ADMIN", "TEC"],
    },
  },

  {
    name: "AjudaDashboard",
    path: "Ajuda/dashboard",
    component: () => import("@/views/Ajuda/dashboardAjuda.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "Ajuda",
          disabled: false,
          href: "/ajuda",
          icon: "mdi-help",
        },
        {
          text: "Dashboard",
          disabled: false,
          href: "/dashboardAjuda",
          icon: "mdi-help",
        },
      ],
      permission: ["ADMIN", "TEC"],
    },
  },

  {
    name: "AjudaParametros",
    path: "Ajuda/parametros",
    component: () => import("@/views/Ajuda/parametrosAjuda.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "Ajuda",
          disabled: false,
          href: "/ajuda",
          icon: "mdi-help",
        },
        {
          text: "Parâmetros",
          disabled: false,
          href: "/parametrosAjuda",
          icon: "mdi-help",
        },
      ],
      permission: ["ADMIN", "TEC"],
    },
  },

  {
    name: "AjudaDocumentacaoApi",
    path: "Ajuda/documentacao",
    component: () => import("@/views/Ajuda/documentacaoApiAjuda.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "Ajuda",
          disabled: false,
          href: "/ajuda",
          icon: "mdi-help",
        },
        {
          text: "Parâmetros",
          disabled: false,
          href: "/parametrosAjuda",
          icon: "mdi-help",
        },
      ],
      permission: ["ADMIN", "TEC"],
    },
  },

  {
    name: "AjudaGerenciarUsuarios",
    path: "Ajuda/usuarios",
    component: () => import("@/views/Ajuda/gerenciarUsuariosAjuda.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "Ajuda",
          disabled: false,
          href: "/ajuda",
          icon: "mdi-help",
        },
        {
          text: "Parâmetros",
          disabled: false,
          href: "/usuarios",
          icon: "mdi-help",
        },
      ],
      permission: ["ADMIN", "TEC"],
    },
  },

  // {
  //   name: "Documentacao",
  //   path: "Documentacao",
  //   component: () => import("@/views/Documentacao/Index.vue"),
  //   meta: {
  //     breadCrumb: [
  //       {
  //         text: "Início",
  //         disabled: true,
  //         href: "/",
  //       },
  //       {
  //         text: "Documentação",
  //         href: "/documentacao",
  //         disabled: false,
  //       },
  //     ],
  //     permission: ["ADMIN"],
  //   },
  // },

  {
    name: "Configuracoes",
    path: "Configuracoes/configuracoes",
    component: () => import("@/views/Configuracoes/Configuracoes.vue"),
    meta: { permission: ["ADMIN", "TEC"] },
  },

  {
    name: "Sobre",
    path: "Sobre/sobre",
    component: () => import("@/views/Sobre/Sobre.vue"),
    meta: { permission: ["ADMIN", "TEC"] },
  },

  {
    name: "Meu Perfil",
    path: "Usuarios/perfil",
    component: () => import("@/views/Usuarios/Perfil.vue"),
    meta: { permission: ["ADMIN", "TEC"] },
  },
];

// {
//   "id": 5,
//   "title": "Documentação",
//   "icon": "mdi-text-box",
//   "to": "/documentacao"
//     },
