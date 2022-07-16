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
        <v-row class="d-flex align-center justify-center">
          <div
            v-if="visivel"
            class="text-center pa-6"
          >
            <ComponentProgress />
          </div>

          <v-col
            v-else
            class="mx-auto"
          >
            <ApexChart
              type="pie"
              height="380"
              width="100%"
              :options="chartOptions"
              :series="chartOptions.series"
            />
          </v-col>
        </v-row>

        <cardFilteredVue />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import ApexChart from "vue-apexcharts";
import ComponentProgress from "../../components/Progress.vue";
import mixinUtils from "../../mixins/mixin-utils";
import cardFilteredVue from "../../components/cardFiltered.vue";

export default {
  name: "DashboardTiposTouros",
  components: {
    ApexChart,
    ComponentProgress,
    cardFilteredVue,
  },
  mixins: [mixinUtils],
  data() {
    return {
      visivel: true,
      racasTouro: [],
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
        legend: {
          show: true,
          fontSize: "18px",
          fontFamily: "Helvetica, Arial",
          fontWeight: 400,
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "16px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: "bold",
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
      //Filtrar Raça por período
      //    this.getRacaTouros(this.eCowFilteredPeriodo);
      this.visivel = false;
    }, 1000);
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
    getRacaTouros(data) {
      //  this.reload();
      this.racas = [];
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
      let racas = {};
      this.racas.forEach((x) => {
        racas[x] = (racas[x] || 0) + 1;
      });
      this.setRacasSeparadas(racas);
    },

    setRacasSeparadas(racas) {
      this.racasSeparadas = [];
      Object.assign(this.racasSeparadas, racas);
      Object.assign(this.chartOptions.labels, Object.keys(this.racasSeparadas));
      this.chartOptions.series = Object.values(this.racasSeparadas);
    },

    filterRacasPorEstado(data) {
      let filtrados = [];
      let filter = this.estadoFilterStore;
      Object.values(data).forEach((value) => {
        if (value.state == filter) {
          filtrados.push(value);
        }
      });
      //caso um estado seja selecionado busque as racas já filtradas pelo estado
      this.getRacaTouros(filtrados);
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
      if (value == "Todos") {
        return this.getRacaTouros(this.eCowFilteredPeriodo);
      }
      //Filtrar a Raça por Estado
      this.filterRacasPorEstado(this.eCowFilteredPeriodo);
      this.reload();
    },

    eCowFilteredPeriodo() {
      //Filtrar a Raça Período
      let value = this.estadoFilterStore;

      if (value == "" || value == "Todos") {
        this.getRacaTouros(this.eCowFilteredPeriodo);
      }
      {
        this.filterRacasPorEstado(this.eCowFilteredPeriodo);
      }

      this.reload();
    },
  },
};
</script>
