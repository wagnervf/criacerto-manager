<template>
  <v-container
    fluid
    class="pa-0"
  >
    <v-card class="mx-1 mb-1">
      <v-expansion-panels
        focusable
        v-model="panel"
      >
        <v-expansion-panel>
          <v-expansion-panel-header>
            <h3>
              Quantitativo de Simulações Estados
            </h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
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
                  <cardFilteredVue />
                </v-col>
              </v-row>
            </v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-container>
</template>

<script>
import ApexChart from "vue-apexcharts";
import mixinUtils from "../../mixins/mixin-utils";
import cardFilteredVue from "../../components/cardFiltered.vue";

export default {
  name: "DashboardChartBar",
  components: {
    ApexChart,
    cardFilteredVue,
  },
  mixins: [mixinUtils],
  data() {
    return {
      visivel: true,
      panel: 0,
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
      estadosSeparados: [],
    };
  },

  mounted() {
    setTimeout(() => {
      this.visivel = false;
    }, 1500);
  },

  computed: {
    eCowFilteredPeriodo() {
      return this.$store.getters.geteCowFilteredPeriodo;
    },

    dadosFiltrados() {
      return this.$store.getters.getDadosFiltro;
    },
  },

  methods: {
    getAllEstados(data) {
      this.estados = [];
      Object.values(data).forEach((value) => {
        this.estados.push(value.state);
      });
      this.separaEstados();
    },

    separaEstados() {
      let estados = {};
      Object.assign(estados, this.separaObjetos(this.estados));
      this.setDadosGrafico(estados);
      this.reload();
    },

    // Salva no Grafico
    setDadosGrafico(estados) {
      // Usa Mixins
      this.estadosSeparados = [];
      this.estadosSeparados = this.ordenaPorQntdeEstados(estados);
      this.chartOptions.xaxis.categories = Object.keys(this.estadosSeparados);
      this.series[0].data = Object.values(this.estadosSeparados);
    },

    reload() {
      this.visivel = true;
      setTimeout(() => {
        this.visivel = false;
      }, 500);
    },
  },

  watch: {
    eCowFilteredPeriodo(value) {
      this.getAllEstados(value);
    },
  },
};
</script>
