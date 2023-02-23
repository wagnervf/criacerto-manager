<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col
        class="px-1 py-4 mt-4"
        cols="12"
        justify-center
      >
        <ListaDadosVueMontaNatural />
        <br>
        <ListaDadosVueIATF />
        <br>
        <ListaDadosVueIATF_2 />
        <br>
        <ListaDadosVueIATF_3 />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListaDadosVueMontaNatural from "../MontaNatural/ListaDados.vue";
import ListaDadosVueIATF from "../Iatf/ListaDados.vue";
import ListaDadosVueIATF_2 from "../Iatf_2/ListaDados.vue";
import ListaDadosVueIATF_3 from "../Iatf_3/ListaDados.vue";

export default {
  name: "ViewParametros",
  components: {
    ListaDadosVueMontaNatural,
    ListaDadosVueIATF,
    ListaDadosVueIATF_2,
    ListaDadosVueIATF_3,
  },
  data: () => ({
    panel: [],
    search: null,
    meta: null,
    subtitle: "Listagem dos parâmetros da Monta Natural",
    title: "Monta Natural",
  }),

  computed: {
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

  methods: {},
};
</script>

<style></style>
