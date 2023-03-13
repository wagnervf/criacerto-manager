<template>
  <v-container fluid>
    <v-row justify="center">
      <v-expansion-panels
        focusable
        v-model="panel"
      >
        <v-expansion-panel>
          <v-expansion-panel-header>
            <h3>Tabela com Todas as Simulações</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-col
              cols="12"
              class="pa-0"
            >
              <v-col class="col-md-12 text-end">
                <v-btn
                  class="ma-2"
                  outlined
                  color="primary"
                  @click="goToSimulacoes"
                >
                  Acessar todos os dados
                  <v-icon
                    right
                    dark
                  >
                    mdi-arrow-right
                  </v-icon>
                </v-btn>
              </v-col>

              <v-card class="mx-1 mb-1">
                <v-card-title>
                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Pesquisar"
                    single-line
                    hide-details
                  />
                </v-card-title>
                <v-card-text class="pa-0">
                  <v-col v-if="visivel">
                    <v-progress-linear
                      indeterminate
                      color="cyan"
                      :query="true"
                    />
                  </v-col>

                  <v-col
                    v-else
                    cols="12"
                  >
                    <v-data-table
                      :headers="headers"
                      :items="simulacoes"
                      :search="search"
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
                </v-card-text>
              </v-card>
            </v-col>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
import mixinUtils from "../../mixins/mixin-utils";

export default {
  mixins: [mixinUtils],
  name: "DashboardTableView",
  components: {},
  data() {
    return {
      search: "",
      panel: 0,
      simulacoes: [],
      visivel: true,
      headers: [
        { text: "Tipo", align: "start", value: "type" },
        { text: "Raça Touro", value: "raca_touro", align: "right" },
        { text: "Estado", value: "state", align: "right" },
        { text: "Cidade", value: "city", align: "right" },
        { text: "Taxa Prenhez", value: "taxa_prenhez", align: "right" },
        { text: "Data", value: "created", align: "right" },
      ],
      itemsPerPage: 20,
      loadingQtde: true,
    };
  },

  mounted() {
    setTimeout(() => {
      this.visivel = false;
      this.getData();
    }, 1000);
  },

  computed: {
    simulacoesData() {
      return this.$store.getters.getDataSimulacoes;
    },

    simulacoesFiltradasPeriodo() {
      return this.$store.getters.getSimulacoesFilteredPeriodo;
    },
  },

  methods: {
    getData() {
      // this.simulacoes = Object.values(this.simulacoesData);
      this.simulacoes = Object.values(this.simulacoesFiltradasPeriodo);
    },
    goToSimulacoes() {
      this.$router.push({ name: "Todas as Simulações" });
    },
  },

  watch: {
    simulacoesFiltradasPeriodo(value) {
      this.getData(value);
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
