<template>
  <v-container fluid>      
    <v-card class="mx-1 mb-1">
      <v-card-title class="pa-6 pb-3">
        <p>Tipos de Touros Simulados</p>
        <v-spacer></v-spacer>
      </v-card-title>

<v-card-text class="pa-6 pt-0" >
        <v-row cols="12" class="align-center justify-center">
          <v-col v-if="this.visivel">
            <ApexChart
              type="donut"
              height="200"
              :options="chartOptions"
              :series="chartOptions.series"
            ></ApexChart>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
//import eCow from "./e-cow";

import ApexChart from "vue-apexcharts";

export default {
  name: "Dashboard-Tipos-Touros",
  components: {
    ApexChart,
  },
  data() {
    return {
    //  eCow,
      apexLoading: false,
      visivel: false,

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
          height: 450,
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
    setTimeout(() => {
      this.racaTouros();
      this.separaRacasTouros();
      this.visivel = true;
    }, 4000);
  },

  computed: {
    eCowData() {
      return this.$store.getters.getDataEcow;
    },
  },

  methods: {
    racaTouros() {
      //var data = this.eCow;
      var data = this.eCowData;
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
