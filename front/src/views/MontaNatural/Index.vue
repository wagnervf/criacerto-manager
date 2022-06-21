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
      <pre>{{ panel }}</pre>
    </v-row>
  </v-container>
</template>

<script>
// import VueJwtDecode from "vue-jwt-decode";
import DadosTecnicosRebanhoVue from "./DadosTecnicosRebanho";
import AquisicaoTourosVue from "./AquisicaoTouros";
import ManutecaoTourosVue from "./ManutencaoTouros";

export default {
  name: "ViewMontaNatural",
  components: {
    DadosTecnicosRebanhoVue,
    AquisicaoTourosVue,
    ManutecaoTourosVue,
  },
  data: () => ({
    panel: [0],
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

  created() {
    this.getUser();
    console.log(this.$route.name);
  },

  methods: {
    getUser() {
      //  let token = localStorage.getItem("jwt");
      //  let tokenDecoded = VueJwtDecode.decode(token);
      // this.user = tokenDecoded;
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
