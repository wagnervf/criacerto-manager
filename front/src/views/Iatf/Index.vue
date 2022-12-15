<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col
        class="px-1 py-0"
        cols="12"
        lg="12"
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
          <DadosTecnicosRebanhoVue @fechar="resetExpand" />

          <AquisicaoSemenProtocoloVue @fechar="resetExpand" />

          <RepasseTouroVue @fechar="resetExpand" />

          <AquisicaoTourosVue @fechar="resetExpand" />

          <ManutencaoTouroVue @fechar="resetExpand" />
        </v-expansion-panels>
      </v-col>
      <v-col
        class="px-1 py-4 mt-4"
        cols="12"
        lg="12"
        justify-center
        flex
      >
        <ListaDadosVue />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DadosTecnicosRebanhoVue from "./DadosTecnicosRebanho";
import AquisicaoSemenProtocoloVue from "./AquisicaoSemenProtocolo";
import RepasseTouroVue from "./RepasseTouro";
import AquisicaoTourosVue from "./AquisicaoTouro";
import ManutencaoTouroVue from "./ManutencaoTouro.vue";
import ListaDadosVue from "./ListaDados.vue";
import titleToolbarListTealVue from "../../components/titleToolbarListTeal.vue";

export default {
  name: "ViewIATFRT",
  components: {
    DadosTecnicosRebanhoVue,
    AquisicaoSemenProtocoloVue,
    RepasseTouroVue,
    AquisicaoTourosVue,
    ManutencaoTouroVue,
    ListaDadosVue,
    titleToolbarListTealVue,
  },
  data: () => ({
    panel: [],
    search: null,
    meta: null,
    subtitle: "Listagem dos parâmetros do IATF + RT",
    title: "IATF + RT",
  }),

  computed: {
    currentRouteName() {
      return this.$route.name;
    },

    breadCrumbs() {
      if (typeof this.$route.meta.breadCrumb === "function") {
        return this.$route.meta.breadCrumb.call(this, this.$route);
      }
      return this.$route.meta.breadCrumb;
    },
  },

  created() {},

  methods: {
    resetExpand() {
      this.panel = [];
    },
  },
};
</script>
