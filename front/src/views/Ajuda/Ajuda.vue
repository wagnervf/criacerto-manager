<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col
        class="px-1 py-0"
        cols="12"
        justify-center
        flex
      >
        <titleToolbarListTealVue
          :title="title"
          :subtitle="subtitle"
        />

        <headerListVue
          :title="titleD"
          :icon="iconD"
          :subtitle="subtitleD"
          :icon-expand="icon"
          :rota="dash"
        />

        <headerListVue
          :title="titleParametros"
          :icon="iconParametros"
          :subtitle="subtitleParametros"
          :icon-expand="icon"
          :rota="dashParametros"
        />

        <headerListVue
          :title="titleDocApi"
          :icon="iconDocApi"
          :subtitle="subtitleDocApi"
          :icon-expand="icon"
          :rota="dashDocApi"
        />

        <headerListVue
          :title="titleDocUser"
          :icon="iconDocUser"
          :subtitle="subtitleDocUser"
          :icon-expand="icon"
          :rota="dashDocUser"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import titleToolbarListTealVue from "../../components/titleToolbarListTeal.vue";

import headerListVue from "../../components/headerList.vue";

export default {
  name: "AjudaIndex",
  components: {
    titleToolbarListTealVue,
    headerListVue,
  },
  data() {
    return {
      panel: [0],
      subtitle: "Tela de ajuda do Cria Certo Manager",
      title: "Ajuda",

      titleD: "Dashboard",
      iconD: "mdi-chart-box",
      subtitleD: "Ajuda da Tela de Dashboard",
      dash: "AjudaDashboard",

      titleParametros: "Parâmetros",
      iconParametros: "mdi-database",
      subtitleParametros: "Ajuda da Tela de Parâmetros",
      dashParametros: "AjudaParametros",

      titleDocApi: "Documentação da API",
      iconDocApi: "mdi-routes",
      subtitleDocApi: "Ajuda da Tela de Documentação da API",
      dashDocApi: "AjudaDocumentacaoApi",

      titleDocUser: "Gerenciar Usuários",
      iconDocUser: "mdi-account-cog",
      subtitleDocUser: "Ajuda da Tela de Gerenciar Usuários",
      dashDocUser: "AjudaGerenciarUsuarios",
      icon: "mdi-chevron-right",
    };
  },

  methods: {
    resetExpand() {
      this.panel = [];
    },
  },
};
</script>
