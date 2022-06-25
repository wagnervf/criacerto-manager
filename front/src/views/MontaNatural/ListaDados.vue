/* eslint-disable vue/no-v-text-v-html-on-component */
<template>
  <v-expansion-panels
    focusable
    v-model="panel"
  >
    <v-expansion-panel>
      <v-toolbar
        color="blue-grey"
        dark
        dense
        flat
      >
        <v-toolbar-title> Informações </v-toolbar-title>
      </v-toolbar>

      <v-expansion-panel-header class="pl-3">
        <v-list-item>
          <v-list-item-avatar
            color="blue-grey"
            size="56"
          >
            <v-icon color="white">
              {{ icon }}
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="blue-grey--text">
              {{ title }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-wrap">
              {{ subtitle }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-container
          fluid
          class="py-0"
        >
          <v-col
            cols="12"
            lg="12"
            justify-center
            flex
          >
            <v-toolbar
              flat
              color="transparent"
            >
              <v-toolbar-title>Parâmetros</v-toolbar-title>
              <v-spacer />

              <vue-blob-json-csv
                tag-name="div"
                file-type="csv"
                file-name="sample"
                title="Download .csv"
                :data="downloadItems"
                class="btnDownload"
              />
            </v-toolbar>

            <v-divider />

            <v-simple-table
              dense
              light
            >
              <template #default>
                <thead>
                  <tr>
                    <th class="text-left text-subtitle-1 font-weight-medium">
                      Nome
                    </th>
                    <th class="text-left text-subtitle-1 font-weight-medium">
                      Valor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in parametros"
                    :key="index"
                  >
                    <td>{{ index }}</td>
                    <td>{{ item }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>

            <v-divider />
          </v-col>
        </v-container>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
//import { mapState } from "vuex";

export default {
  components: {},
  data: () => ({
    panel: [0, 1],
    dados: {
      _id: "21212w",
      numero_de_vacas: "12",
      numero_de_touros: "13",
      vida_util_touro: "33",
      taxa_prenhez: "33",
      taxa_mortalidade: "44",
      preco_bezerro: "33",
      peso_comercial: "44",
    },
    title: "Lista dos Parâmentros",
    icon: "mdi-view-list",
    subtitle: "Todos os Parâmentros utilizados nas Simulações da Monta Natural",

    items: [],
    loading: false,
    search: "",

    downloadItems: [],
  }),

  mounted() {
    this.getDadosStore();
  },

  computed: {
    parametros() {
      return this.$store.getters.getDataMontaNatural;
    },
  },

  methods: {
    getDadosStore() {
      const value = this.parametros;
      //   this.items = value;
      this.downloadItems.push(value);
    },

    next() {
      this.loading = true;

      setTimeout(() => {
        this.search = "";
        this.loading = false;
      }, 2000);
    },

    download() {
      let filename = "cats.csv";
      let text = [];

      for (var [key, value] of Object.entries(this.items)) {
        text.push(key + " - " + value + "\\n");
      }

      let element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/csv;charset=utf-8," + encodeURIComponent(text)
      );
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();
      document.body.removeChild(element);
    },
  },

  watch: {},
};
</script>

<style>
.btnDownload {
  background-color: transparent;
  border: 1px solid #009688;
  padding: 8px;
  border-radius: 5px;
  color: #009688;
  font-weight: 500;
  cursor: pointer;
  min-width: 64px;
}
.btnDownload:hover {
  background-color: #009688;
  color: white;
}
</style>
