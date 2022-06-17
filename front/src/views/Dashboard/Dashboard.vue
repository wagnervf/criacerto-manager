<template>
  <v-container fluid>
    <div class="dashboard-page">
      <v-row>
        <v-row>
          <v-col
            lg="4"
            sm="6"
            md="5"
            cols="12"
          >
            <dashboardCardTotalSimulacoesVue />
          </v-col>

          <v-col
            lg="4"
            sm="6"
            md="5"
            cols="12"
          >
            <dashboardTiposTourosVue />
          </v-col>

          <v-col
            lg="4"
            sm="6"
            md="7"
            cols="12"
          >
            <v-container fluid>
              <v-card
                class="mx-1 mb-1"
                style="height: 294px"
              >
                <v-card-title class="pa-6 pb-3">
                  <p>App Performance</p>
                  <v-spacer />
                  <v-menu>
                    <template #activator="{ on, attrs }">
                      <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon color="textColor">
                          mdi-dots-vertical
                        </v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                        v-for="(item, i) in mock.menu"
                        :key="i"
                        @click="() => {}"
                      >
                        <v-list-item-title>{{ item }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-card-title>
                <v-card-text class="pa-6 pt-0">
                  <v-row
                    no-gutters
                    class="pb-5"
                  >
                    <div class="mr-4">
                      <v-icon
                        color="primary"
                        class="ml-n2"
                      >
                        mdi-circle-medium
                      </v-icon>
                      <span class="card-light-grey">Integration</span>
                    </div>
                    <div>
                      <v-icon color="warning">
                        mdi-circle-medium
                      </v-icon>
                      <span class="card-light-grey">SDK</span>
                    </div>
                  </v-row>
                  <v-row
                    no-gutters
                    class="pb-3"
                  >
                    <v-col>
                      <div class="text-h6 card-light-grey font-weight-regular">
                        Integration
                      </div>
                      <v-progress-linear
                        :value="value"
                        background-color="#ececec"
                        color="primary"
                      />
                    </v-col>
                  </v-row>
                  <v-row
                    no-gutters
                    class="pb-1"
                  >
                    <v-col>
                      <div class="text-h6 card-light-grey font-weight-regular">
                        SDK
                      </div>
                      <v-progress-linear
                        :value="value2"
                        background-color="#ececec"
                        color="warning"
                      />
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-container>
          </v-col>
        </v-row>

        <v-col cols="12">
          <dashboardChartBarVue />
        </v-col>

        <v-col cols="12">
          <dashboardCardsVue />
        </v-col>

        <v-col cols="12">
          <dashboardChartColumnVue />
        </v-col>

        <v-col
          lg="3"
          sm="6"
          md="5"
          cols="12"
        >
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-6 pb-3">
              <p>Visits Today</p>
              <v-spacer />
              <v-menu>
                <template #activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon color="textColor">
                      mdi-dots-vertical
                    </v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, i) in mock.menu"
                    :key="i"
                    @click="() => {}"
                  >
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-card-text class="pa-6 pt-0">
              <v-row
                no-gutters
                class="pb-5"
              >
                <v-col
                  cols="5"
                  class="my-auto"
                >
                  <span
                    class="font-weight-medium card-dark-grey"
                    style="font-size: 24px"
                  >12, 678</span>
                </v-col>
                <v-col cols="6">
                  <v-card id="chart" />
                </v-col>
              </v-row>

              <v-row
                no-gutters
                class="justify-space-between pb-3"
              >
                <v-col cols="5">
                  <div class="card-light-grey">
                    Registrations
                  </div>
                  <div class="text-h6 card-dark-grey font-weight-regular">
                    860
                  </div>
                </v-col>
                <v-col cols="3">
                  <div class="card-light-grey">
                    Sign Out
                  </div>
                  <div class="text-h6 card-dark-grey font-weight-regular">
                    32
                  </div>
                </v-col>
                <v-col
                  cols="4"
                  xl="2"
                >
                  <div class="text-right card-light-grey">
                    Rate
                  </div>
                  <div
                    class="text-right text-h6 card-dark-grey font-weight-regular"
                  >
                    3.25%
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-data-table
            :headers="headers"
            :items="eCowData"
            item-key="code"
            sort-by="created"
            group-by="type"
            class="elevation-1 col"
            :items-per-page="itemsPerPage"
            :sort-desc="[false]"
            multi-sort
            show-group-by
          >
            <!-- eslint-disable-next-line vue/valid-v-slot -->
            <template #group.summary="props">
              <td colspan="4">
                <v-chip
                  class="ma-2"
                  color="primary"
                >
                  {{ props.group }} - ({{ props.items.length }})
                </v-chip>
              </td>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import DashboardService from "@/services/DashboardServices";
import mock from "./mock";
// import eCow from "./e-cow";
import dashboardCardsVue from "./dashboard-cards.vue";
import dashboardChartColumnVue from "./dashboard-chart-column.vue";
import dashboardChartBarVue from "./dashboard-chart-bar.vue";
import dashboardCardTotalSimulacoesVue from "./dashboard-card-total-simulacoes.vue";
// import dashboardTableSimpleVue from "./dashboard-table-simple.vue";
import dashboardTiposTourosVue from "./dashboard-tipos-touros.vue";
// import ApexChart from "vue-apexcharts";

export default {
  name: "DashboardView",
  components: {
    dashboardCardsVue,
    dashboardChartColumnVue,
    // dashboardTableSimpleVue,
    dashboardTiposTourosVue,
    dashboardChartBarVue,
    dashboardCardTotalSimulacoesVue,
    // ApexChart,
  },
  data() {
    return {
      mock,
      eCow: [],
      apexLoading: false,
      value: this.getRandomInt(10, 90),
      value2: this.getRandomInt(10, 90),
      mainApexAreaSelect: "Daily",
      montaNatural: [],
      iatf: [],
      iatf2: [],
      iatf3: [],
      headers: [
        { text: "Tipo", align: "start", value: "type" },
        { text: "Raça Touro", value: "raca_touro", align: "right" },
        { text: "Estado", value: "state", align: "right" },
        { text: "Cidade", value: "city", align: "right" },
        { text: "Data", value: "created", align: "right" },
      ],
      itemsPerPage: 20,
    };
  },

  computed: {
    eCowCount() {
      return Object.keys(this.eCow).length;
    },

    montaNaturalLength() {
      return this.montaNatural.length;
    },

    eCowData() {
      return Object.values(this.eCow);
    },
  },

  mounted() {
    this.getDataEcowApi();
    
    setTimeout(() => {
      this.apexLoading = true;
      this.eCowSimulations();
      
    }, 1000);
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    getRandomInt(min, max) {
      const rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    },

    eCowSimulations() {
      const data = this.eCow;
      Object.values(data).forEach((value) => {
        switch (value.type) {
          case "Monta Natural":
            this.montaNatural.push(value);
            break;
          case "IATF + RT":
            this.iatf.push(value);
            break;

          case "2 IATF + RT":
            this.iatf2.push(value);
            break;

          case "3 IATF":
            this.iatf3.push(value);
            break;

          default:
            break;
        }
      });

      return [];
    },

    ...mapState(["SetDataCow"]),

    async getDataEcowApi() {
      try {
        const response = await DashboardService.getDadosEcow();
        if (response.status == 200) {
          if (response.data[0]._id) {
            delete response.data[0]._id;
          }
          const result = response.data[0];

          this.$store.commit("SET_DATA_ECOW", result);

          this.eCow = this.$store.getters.getDataEcow;
        } else {
          console.log("Erro ao carregar dados");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.v-row-group__header > td {
  font-weight: bold;
  font-size: 18px !important;
}
.v-row-group__summary {
  text-align: end;
  background: none !important;
}
</style>
