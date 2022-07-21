<template>
  <v-container fluid>
    <div v-if="visivel">
      <v-progress-linear
        indeterminate
        color="cyan"
        :query="true"
      />
    </div>

    <div v-else>
      <v-row>
        <v-col cols="8">
          <v-card class="pa-4">
            <ApexChart
              type="bar"
              height="350"
              :options="barOptions"
              :series="barOptions.series"
            />
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card class="pa-6 pt-4">
            <ApexChart
              type="polarArea"
              height="400"
              :options="donutOptions"
              :series="donutOptions.series"
            />
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import ApexChart from "vue-apexcharts";
import typesSimulations from "../../assets/json/typesSimulations.json";
import mixinUtils from "../../mixins/mixin-utils";
export default {
  name: "DashboardChartColumn",
  components: {
    ApexChart,
  },
  mixins: [mixinUtils],
  data() {
    return {
      typesSimulations: typesSimulations,
      visivel: false,
      types: {
        montaNatural: [],
        iatf: [],
        iatf_2: [],
        iatf_3: [],
      },

      barOptions: {
        series: [
          {
            name: "Monta Natural",
            data: [],
          },
          {
            name: "IATF+RT",
            data: [],
          },
          {
            name: "IATF+2RT",
            data: [],
          },
          {
            name: "IATF+3RT",
            data: [],
          },
        ],
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "65%",
            endingShape: "rounded",
          },
        },
        title: {
          text: "Simulações por Mês",
          align: "center",
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
          style: {
            fontSize: "14px",
          },
          y: {
            formatter(val) {
              return val;
            },
          },
        },
      },

      donutOptions: {
        series: [],
        labels: [],
        chart: {
          height: 400,
          type: "polarArea",
        },
        title: {
          text: "Tipos de Simulações",
          align: "center",
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "18px",
          },
          offsetY: -4,
        },

        legend: {
          position: "bottom",
        },

        stroke: {
          colors: ["#fff"],
        },
        fill: {
          opacity: 0.8,
        },
        yaxis: {
          show: false,
        },

        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: false,
              },
            },
          },
        ],
      },
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
  },
  methods: {
    getData(value) {
      this.reset();
      Object.values(value).forEach((value) => {
        this.switchTypes(value);
      });

      this.reload();
      this.separaTipos();
      this.separaRadialBar(this.types);
    },

    switchTypes(value) {
      switch (value.type) {
        case this.typesSimulations.monta:
          this.types.montaNatural.push(value);
          break;

        case this.typesSimulations.iatf:
          this.types.iatf.push(value);
          break;

        case this.typesSimulations.iatf_2:
          this.types.iatf_2.push(value);
          break;

        case this.typesSimulations.iatf_3:
          this.types.iatf_3.push(value);
          break;
      }

      this.$store.commit("SET_TIPOS_SIMULACOES_SEPARADAS", this.types);
    },

    separaTipos() {
      this.barOptions.series[0].data = this.separaSimulacaoPorMes(
        this.types.montaNatural
      );
      this.barOptions.series[1].data = this.separaSimulacaoPorMes(
        this.types.iatf
      );
      this.barOptions.series[2].data = this.separaSimulacaoPorMes(
        this.types.iatf_2
      );
      this.barOptions.series[3].data = this.separaSimulacaoPorMes(
        this.types.iatf_3
      );
    },

    separaRadialBar(value) {
      let obj = {};
      Object.keys(value).map((val) => {
        if (val == "montaNatural")
          Object.assign(obj, { "Monta Natural": value.montaNatural.length });
        if (val == "iatf") Object.assign(obj, { IATF: value.iatf.length });
        if (val == "iatf_2")
          Object.assign(obj, { "2 IATF": value.iatf_2.length });
        if (val == "iatf_3")
          Object.assign(obj, { "3 IATF": value.iatf_3.length });
      });

      this.donutOptions.labels = Object.keys(obj);
      this.donutOptions.series = Object.values(obj);
    },

    reset() {
      this.types.montaNatural = [];
      this.types.iatf = [];
      this.types.iatf_2 = [];
      this.types.iatf_3 = [];
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
      this.getData(value);
    },
  },
};
</script>
