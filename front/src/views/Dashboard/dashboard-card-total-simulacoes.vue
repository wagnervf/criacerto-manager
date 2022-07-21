<template>
  <v-container fluid>
    <v-card
      class="mx-1 mb-1"
      style="min-height: 250px"
    >
      <v-toolbar
        class="pa-0 my-1"
        color="teal lighten-2"
        elevation="0"
        dense
        shrink-on-scroll
        dark
      >
        <v-app-bar-title class="ma-2 text-subtitle-1 font-weight-black">
          Total Simulações por Período
        </v-app-bar-title>

        <v-spacer />
      </v-toolbar>
      <!-- v-if="visivel" -->
      <v-card-text class="pa-4 ma-2 justify-space-between">
        <v-col class="pa-2 d-flex justify-end align-baseline">
          <span class="text-h5 mx-4 font-weight"> Total </span>
          <span class="text-h1 font-weight-black">
            {{ eCowCount }}
          </span>
        </v-col>
      </v-card-text>

      <v-divider />

      <v-card-actions />
    </v-card>
  </v-container>
</template>

<script>
//import ApexChart from 'vue-apexcharts';
//import eCow from "./e-cow";
//import mock from "./mock";
//import ComponentProgress from "../../components/Progress.vue";
import mixinUtils from "../../mixins/mixin-utils";
export default {
  name: "DashboardCardTotalSimulacoes",
  mixins: [mixinUtils],
  components: {
    //  ComponentProgress,
  },
  data() {
    return {
      visivel: false,

      aluguelPasto: [],
      mediaAluguelPasto: 0,

      valorVenda: [],
      mediaValorVenda: 0,

      taxaMortalidade: [],
      mediaTaxaMortalidade: 0,
      date1: false,
      date2: false,
      query: {
        initial: "",
        finish: "",
      },
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

    eCowFilteredPeriodo() {
      return this.$store.getters.geteCowFilteredPeriodo;
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
    getDados(data) {
      // const data = this.eCowData;
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
    },
  },

  watch: {
    eCowFilteredPeriodo(value) {
      this.getDados(value);
    },
  },
};
</script>
