<template>
  <div>
    <v-card class="mx-1 mb-1">
      <v-card-title class="pa-6 pb-0">
        <v-row no-gutters>
          <v-col cols="12" class="d-flex align-center">
            <p>Tipos de Touros</p>
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text class="pa-3 d-flex">
        <v-row cols="12" class="align-center justify-center">
          <v-col>
            <ApexChart
              type="donut"
              height="250"
              :options="chartOptions"
              :series="chartOptions.series"
            ></ApexChart>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import eCow from "./e-cow";

import ApexChart from "vue-apexcharts";

export default {
  name: "Dashboard-Tipos-Touros",
  components: {
    ApexChart,
  },
  data() {
    return {
      eCow,
      apexLoading: false,

      headers: [
        { text: "Tipo", align: "start", value: "type" },
        { text: "Raça Touro", value: "raca_touro", align: "right" },
        { text: "Estado", value: "state", align: "right" },
        { text: "Cidade", value: "city", align: "right" },
        { text: "Data", value: "created", align: "right" },
      ],
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
          type: "donut",
          height: 350,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  showAlways: true,
                  show: true,
                },
              },
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
                width: 200,
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
    this.racaTouros();
    this.separaRacasTouros();
  },

  computed: {},

  methods: {
    racaTouros() {
      var data = this.eCow;
      Object.values(data).forEach((value) => {
        let rar =
          typeof value.raca_touro === "undefined"
            ? value.raca_touro_iatf
            : value.raca_touro;

        this.racas.push(rar);
      });
    },

    separaRacasTouros() {
      const counts = {};
      this.racas.forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
      });
      Object.assign(this.racasSeparadas, counts);
      Object.assign(this.chartOptions.labels, Object.keys(this.racasSeparadas));
      this.chartOptions.series = Object.values(this.racasSeparadas);
    },
  },
};
</script>
