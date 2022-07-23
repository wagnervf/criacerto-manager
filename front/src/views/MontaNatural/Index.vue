<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col
        class="px-1 py-0"
        cols="12"
        justify-center
        flex
      >
        <v-card class="mx-auto text-wrap">
          <v-toolbar
            class="pl-6 my-1"
            color="teal"
            elevation="0"
            prominent
            shrink-on-scroll
            dark
          >
            <h5 class="ma-6 text-h4 font-weight-black text-wrap">
              Monta Natural
              <p class="white--text caption">
                Subtítulo da Monta Natural
              </p>
            </h5>

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
          <DadosTecnicosRebanhoVue @fechar="resetExpand" />

          <AquisicaoTourosVue @fechar="resetExpand" />

          <ManutecaoTourosVue @fechar="resetExpand" />
        </v-expansion-panels>
      </v-col>

      <v-col
        class="px-1 py-4 mt-4"
        cols="12"
        justify-center
      >
        <ListaDadosVue />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DadosTecnicosRebanhoVue from "./DadosTecnicosRebanho";
import AquisicaoTourosVue from "./AquisicaoTouros";
import ManutecaoTourosVue from "./ManutencaoTouros";
import ListaDadosVue from "./ListaDados.vue";

export default {
  name: "ViewMontaNatural",
  components: {
    DadosTecnicosRebanhoVue,
    AquisicaoTourosVue,
    ManutecaoTourosVue,
    ListaDadosVue,
  },
  data: () => ({
    panel: [],
    search: null,
    meta: null,
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

  methods: {
    logOutUser() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
    resetExpand() {
      this.panel = [];
    },
  },
};
</script>
