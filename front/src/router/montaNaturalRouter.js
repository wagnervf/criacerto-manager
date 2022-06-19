export default [
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
          text: "Simulações",
          disabled: false,
          href: "/simulacoes",
          icon: "mdi-database",
        },
        {
          text: "Monta Natural",
          to: { name: "" },
          disabled: false,
        },
      ],
      permission: ["ADMIN", "TEC"],
    },
  },
  {
    name: "Monta Natural Dados Basicos",
    path: "montanatural/dadosbasicos",
    component: () => import("@/views/MontaNatural/DadosBasicos.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "Monta Natural",
          to: { name: "" },
          disabled: false,
          href: "index",
        },
        {
          text: "Dados Básicos",
          to: { name: "" },
          disabled: false,
        },
      ],
      permission: ["ADMIN", "TEC"],
    },
  },
  {
    name: "Monta Natural Dados Tecnicos Rebanho",
    path: "montanatural/dadostecnicosrebanho",
    component: () => import("@/views/MontaNatural/DadosTecnicosRebanho.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "Monta Natural",
          to: { name: "" },
          disabled: false,
          href: "index",
        },
        {
          text: "Dados Tecnicos Rebanho",
          to: { name: "" },
          disabled: false,
        },
      ],
      permission: ["ADMIN", "TEC"],
    },
  },
  {
    name: "Monta Natural Aquisicao de Touros",
    path: "montanatural/aquisicaotouros",
    component: () => import("@/views/MontaNatural/AquisicaoTouros.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "Monta Natural",
          to: { name: "" },
          disabled: false,
          href: "index",
        },
        {
          text: "Dados Aquisicao de Touros",
          to: { name: "" },
          disabled: false,
        },
      ],
      permission: ["ADMIN", "TEC"],
    },
  },
  {
    name: "Monta Natural Manutecao de Touros",
    path: "montanatural/manutencaotouros",
    component: () => import("@/views/MontaNatural/ManutencaoTouros.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "Monta Natural",
          to: { name: "" },
          disabled: false,
          href: "index",
        },
        {
          text: "Dados Manutecao de Touros",
          to: { name: "" },
          disabled: false,
        },
      ],
      permission: ["ADMIN", "TEC"],
    },
  },
];
