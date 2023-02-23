<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col
        class="px-1 py-0"
        cols="12"
        justify-center
        flex
      >
        <titleToolbarListTealVue
          :title="title"
          :subtitle="subtitle"
        />

        <v-card
          class="my-4 pa-4"
          color="grey-lighten-3"
        >
          <v-row>
            <v-text-field
              outlined
              label="Filtrar"
              append-icon="mdi-magnify"
              v-model="search"
              single-line
              hide-details
              density="compact"
              class="ma-2"
              autofocus
              clearable
            />
          </v-row>
        </v-card>

        <v-expansion-panels
          focusable
          v-model="panel"
          multiple
        >
          <component
            v-for="r of resultQuery"
            :key="r.id"
            :is="r.component"
          />
        </v-expansion-panels>
      </v-col>

      <v-col
        class="px-1 py-4 mt-4"
        cols="12"
        justify-center
      >
        <ListaDadosVue />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DadosTecnicosRebanhoVue from "./DadosTecnicosRebanho";
import AquisicaoTourosVue from "./AquisicaoTouros";
import ManutecaoTourosVue from "./ManutencaoTouros";
import ListaDadosVue from "./ListaDados.vue";
import titleToolbarListTealVue from "../../components/titleToolbarListTeal.vue";

export default {
  name: "ViewMontaNatural",
  components: {
    DadosTecnicosRebanhoVue,
    AquisicaoTourosVue,
    ManutecaoTourosVue,
    ListaDadosVue,
    titleToolbarListTealVue,
  },
  data: () => ({
    panel: [],
    subtitle: "Listagem dos parâmetros da Monta Natural",
    title: "Monta Natural",
    search: null,

    parametros: [
      {
        id: 1,
        title:
          "numero_de_vacas, numero_de_touros, vida_util_touro, taxa_prenhez, taxa_mortalidade, preco_bezerro,  peso_comercial, Numero de Vacas a Cobrir, numero de Touro, Vida ultil do Touro, taxa de Prenhez, Mortalidade do Nascimento a Desmama, Preço kg do Bezerro, Peso a Desmana da Fazenda",
        component: "DadosTecnicosRebanhoVue",
      },
      {
        id: 2,
        title: "preco_touro, vacinas_vermifugos,  dep",
        component: "AquisicaoTourosVue",
      },

      {
        id: 3,
        title:
          "Exame Andrológico, Aluguel Pasto,Sal Mineral,Rações,Produtos ,eterinarios,Juros Anuais,Valor Venda Touros",
        component: "ManutecaoTourosVue",
      },
    ],
  }),

  computed: {
    resultQuery() {
      if (this.search) {
        return this.parametros.filter((item) => {
          return this.search
            .toLowerCase()
            .split(",")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      } else {
        return this.parametros;
      }
    },
    currentRouteName() {
      return this.$route.name;
    },

    breadCrumbs() {
      if (typeof this.$route.meta.breadCrumb === "function") {
        return this.$route.meta.breadCrumb.call(this, this.$route);
      }
      return this.$route.meta.breadCrumb;
    },
  },

  methods: {
    logOutUser() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
    resetExpand() {
      this.panel = [];
    },
  },
};
</script>

<style></style>
