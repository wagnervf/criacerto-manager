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
              <v-btn
                :loading="loading"
                :disabled="loading"
                title="Atualizar lista de Parâmetros"
                :color="color"
                class="mx-4 white--text"
                icon
                @click="getDataStore"
              >
                <v-icon dark>
                  {{ icone }}
                </v-icon>
              </v-btn>
              <span title="download dos parametros em csv">
                <vue-blob-json-csv
                  tag-name="div"
                  file-type="csv"
                  file-name="monta_natural"
                  title="download"
                  :data="downloadItems"
                  class="btnDownload"
                  aria-label="download dos parametros em csv"
                  role="button"
                />
              </span>
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
import mixinUtils from "../../mixins/mixin-utils";

export default {
  mixins: [mixinUtils],
  components: {},
  data: () => ({
    panel: [],
    loader: null,
    loading: false,
    title: "Lista dos Parâmentros",
    icon: "mdi-view-list",
    subtitle: "Todos os Parâmentros utilizados nas Simulações da 2 IATF + RT",
    parametros: [],
    downloadItems: [],
    icone: "mdi-cached",
    color: "teal",
  }),

  mounted() {
    // Solicita ao Vuex para buscar os dados e salvar no State
    this.$store.dispatch("getDados_2IATF");
    //
    setTimeout(() => {
      this.getDataStore();
    }, 500);
  },

  computed: {},

  methods: {
    getDataStore() {
      this.parametros = [];
      this.loader = "loading";
      let result = this.$store.getters.getDataIatf_2RT;

      if (Object.values(result).length > 0) {
        this.parametros = result;
        this.alterIcon("mdi-check", "teal");
        this.mountDataDownload();
      } else {
        this.errorMessage();
      }
    },

    mountDataDownload() {
      this.downloadItems.push(this.parametros);
    },

    alterIcon(icon, cor) {
      this.icone = icon;
      this.color = cor;
      setTimeout(() => {
        this.icone = "mdi-cached";
      }, 3000);
    },

    errorMessage() {
      this.alterIcon("mdi-close", "red darken-2");

      return this.messageSwalToast(
        "error",
        "Erro ao carregar os parâmetros do Banco de Dados."
      );
    },
  },

  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 1000);

      this.loader = null;
    },
  },
};
</script>
