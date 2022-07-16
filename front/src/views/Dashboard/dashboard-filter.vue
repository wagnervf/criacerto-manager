<template>
  <v-container fluid>
    <v-card class="mb-4">
      <v-expansion-panels v-model="panel" class="ma-0 pa-0 trasnparent">
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
                  <v-row v-else no-gutters style="width: 100%">
                    <v-col cols="6" class="d-flex justify-start">
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
          <v-expansion-panel-content class="pa-2 py-4">
            <v-progress-linear
              indeterminate
              color="teal"
              :query="true"
              v-if="visivel"
            />
            <v-form v-else ref="form" v-model="valid" lazy-validation>
              <v-col cols="12" class="py-0 pt-2">
                <v-row>
                  <v-col cols="5">
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
                          flat
                          dense
                          filled
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

                  <v-col cols="5">
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
                          flat
                          dense
                          filled
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
                </v-row>

                <v-row>
                  <v-col cols="8" class="py-0">
                    <v-combobox
                      v-model="query.estado"
                      :items="listaEstados"
                      :search-input.sync="search"
                      @change="setFilters()"
                      hide-selected
                      label="Filtrar por Estados"
                      persistent-hint
                      small-chips
                      hide-details
                      filled
                      dense
                    />
                  </v-col>
                  <v-col cols="2">
                    <v-btn
                      class="mb-4"
                      dark
                      color="teal lighten-2"
                      @click="validate"
                      title="Filtrar"
                      large
                    >
                      <v-icon dark left> mdi-filter-check </v-icon>
                      Filtrar
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
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
      allEcow: [],
      query: {
        start: this.firstDayMonth(),
        end: this.lastDayMonth(),
        estado: "Todos",
      },
      filtrado: [],
      listaEstados: [],
      visivel: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.getDados();
    }, 500);
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
      this.allEcow = [];
      this.allEcow = data;
      this.setFilters();
    },

    setFilters() {
      let data = [];
      //Primeiro Filtro por Data
      data = this.filterByDate(this.allEcow);

      //Segundo Filtro por Estado
      this.filtrado = this.filterByEstado(data);

      //Salva Store
      this.setFilterByEstate(this.filtrado);

      this.separaEstados(this.filtrado);
    },

    filterByDate(data) {
      return Object.values(data).filter((value) => {
        return (
          this.formatDate(value.created) >= this.formatDate(this.query.start) &&
          this.formatDate(value.created) <= this.formatDate(this.query.end)
        );
      });
    },

    filterByEstado(data, filter) {
      filter = this.query.estado;
      if (filter == "" || filter == "Todos") return data;

      return Object.values(data).filter((value) => {
        return value.state == filter;
      });
    },

    // Pega o nome dos Estados Filtrados
    separaEstados(data) {
      let estados = {};
      let result = [];

      Object.values(data).forEach((value) => {
        result.push(value.state);
      });

     this.listaEstados = [];

      result.forEach((x) => {
        estados[x] = (estados[x] || 0) + 1;
      });

      console.log(estados);

      this.listaEstados = Object.keys(estados);
      this.listaEstados.push("Todos");
      this.setEstadosExistentesStore(this.listaEstados);
    },

    setEstadosExistentesStore(value) {
      this.$store.commit("SET_ESTADO_EXISTENTES", Object.keys(value));
    },

    setFilterByEstate(value) {
ijsqwqj      this.$store.commit("SET_DADOS_FILTRADOS_PERIODO", value);
      this.$store.commit("SET_DADOS_DO_FILTRADO", this.query);
      this.reload();
    },

    reload() {
      this.visivel = true;
      setTimeout(() => {
        this.visivel = false;
      }, 500);
    },
  },
};
</script>
<style scoped>
.v-expansion-panel--active > .v-expansion-panel-header {
  min-height: 44px;
}
</style>
