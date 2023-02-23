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
          <!-- <DadosTecnicosRebanho_1IATFVue @fechar="resetExpand" />

          <AquisicaoSemenProtocolo_1IATFVue @fechar="resetExpand" />

          <DadosTecnicosRebanho_2IATFVue @fechar="resetExpand" />

          <AquisicaoSemenProtocolo_2IATFVue @fechar="resetExpand" />

          <DadosTecnicosRebanho_3IATFVue @fechar="resetExpand" />

          <AquisicaoSemenProtocolo_3IATFVue @fechar="resetExpand" /> -->
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
import DadosTecnicosRebanho_1IATFVue from "./DadosTecnicosRebanho_1IATF";
import DadosTecnicosRebanho_2IATFVue from "./DadosTecnicosRebanho_2IATF";
import DadosTecnicosRebanho_3IATFVue from "./DadosTecnicosRebanho_3IATF";
import AquisicaoSemenProtocolo_1IATFVue from "./AquisicaoSemenProtocolo_1IATF";
import AquisicaoSemenProtocolo_2IATFVue from "./AquisicaoSemenProtocolo_2IATF";
import AquisicaoSemenProtocolo_3IATFVue from "./AquisicaoSemenProtocolo_3IATF";
import ListaDadosVue from "./ListaDados.vue";
import titleToolbarListTealVue from "../../components/titleToolbarListTeal.vue";
export default {
  name: "View3IATF",
  components: {
    DadosTecnicosRebanho_1IATFVue,
    DadosTecnicosRebanho_2IATFVue,
    DadosTecnicosRebanho_3IATFVue,
    AquisicaoSemenProtocolo_1IATFVue,
    AquisicaoSemenProtocolo_2IATFVue,
    AquisicaoSemenProtocolo_3IATFVue,
    ListaDadosVue,
    titleToolbarListTealVue,
  },
  data: () => ({
    panel: [],
    search: null,
    meta: null,
    subtitle: "Listagem dos parâmetros do 3 IATF",
    title: "3 IATF",
    parametros: [
      {
        id: 1,
        title:
          "Número de Vacas à Inseminar,Propoção de Vacas Inseminadas,Prenhez 1ª IATF,Mortalidade do Nascimento à Desmama,Preço kg do Bezerro,Peso à Desmana da Fazenda",
        component: "DadosTecnicosRebanho_1IATFVue",
      },

      {
        id: 2,
        title:
          "Preço Do Sêmen e Protocolo,DEP IATF,Custo do Protocolo,Custo Mão de Obra,Custo Material Consumo",
        component: "AquisicaoSemenProtocolo_1IATFVue",
      },

      {
        id: 3,
        title: "Proporção de Vacas Inseminadas, Prenhez 2ª IATF",
        component: "DadosTecnicosRebanho_2IATFVue",
      },

      {
        id: 4,
        title:
          "Preço Dose Sêmen, DEP IATF, Custo do Protocolo, Custo Mão de Obra, Custo Material Consumo",
        component: "AquisicaoSemenProtocolo_2IATFVue",
      },

      {
        id: 5,
        title: "Proporção de Vacas Inseminadas, Prenhez 3ª IATF",
        component: "DadosTecnicosRebanho_3IATFVue",
      },

      {
        id: 6,
        title:
          "Preço Dose Sêmen, DEP IATF, Custo do Protocolo, Custo Mão de Obra, Custo Material Consumo",
        component: "AquisicaoSemenProtocolo_3IATFVue",
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
      console.log(this.$router);
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
