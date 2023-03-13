<template>
  <v-container
    fluid
    class="pa-0"
  >
    <v-row justify="space-around">
      <v-col class="pa-1">
        <v-expansion-panels
          focusable
          dark
          v-model="panel1"
        >
          <v-expansion-panel>
            <v-expansion-panel-header color="teal">
              <h3>Total de Todas as Simulações</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content color="white">
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
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col class="pa-1">
        <v-expansion-panels
          focusable
          dark
          v-model="panel2"
        >
          <v-expansion-panel>
            <v-expansion-panel-header color="cyan">
              <h3>Simulações no Período Filtrado</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content color="white">
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
                    {{ totalSimulacoesDataFiltered }}
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col class="pa-1 mb-2">
        <v-expansion-panels
          focusable
          dark
          v-model="panel2"
        >
          <v-expansion-panel>
            <v-expansion-panel-header color="indigo">
              <h3>Média de Preços</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content color="white">
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
                      <v-list-item-subtitle class="indigo--text pt-1">
                        {{ media.touro.title }}
                      </v-list-item-subtitle>
                      <v-list-item-title class="indigo--text my-2 text-h6 pt-0">
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
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
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
      panel1: 0,
      panel2: 0,

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
    simulacoesData() {
      return this.$store.getters.getDataSimulacoes;
    },
    simulacoesFiltradasPeriodo() {
      return this.$store.getters.getSimulacoesFilteredPeriodo;
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
      //const data = this.simulacoesDataFiltered;

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
    simulacoesFiltradasPeriodo(value) {
      this.getData(value);
    },
  },
};
</script>
