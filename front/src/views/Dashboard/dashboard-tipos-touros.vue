<template>
  <v-container fluid>
    <v-card>
      <v-toolbar
        class="pa-0 my-1"
        color="grey lighten-"
        elevation="0"
        dense
        shrink-on-scroll
        dark
      >
        <v-app-bar-title class="ma-2 text-subtitle-1 font-weight-black">
          Raças de Touros Simuladas
        </v-app-bar-title>
      </v-toolbar>
      <v-card-text class="pa-6">
        <v-row>
          <v-col
            v-if="visivel"
            class="pl-6 ma-auto"
          >
            <ApexChart
              type="bar"
              height="300"
              width="95%"
              :options="chartOptions"
              :series="series"
            />
          </v-col>
          <v-col
            v-else
            class="my-auto"
          >
            <v-progress-linear
              indeterminate
              color="teal"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import ApexChart from "vue-apexcharts";
//import ComponentProgress from "../../components/Progress.vue";
export default {
  name: "DashboardTiposTouros",
  components: {
    ApexChart,
    //ComponentProgress,
  },

  data() {
    return {
      panel: [],
      valid: true,
      racas: [],
      racasSeparadas: {},
      valuesRacasTouros: [],
      visivel: false,
      series: [
        {
          data: [],
        },
      ],

      chartOptions: {
        chart: {
          type: "bar",
        },

        plotOptions: {
          bar: {
            horizontal: true,
            borderRadius: 4,
          },
        },
        //colors: ["#4db6ac"],
        dataLabels: {
          enabled: true,
        },
        yaxis: {
          labels: {
            style: {
              fontSize: "12px",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
        xaxis: {
          categories: [],
        },
      },

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
    };
  },

  mounted() {
    setTimeout(() => {
      this.racaTouros();
      this.separaRacasTouros();
      this.visivel = true;
    }, 2000);
  },

  computed: {
    eCowDataFiltered() {
      return this.$store.getters.geteCowDataFiltered;
    },
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.getDados();
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    racaTouros() {
      const data = this.eCowDataFiltered;
      Object.values(data).forEach((value) => {
        const rar =
          typeof value.raca_touro === "undefined"
            ? value.raca_touro_iatf
            : value.raca_touro;

        this.racas.push(rar);
      });

      this.separaRacasTouros();
    },

    separaRacasTouros() {
      const counts = {};
      this.racas.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
      });
      Object.assign(this.racasSeparadas, this.ordenarPorQtde(counts));
      Object.assign(
        this.chartOptions.xaxis.categories,
        Object.keys(this.racasSeparadas)
      );

      this.series[0].data = Object.values(this.racasSeparadas);
    },

    ordenarPorQtde(value) {
      return Object.entries(value)
        .sort(([, a], [, b]) => b - a)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    },
  },
};
</script>
