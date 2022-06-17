<template>
  <div>
    <v-card class="mx-1 mb-1">
      <v-card-title class="pa-6 pb-0">
        <v-row no-gutters>
          <v-col
            cols="12"
            class="d-flex align-center"
          >
            <p>Quantitativo de Simulações Estados</p>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text class="pa-6">
        <v-row>
          <v-col>
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
import eCow from "./e-cow";

export default {
  name: "DashboardChartBar",
  components: {
    ApexChart,
  },
  data() {
    return {
      eCow,
      series: [
        {
          data: [],
          // [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
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
          /* [
            "South Korea",
            "Canada",
            "United Kingdom",
            "Netherlands",
            "Italy",
            "France",
            "Japan",
            "United States",
            "China",
            "Germany",
          ], */
        },
      },

      estados: [],
      estadosSeparados: [],
    };
  },

  computed: {},

  mounted() {
    this.getEstados();
    this.separaEstados();
    console.log(this.series["0"]);
  },

  methods: {
    getEstados() {
      const data = this.eCow;
      Object.values(data).forEach((value) => {
        this.estados.push(value.state);
      });
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
