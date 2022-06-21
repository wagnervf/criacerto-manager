<template>
  <v-container fluid>
    <v-card
      class="mx-1 mb-1"
      style="min-height: 250px"
    >
      <v-toolbar
        class="pa-0 my-1"
        color="teal"
        elevation="0"
        dense
        shrink-on-scroll
        dark
      >
        <v-app-bar-title class="ma-2 text-subtitle-1 font-weight-black">
          Total Simulações Realizadas
        </v-app-bar-title>

        <v-spacer />
      </v-toolbar>

      <v-card-text
        class="pa-6 pt-0"
        v-if="visivel"
      >
        <v-row>
          <v-col class="my-2 py-6">
            <span style="font-size: 52px">
              {{ eCowCount }}
            </span>
            <v-spacer />
          </v-col>
        </v-row>

        <v-row
          no-gutters
          class="py-2 justify-space-between"
        >
          <div>
            <div class="subtext font-weight-bold">
              {{ aluguelPastoFormatado }}
              <v-icon color="success">
                mdi-arrow-top-right
              </v-icon>
            </div>
            <div class="subtext-index flex-wrap">
              Aluguel
              <p>Pasto</p>
            </div>
          </div>

          <div>
            <div class="subtext font-weight-bold">
              {{ valorVendaFormatado
              }}<v-icon color="success">
                mdi-arrow-top-right
              </v-icon>
            </div>
            <div class="subtext-index">
              Valor
              <p>da Venda</p>
            </div>
          </div>

          <div>
            <div class="subtext font-weight-bold">
              {{ taxaMortalidadeFormatado
              }}<v-icon color="error">
                mdi-arrow-bottom-right
              </v-icon>
            </div>
            <div class="subtext-index">
              Taxa
              <p>Mortalidade</p>
            </div>
          </div>
        </v-row>
      </v-card-text>

      <v-card-text
        v-else
        class="pa-6"
      >
        <div class="text-center">
          <ComponentProgress />
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
//import ApexChart from 'vue-apexcharts';
//import eCow from "./e-cow";
import mock from "./mock";
import ComponentProgress from "../../components/Progress.vue";

export default {
  name: "DashboardCardTotalSimulacoes",
  components: {
    ComponentProgress,
  },
  data() {
    return {
      //  eCow,
      mock,
      visivel: false,

      aluguelPasto: [],
      mediaAluguelPasto: 0,

      valorVenda: [],
      mediaValorVenda: 0,

      taxaMortalidade: [],
      mediaTaxaMortalidade: 0,
    };
  },

  mounted() {
    setTimeout(() => {
      this.visivel = true;
    }, 3000);

    this.getDados();
  },

  computed: {
    eCowData() {
      return this.$store.getters.getDataEcow;
    },
    eCowCount() {
      return Object.keys(this.eCowData).length;
    },

    aluguelPastoFormatado() {
      return this.mediaAluguelPasto.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },

    valorVendaFormatado() {
      return this.mediaValorVenda.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },

    taxaMortalidadeFormatado() {
      return this.mediaTaxaMortalidade.toLocaleString(2);
    },
  },

  methods: {
    getDados() {
      const data = this.eCowData;
      Object.values(data).forEach((value) => {
        const resul =
          typeof value.aluguel_pasto === "undefined" ? 0 : value.aluguel_pasto;
        this.aluguelPasto.push(resul);
      });

      Object.values(data).forEach((value) => {
        const resul =
          typeof value.valor_venda === "undefined" ? 0 : value.valor_venda;
        this.valorVenda.push(resul);
      });

      Object.values(data).forEach((value) => {
        const resul =
          typeof value.taxa_mortalidade === "undefined"
            ? 0
            : value.taxa_mortalidade;
        this.taxaMortalidade.push(resul);
      });

      this.getMediaAluguelPasto();
      this.getMediaValorVenda();
      this.getMediaTaxaMortalidade();
    },

    getMediaAluguelPasto() {
      let value = 0;
      for (let index = 0; index < this.aluguelPasto.length; index++) {
        value += this.aluguelPasto[index];
      }
      this.mediaAluguelPasto = value / this.aluguelPasto.length;
    },

    getMediaValorVenda() {
      let value = 0;
      for (let index = 0; index < this.valorVenda.length; index++) {
        value += this.valorVenda[index];
      }
      this.mediaValorVenda = value / this.valorVenda.length;
    },

    getMediaTaxaMortalidade() {
      let value = 0;
      for (let index = 0; index < this.taxaMortalidade.length; index++) {
        value += this.taxaMortalidade[index];
      }
      this.mediaTaxaMortalidade = value / this.taxaMortalidade.length;
    },

    // separaRacasTouros() {
    //   const counts = {};
    //   this.aluguelPasto.forEach(function (x) {
    //     counts[x] = (counts[x] || 0) + 1;
    //   });
    //   Object.assign(this.racasSeparadas, counts);
    //   Object.assign(this.chartOptions.labels, Object.keys(this.racasSeparadas));
    //   this.chartOptions.series = Object.values(this.racasSeparadas);
    // },
  },
};
</script>
