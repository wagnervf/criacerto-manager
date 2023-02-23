<template>
  <ListSidebar />
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
