<template>
  <div>
    <!-- <v-card-title class="pa-6 pb-0">
        <v-row no-gutters>
          <v-col
            cols="12"
            class="d-flex align-center"
          >
            <p>Simulações mais utilizadas</p>
          </v-col>
        </v-row>
      </v-card-title> -->

    <v-col v-if="visivel">
      <v-progress-linear
        indeterminate
        color="cyan"
        :query="true"
      />
    </v-col>

    <v-row v-else>
      <v-col>
        <v-card class="pa-4">
          <ApexChart
            type="bar"
            height="350"
            :options="chartOptions"
            :series="series"
          />
        </v-card>
      </v-col>

      <v-col>
        <v-card class="pa-6 pt-4">
          <ApexChart
            type="treemap"
            height="340"
            :options="radialTreeMapOptions"
            :series="radialTreeMapOptions.series"
          />
        </v-card>
        <pre>{{ this.radialTreeMapOptions.series[0] }}</pre>
      </v-col>
    </v-row>
  </div>
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
      types: {
        montaNatural: [],
        iatf: [],
        iatf_2: [],
        iatf_3: [],
      },
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
      chartOptions: {
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

      radialTreeMapOptions: {
        series: [
          {
            data: [],
          },
        ],
        chart: {
          height: 350,
          type: "treemap",
        },
        legend: {
          show: false,
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
          formatter: function (text, op) {
            return [text, op.value];
          },
          offsetY: -4,
        },
        colors: ["#008ffb", "#00e396", "#feb019", "#ff4560"],
        plotOptions: {
          treemap: {
            distributed: true,
            enableShades: false,
          },
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
      visivel: false,
      todosDados: [],
      meses: {
        jan: 0,
        fev: 0,
        mar: 0,
        abr: 0,
        mai: 0,
        jun: 0,
        jul: 0,
        ago: 0,
        set: 0,
        out: 0,
        nov: 0,
        dez: 0,
      },

      tipos: {
        monta: [],
        iatf: [],
        iatf_2: [],
        iatf_3: [],
      },
    };
  },

  mounted() {
    setTimeout(() => {
      this.getData();
      this.visivel = true;
    }, 1500);
  },
  computed: {
    eCowFilteredPeriodo() {
      return this.$store.getters.geteCowFilteredPeriodo;
    },
  },
  methods: {
    getData() {
      this.todosDados = [];
      this.series[0].data = [];
      this.series[1].data = [];
      this.series[2].data = [];
      this.series[3].data = [];
      this.radialTreeMapOptions.series[0].data = [];
      Object.assign(this.todosDados, this.eCowFilteredPeriodo);

      //Primeiro Filtro por Data
      this.filterTypeSimulacao(this.todosDados);
    },

    filterTypeSimulacao(data) {
      Object.values(data).forEach((value) => {
        this.switchTypes(value);
        return this.types;
      });

      this.reload();

      this.separaMonta();
      this.separaIatf();
      this.separaIatf2();
      this.separaIatf3();
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
    },

    separaMonta() {
      this.series[0].data = this.separaSimulacaoPorMes(this.types.montaNatural);
    },

    separaIatf() {
      this.series[1].data = this.separaSimulacaoPorMes(this.types.iatf);
    },

    separaIatf2() {
      this.series[2].data = this.separaSimulacaoPorMes(this.types.iatf_2);
    },

    separaIatf3() {
      this.series[3].data = this.separaSimulacaoPorMes(this.types.iatf_3);
    },

    separaRadialBar(value) {
      Object.keys(value).map((val) => {
        if (val == "montaNatural") {
          this.radialTreeMapOptions.series[0].data.push({
            x: "Monta Natural",
            y: value.montaNatural.length,
          });
        }
        if (val == "iatf") {
          this.radialTreeMapOptions.series[0].data.push({
            x: "IATF",
            y: value.iatf.length,
          });
        }
        if (val == "iatf_2") {
          this.radialTreeMapOptions.series[0].data.push({
            x: "2 IATF",
            y: value.iatf_2.length,
          });
        }
        if (val == "iatf_3") {
          this.radialTreeMapOptions.series[0].data.push({
            x: "3 IATF",
            y: value.iatf_3.length,
          });
        }
      });

      console.log(this.radialTreeMapOptions.series[0]);
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
