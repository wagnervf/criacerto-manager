<template>
  <v-container fluid>
    <v-card
      class="mx-1 mb-1"
      style="min-height: 150px"
    >
      <v-toolbar
        class="pa-0 my-1"
        elevation="1"
        dense
        shrink-on-scroll
      >
        <v-app-bar-title class="ma-2 text-subtitle-1 font-weight-black">
          Tipos de Touros Simulados
        </v-app-bar-title>
      </v-toolbar>

      <v-card-text class="pa-6 pt-0">
        <v-row class="align-center justify-center">
          <v-col
            v-if="visivel"
            class="my-auto"
          >
            <ApexChart
              type="pie"
              height="380"
              :options="chartOptions"
              :series="chartOptions.series"
            />
            <p>Simulações Filtradas: {{ this.totalEcow }}</p>
          </v-col>
          <v-col
            v-else
            class="pa-6"
          >
            <div class="text-center">
              <ComponentProgress />
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import ApexChart from "vue-apexcharts";
import ComponentProgress from "../../components/Progress.vue";
export default {
  name: "DashboardTiposTouros",
  components: {
    ApexChart,
    ComponentProgress,
  },

  data() {
    return {
      apexLoading: false,
      visivel: false,
      racasTouro: [],
      total: 0,

      racas: [],
      racasSeparadas: {},
      valuesRacasTouros: [],

      chartOptions: {
        chart: {
          width: "100%",
          type: "pie",
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -5,
            },
          },
        },

        labels: [],
        series: [],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },

  mounted() {
    setTimeout(() => {
      this.racaTouros();
      this.separaRacasTouros();
      this.visivel = true;
    }, 3000);
  },

  computed: {
    totalEcow() {
      let total = [];
      Object.assign(total, this.eCowDataFiltered);
      return total.length;
    },

    eCowDataFiltered() {
      return this.$store.getters.geteCowDataFiltered;
    },
  },

  methods: {
    racaTouros() {
      // var data = this.eCow;
      const data = this.eCowDataFiltered;

      Object.values(data).forEach((value) => {
        const rar =
          typeof value.raca_touro === "undefined"
            ? value.raca_touro_iatf
            : value.raca_touro;

        this.racas.push(rar);
      });
    },

    separaRacasTouros() {
      const counts = {};
      this.racas.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
      });
      Object.assign(this.racasSeparadas, counts);
      Object.assign(this.chartOptions.labels, Object.keys(this.racasSeparadas));
      this.chartOptions.series = Object.values(this.racasSeparadas);
    },
  },
};
</script>
