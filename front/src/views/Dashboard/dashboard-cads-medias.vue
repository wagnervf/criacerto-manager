<template>
  <v-container fluid>
    <v-card
      class="transparent"
      elevation="0"
    >
      <v-col>
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
                      v-for="(item, i) in menu"
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
      </v-col>
    </v-card>
  </v-container>
</template>
<script>
import mixinUtils from "../../mixins/mixin-utils";
import typesSimulations from "../../assets/json/typesSimulations.json";

export default {
  name: "ViewDashboardCardsMedias",
  mixins: [mixinUtils],
  components: {},
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
      value: this.getRandomInt(10, 90),
      value2: this.getRandomInt(10, 90),
      filtrado: [],
      menu: {
        desc: "open",
      },
      media: {
        numero_vaca: {
          title: "Número Vacas à Inseminar",
          value: 0,
          icon: "mdi-cow",
        },
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.getMediaNumVacas(this.eCowFilteredPeriodo);
      this.visivel = true;
      this.getDadosSeparados();
    }, 1500);
    // console.log(this.value);
    // console.log(this.value2);
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
    getRandomInt(min, max) {
      const rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    },

    getDadosSeparados() {
      let types = {};
      let data = this.typosSimulacoesSeparadas;

      Object.values(data).forEach((value) => {
        console.log(value);
        if (this.typesSimulations.monta == value.type)
          types.monta = this.getMediaNumVacas(value.numero_de_vacas);
      });

      console.log(types);
    },

    getMediaNumVacas(data) {
      Object.assign(this.filtrado, data);
      let soma = 0;
      let numeroVaca = [];

      this.filtrado.forEach((value) => {
        if (value.numero_de_vacas) numeroVaca.push(value.numero_de_vacas);
      });

      for (let index = 0; index < numeroVaca.length; index++) {
        soma += numeroVaca[index];
      }

      return soma;

      //this.media.numero_vaca.value = soma / numeroVaca.length;

      //console.log(this.media.numero_vaca);
    },
  },

  watch: {
    // eCowFilteredPeriodo(value) {
    //   this.getData(value);
    // },
  },
};
</script>
