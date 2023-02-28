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

        <!-- <v-List-panels
          focusable
          multi-line
          multiple
          v-model="panel"
        >
          <dashboardAjuda @fechar="resetExpand" />

          <parametrosAjuda @fechar="resetExpand" />

          <documentacaoApi @fechar="resetExpand" />

          <teclasAtalho @fechar="resetExpand" /> 
        </v-expansion-panels> -->
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// import teclasAtalho from "./teclasAtalhoAjuda.vue";
// import documentacaoApi from "./documentacaoApiAjuda.vue";
// import dashboardAjuda from "./dashboardAjuda.vue";
// import parametrosAjuda from "./parametrosAjuda.vue";
import titleToolbarListTealVue from "../../components/titleToolbarListTeal.vue";

import headerListVue from "../../components/headerList.vue";

export default {
  name: "AjudaIndex",
  components: {
    //teclasAtalho,
    // documentacaoApi,
    titleToolbarListTealVue,
    //dashboardAjuda,
    // parametrosAjuda,
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
