<template>
  <v-container fluid>
    <v-row>
      <v-expansion-panels
        flat
        dense
        v-model="panel"
        class="pa-0"
      >
        <v-expansion-panel>
          <v-expansion-panel-header
            v-slot="{ open }"
            class="grey lighten-4"
            expand-icon="mdi-filter-menu"
            disable-icon-rotate
          >
            <v-row no-gutters>
              <v-col class="text--secondary">
                <v-fade-transition leave-absolute>
                  <span v-if="open">Selecione o estado</span>
                  <v-row
                    v-else
                    no-gutters
                    style="width: 100%"
                  >
                    <v-col cols="6">
                      estados
                    </v-col>
                  </v-row>
                </v-fade-transition>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pa-0">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-row
                justify="space-around"
                class="my-2"
              >
                <v-col />
                <v-col class="d-flex justify-end">
                  <v-btn
                    :disabled="!valid"
                    class="ma-2"
                    fab
                    dark
                    small
                    elevation="0"
                    color="teal lighten-2"
                    @click="validate"
                    title="Filtrar"
                  >
                    <v-icon dark>
                      mdi-check
                    </v-icon>
                  </v-btn>

                  <v-btn
                    class="ma-2"
                    fab
                    dark
                    small
                    elevation="0"
                    color="error lighten-2"
                    @click="panel = []"
                    title="Cancelar Filtro"
                  >
                    <v-icon dark>
                      mdi-close
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    <v-row>
      <v-col
        v-if="visivel"
        class="ma-auto"
      >
        <ApexChart
          type="bar"
          height="300"
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
        title: {
          text: "Raças de Touros Simuladas",
          align: "center",
          offsetX: 30,
        },
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
              fontSize: "14px",
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
