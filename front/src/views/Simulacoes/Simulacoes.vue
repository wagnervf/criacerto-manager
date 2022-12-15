<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col
        class="px-1 py-0"
        justify-center
        flex
      >
        <titleToolbarListTealVue
          :title="title"
          :subtitle="subtitle"
        />

        <v-list
          v-for="item in items"
          :key="item.title"
          class="pa-0 my-2"
          three-line
          nav
          active-class="primary--text"
          elevation="1"
        >
          <div v-if="item.id != 100">
            <cardListToolbarVue
              :title="item.title"
              :to="item.to"
              :icon="item.icon"
              :title2="item.title"
              :subtitle2="item.subtitle"
            />
          </div>

          <div
            v-else
            class="mx-auto mt-6"
            elevation="1"
          >
            <div class="grey lighten-4">
              <cardListToolbarVue
                :title="item.title"
                :to="item.to"
                :icon="item.icon"
                :title2="item.title"
                :subtitle2="'Parâmetros comum à todas as Simulações'"
                :color="'grey lighten-4'"
              />
            </div>
          </div>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import VueJwtDecode from "vue-jwt-decode";

import Menu from "../../assets/json/listSimulacoes.json";
import titleToolbarListTealVue from "../../components/titleToolbarListTeal.vue";
import cardListToolbarVue from "../../components/cardListToolbar.vue";

export default {
  name: "ViewSimulacoes",
  components: { titleToolbarListTealVue, cardListToolbarVue },
  data: () => ({
    items: Menu,
    subtitle: "Listagem dos parâmetros de todas as Simulações do Cria Certo",
    title: "Simulações",
    open: [1, 2],
    search: null,
  }),
  computed: {},

  created() {
    this.getUser();
  },

  methods: {
    getUser() {
      //  let token = localStorage.getItem("jwt");
      //  let tokenDecoded = VueJwtDecode.decode(token);
      // this.user = tokenDecoded;
    },
    logOutUser() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
  },
};
</script>
