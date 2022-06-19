export default [
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
          text: "Simulações",
          disabled: false,
          href: "/simulacoes",
          icon: "mdi-database",
        },
        {
          text: "IATF + RT",
          to: { name: "" },
          disabled: false,
        },
      ],
      permission: ["ADMIN", "TEC"],
    },
  }, 

   {
    name: "IATF Dados Tecnicos Rebanho",
    path: "iatf/dadostecnicosrebanho",
    component: () => import("@/views/Iatf/DadosTecnicosRebanho.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "IATF + RT",
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
    name: "IATF Aquisição de Sêmen e Protocolo",
    path: "/iatf/aquisicaosemenprotocolo",
    component: () => import("@/views/Iatf/AquisicaoSemenProtocolo.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "IATF + RT",
          to: { name: "" },
          disabled: false,
          href: "index",
        },
        {
          text: "Aquisição de Sêmen e Protocolo",
          to: { name: "" },
          disabled: false,
        },
      ],
      permission: ["ADMIN", "TEC"],
    },
  },


  {
    name: "IATF Repasse com Touro",
    path: "/iatf/repassetouro",
    component: () => import("@/views/Iatf/RepasseTouro.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "IATF + RT",
          to: { name: "" },
          disabled: false,
          href: "index",
        },
        {
          text: "Repasse com Touro",
          to: { name: "" },
          disabled: false,
        },
      ],
      permission: ["ADMIN", "TEC"],
    },
  },


  {
    name: "IATF Aquisição do Touro",
    path: "/iatf/aquisicaotouro",
    component: () => import("@/views/Iatf/AquisicaoTouro.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "IATF + RT",
          to: { name: "" },
          disabled: false,
          href: "index",
        },
        {
          text: "Aquisição do Touro",
          to: { name: "" },
          disabled: false,
        },
      ],
      permission: ["ADMIN", "TEC"],
    },
  },

  {
    name: "IATF Manutenção Anual do Touro",
    path: "/iatf/manutencaotouro",
    component: () => import("@/views/Iatf/ManutencaoTouro.vue"),
    meta: {
      breadCrumb: [
        {
          text: "Início",
          disabled: true,
          href: "/",
        },
        {
          text: "IATF + RT",
          to: { name: "" },
          disabled: false,
          href: "index",
        },
        {
          text: "Manutenção Anual do Touro",
          to: { name: "" },
          disabled: false,
        },
      ],
      permission: ["ADMIN", "TEC"],
    },
  },



 
  
];
