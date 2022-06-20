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
              IATF + RT
              <p class="white--text caption">
                Subtítulo da IATF RT
              </p>
            </v-app-bar-title>

            <v-spacer />

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>
        </v-card>
        <v-expansion-panels focusable>
          <DadosTecnicosRebanhoVue />

          <AquisicaoSemenProtocoloVue />

          <RepasseTouroVue />

          <AquisicaoTourosVue />

          <ManutencaoTouroVue />
        </v-expansion-panels>
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

export default {
  name: "ViewIATF",
  components: {
    DadosTecnicosRebanhoVue,
    AquisicaoSemenProtocoloVue,
    RepasseTouroVue,
    AquisicaoTourosVue,
    ManutencaoTouroVue,
  },
  data: () => ({
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
  },
};
</script>
