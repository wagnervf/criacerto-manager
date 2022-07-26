<template>
  <v-container fluid>
    <v-row class="py-2">
      <v-col
        cols="12"
        class="pa-0"
      >
        <v-card class="mx-0 mb-1">
          <v-expansion-panels
            focusable
            v-model="panel"
          >
            <v-expansion-panel>
              <v-expansion-panel-header>
                <h3>
                  Médias do Número de Vacas Simuladas por Tipos de Simulação
                </h3>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card-text
                  class="pa-6 pt-0"
                  v-if="visivel"
                >
                  <v-progress-linear
                    indeterminate
                    color="cyan"
                    :query="true"
                  />
                </v-card-text>

                <v-card-text
                  v-else
                  class="pa-6 pt-0"
                >
                  <div id="chart">
                    <ApexChart
                      type="bar"
                      height="350"
                      :options="chartOptions"
                      :series="chartOptions.series"
                    />
                  </div>
                </v-card-text>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import mixinUtils from "../../mixins/mixin-utils";
import typesSimulations from "../../assets/json/typesSimulations.json";
import ApexChart from "vue-apexcharts";
export default {
  name: "ViewDashboardCardsMedias",
  mixins: [mixinUtils],
  components: {
    ApexChart,
  },
  data() {
    return {
      typesSimulations: typesSimulations,
      panel: 0,

      valid: true,
      visivel: false,

      filtrado: [],
      menu: {
        desc: "open",
      },
      media: {
        monta: {
          title: typesSimulations.monta,
          value: 0,
          color: "#0097f7",
        },
        iatf: {
          title: typesSimulations.iatf,
          value: 0,
          color: "#ffab34",
        },
        iatf_2: {
          title: typesSimulations.iatf_2,
          value: 0,
          color: "#00e29b",
        },
        iatf_3: {
          title: typesSimulations.iatf_3,
          value: 0,
          color: "#ff3d60",
        },
      },

      chartOptions: {
        series: [
          {
            data: [],
          },
        ],
        xaxis: {
          categories: [],
        },
        chart: {
          type: "bar",
          height: 350,
        },

        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        colors: ["#009789"],

        grid: {
          xaxis: {
            lines: {
              show: true,
            },
          },
        },
        yaxis: {
          reversed: true,
          axisTicks: {
            show: true,
          },
        },
        dataLabels: {
          enabled: true,
          textAnchor: "start",
          style: {
            colors: ["#fff"],
          },
          formatter: function (val) {
            return val.toFixed(2);
          },
          offsetX: 0,
          dropShadow: {
            enabled: true,
          },
        },
        responsive: [
          {
            breakpoint: 1000,
            options: {
              plotOptions: {
                bar: {
                  horizontal: true,
                },
              },
              legend: {
                position: "bottom",
              },
            },
            dataLabels: {
              enabled: true,
              textAnchor: "start",
              style: {
                colors: ["#000"],
              },
              formatter: function (val) {
                return val.toFixed(2);
              },
              offsetX: 10,
              dropShadow: {
                enabled: false,
              },
            },
          },
        ],
      },
    };
  },
  mounted() {
    setTimeout(() => {
      //  this.getMediaNumVacas(this.eCowFilteredPeriodo);
      this.visivel = false;
      //  this.getDadosSeparados();
    }, 1500);
  },
  computed: {
    eCowData() {
      return this.$store.getters.getDataEcow;
    },
    eCowFilteredPeriodo() {
      return this.$store.getters.geteCowFilteredPeriodo;
    },

    typosSimulacoesSeparadas() {
      return this.$store.getters.getTiposSimulacoesSeparadas;
    },
  },
  methods: {
    getDadosSeparados(data) {
      this.reset();

      this.media.monta.value = this.getMediaNumVacas(data.montaNatural);
      this.media.iatf.value = this.getMediaNumVacas(data.iatf);
      this.media.iatf_2.value = this.getMediaNumVacas(data.iatf_2);
      this.media.iatf_3.value = this.getMediaNumVacas(data.iatf_3);

      this.reload();
      Object.values(this.media).forEach((value) => {
        this.chartOptions.xaxis.categories.push(value.title);
        this.chartOptions.series[0].data.push(value.value);
      });
    },

    getMediaNumVacas(data) {
      let soma = 0;
      let numeroVaca = [];

      Object.values(data).forEach((value) => {
        if (value.numero_de_vacas) numeroVaca.push(value.numero_de_vacas);
        soma += value.numero_de_vacas;
      });
      return soma / data.length;
    },

    reset() {
      this.media.monta.value = 0;
      this.media.iatf.value = 0;
      this.media.iatf_2.value = 0;
      this.media.iatf_3.value = 0;
      this.chartOptions.xaxis.categories = [];
      this.chartOptions.series[0].data = [];
    },

    reload() {
      this.visivel = true;
      setTimeout(() => {
        this.visivel = false;
      }, 500);
    },
  },

  watch: {
    typosSimulacoesSeparadas(value) {
      this.getDadosSeparados(value);
      this.getMediaNumVacas(this.eCowFilteredPeriodo);
    },
  },
};
</script>
