<template>
  <v-app id="inspire">
    <v-toolbar color="primary">
      <v-breadcrumbs
        :items="rotas"
        divider=">"
        class="justify-end text-left mr-2"
        dark
      >
        <template #item="{ item }">
          <v-breadcrumbs-item
            v-if="item.text == 'Início'"
            :href="item.href"
            class="px-0"
            dark
          >
            <span class="white--text px-0">{{ item.text }}</span>
          </v-breadcrumbs-item>

          <v-breadcrumbs-item
            v-else
            :href="item.href"
            :disabled="item.disabled"
            class="text-wrap text-sm-caption white--text ma-0 pa-0"
            dark
          >
            <span class="white--text px-0">{{ item.text }}</span>
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      app
      class="mb-4"
    >
      <v-sheet
        color="grey lighten-4"
        class="pa-4 mb-4"
      >
        <v-row>
          <v-col class="flex-grow-0 pr-0">
            <v-icon
              class="teal--text px-0"
              size="64"
            >
              mdi-web
            </v-icon>
          </v-col>
          <v-col>
            <h3>Cria Certo</h3>
            <h1 class="font-weight-bold teal--text">
              Manager
            </h1>
          </v-col>
        </v-row>
      </v-sheet>

      <ListSidebar />
    </v-navigation-drawer>

    <v-app-bar
      app
      elevation="0"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-spacer />

      <picture
        style="position: absolute"
        class="d-flex d-md-none d-lg-none ml-10 mb-2"
      >
        <img
          height="45"
          src="../assets/img/cria_certo.png"
        >
      </picture>

      <HeaderComponent />
    </v-app-bar>

    <v-main class="grey lighten-5 pa-4">
      <router-view />
    </v-main>

    <FooterComponent />
  </v-app>
</template>

<script>
import HeaderComponent from "./Header";
import FooterComponent from "./Footer.vue";
import ListSidebar from "../components/ListSidebar";

export default {
  name: "LayoutDefault",

  components: {
    HeaderComponent,
    FooterComponent,
    ListSidebar,
  },

  props: {},
  data: () => ({ drawer: null }),
  computed: {
    rotas() {
      return this.$route.meta.breadCrumb;
    },
  },
};
</script>
