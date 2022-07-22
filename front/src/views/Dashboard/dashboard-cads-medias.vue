<template>
  <v-container fluid>
    <v-row class="py-2">
      <v-col
        cols="12"
        class="pa-0"
      >
        <v-card class="mx-0 mb-1">
          <v-toolbar
            class="pa-0 my-1"
            color="white"
            elevation="1"
            dense
            shrink-on-scroll
          >
            <v-app-bar-title class="ma-2 text-subtitle-1 font-weight-black">
              Médias do Número de Vacas Simuladas
            </v-app-bar-title>
          </v-toolbar>

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
      types: {
        montaNatural: [],
        iatf: [],
        iatf_2: [],
        iatf_3: [],
      },

      valid: true,
      visivel: false,

      filtrado: [],
      menu: {
        desc: "open",
      },
      media: {
        monta: {
          title: "Monta Natural",
          value: 0,
          color: "#0097f7",
        },
        iatf: {
          title: "IATF + RT",
          value: 0,
          color: "#ffab34",
        },
        iatf_2: {
          title: "2 IATF",
          value: 0,
          color: "#00e29b",
        },
        iatf_3: {
          title: "3 IATF",
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
      this.getMediaNumVacas(this.eCowFilteredPeriodo);
      this.visivel = false;
      this.getDadosSeparados();
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
    getDadosSeparados() {
      let data = this.typosSimulacoesSeparadas;

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

    reload() {
      this.visivel = true;
      setTimeout(() => {
        this.visivel = false;
      }, 500);
    },
  },

  watch: {
    // eCowFilteredPeriodo(value) {
    //   this.getData(value);
    // },
  },
};
</script>
