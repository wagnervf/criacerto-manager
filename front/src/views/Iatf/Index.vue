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
        <v-toolbar
          class="pl-6 my-1"
          color="grey lighten-4"
          elevation="1"
          prominent
          shrink-on-scroll
          scroll-target="#scrolling-techniques"
        >
          <v-app-bar-title class="ma-6 pt-6 text-h5">
            IATF RT
            <p class="grey--text caption">
              Subtítulo da IATF RT
            </p>
          </v-app-bar-title>

          <v-spacer />

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>

        <v-expansion-panels focusable>
          <v-expansion-panel
            elevation="1"
            class="pa-0"
          >
            <v-expansion-panel-header class="pl-3">
              <v-list-item>
                <v-list-item-avatar
                  color="teal"
                  size="56"
                >
                  <v-icon color="white">
                    {{ dadosBasicosExpand.icon }}
                  </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="teal--text">
                    {{ dadosBasicosExpand.title }}
                  </v-list-item-title>

                  <v-list-item-subtitle class="text-wrap">
                    {{ dadosBasicosExpand.subtitle }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <DadosTecnicosRebanhoVue />
            </v-expansion-panel-content>
          </v-expansion-panel><!-- Dados Técnicos -->

          <v-expansion-panel>
            <v-expansion-panel-header class="pl-3">
              <v-list-item>
                <v-list-item-avatar
                  color="teal"
                  size="56"
                >
                  <v-icon color="white">
                    {{ aquisicaoSemenExpand.icon }}
                  </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="teal--text">
                    {{ aquisicaoSemenExpand.title }}
                  </v-list-item-title>

                  <v-list-item-subtitle class="text-wrap">
                    {{ aquisicaoSemenExpand.subtitle }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <AquisicaoSemenProtocoloVue />
            </v-expansion-panel-content>
          </v-expansion-panel><!-- Aquisição Sêmen -->

          <v-expansion-panel>
            <v-expansion-panel-header class="pl-3">
              <v-list-item>
                <v-list-item-avatar
                  color="teal"
                  size="56"
                >
                  <v-icon color="white">
                    {{ repasseTouroExpand.icon }}
                  </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="teal--text">
                    {{ repasseTouroExpand.title }}
                  </v-list-item-title>

                  <v-list-item-subtitle class="text-wrap">
                    {{ repasseTouroExpand.subtitle }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <RepasseTouroVue />
            </v-expansion-panel-content>
          </v-expansion-panel><!-- Repasse com Touro -->

          <v-expansion-panel>
            <v-expansion-panel-header class="pl-3">
              <v-list-item>
                <v-list-item-avatar
                  color="teal"
                  size="56"
                >
                  <v-icon color="white">
                    {{ aquisicaoTouroExpand.icon }}
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title class="teal--text">
                    {{ aquisicaoTouroExpand.title }}
                  </v-list-item-title>

                  <v-list-item-subtitle class="text-wrap">
                    {{ aquisicaoTouroExpand.subtitle }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <AquisicaoTourosVue />
            </v-expansion-panel-content>
          </v-expansion-panel><!-- Aquisição Touro -->

          <v-expansion-panel>
            <v-expansion-panel-header class="pl-3">
              <v-list-item>
                <v-list-item-avatar
                  color="teal"
                  size="56"
                >
                  <v-icon color="white">
                    {{ manutencaoTouro.icon }}
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title class="teal--text">
                    {{ manutencaoTouro.title }}
                  </v-list-item-title>

                  <v-list-item-subtitle class="text-wrap">
                    {{ manutencaoTouro.subtitle }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ManutencaoTouroVue />
            </v-expansion-panel-content>
          </v-expansion-panel><!-- Manutenção Touro -->
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
  name: "ViewIATFRT",
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
    dadosBasicosExpand: {
      title: "Dados Técnicos do Rebanho",
      icon: "mdi-file-cog",
      subtitle:
        "Nº de vacas a cobrir, Nº de Touros, Vida útil touro, Taxa de Prenhez, Preço Bezerro, Raças de Touro...",
    },
    aquisicaoSemenExpand: {
      title: "Aquisição de Sêmen e Protocolo",
      icon: "mdi-reproduction",
      subtitle:
        "Preço Dose Sêmen, DEP IATF, Custo do Protocolo, Custo Mão de Obra, Custo Material Consumo",
    },
    repasseTouroExpand: {
      title: "Repasse com Touro",
      icon: "mdi-cow-off",
      subtitle:
        "Nº de Touro, Vida Útil do Touro, Prenhez Repasse, Raça do Touro, Raça Touro Peso à Desmana da Fazenda",
    },

    aquisicaoTouroExpand: {
      title: "Aquisição do Touro",
      icon: "mdi-cow",
      subtitle:
        "Preço de Aquisição do Touro, Despensas da Compra, DEP no Peso à Desmama",
    },
    manutencaoTouro: {
      title: "Manutenção Anual do Touro",
      icon: "mdi-currency-brl",
      subtitle:
        "Exame Andrológico, Aluguel de Pasto, Sal Mineral, Rações, Produtos Veterinários, Juros Anuais, Valor de Venda do Touro de Descarte",
    },
  }),

  computed: {
    currentRouteName() {
      console.log(this.$router);
      return this.$route.name;
    },

    // compareTitle(){
    //   //this.meta = breadCrumbs;
    //   if (typeof this.$route.meta.breadCrumb === "function") {
    //     this.meta = this.$route.meta.breadCrumb.call(this, this.$route);
    //   }
    //   console.log(this.meta);
    //   //return meta == this.$route.name
    // },

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
