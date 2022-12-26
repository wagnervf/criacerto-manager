<template>
  <v-app id="inspire">
    <HeaderComponent />

    <SidebarComponent />

    <v-main class="grey lighten-4 pa-4">
      <router-view />
    </v-main>

    <FooterComponent />
  </v-app>
</template>

<script>
//import { mapState, mapMutations } from "vuex";
import HeaderComponent from "./Header";
import SidebarComponent from "./Sidebar";
import FooterComponent from "./Footer.vue";

export default {
  name: "LayoutDefault",

  components: {
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  },

  props: {
    // source: String,
  },
  data: () => ({}),
  // computed: {
  //   ...mapState(["Customizer_drawer"]),
  // },

  // methods: {
  //   ...mapMutations({
  //     setCustomizerDrawer: "SET_CUSTOMIZER_DRAWER",
  //   }),
  //},
};
</script>
