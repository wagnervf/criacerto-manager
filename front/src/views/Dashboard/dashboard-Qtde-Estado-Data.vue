<template>
  <v-container fluid>
    <v-card class="mx-1 mb-1">
      <v-toolbar
        class="pa-0 my-1"
        color="white"
        elevation="1"
        dense
        shrink-on-scroll
      >
        <v-app-bar-title class="ma-2 text-subtitle-1 font-weight-black">
          Quantitativo de Simulações Estados
        </v-app-bar-title>
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
              ref="realtimeChart"
              type="bar"
              height="345"
              :options="chartOptions"
              :series="series"
            />
            <p>Simulações Filtradas: {{ this.totalEcow }}</p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
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
            borderRadius: 10,
            columnHeight: "5%",
            horizontal: true,
          },
        },
        xaxis: {
          categories: [],
        },
      },

      estados: [],
      estadosSeparados: [],
      estadosObject: [],
      animate: false,
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
    eCowDataFiltered() {
      return this.$store.getters.geteCowDataFiltered;
    },
    totalEcow() {
      let total = [];
      Object.assign(total, this.eCowDataFiltered);
      return total.length;
    },
    estadoFilterStore() {
      return this.$store.getters.getEstadoFiltrado;
    },
  },

  methods: {
    getEstados() {
      const data = this.eCowDataFiltered;
      Object.values(data).forEach((value) => {
        this.estados.push(value.state);
      });

      this.separaEstados();
    },

    separaEstados() {
      let estados = {};
      // Separa os estados
      this.estados.forEach((x) => {
        estados[x] = (estados[x] || 0) + 1;
      });
      this.estadosObject = estados;
      this.setEstadosSeparados(estados);
    },

    // Salva no Grafico
    setEstadosSeparados(estados) {
      this.estadosSeparados = [];
      Object.assign(this.estadosSeparados, this.ordenaPorQntdeEstados(estados));
      this.chartOptions.xaxis.categories = Object.keys(this.estadosSeparados);
      this.series[0].data = Object.values(this.estadosSeparados);
      this.setEstadosExistentesStore();
    },

    setEstadosExistentesStore() {
      this.$store.commit(
        "SET_ESTADO_EXISTENTES",
        Object.keys(this.estadosSeparados)
      );
    },

    filterEstado(estados, filter) {
      estados = Object.keys(estados)
        .filter((key) => filter.includes(key))
        .reduce((obj, key) => {
          obj[key] = estados[key];
          return obj;
        }, {});
      this.setEstadosSeparados(estados);
    },

    ordenaPorQntdeEstados(estados) {
      return Object.entries(estados)
        .sort(([, a], [, b]) => b - a)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    },

    reload() {
      this.visivel = true;
      setTimeout(() => {
        this.visivel = false;
      }, 2000);
    },
  },

  watch: {
    estadoFilterStore(value) {
      if (value == "Todos") {
        this.reload();
        return this.setEstadosSeparados(this.estadosObject);
      }
      this.filterEstado(this.estadosObject, value);
      this.reload();
    },

    eCowDataFiltered() {
      //this.getEstados();
      this.filterEstado(this.estadosObject, this.estadoFilterStore);
      this.reload();
    },
  },
};
</script>

<style></style>
