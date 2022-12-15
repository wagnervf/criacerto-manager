<!-- eslint-disable vue/require-default-prop -->
<template>
  <div>
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
          <v-toolbar-title class="pt-2">
            Informações
          </v-toolbar-title>
        </v-toolbar>

        <v-expansion-panel-header class="pa-0">
          <v-list-item>
            <v-list-item-avatar
              color="blue-grey"
              size="56"
              class="d-none d-sm-flex"
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

        <v-expansion-panel-content class="pa-0">
          <v-container
            fluid
            class="pa-0"
          >
            <v-col
              cols="12"
              justify-center
              flex
              class="pa-0"
            >
              <v-toolbar
                flat
                color="transparent"
              >
                <v-toolbar-title class="text-sm-caption">
                  Parâmetros
                </v-toolbar-title>

                <v-spacer />

                <v-btn
                  :loading="loading"
                  :disabled="loading"
                  title="Atualizar lista de Parâmetros"
                  :color="color"
                  class="mx-4 white--text"
                  icon
                  @click="recarregarDadosNoComponentePai()"
                >
                  <v-icon dark>
                    {{ icone }}
                  </v-icon>
                </v-btn>

                <span title="download dos parametros em csv">
                  <vue-blob-json-csv
                    tag-name="div"
                    file-type="csv"
                    file-name="3iatf"
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
                :fixed-header="true"
                height="600"
              >
                <template #default>
                  <thead>
                    <tr>
                      <th
                        class="teal--text text-left text-subtitle-1 font-weight-medium"
                      >
                        Nome
                      </th>
                      <th
                        class="teal--text text-left text-subtitle-1 font-weight-medium"
                      >
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
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop

    // eslint-disable-next-line vue/require-default-prop, vue/require-prop-types
    parametros: {},
    loading: {
      type: Boolean,
      default() {
        return false;
      },
    },
    downloadItems: {
      type: Array,
      default() {
        return [];
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
    subtitle: {
      type: String,
      default() {
        return "mdi-cached";
      },
    },
  },
  components: {},
  data: () => ({
    panel: [],
    title: "Lista dos Parâmentros",
    icon: "mdi-view-list",
  }),

  methods: {
    recarregarDadosNoComponentePai() {
      //this.function();
      this.$emit("reloaddados");
    },
  },
};
</script>
