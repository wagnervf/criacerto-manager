<!-- eslint-disable vue/valid-v-slot -->
<template>
  <div>
    <v-container class="py-0 full-height">
      <v-card
        min-height="70vh"
        class="pa-2"
      >
        <v-card-title>
          <h1 class="font-weight-regular my-4">
            Rotas de Acesso
          </h1>
          <p class="text-subtitle-1 py-2">
            Rotas que serão utilizadas para acessar os parâmetros atualizados
            pelos Cria Certo Manager
          </p>
          <li class="text-caption py-4">
            http://servidorEmprapa.com.br/<b>manager</b>
          </li>
        </v-card-title>

        <v-divider class="mx-4" />

        <div class="mt-4">
          <v-data-table
            :headers="headers"
            :items="rotas"
            :items-per-page="5"
            class="elevation-1 ma-4 mt-6"
            :hide-default-footer="true"
          >
            <!-- eslint-disable-next-line vue/valid-v-slot -->
            <template #item.acao="{ item }">
              <v-chip
                color="primary"
                dark
              >
                {{ item.acao }}
              </v-chip>
            </template>
          </v-data-table>
        </div>

        <v-card
          elevation-1
          class="ma-4 pa-4"
        >
          <v-card-title primary-title>
            <h3 class="font-weight-medium primary--text">
              HTTP status code 200
            </h3>
          </v-card-title>
          <v-divider />

          <v-card-title class="font-weight-light">
            <ul>
              <li>Body</li>
              <li>Media type: application/json</li>
              <li><b>Exemplo de resposta:</b></li>
            </ul>
          </v-card-title>

          <v-card-text class="my-4">
            <v-alert
              dense
              color="grey lighten-3"
              prominent
            >
              <pre>
                {
                  "title": "Hello world Response",
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string"
                    }
                  }
                }
              </pre>
            </v-alert>
          </v-card-text>
        </v-card>

        <v-card
          elevation-1
          class="ma-4 pa-4"
        >
          <v-card-title primary-title>
            <h3 class="font-weight-medium error--text">
              HTTP status code ERROR
            </h3>
          </v-card-title>
          <v-divider />

          <v-card-title class="font-weight-light">
            <ul>
              <li>Body</li>
              <li>Media type: application/json</li>
              <li><b>Exemplo de resposta:</b></li>
            </ul>
          </v-card-title>

          <v-card-text class="my-4">
            <v-alert
              dense
              color="grey lighten-3"
              prominent
            >
              <pre>
                {
                  "title": "Hello world Response",
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string"
                    }
                  }
                }
              </pre>
            </v-alert>
          </v-card-text>
        </v-card>
      </v-card>
    </v-container>
  </div>
</template>

<script>
//import panelDocumentationVue from "../../components/panelDocumentation.vue";
export default {
  name: "IndexDocumentacao",
  // components: { panelDocumentationVue },
  data: () => ({
    panel: [0, 1, 2, 3, 4, 5],
    readonly: true,
    expanded: [],
    singleExpand: true,
    headers: [
      {
        text: "Nome",
        value: "nome",
        align: "start",
        sortable: false,
      },
      {
        text: "Rota",
        value: "rota",
        align: "start",
        sortable: false,
      },
      {
        text: "Ação",
        value: "acao",
        align: "start",
        sortable: false,
      },
    ],
    monta: {
      title: "Monta Natural",
      subtitle: "Subtitle",
      rota: "asdsad/asdsad",
      acao: "GET",
    },

    rotas: [
      {
        nome: "Monta Natural",
        subtitle: "Subtitle",
        rota: "/montanatural/find",
        acao: "GET",
      },
      {
        nome: "IATF + RT",
        subtitle: "Subtitle",
        rota: "/iatf/find",
        acao: "GET",
      },
      {
        nome: "2 IATF + RT",
        subtitle: "Subtitle",
        rota: "/iatf2/find",
        acao: "GET",
      },
      {
        nome: "3 IATF",
        subtitle: "Subtitle",
        rota: "/iatf3/find",
        acao: "GET",
      },
      {
        nome: "Raça de Touros",
        subtitle: "Subtitle",
        rota: "/racastouro/find",
        acao: "GET",
      },
    ],
  }),
};
</script>
