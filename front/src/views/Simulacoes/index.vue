<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col
        class="px-1 py-0"
        justify-center
        flex
      >
        <titleToolbarListTealVue
          :title="title"
          :subtitle="subtitle"
        />

        <v-card class="mx-0 my-2 mb-1">
          <v-card-title>
            <v-row>
              <v-col cclass="col-md-8">
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Pesquisar"
                  single-line
                  hide-details
                />
              </v-col>
              <!-- <v-col class="col-md-4 text-end">
               <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                >
                  <downloadExcel
                    class="btn"
                    :fetch="fetch"
                    :fields="json_fields"
                    :before-generate="startDownload"
                    :before-finish="finishDownload"
                  >
                    Download
                  </downloadExcel> 
                </v-btn>
              </v-col>-->
            </v-row>
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
    </v-row>
  </v-container>
</template>

<script>
import mixinUtils from "../../mixins/mixin-utils";
import titleToolbarListTealVue from "../../components/titleToolbarListTeal.vue";

//import downloadExcel from "vue-json-excel";

export default {
  mixins: [mixinUtils],
  name: "DashboardTableView",
  components: {
    titleToolbarListTealVue,
  },
  data() {
    return {
      subtitle: "Tabela com Todas as Simulações",
      title: "Todas as Simulações",
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
        { text: "Taxa Prenhez", value: "taxa_prenhez", align: "right" },
        { text: "Data", value: "created", align: "right" },
      ],
      itemsPerPage: 20,
      loadingQtde: true,
    };
  },

  mounted() {
    this.getData();

    setTimeout(() => {
      this.visivel = false;
    }, 1500);
  },

  computed: {},

  methods: {
    getData() {
      this.simulacoes = [];
      this.simulacoes = Object.values(this.$store.getters.getDataSimulacoes);
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
