<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        class="pa-0"
      >
        <v-card class="mx-1 mb-1">
          <v-toolbar
            class="pa-0 my-1"
            color="white"
            elevation="1"
            dense
            shrink-on-scroll
            sm="12"
            xs="12"
          >
            <v-app-bar-title class="ma-2 text-subtitle-1 font-weight-black">
              Todas as Simulações
            </v-app-bar-title>
          </v-toolbar>

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
                :items="eCow"
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

export default {
  mixins: [mixinUtils],
  name: "DashboardTableView",
  components: {},
  data() {
    return {
      // mock,
      eCow: [],
      visivel: true,
      headers: [
        { text: "Tipo", align: "start", value: "type" },
        { text: "Raça Touro", value: "raca_touro", align: "right" },
        { text: "Estado", value: "state", align: "right" },
        { text: "Cidade", value: "city", align: "right" },
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
    eCowData() {
      return this.$store.getters.getDataEcow;
    },
  },

  methods: {
    getData() {
      this.eCow = Object.values(this.eCowData);
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
