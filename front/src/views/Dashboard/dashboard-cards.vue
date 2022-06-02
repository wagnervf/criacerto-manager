<template>
  <div>
    <v-row>
      
      <v-col lg="4" sm="6" cols="12">
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-6 pb-3">
            <p>Light Blue</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="textColor">mdi-dots-vertical</v-icon>
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
            <v-row no-gutters>
              <v-col cols="6" class="my-auto">
                <span class="" style="font-size: 42px"
                  >199 <span class="caption error--text">-3.7%</span>
                </span>
              </v-col>
              <v-col cols="6">
                <ApexChart
                  height="100"
                  type="bar"
                  v-if="apexLoading"
                  :options="mock.apexBar1.options"
                  :series="mock.apexBar1.series"
                ></ApexChart>
              </v-col>
            </v-row>
            <v-row no-gutters class="justify-space-between">
              <div>
                <div class="subtext">
                  33 <v-icon color="success"> mdi-arrow-top-right</v-icon>
                </div>
                <div class="subtext-index">Registrations</div>
              </div>
              <div>
                <div class="subtext">
                  3.25%<v-icon color="success"> mdi-arrow-top-right</v-icon>
                </div>
                <div class="subtext-index">Bounce Rate</div>
              </div>
              <div>
                <div class="subtext">
                  330<v-icon color="error"> mdi-arrow-bottom-right</v-icon>
                </div>
                <div class="subtext-index">Views</div>
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="4" sm="6" cols="12">
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-6 pb-3">
            <p>Sing App</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="textColor">mdi-dots-vertical</v-icon>
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
            <v-row no-gutters>
              <v-col cols="7" class="my-auto">
                <span class="" style="font-size: 42px"
                  >121 <span class="error--text caption">-3.2%</span>
                </span>
              </v-col>
              <v-col cols="5">
                <ApexChart
                  height="100"
                  type="bar"
                  v-if="apexLoading"
                  :options="mock.apexBar2.options"
                  :series="mock.apexBar2.series"
                ></ApexChart>
              </v-col>
            </v-row>
            <v-row no-gutters class="justify-space-between">
              <div>
                <div class="subtext">
                  15<v-icon color="success"> mdi-arrow-top-right</v-icon>
                </div>
                <div class="subtext-index">Registrations</div>
              </div>
              <div>
                <div class="subtext">
                  3.01%<v-icon color="success"> mdi-arrow-top-right</v-icon>
                </div>
                <div class="subtext-index">Bounce Rate</div>
              </div>
              <div>
                <div class="subtext">
                  302<v-icon color="success"> mdi-arrow-top-right</v-icon>
                </div>
                <div class="subtext-index">Views</div>
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="4" sm="6" cols="12">
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-6 pb-3">
            <p>RNS</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="textColor">mdi-dots-vertical</v-icon>
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
            <v-row no-gutters>
              <v-col cols="7" class="my-auto">
                <span class="" style="font-size: 42px"
                  >175 <span class="error--text caption">-3.1%</span>
                </span>
              </v-col>
              <v-col cols="5">
                <ApexChart
                  height="100"
                  type="bar"
                  v-if="apexLoading"
                  :options="mock.apexBar3.options"
                  :series="mock.apexBar3.series"
                ></ApexChart>
              </v-col>
            </v-row>
            <v-row no-gutters class="justify-space-between">
              <div>
                <div class="subtext">
                  31 <v-icon color="error"> mdi-arrow-bottom-right</v-icon>
                </div>
                <div class="subtext-index">Registrations</div>
              </div>
              <div>
                <div class="subtext">
                  3.23%<v-icon color="success"> mdi-arrow-top-right</v-icon>
                </div>
                <div class="subtext-index">Bounce Rate</div>
              </div>
              <div>
                <div class="subtext">
                  301<v-icon color="success"> mdi-arrow-top-right</v-icon>
                </div>
                <div class="subtext-index">Views</div>
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import mock from "./mock";
import ApexChart from "vue-apexcharts";

export default {
  name: "Dashboard-Cards",
  components: {
    ApexChart,
  },
  data() {
    return {
      mock,
      apexLoading: false,
      value: this.getRandomInt(10, 90),
      value2: this.getRandomInt(10, 90),
    };
  },
  mounted() {
    setTimeout(() => {
      this.apexLoading = true;
    });
  },
  methods: {
    getRandomInt(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    },
  },
};
</script>

<style></style>
