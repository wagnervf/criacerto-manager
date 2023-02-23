<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col
        class="px-1 py-0"
        cols="12"
        lg="12"
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
        lg="12"
        justify-center
        flex
      >
        <ListaDadosVue />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DadosTecnicosRebanhoVue from "./DadosTecnicosRebanho";
import AquisicaoSemenProtocoloVue from "./AquisicaoSemenProtocolo";
import RepasseTouroVue from "./RepasseTouro";
import AquisicaoTourosVue from "./AquisicaoTouro";
import ManutencaoTouroVue from "./ManutencaoTouro.vue";
import ListaDadosVue from "./ListaDados.vue";
import titleToolbarListTealVue from "../../components/titleToolbarListTeal.vue";

export default {
  name: "ViewIATFRT",
  components: {
    DadosTecnicosRebanhoVue,
    AquisicaoSemenProtocoloVue,
    RepasseTouroVue,
    AquisicaoTourosVue,
    ManutencaoTouroVue,
    ListaDadosVue,
    titleToolbarListTealVue,
  },
  data: () => ({
    panel: [],
    search: null,
    meta: null,
    subtitle: "Listagem dos parâmetros do IATF + RT",
    title: "IATF + RT",
    parametros: [
      {
        id: 1,
        title:
          "numero de Vacas a Inseminar ,Propoção de Vacas Inseminadas ,Prenhez IATF ,Mortalidade do Nascimento à Desmama, Preço kg do Bezerro ,Peso a Desmana da Fazenda",
        component: "DadosTecnicosRebanhoVue",
      },
      {
        id: 2,
        title:
          "Preço Do Sêmen e Protocolo, DEP IATF, Custo do Protocolo, Custo Mão de Obra, Custo Material Consumo",
        component: "AquisicaoSemenProtocoloVue",
      },

      {
        id: 3,
        title:
          "Número de Touros,Vida Útil do Touro,Prenhez Repasse,Peso à Desmama da Fazenda",
        component: "RepasseTouroVue",
      },
      {
        id: 4,
        title:
          "Preço de Aquisição do Touro,Despesas da Compra,DEP no Peso à Desmama",
        component: "AquisicaoTourosVue",
      },

      {
        id: 5,
        title:
          "Exame Andrológico, Aluguel Pasto, Sal Mineral, Rações, Produtos Veterinarios, Juros Anuais, Valor Venda Touros",
        component: "ManutencaoTouroVue",
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

  created() {},

  methods: {
    resetExpand() {
      this.panel = [];
    },
  },
};
</script>
