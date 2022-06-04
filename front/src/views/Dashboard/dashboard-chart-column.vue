<template>
  <div>
    <v-card class="mx-1 mb-1">
            <v-card-title class="pa-6 pb-0">
              <v-row no-gutters>
                <v-col
                  cols="7"
                  sm="4"
                  md="4"
                  lg="5"
                  class="d-flex align-center"
                >
                  <p>Quantitativo de Simulações ano 2021</p>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text class="pa-6">
              <v-row>
                <v-col>
                  <ApexChart
                    type="bar"
                    height="350"
                    :options="chartOptions"
                    :series="series"
                  ></ApexChart>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
  </div>
</template>

<script>
import ApexChart from "vue-apexcharts";

export default {
  name: "Dashboard-Chart-Column",
  components: { 
    ApexChart,
  },
data() {
  return {
     series: [
        {
          name: "Monta Natural",
          data: [20, 28, 36, 38, 40, 35, 68, 42, 59, 38, 40, 50],
        },
        {
          name: "IATF+RT",
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 25],
        },
        {
          name: "IATF+2RT",
          data: [30, 25, 36, 30, 45, 35, 60, 52, 55, 36, 39, 69],
        },
        {
          name: "IATF+3RT",
          data: [30, 25, 36, 38, 45, 35, 68, 52, 59, 38, 45, 58],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "75%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez",
          ],
          lines: {
            show: true,
          },
        },
        yaxis: {
          title: {
            text: "Quantidade",
          },
        },

        fill: {
          opacity: 2,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
  }
},
}
</script>

<style>

</style>