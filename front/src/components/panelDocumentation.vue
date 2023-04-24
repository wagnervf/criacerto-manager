<template>
  <div>
    <v-data-table
      :headers="dessertHeaders"
      :items="desserts"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="name"
      show-expand
      class="elevation-1"
    >
      <template #top>
        <v-toolbar flat>
          <v-toolbar-title>Expandable Table</v-toolbar-title>
          <v-spacer />
          <v-switch
            v-model="singleExpand"
            label="Single expand"
            class="mt-2"
          />
        </v-toolbar>
      </template>
      <template #expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          More info about {{ item.name }}
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "ComponentPanelDocumentation",
  props: {
    conteudo: {
      type: String,
      default() {
        return "";
      },
    },

    color: {
      type: String,
      default() {
        return "teal";
      },
    },
    icone: {
      type: String,
      default() {
        return "mdi-cached";
      },
    },
    title: {
      type: String,
      default() {
        return "";
      },
    },
    subtitle: {
      type: String,
      default() {
        return "";
      },
    },
    rota: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data: () => ({
    panel: [0, 1, 2, 3, 4, 5],
    readonly: false,
    headers: [
      {
        text: "Rota",
        align: "start",
        sortable: false,
        value: "rota",
      },
      { text: "Tipo", value: "tipo" },
    ],

    expanded: [],
    singleExpand: false,
  }),
};
</script>
