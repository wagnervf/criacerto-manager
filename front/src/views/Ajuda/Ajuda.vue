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

        <v-expansion-panels
          focusable
          v-model="panel"
        >
          <dashboardAjuda @fechar="resetExpand" />
          <parametrosAjuda @fechar="resetExpand" />

          <documentacaoApi @fechar="resetExpand" />
          <teclasAtalho @fechar="resetExpand" />
        </v-expansion-panels>
      </v-col>

      <!-- <v-col
        class="px-1 py-4 mt-4"
        cols="12"
        justify-center
      >
        <ListaDadosVue />
      </v-col> -->
    </v-row>
  </v-container>
</template>
<script>
import teclasAtalho from "./teclasAtalhoAjuda.vue";
import documentacaoApi from "./documentacaoApiAjuda.vue";
import dashboardAjuda from "./dashboardAjuda.vue";
import parametrosAjuda from "./parametrosAjuda.vue";
import titleToolbarListTealVue from "../../components/titleToolbarListTeal.vue";
export default {
  name: "AjudaIndex",
  components: {
    teclasAtalho,
    documentacaoApi,
    titleToolbarListTealVue,
    dashboardAjuda,
    parametrosAjuda,
  },
  data() {
    return {
      panel: [],
      subtitle: "Tela de ajuda do Cria Certo Manager",
      title: "Ajuda",
    };
  },

  methods: {
    resetExpand() {
      this.panel = [];
    },
  },
};
</script>
