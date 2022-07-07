<template>
  <v-container fluid>
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
                    <span class="text-subtitle-2 ma-2">
                      <v-icon>mdi-calendar</v-icon> Período Filtrado:
                    </span>
                    <span class="text-subtitle-1 ma-1">
                      <v-chip :ripple="false">
                        {{ startFormatString }}
                      </v-chip>
                      -
                      <v-chip :ripple="false">
                        {{ endFormatString }}
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
      panel: [],
      valid: true,
      date1: false,
      date2: false,
      query: {
        start: "",
        end: "",
      },
      filtrado: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.getDados();
    }, 500);

    // Mixins
    this.query.start = this.firstDayMonth();
    this.query.end = this.lastDayMonth();
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

    startFormatString() {
      return this.formatDateString(this.query.start) || "";
    },
    endFormatString() {
      return this.formatDateString(this.query.end) || "";
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
