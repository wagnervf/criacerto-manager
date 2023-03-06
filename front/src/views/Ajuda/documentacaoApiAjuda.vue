<template>
  <v-expansion-panel>
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>{{ subtitle }}</v-card-text>
    </v-card>
    <v-container
      fluid
      class="pa-0"
    >
      <v-card-title class="d-block">
        <h3 class="text-subtitle-1 py-2">
          Servidor
        </h3>
        <ul>
          <li class="text-caption py-4">
            http://servidorEmprapa.com.br/<b>manager</b>
          </li>
        </ul>
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
        elevation-0
        class="ma-4 pa-4"
      >
        <v-card-title primary-title>
          <h3 class="font-weight-medium primary--text">
            Status Code: 200 OK
          </h3>
        </v-card-title>
        <v-divider />

        <v-card-title class="font-weight-light">
          <ul>
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
                <code
                  v-for="(resp, i) in respostas"
                  :key="i"
                  >
                  {{ resp.Monta }}
                </code>
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
            Status Code: 404 ERROR
          </h3>
        </v-card-title>
        <v-divider />

        <v-card-title class="font-weight-light">
          <ul>
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
                <code>
                  {{ code404 }}
                </code>              
              </pre>
          </v-alert>
        </v-card-text>
      </v-card>
    </v-container>
  </v-expansion-panel>
</template>

<script>
//import panelDocumentationVue from "../../components/panelDocumentation.vue";
import respostasJson from "../../assets/json/respostas.json";

export default {
  name: "IndexDocumentacao",
  components: {},
  data: () => ({
    respostas: respostasJson,
    panel: [0, 1, 2, 3, 4, 5],
    readonly: true,
    expanded: [],
    singleExpand: true,
    title: "Rotas do Sistema",
    icon: "mdi-routes",
    subtitle:
      "Rotas que serão utilizadas para acessar os parâmetros atualizados pelos Cria Certo Manager",

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

    code200: {
      title: "Hello",
      type: "object",
      properties: {
        message: {
          type: "string",
        },
      },
    },
    code404: {
      message: "Nenhum parâmetro da Monta Natural foi encontrado!",
    },
  }),
};
</script>
