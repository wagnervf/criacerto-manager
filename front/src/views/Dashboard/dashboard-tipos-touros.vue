<template>
  <v-container fluid>
    <v-card
      class="mx-1 mb-1"
      style="min-height: 150px"
    >
      <v-card-title class="pa-6 pb-3">
        <p class="teal--text">
          Tipos de Touros Simulados
        </p>
        <v-spacer />
      </v-card-title>

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
      racasTouro: [
        "Aberdeen Angus",
        "Bonsmara",
        "Braford",
        "Brahman",
        "Brangus",
        "Canchim",
        "Caracu",
        "Charolês",
        "Devon",
        "Guzerá",
        "Hereford",
        "Limousin",
        "Nelore",
        "Red Angus",
        "Red Brahman",
        "Red Brangus",
        "Senepol",
        "Shorthorn",
        "Simental",
        "Tabapuã",
        "Wagyu",
        "Outras",
      ],

      racas: [],
      racasSeparadas: {},
      valuesRacasTouros: [],

      chartOptions: {
        chart: {
          width: '100%',
          type: "pie",
        },
        plotOptions: {
              pie: {
                dataLabels: {
                  offset: -5
                }
              }
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

  computed: {
    eCowData() {
      return this.$store.getters.getDataEcow;
    },
  },

  mounted() {
    setTimeout(() => {
      this.racaTouros();
      this.separaRacasTouros();
      this.visivel = true;
    }, 3000);
  },

  methods: {
    racaTouros() {
      // var data = this.eCow;
      const data = this.eCowData;
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
