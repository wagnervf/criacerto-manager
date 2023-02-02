<template>
  <v-container fluid>
    <v-row justify="center">
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
import ListaDadosVue from "../MontaNatural/ListaDados.vue";

export default {
  name: "ViewParametros",
  components: {
    ListaDadosVue,
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
