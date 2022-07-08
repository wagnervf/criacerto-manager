<template>
  <v-container fluid>
    <v-card>
      <v-expansion-panels
        v-model="panel"
        class="ma-0 pa-0 trasnparent"
      >
        <v-expansion-panel>
          <v-expansion-panel-header
            v-slot="{ open }"
            expand-icon="mdi-filter-menu"
            disable-icon-rotate
            color="grey lighten-3"
          >
            <v-row no-gutters>
              <v-col class="text--secondary">
                <v-fade-transition leave-absolute>
                  <span v-if="open">Selecione a data do Filtro</span>
                  <v-row
                    v-else
                    no-gutters
                    style="width: 100%"
                  >
                    <v-col
                      cols="6"
                      class="d-flex justify-start"
                    >
                      <!-- <span class="text-subtitle-2 ma-2">
                        Período Filtrado:
                      </span> -->
                      <span class="text-subtitle-1 ma-1">
                        <v-icon class="mx-2">mdi-calendar-filter</v-icon>
                        <v-chip :ripple="false">
                          {{ query.start | formatDateString }}
                        </v-chip>
                        -
                        <v-chip :ripple="false">
                          {{ query.end | formatDateString }}
                        </v-chip>
                      </span>
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
                <v-col cols="7">
                  <v-row>
                    <v-col cols="4">
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
                            prepend-inner-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            outlined
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

                    <v-col cols="4">
                      <v-menu
                        ref="endMenu"
                        :close-on-content-click="false"
                        :return-value.sync="date2"
                        v-model="date2"
                        offset-y
                      >
                        <template #activator="{ on, attrs }">
                          <v-text-field
                            v-model="endFormat"
                            label="Fim"
                            prepend-inner-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            outlined
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

                    <v-col class="ma-0 mt-2 pa-0">
                      <v-btn
                        :disabled="!valid"
                        class="mt-4 pa-0"
                        text
                        dark
                        elevation="0"
                        color="teal lighten-2"
                        @click="validate"
                        title="Filtrar"
                      >
                        <v-icon dark>
                          mdi-filter-check
                        </v-icon>
                      </v-btn>

                      <!-- <v-btn
                        class="ma-0 pa-0"
                        text
                        elevation="0"
                        color="error darken-1"
                        @click="panel = []"
                        title="Cancelar Filtro"
                      >
                        <v-icon class="ma-0 pa-0">
                          mdi-close-circle
                        </v-icon>
                      </v-btn> -->
                    </v-col>
                  </v-row>
                </v-col>

                <v-col
                  class="d-flex"
                  cols="5"
                >
                  <v-combobox
                    v-model="query.estado"
                    :items="items"
                    :search-input.sync="search"
                    hide-selected
                    label="Filtrar por Estados"
                    persistent-hint
                    small-chips
                    hide-details
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-container>
</template>
<script>
import mixinUtils from "../../mixins/mixin-utils";
export default {
  name: "ViewDashBoardFilter",
  mixins: [mixinUtils],
  components: {},
  data() {
    return {
      panel: 0,
      search: null,
      valid: true,
      date1: false,
      date2: false,
      query: {
        start: "",
        end: "",
        estado: "TODOS",
      },
      filtrado: [],
      items: ["Foo", "Bar", "Fizz", "Buzz"],
    };
  },
  mounted() {
    setTimeout(() => {
      this.getDados();
    }, 500);

    // Mixins
    this.query.start = this.firstDayMonth();
    //this.query.end = this.lastDayMonth();
    this.query.end = "2022-07-10";
  },
  computed: {
    eCowData() {
      return this.$store.getters.getDataEcow;
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
      //"Busca todos os dados e Filtra");
      const data = this.eCowData;
      this.filtrado = Object.values(data).filter((value) => {
        return (
          this.formatDate(value.created) >= this.formatDate(this.query.start) &&
          this.formatDate(value.created) <= this.formatDate(this.query.end)
        );
      });

      this.$store.commit("SET_DADOS_FILTRADOS_PERIODO", this.filtrado);
    },
  },
};
</script>
<style scoped>
.v-expansion-panel--active > .v-expansion-panel-header {
  min-height: 44px;
}
</style>
