<template>
  <v-container
    fluid
    class="pa-0"
  >
    <v-card
      class="transparent"
      elevation="0"
    >
      <v-row justify="space-around">
        <v-col class="pa-1">
          <v-card
            class="pa-0"
            elevation="1"
            min-height="200"
          >
            <v-toolbar
              class="pa-0 my-1"
              color="teal"
              dense
              dark
              shrink-on-scroll
            >
              <v-app-bar-title class="ma-2 text-subtitle-1 font-weight-black">
                Total de Simulações
              </v-app-bar-title>
              <v-spacer />

              <v-btn icon>
                <v-icon>mdi-finance</v-icon>
              </v-btn>
            </v-toolbar>

            <v-col
              v-if="!visivel"
              class="text-center py-auto"
            >
              <v-progress-circular
                indeterminate
                color="teal"
              />
            </v-col>

            <v-row
              v-else
              class="py-4"
            >
              <v-col class="d-flex justify-center">
                <v-icon
                  style="font-size: 90px"
                  color="teal lighten-4"
                >
                  mdi-equalizer
                </v-icon>
              </v-col>

              <v-col class="text-center">
                <p class="text-h1 font-weight-black teal--text">
                  {{ totalTodasSimulacoes }}
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col class="pa-1">
          <v-card
            class="pa-0"
            elevation="1"
            min-height="200"
          >
            <v-toolbar
              class="pa-0 my-1"
              color="cyan"
              dense
              dark
              shrink-on-scroll
            >
              <v-app-bar-title class="ma-2 text-subtitle-1 font-weight-black">
                Simulações no Período
              </v-app-bar-title>
              <v-spacer />

              <v-btn icon>
                <v-icon>mdi-magnify-plus-outline</v-icon>
              </v-btn>
            </v-toolbar>

            <v-col
              v-if="!visivel"
              class="text-center py-auto"
            >
              <v-progress-circular
                indeterminate
                color="cyan"
              />
            </v-col>

            <v-row
              v-else
              class="py-4"
            >
              <v-col class="d-flex justify-center">
                <v-icon
                  style="font-size: 90px"
                  dark
                  color="cyan lighten-4"
                >
                  mdi-calendar-filter
                </v-icon>
              </v-col>
              <!-- Mixins -->
              <v-col class="text-center">
                <p class="text-h1 font-weight-black cyan--text">
                  {{ totalECowDataFiltered }}
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col class="pa-1 mb-2">
          <v-card
            class="pa-0"
            elevation="1"
            min-height="200"
          >
            <v-toolbar
              class="pa-0 my-1"
              color="indigo"
              dense
              dark
              shrink-on-scroll
            >
              <v-app-bar-title class="ma-2 text-subtitle-1 font-weight-black">
                Média de Preços
              </v-app-bar-title>
              <v-spacer />

              <v-btn icon>
                <v-icon>mdi-currency-usd</v-icon>
              </v-btn>
            </v-toolbar>

            <v-col
              v-if="!visivel"
              class="text-center py-auto"
            >
              <v-progress-circular
                indeterminate
                color="indigo"
              />
            </v-col>

            <v-row
              v-else
              class="py-1"
            >
              <v-col class="d-flex justify-center pa-0 ma-0">
                <v-icon
                  style="font-size: 60px"
                  dark
                  color="indigo lighten-4"
                  class="pa-0 ma-0"
                >
                  mdi-currency-brl
                </v-icon>
              </v-col>

              <v-col class="mr-4 py-0">
                <v-list
                  dense
                  class="transparent pa-0"
                  dark
                >
                  <v-list-item
                    two-line
                    class="pl-0"
                  >
                    <v-list-item-icon class="mx-2 pb-0">
                      <v-avatar
                        color="indigo"
                        size="48"
                      >
                        <v-icon dark>
                          {{ media.touro.icon }}
                        </v-icon>
                      </v-avatar>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-subtitle class="indigo--text pt-2">
                        {{ media.touro.title }}
                      </v-list-item-subtitle>
                      <v-list-item-title class="indigo--text my-2 text-h6 pt-1">
                        {{ media.touro.value }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item
                    two-line
                    class="pl-0"
                    dark
                  >
                    <v-list-item-icon class="mx-2 pb-0">
                      <v-avatar
                        color="indigo"
                        size="48"
                      >
                        <v-icon dark>
                          {{ media.semen.icon }}
                        </v-icon>
                      </v-avatar>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-subtitle class="indigo--text">
                        {{ media.semen.title }}
                      </v-list-item-subtitle>
                      <v-list-item-title class="mx-2 text-h6 indigo--text pt-1">
                        {{ media.semen.value }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import mixinUtils from "../../mixins/mixin-utils";

//import apexchart from "vue-apexcharts";
export default {
  name: "ViewDashSimulacoesData",
  mixins: [mixinUtils],
  components: {},
  data() {
    return {
      valid: true,
      visivel: false,
      filtrado: [],

      media: {
        touro: { title: "Compra Touro", value: 0, icon: "mdi-cow" },
        semen: { title: "Sêmen", value: 0, icon: "mdi-reproduction" },
      },
    };
  },
  mounted() {
    setTimeout(() => {
      //this.getData();
      this.visivel = true;
    }, 1500);
  },
  computed: {
    eCowData() {
      return this.$store.getters.getDataEcow;
    },
    eCowFilteredPeriodo() {
      return this.$store.getters.geteCowFilteredPeriodo;
    },
  },
  methods: {
    getData(value) {
      Object.assign(this.filtrado, value);
      this.getMediaValorCompraTouro(this.filtrado);
      this.getMediaValorCompraSemen(this.filtrado);
    },

    getMediaValorCompraTouro(data) {
      let value = 0;
      let precoTouro = [];

      data.forEach((value) => {
        if (value.preco_touro) precoTouro.push(value.preco_touro);
      });

      for (let index = 0; index < precoTouro.length; index++) {
        value += precoTouro[index];
      }
      // Mixins
      this.media.touro.value = this.formatarMoedaReal(
        value / precoTouro.length
      );
    },

    getMediaValorCompraSemen(data) {
      let value = 0;
      let precoSemen = [];
      //const data = this.eCowDataFiltered;

      data.forEach((value) => {
        if (value.preco_semen) precoSemen.push(value.preco_semen);
        if (value.preco_semen_2) precoSemen.push(value.preco_semen_2);
        if (value.preco_semen_3) precoSemen.push(value.preco_semen_3);
      });

      for (let index = 0; index < precoSemen.length; index++) {
        value += precoSemen[index];
      }
      this.media.semen.value = this.formatarMoedaReal(
        value / precoSemen.length
      );
    },
  },

  watch: {
    eCowFilteredPeriodo(value) {
      this.getData(value);
    },
  },
};
</script>
