<template>
  <div>
    <v-expansion-panels
      focusable
      v-model="panel"
    >
      <v-expansion-panel>
        <v-toolbar
          color="primary"
          dark
          flat
          dense
        >
          <v-toolbar-title class="my-1 py-1 font-weight-bold">
            {{ title }}
          </v-toolbar-title>
        </v-toolbar>

        <v-expansion-panel-header class="pa-0">
          <v-list-item style="height: 100px">
            <v-list-item-avatar
              color="blue-grey"
              size="45"
              class="d-none d-sm-flex"
            >
              <v-icon color="white">
                {{ icon }}
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content class="pa-4 pr-0 mr-0">
              <!-- <v-list-item-title class="blue-grey--text text--bold text-h6">
                {{ title }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-wrap">
                {{ subtitle }}
              </v-list-item-subtitle> -->

              <v-list-item-subtitle class="text-wrap py-4 grey--text">
                <p class="text-subtitle-2 font-weight-light ma-0">
                  Atualizado
                </p>
                <p class="ma-0 font-weight-light">
                  <v-icon class="mr-1 grey--text text-caption">
                    mdi-account
                  </v-icon>{{ userUpdate }}
                </p>
                <p class="ma-0 font-weight-light">
                  <v-icon class="mr-1 grey--text text-caption">
                    mdi-clock
                  </v-icon>{{ dateUpdate }}
                </p>
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
import mixinUtils from "../mixins/mixin-utils";

export default {
  mixins: [mixinUtils],
  props: {
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
    title: {
      type: String,
      default() {
        return "Parâmetros";
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
    // title: "Lista dos Parâmetros da Monta Natural",
    icon: "mdi-view-list",
  }),

  computed: {
    userUpdate() {
      let user = this.parametros.user_updatedAt;
      return user != null ? user : "";
    },
    dateUpdate() {
      //
      return this.formatDateTime(this.parametros.updatedAt);
    },
  },

  methods: {
    recarregarDadosNoComponentePai() {
      //this.function();
      this.$emit("reloaddados");
    },
  },
};
</script>

<style>
.v-expansion-panel-header__icon {
  margin-right: 4%;
}
</style>
