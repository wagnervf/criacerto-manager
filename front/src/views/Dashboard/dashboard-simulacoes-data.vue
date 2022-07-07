<template>
  <v-container class="pa-0">
    <v-card class="pa-0">
      <v-card-title class="grey lighten-4 pa-2">
        <dashboardFilterVue />
      </v-card-title>
      <v-divider />

      <v-card-text
        v-if="visivel"
        class="my-4"
      >
        <v-row>
          <v-col>
            <v-card
              class="pa-6"
              elevation="1"
              min-height="200"
            >
              <v-row>
                <v-col class="d-flex justify-center">
                  <v-icon
                    style="font-size: 90px"
                    color="teal lighten-4"
                  >
                    mdi-equalizer
                  </v-icon>
                </v-col>

                <v-col class="text-center">
                  <p class="subtitle-1 font-weight-black teal--text">
                    Todas as Simulações
                  </p>
                  <p class="text-h1 font-weight-black teal--text">
                    {{ totalEcow }}
                  </p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col>
            <v-card
              class="pa-6"
              elevation="1"
              min-height="200"
            >
              <v-row>
                <v-col class="d-flex justify-center">
                  <v-icon
                    style="font-size: 90px"
                    dark
                    color="cyan lighten-4"
                  >
                    mdi-magnify-plus-outline
                  </v-icon>
                </v-col>

                <v-col class="text-center">
                  <p class="subtitle-2 cyan--text">
                    Todas das Simulações Filtradas
                  </p>
                  <p class="text-h1 font-weight-black cyan--text">
                    {{ totalEcowFiltered }}
                  </p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col class="text-left">
            <v-card
              class="py-4"
              elevation="1"
              min-height="200"
            >
              <v-row>
                <v-col class="d-flex justify-center">
                  <v-icon
                    style="font-size: 90px"
                    dark
                    color="indigo lighten-4"
                  >
                    mdi-currency-usd
                  </v-icon>
                </v-col>
                <v-col class="text-center">
                  <p class="subtitle-2 font-weight-black indigo--text">
                    Média de Preços
                  </p>
                  <v-list
                    dense
                    class="transparent pa-2"
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
                        <v-list-item-subtitle class="indigo--text">
                          {{ media.touro.title }}
                        </v-list-item-subtitle>
                        <v-list-item-title class="indigo--text my-2 text-h6">
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
                        <v-list-item-title class="mx-2 text-h6 indigo--text">
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
      </v-card-text>
      <div
        v-else
        class="my-auto"
      >
        <v-progress-linear
          indeterminate
          color="teal"
        />
      </div>
      <v-divider />
      <v-card-actions>
        <dashboardTiposTourosVue />
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
import mixinUtils from "../../mixins/mixin-utils";
import dashboardTiposTourosVue from "./dashboard-tipos-touros.vue";
import dashboardFilterVue from "./dashboard-filter.vue";
//import apexchart from "vue-apexcharts";
export default {
  name: "ViewDashSimulacoesData",
  mixins: [mixinUtils],
  components: {
    dashboardTiposTourosVue,
    dashboardFilterVue,
  },
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
      this.getData();
      this.visivel = true;
    }, 1000);
  },
  computed: {
    eCowData() {
      return this.$store.getters.getDataEcow;
    },
    eCowDataFiltered() {
      return this.$store.getters.geteCowDataFiltered;
    },
    totalEcow() {
      let total = [];
      Object.assign(total, this.eCowData);
      return total.length;
    },
    totalEcowFiltered() {
      let total = [];
      Object.assign(total, this.eCowDataFiltered);
      return total.length;
    },
  },
  methods: {
    getData() {
      Object.assign(this.filtrado, this.eCowDataFiltered);
      this.getMediaValorCompraTouro();
      this.getMediaValorCompraSemen();
    },

    getMediaValorCompraTouro() {
      let value = 0;
      let precoTouro = [];

      this.filtrado.forEach((value) => {
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

    getMediaValorCompraSemen() {
      let value = 0;
      let precoSemen = [];
      //const data = this.eCowDataFiltered;

      this.filtrado.forEach((value) => {
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
};
</script>
