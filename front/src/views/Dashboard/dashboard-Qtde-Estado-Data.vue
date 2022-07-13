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
            <!-- Mixins -->
            <p>Simulações Filtradas: {{ this.totalECowDataFiltered }}</p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import ApexChart from "vue-apexcharts";
import mixinUtils from "../../mixins/mixin-utils";

export default {
  name: "DashboardChartBar",
  components: {
    ApexChart,
  },
  mixins: [mixinUtils],
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
    };
  },

  mounted() {
    setTimeout(() => {
      this.getEstados(this.eCowFilteredPeriodo);
      this.visivel = false;
    }, 2000);
  },

  computed: {
    eCowFilteredPeriodo() {
      return this.$store.getters.geteCowFilteredPeriodo;
    },

    estadoFilterStore() {
      return this.$store.getters.getEstadoFiltrado;
    },
  },

  methods: {
    getEstados(data) {
      this.estados = [];
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
      // Usa Mixins
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

    reload() {
      this.visivel = true;
      setTimeout(() => {
        this.visivel = false;
      }, 500);
    },
  },

  watch: {
    estadoFilterStore(value) {
      this.reload();
      if (value == "Todos") {
        return this.setEstadosSeparados(this.estadosObject);
      }
      this.filterEstado(this.estadosObject, value);
    },

    eCowFilteredPeriodo(value) {
      this.getEstados(value);
      this.reload();
    },
  },
};
</script>
