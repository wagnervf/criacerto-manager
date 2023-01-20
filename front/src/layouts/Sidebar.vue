<template>
  <!-- <v-navigation-drawer
    id="main-sidebar"
    v-model="sideBarCustom"
    :permanent="$vuetify.breakpoint.mdAndUp"
    fixed
    left
    clipped
    app
  > -->
  <div>
    <!-- <v-list-item class="pl-2 pr-0 mr-1 mb-1">
       <v-btn
        icon
        accesskey="m"
        @click.stop="mini = !mini"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn> 
    </v-list-item> -->

    <!-- <v-divider class="my-2" /> -->

    <ListSidebar />
  </div>
  <!-- </v-navigation-drawer> -->
</template>

<script>
import { mapState } from "vuex";
import ListSidebar from "../components/ListSidebar";

export default {
  name: "LayoutSidebar",
  components: {
    ListSidebar,
  },

  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    drawer: null,
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

    sideBarCustom() {
      return this.$store.state.openSideBar;
    },
  },
  watch: {
    "$vuetify.breakpoint.smAndDown": function (val) {
      this.$emit("update:expandOnHover", !val);
    },
  },

  methods: {},
};
</script>
<style>
.v-application p {
  margin-bottom: 0px;
}
</style>
