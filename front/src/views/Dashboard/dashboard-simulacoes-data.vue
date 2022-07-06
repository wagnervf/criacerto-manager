<template>
  <v-container fluid>
    <v-card class="mx-1 mb-1">
      <v-toolbar
        class="pa-0 my-0"
        color="teal lighten-2"
        elevation="0"
        dense
        shrink-on-scroll
        dark
      >
        <v-app-bar-title class="ma-2 pb-0 text-subtitle-1 font-weight-black">
          Total Simulações por Período
          <span class="caption">(Selecione o período)</span>
        </v-app-bar-title>

        <v-spacer />
      </v-toolbar>
      <!-- v-if="visivel" -->
      <v-card-title class="pa-0">
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
                    <span v-if="open">Selecione a data do FIltro</span>
                    <v-row
                      v-else
                      no-gutters
                      style="width: 100%"
                    >
                      <v-col cols="6">
                        <v-icon>mdi-calendar</v-icon> Início:
                        {{ startFormat }}
                      </v-col>
                      <v-col cols="6">
                        <v-icon>mdi-calendar</v-icon> Fim:
                        {{ endFormat }}
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
                  <v-col>
                    <v-menu
                      ref="startMenu"
                      :close-on-content-click="false"
                      v-model="date1"
                      :return-value.sync="date1"
                      offset-y
                      min-width="290px"
                    >
                      <template #activator="{ on, attrs }">
                        <v-text-field
                          v-model="startFormat"
                          label="Início"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        />
                      </template>
                      <v-date-picker
                        v-model="query.start"
                        scrollable
                        locale="pt-BR"
                        @change="date1 = !date1"
                      />
                    </v-menu>
                  </v-col>

                  <v-col>
                    <v-menu
                      ref="endMenu"
                      :close-on-content-click="false"
                      :return-value.sync="date2"
                      v-model="date2"
                      offset-y
                      min-width="290px"
                    >
                      <template #activator="{ on, attrs }">
                        <v-text-field
                          v-model="endFormat"
                          label="Fim"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        />
                      </template>
                      <v-date-picker
                        v-model="query.end"
                        scrollable
                        @change="date2 = !date2"
                        locale="pt-BR"
                      />
                    </v-menu>
                  </v-col>
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
      </v-card-title>
      <v-divider />
      <v-card-text class="pa-4">
        <v-row>
          <v-col
            cols="5"
            class="pa-6 my-6 d-flex justify-start align-baseline"
          >
            <span class="text-h5 mx-4 font-weight"> Total </span>
            <span class="text-h1 font-weight-black">
              {{ totalEcow }}
            </span>
          </v-col>

          <v-col cols="7">
            <v-list dense>
              <v-subheader>Média de Preços</v-subheader>
              <v-list-item two-line>
                <v-list-item-icon class="mr-2 pb-0">
                  <v-avatar
                    color="teal"
                    size="48"
                  >
                    <v-icon dark>
                      {{ media.touro.icon }}
                    </v-icon>
                  </v-avatar>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle>
                    {{ media.touro.title }}
                  </v-list-item-subtitle>
                  <v-list-item-title class="my-2 text-h6">
                    {{ media.touro.value }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mr-2 pb-0">
                  <v-avatar
                    color="teal"
                    size="48"
                  >
                    <v-icon dark>
                      {{ media.semen.icon }}
                    </v-icon>
                  </v-avatar>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle>
                    {{ media.semen.title }}
                  </v-list-item-subtitle>
                  <v-list-item-title class="my-2 text-h6">
                    {{ media.semen.value }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-col
          v-if="visivel"
          class="my-auto"
        >
          <apexchart
            type="bar"
            height="350"
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
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
import mixinUtils from "../../mixins/mixin-utils";
import apexchart from "vue-apexcharts";
export default {
  name: "ComponentRangeData",
  mixins: [mixinUtils],
  components: {
    apexchart,
  },
  data() {
    return {
      panel: [],
      valid: true,
      date1: false,
      date2: false,
      query: {
        start: "",
        end: "",
      },
      filtrado: [],

      racas: [],
      racasSeparadas: {},
      valuesRacasTouros: [],

      media: {
        touro: { title: "Compra Touro", value: 0, icon: "mdi-cow" },
        semen: { title: "Sêmen", value: 0, icon: "mdi-reproduction" },
      },

      series: [
        {
          data: [400, 430, 448],
        },
      ],

      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
          width: "100%",
        },

        plotOptions: {
          bar: {
            borderRadius: 2,
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: true,
        },
        xaxis: {
          categories: [],
        },
      },
      visivel: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.getDados();

      this.racaTouros();
      this.visivel = true;
    }, 2000);

    // Mixins
    this.query.start = this.firstDayMonth();
    this.query.end = this.lastDayMonth();
  },
  computed: {
    eCowData() {
      return this.$store.getters.getDataEcow;
    },

    totalEcow() {
      return this.filtrado.length;
    },

    endFormat() {
      return this.formatDate(this.query.end) || "";
    },
    startFormat() {
      return this.formatDate(this.query.start) || "";
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

    getDados() {
      const data = this.eCowData;
      this.filtrado = Object.values(data).filter((value) => {
        return (
          this.formatDate(value.created) >= this.formatDate(this.query.start) &&
          this.formatDate(value.created) <= this.formatDate(this.query.end)
        );
      });

      this.getMediaValorCompraTouro();
      this.getMediaValorCompraSemen();
    },

    getMediaValorCompraTouro() {
      let value = 0;
      let precoTouro = [];

      this.filtrado.forEach((value) => {
        if (value.preco_touro) precoTouro.push(value.preco_touro);
      });

      for (let index = 0; index < precoTouro.length; index++) {
        value += precoTouro[index];
      }
      // Mixins
      this.media.touro.value = this.formatarMoedaReal(
        value / precoTouro.length
      );
    },

    getMediaValorCompraSemen() {
      let value = 0;
      let precoSemen = [];
      this.filtrado.forEach((value) => {
        if (value.preco_semen) precoSemen.push(value.preco_semen);
        if (value.preco_semen_2) precoSemen.push(value.preco_semen_2);
        if (value.preco_semen_3) precoSemen.push(value.preco_semen_3);
      });

      for (let index = 0; index < precoSemen.length; index++) {
        value += precoSemen[index];
      }
      this.media.semen.value = this.formatarMoedaReal(
        value / precoSemen.length
      );
    },

    racaTouros() {
      const data = this.eCowData;
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

      //this.chartOptions.xaxis.categories = Object.keys(this.racasSeparadas);

      this.series[0].data = Object.values(this.racasSeparadas);
      // console.log(this.series);
      console.log(this.chartOptions.xaxis.categories);
    },

    ordenarPorQtde(estados) {
      return Object.entries(estados)
        .sort(([, a], [, b]) => b - a)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    },
  },
};
</script>
<style scoped>
.v-expansion-panel--active > .v-expansion-panel-header {
  min-height: 44px;
}
</style>
