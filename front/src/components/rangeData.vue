<template>
  <v-container fluid>
    <v-card
      class="mx-1 mb-1"
      style="min-height: 250px"
    >
      <v-toolbar
        class="pa-0 my-1"
        color="teal lighten-2"
        elevation="0"
        dense
        shrink-on-scroll
        dark
      >
        <v-app-bar-title class="ma-2 text-subtitle-1 font-weight-black">
          Total Simulações por Período
        </v-app-bar-title>

        <v-spacer />
      </v-toolbar>
      <!-- v-if="visivel" -->
      <v-card-text class="pa-4 ma-2 justify-space-between">
        <v-col class="pa-2 d-flex justify-end align-baseline">
          <span class="text-h5 mx-4 font-weight"> Total </span>
          <span class="text-h1 font-weight-black">
            {{ totalEcow }}
          </span>
        </v-col>
      </v-card-text>
    </v-card>

    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header v-slot="{ open }">
          <v-row no-gutters>
            <v-col cols="6">
              Selecione a data de início e fim
            </v-col>
            <v-col class="text--secondary">
              <v-fade-transition leave-absolute>
                <span v-if="open">Filtrar simulações por data.</span>
                <v-row
                  v-else
                  no-gutters
                  style="width: 100%"
                >
                  <v-col cols="6">
                    Início: {{ query.start || "" }}
                  </v-col>
                  <v-col cols="6">
                    Fim: {{ query.end || "" }}
                  </v-col>
                </v-row>
              </v-fade-transition>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-row
              justify="space-around"
              no-gutters
            >
              <v-col
                cols="5"
                class="mx-2"
              >
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
                      v-model="query.start"
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

              <v-col
                cols="5"
                class="mx-2"
              >
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
                      v-model="query.end"
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
                  @click="reset"
                  class="ma-2"
                  outlined
                  color="error"
                >
                  Cancelar
                </v-btn>

                <v-btn
                  :disabled="!valid"
                  class="ma-2"
                  outlined
                  color="teal"
                  @click="validate"
                >
                  Salvar
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>
<script>
import mixinUtils from "../mixins/mixin-utils";
export default {
  name: "ComponentRangeData",
  mixins: [mixinUtils],
  data() {
    return {
      valid: true,
      date1: false,
      date2: false,
      query: {
        start: "01/07/2022",
        end: "29/07/2022",
      },
      filtrado: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.getDados();
    }, 1000);
  },
  computed: {
    eCowData() {
      return this.$store.getters.getDataEcow;
    },

    totalEcow() {
      return this.filtrado.length;
    },
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        //console.log(this.query);
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

      // Object.values(data).forEach((value) => {
      //   console.log(this.formatDate(value.created));
      //   if (
      //     this.formatDate(value.created) == this.formatDate(this.query.start)
      //   ) {
      //     this.filtrado.push(value);
      //   }
      // });

      console.log(this.filtrado);
    },
  },
};
</script>
