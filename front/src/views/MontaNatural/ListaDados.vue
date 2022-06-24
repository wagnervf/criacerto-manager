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
              <!-- <v-btn
                icon
                color="teal"
                dark
                large
                title="Download do arquivo em .csv"
                @click="download"
              >
                <v-icon> mdi-download-box </v-icon>
              </v-btn> -->

              <vue-blob-json-csv
                tag-name="div"
                file-type="csv"
                file-name="sample"
                title="Download JSON"
                :data="downloadItems"
                class="btnDownload"
              />
            </v-toolbar>

            <v-divider />

            <!-- <v-container class="py-0">
              <v-row
                align="center"
                justify="start"
              >
                <v-col cols="12">
                  <v-text-field
                    ref="search"
                    v-model="search"
                    full-width
                    hide-details
                    label="Filtrar"
                    single-line
                  />
                </v-col>
              </v-row>
            </v-container> -->

            <!-- <v-list
              v-for="(item, index) in items"
              :key="index"
            >
              <v-list-item>
                <v-list-item-icon>
                  {{ index }}
                </v-list-item-icon>
                <v-list-item-content>
                  {{ item }}
                </v-list-item-content>
              </v-list-item>
            </v-list> -->

            <!-- <v-spacer />
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                /> -->

            <!-- <v-data-table
                :headers="headers"
                :items="records"
                :search="search"
              />
            </v-card> -->

            <v-simple-table
              dense
              light
            >
              <template #default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Nome
                    </th>
                    <th class="text-left">
                      Valor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in items"
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
// eslint-disable-next-line no-undef

//Vue.component("DownloadCsv", JsonCSV);

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
    search2: "",

    headers: [
      { text: "", value: "_id" },
      { text: "", value: "active" },
      { text: "", value: "aluguel_pasto" },
      { text: "", value: "code" },
      { text: "", value: "dep" },
      { text: "", value: "despesas_compra" },
      { text: "", value: "exame_andrologico" },
      { text: "", value: "juros_anuais" },
      // { text: "", value: "numero_de_touros" },
      // { text: "", value: "numero_de_vacas" },
      // { text: "", value: "peso_comercial" },
      // { text: "", value: "peso_elite" },
      // { text: "", value: "preco_bezerro" },
      // { text: "", value: "preco_touro" },
      // { text: "", value: "raca_touro" },
      // { text: "", value: "racoes" },
      // { text: "", value: "sal_mineral" },
      // { text: "", value: "taxa_mortalidade" },
      // { text: "", value: "taxa_prenhez" },
      // { text: "", value: "type" },
      // { text: "", value: "vacinas_vermifugos" },
      // { text: "", value: "valor_venda" },
      // { text: "", value: "vida_util_touro" },
      // { text: "", value: "createdAt" },
      // { text: "", value: "updatedAt" },
      { text: "Dessert", value: "name" },
      { text: "Calories", value: "calories" },
    ],
    downloadItems: [],
  }),

  mounted() {
    this.getDadosStore();
  },

  computed: {},

  watch: {},

  methods: {
    getDadosStore() {
      const value = this.$store.getters.getDataMontaNatural;
      this.items = value;
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
      // credit: https://www.bitdegree.org/learn/javascript-download
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
