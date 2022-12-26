<template>
  <v-container
    fluid
    class="pa-0"
  >
    <v-card class="mb-4">
      <v-expansion-panels
        v-model="panel"
        class="ma-0 pa-0 transparent"
      >
        <v-expansion-panel>
          <v-card-title class="pa-0">
            <v-expansion-panel-header
              disable-icon-rotate
              color="grey lighten-3"
              title="Filtrar Dados"
            >
              <template #actions>
                <v-icon> mdi-filter </v-icon>
              </template>
              Filtrar Dados
              <!-- <v-row no-gutters>
              <v-col class="text--secondary">
                <v-fade-transition leave-absolute>
                  <span v-if="open">Selecione a data do Filtro</span>
                  <v-row v-else>
                    <cardFilteredVue />
                  </v-row>
                </v-fade-transition>
              </v-col>
            </v-row> -->
            </v-expansion-panel-header>
          </v-card-title>

          <v-expansion-panel-content class="pa-2 pt-4 pb-0">
            <v-progress-linear
              indeterminate
              color="teal"
              :query="true"
              v-if="visivel"
            />
            <v-form
              v-else
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    md="6"
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
                          v-model="startFormat"
                          label="Início"
                          prepend-inner-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          flat
                          dense
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

                  <v-col
                    cols="12"
                    md="6"
                  >
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
                </v-row>

                <v-row class="pt-1 pb-0">
                  <v-col
                    class="py-0"
                    cols="12"
                    md="12"
                  >
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
                      dense
                      outlined
                    />
                  </v-col>
                </v-row>

                <v-row class="pt-4 pb-0">
                  <v-col class="d-flex justify-end pb-0">
                    <v-btn
                      class="mb-4"
                      dark
                      color="teal lighten-2"
                      @click="validate"
                      title="Filtrar"
                      large
                    >
                      <v-icon
                        dark
                        left
                      >
                        mdi-filter-check
                      </v-icon>
                      Filtrar
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-container>
</template>
<script>
import mixinUtils from "../../mixins/mixin-utils";
// import cardFilteredVue from "../../components/cardFiltered.vue";
export default {
  name: "ViewDashBoardFilter",
  mixins: [mixinUtils],
  components: {
    //   cardFilteredVue,
  },
  data() {
    return {
      panel: 0,
      search: null,
      valid: true,
      date1: false,
      date2: false,
      allSimulacoes: [],
      query: {
        start: "2022-01-01",
        // start: this.firstDayMonth(),
        end: "2022-11-12",
        // end: this.lastDayMonth(),
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
    simulacoesData() {
      return this.$store.getters.getDataSimulacoes;
    },

    endFormat() {
      return this.formatDate(this.query.end) || "";
    },
    startFormat() {
      return this.formatDate(this.query.start) || "";
    },
  },
  methods: {
    opens() {
      this.panel = 0;
    },
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
      const data = this.simulacoesData;

      this.allSimulacoes = [];
      this.allSimulacoes = data;
      this.setFilters();
    },

    setFilters() {
      let data = [];
      //Primeiro Filtro por Data
      data = this.filterByDate(this.allSimulacoes);

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

    setFilterByEstate(value) {
      this.$store.commit("SET_DADOS_FILTRADOS_PERIODO", value);
      this.$store.commit("SET_DADOS_DO_FILTRADO", this.query);
      this.reload();
    },

    // Pega o nome dos Estados Filtrados
    separaEstados(data) {
      let estados = {};
      let result = [];

      Object.values(data).forEach((value) => {
        result.push(value.state);
      });

      //  this.listaEstados = [];
      result.forEach((x) => {
        estados[x] = (estados[x] || 0) + 1;
      });

      this.listaEstados = Object.keys(estados);
      this.listaEstados.push("Todos");
      this.setEstadosExistentesStore(this.listaEstados);
    },

    setEstadosExistentesStore(value) {
      this.$store.commit("SET_ESTADO_EXISTENTES", Object.keys(value));
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
