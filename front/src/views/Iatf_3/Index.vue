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
        <v-card class="mx-auto">
          <v-toolbar
            class="pl-6 my-1"
            color="teal"
            elevation="0"
            prominent
            shrink-on-scroll
            dark
          >
            <v-app-bar-title class="ma-6 text-h4 font-weight-black">
              3 IATF
              <p class="white--text caption">
                Subtítulo da 3 IATF
              </p>
            </v-app-bar-title>

            <v-spacer />

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>
        </v-card>
        <v-expansion-panels
          focusable
          v-model="panel"
        >
          <DadosTecnicosRebanho_1IATFVue @fechar="resetExpand" />

          <AquisicaoSemenProtocolo_1IATFVue @fechar="resetExpand" />

          <DadosTecnicosRebanho_2IATFVue @fechar="resetExpand" />

          <AquisicaoSemenProtocolo_2IATFVue @fechar="resetExpand" />

          <DadosTecnicosRebanho_3IATFVue @fechar="resetExpand" />

          <AquisicaoSemenProtocolo_3IATFVue @fechar="resetExpand" />
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
import DadosTecnicosRebanho_1IATFVue from "./DadosTecnicosRebanho_1IATF";
import DadosTecnicosRebanho_2IATFVue from "./DadosTecnicosRebanho_2IATF";
import DadosTecnicosRebanho_3IATFVue from "./DadosTecnicosRebanho_3IATF";
import AquisicaoSemenProtocolo_1IATFVue from "./AquisicaoSemenProtocolo_1IATF";
import AquisicaoSemenProtocolo_2IATFVue from "./AquisicaoSemenProtocolo_2IATF";
import AquisicaoSemenProtocolo_3IATFVue from "./AquisicaoSemenProtocolo_3IATF";
import ListaDadosVue from "./ListaDados.vue";
export default {
  name: "View3IATF",
  components: {
    DadosTecnicosRebanho_1IATFVue,
    DadosTecnicosRebanho_2IATFVue,
    DadosTecnicosRebanho_3IATFVue,
    AquisicaoSemenProtocolo_1IATFVue,
    AquisicaoSemenProtocolo_2IATFVue,
    AquisicaoSemenProtocolo_3IATFVue,
    ListaDadosVue,
  },
  data: () => ({
    panel: [],
    search: null,
    meta: null,
  }),

  computed: {
    currentRouteName() {
      console.log(this.$router);
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
