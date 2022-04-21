<template>
  <v-navigation-drawer
    v-model="Sidebar_drawer"
    mobile-breakpoint="960"
    :mini-variant.sync="mini"
    width="250"
    app
    permanent
    elevation-1
    id="main-sidebar"
  >
    <!-- <v-sheet color="grey lighten-4" class="pa-2  d-flex align-center">
      <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>

      <p class="py-0 px-3">
        Cria Certo
        <span class="font-weight-bold teal--text">Manager</span>
        <v-icon class="teal--text px-1"> 
          mdi-web
        </v-icon>
      </p>
    </v-sheet> -->

    <v-list-item class="pl-2 pr-0 mr-1">
      <v-list-item-avatar class="pr-0">
         <v-icon class="teal--text px-1"> mdi-web </v-icon>
      </v-list-item-avatar>

      <v-list-item-title>
          Cria Certo
          <span class="font-weight-bold teal--text">Manager</span>         
      </v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-divider class="pb-2"></v-divider>

    <ListSidebar />

    <v-footer justify-end absolute end>
      <v-list-item class="px-0">
        <v-spacer></v-spacer>
        <v-divider></v-divider>
        <v-list-item-title>
          <span style="font-size: 10px" class="text-center wrap">
            Cria Certo Manager&copy; {{ new Date().getFullYear() }}
          </span>
        </v-list-item-title>
      </v-list-item>
    </v-footer>
  </v-navigation-drawer>
</template>



<style>
.v-application p {
  margin-bottom: 0px;
}
</style>
<script>

import { mapState } from "vuex";
import ListSidebar from "../components/ListSidebar";

export default {
  name: "Sidebar",
  components: {
    ListSidebar
  },

  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    drawer: true,
    mini: true,
    
  }),

  

  computed: {
    ...mapState(["SidebarColor", "SidebarBg"]),
    Sidebar_drawer: {
      get() {
        return this.$store.state.Sidebar_drawer;
      },
      set(val) {
        this.$store.commit("SET_SIDEBAR_DRAWER", val);
      },
    },
    
  },
  watch: {
    "$vuetify.breakpoint.smAndDown"(val) {
      this.$emit("update:expandOnHover", !val);
    },
  },

  methods: {

   
  },
};

</script>