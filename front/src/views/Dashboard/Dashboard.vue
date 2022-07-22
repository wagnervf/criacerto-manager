<template>
  <v-container fluid>
    <div class="dashboard-page">
      <v-row class="pa-0 my-2">
        <dashboardFilterVue />
      </v-row>

      <v-row class="pa-0 my-2 px-2">
        <dashboardCardsSimulacoes />
      </v-row>

      <v-row class="pa-0 my-2">
        <dashboardChartColumnVue />
      </v-row>

      <v-row
        class="pa-0 my-2"
        no-gutters
      >
        <v-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
          class="pa-0 ma-0"
        >
          <dashboardTiposTourosPieVue />
        </v-col>
        <v-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
          class="pa-0 my-1"
        >
          <dashboardQtdeEstadoDataVue />
        </v-col>
      </v-row>

      <!-- <v-row class="pa-0 my-2">
        <dashboardCardsVue />
      </v-row> -->

      <v-row class="pa-0 my-2">
        <dashboardCardsMediasVue />
      </v-row>

      <v-row class="pa-0 my-2">
        <dashboardTable />
      </v-row>

      <div class="d-flex align-end flex-column">
        <v-btn
          elevation="2"
          fab
          dark
          bottom
          right
          color="teal"
          @click="toTop"
        >
          <v-icon>mdi-arrow-up-bold </v-icon>
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import mixinUtils from "../../mixins/mixin-utils";
import dashboardFilterVue from "./dashboard-filter.vue";

import dashboardChartColumnVue from "./dashboard-chart-column.vue";
import dashboardQtdeEstadoDataVue from "./dashboard-Qtde-Estado-Data.vue";
//;
import dashboardTiposTourosPieVue from "./dashboard-tipos-touros-pie.vue";
import dashboardCardsMediasVue from "./dashboard-cads-medias.vue";

import dashboardCardsSimulacoes from "./dashboard-cads-simulacoes.vue";
import dashboardTable from "./dashboard-table.vue";
export default {
  mixins: [mixinUtils],
  name: "DashboardView",
  components: {
    dashboardChartColumnVue,
    dashboardFilterVue,
    dashboardQtdeEstadoDataVue,
    dashboardTiposTourosPieVue,
    dashboardCardsSimulacoes,
    dashboardCardsMediasVue,
    dashboardTable,
  },
  data() {
    return {};
  },

  mounted() {
    // Solicita ao Vuex para buscar os dados e salvar no State
    this.$store.dispatch("getDataEcowApi");

    setTimeout(() => {
      this.getData();
    }, 1000);
  },

  computed: {
    eCowData() {
      return this.$store.getters.getDataEcow;
    },

    eCowCount() {
      return Object.keys(this.eCowData).length;
    },
  },

  methods: {
    getData() {
      console.log(Object.keys(this.eCowData));
      this.eCow = Object.values(this.eCowData);
    },

    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
