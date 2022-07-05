<template>
  <div>
    <v-card class="mx-1 mb-1">
      <v-toolbar
        class="pa-0 my-1"
        color="teal"
        elevation="0"
        dense
        shrink-on-scroll
        dark
      >
        <v-app-bar-title class="ma-2 text-subtitle-1 font-weight-black">
          Quantitativo de Simulações Estados
        </v-app-bar-title>

        <v-spacer />
        <!-- <v-btn
          text
          fab
          small
          dark
          title="Filtrar os Data ou Estados"
        >
          <v-icon>mdi-filter</v-icon>
        </v-btn> -->
      </v-toolbar>

      <v-card-text class="pa-6">
        <v-row>
          <v-col v-if="visivel">
            <v-progress-linear
              indeterminate
              color="cyan"
              :query="true"
            />
          </v-col>
          <v-col v-else>
            <ApexChart
              type="bar"
              height="350"
              :options="chartOptions"
              :series="series"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import ApexChart from "vue-apexcharts";
//import eCow from "./e-cow";

export default {
  name: "DashboardChartBar",
  components: {
    ApexChart,
  },
  data() {
    return {
      visivel: true,
      series: [
        {
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        dataLabels: {
          enabled: true,
          textAnchor: "start",
          style: {
            colors: ["#fff"],
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },

        xaxis: {
          categories: [],
        },
      },

      estados: [],
      estadosSeparados: [],
    };
  },

  mounted() {
    setTimeout(() => {
      this.getEstados();

      this.visivel = false;
    }, 2000);
  },

  computed: {
    eCowData() {
      return this.$store.getters.getDataEcow;
    },
  },

  methods: {
    getEstados() {
      const data = this.eCowData;
      Object.values(data).forEach((value) => {
        this.estados.push(value.state);
      });

      this.separaEstados();
    },

    separaEstados() {
      const estados = {};
      // Separa os estados
      this.estados.forEach((x) => {
        estados[x] = (estados[x] || 0) + 1;
      });

      Object.assign(this.estadosSeparados, this.ordenaPorQntdeEstados(estados));

      Object.assign(
        this.chartOptions.xaxis.categories,
        Object.keys(this.estadosSeparados)
      );
      this.series["0"].data = Object.values(this.estadosSeparados);
    },

    ordenaPorQntdeEstados(estados) {
      return Object.entries(estados)
        .sort(([, a], [, b]) => b - a)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    },
  },
};
</script>

<style></style>
