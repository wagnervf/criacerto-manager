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
              Monta Natural
              <p class="white--text caption">
                Subtítulo da Monta Natural
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
          <DadosTecnicosRebanhoVue @fechar="resetExpand" />

          <AquisicaoTourosVue @fechar="resetExpand" />

          <ManutecaoTourosVue @fechar="resetExpand" />
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
import { mapState } from "vuex";
import DadosTecnicosRebanhoVue from "./DadosTecnicosRebanho";
import AquisicaoTourosVue from "./AquisicaoTouros";
import ManutecaoTourosVue from "./ManutencaoTouros";
import MontaNaturaServices from "@/services/MontaNaturaServices";
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
    panel: 2,
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

  mounted() {
    this.getDadosMontaNatural();
  },

  methods: {
    ...mapState(["SetDataMontaNatural"]),

    async getDadosMontaNatural() {
      try {
        const response = await MontaNaturaServices.getMontaNaturalApi();
        if (response.status == 200) {
          const result = response.data[0];
          this.$store.commit("SET_DATA_MONTANATURAL", result);
        } else {
          return this.$notify({
            group: "foo",
            type: "error",
            title: "Carregar Dados",
            text: "Erro ao carregar o parâmetros do Banco de Dados.",
          });
        }
      } catch (error) {
        return this.$notify({
          group: "foo",
          type: "error",
          title: "Carregar Dados",
          text: error,
        });
      }
    },
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
