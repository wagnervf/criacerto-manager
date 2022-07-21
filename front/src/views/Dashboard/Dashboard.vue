<template>
  <v-container fluid>
    <div class="dashboard-page">
      <v-row class="pa-0 my-2">
        <dashboardFilterVue />
      </v-row>

      <v-row class="pa-0 my-2">
        <dashboardCardsSimulacoes />
      </v-row>

      <v-row class="pa-0 my-2">
        <dashboardChartColumnVue />
      </v-row>

      <v-row class="pa-0 my-2">
        <v-col
          cols="6"
          class="pa-0 ma-0"
        >
          <dashboardTiposTourosPieVue />
        </v-col>
        <v-col
          cols="6"
          class="pa-0 my-2"
        >
          <dashboardQtdeEstadoDataVue />
        </v-col>
      </v-row>

      <v-row class="pa-0 my-2">
        <dashboardCardsVue />
      </v-row>
      <v-row>
        <dashboardCardsMediasVue />
      </v-row>

      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="eCow"
          item-key="code"
          sort-by="created"
          group-by="type"
          class="elevation-1 col"
          :items-per-page="itemsPerPage"
          :sort-desc="[false]"
          multi-sort
          show-group-by
        >
          <!-- eslint-disable-next-line vue/valid-v-slot -->
          <template #group.summary="props">
            <td colspan="4">
              <v-chip
                class="ma-2"
                color="primary"
              >
                {{ props.group }} - ({{ props.items.length }})
              </v-chip>
            </td>
          </template>
        </v-data-table>
      </v-col>
    </div>
  </v-container>
</template>

<script>
//import mock from "./mock";
import mixinUtils from "../../mixins/mixin-utils";
import dashboardFilterVue from "./dashboard-filter.vue";
//import ComponentProgress from "../../components/Progress.vue";
// import eCow from "./e-cow";
import dashboardCardsVue from "./dashboard-cards.vue";
import dashboardChartColumnVue from "./dashboard-chart-column.vue";
import dashboardQtdeEstadoDataVue from "./dashboard-Qtde-Estado-Data.vue";
//;
import dashboardTiposTourosPieVue from "./dashboard-tipos-touros-pie.vue";
import dashboardCardsMediasVue from "./dashboard-cads-medias.vue";
//;
// import ApexChart from "vue-apexcharts";

import dashboardCardsSimulacoes from "./dashboard-cads-simulacoes.vue";

export default {
  mixins: [mixinUtils],
  name: "DashboardView",
  components: {
    dashboardCardsVue,
    dashboardChartColumnVue,
    dashboardFilterVue,

    // dashboardTableSimpleVue,
    // dashboardTiposTourosVue,
    dashboardQtdeEstadoDataVue,
    dashboardTiposTourosPieVue,
    dashboardCardsSimulacoes,
    dashboardCardsMediasVue,
  },
  data() {
    return {
      // mock,
      eCow: [],
      apexLoading: false,

      mainApexAreaSelect: "Daily",
      montaNatural: [],
      iatf: [],
      iatf2: [],
      iatf3: [],
      headers: [
        { text: "Tipo", align: "start", value: "type" },
        { text: "Raça Touro", value: "raca_touro", align: "right" },
        { text: "Estado", value: "state", align: "right" },
        { text: "Cidade", value: "city", align: "right" },
        { text: "Data", value: "created", align: "right" },
      ],
      itemsPerPage: 20,
      loadingQtde: true,
    };
  },

  mounted() {
    // Solicita ao Vuex para buscar os dados e salvar no State
    this.$store.dispatch("getDataEcowApi");

    setTimeout(() => {
      this.apexLoading = true;
      this.loadingQtde = false;
    }, 500);

    this.getData();
  },

  computed: {
    eCowData() {
      return this.$store.getters.getDataEcow;
    },

    eCowCount() {
      return Object.keys(this.eCowData).length;
    },

    montaNaturalLength() {
      return this.montaNatural.length;
    },
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    getData() {
      this.eCow.push(this.eCowData);
    },

    eCowSimulations() {
      const data = this.eCow;
      // console.log(data);

      Object.values(data).forEach((value) => {
        switch (value.type) {
          case "Monta Natural":
            this.montaNatural.push(value);
            break;
          case "IATF + RT":
            this.iatf.push(value);
            break;

          case "2 IATF + RT":
            this.iatf2.push(value);
            break;

          case "3 IATF":
            this.iatf3.push(value);
            break;

          default:
            break;
        }
      });

      return [];
    },
  },
};
</script>

<style>
.v-row-group__header > td {
  font-weight: bold;
  font-size: 18px !important;
}
.v-row-group__summary {
  text-align: end;
  background: none !important;
}
</style>

<!-- <v-col
        lg="3"
        sm="6"
        md="5"
        cols="12"
      >
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-6 pb-3">
            <p>Visits Today</p>
            <v-spacer />
            <v-menu>
              <template #activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon color="textColor">
                    mdi-dots-vertical
                  </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in mock.menu"
                  :key="i"
                  @click="() => {}"
                >
                  <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-6 pt-0">
            <v-row
              no-gutters
              class="pb-5"
            >
              <v-col
                cols="5"
                class="my-auto"
              >
                <span
                  class="font-weight-medium card-dark-grey"
                  style="font-size: 24px"
                >12, 678</span>
              </v-col>
              <v-col cols="6">
                <v-card id="chart" />
              </v-col>
            </v-row>

            <v-row
              no-gutters
              class="justify-space-between pb-3"
            >
              <v-col cols="5">
                <div class="card-light-grey">
                  Registrations
                </div>
                <div class="text-h6 card-dark-grey font-weight-regular">
                  860
                </div>
              </v-col>
              <v-col cols="3">
                <div class="card-light-grey">
                  Sign Out
                </div>
                <div class="text-h6 card-dark-grey font-weight-regular">
                  32
                </div>
              </v-col>
              <v-col
                cols="4"
                xl="2"
              >
                <div class="text-right card-light-grey">
                  Rate
                </div>
                <div
                  class="text-right text-h6 card-dark-grey font-weight-regular"
                >
                  3.25%
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col> -->
