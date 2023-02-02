<template>
  <div>
    <v-list
      nav
      dense
      flat
    >
      <v-list-item-group
        v-model="selectedItem"
        :active-class="`teal--text`"
        no-action
        link
        dense
        class="py-1"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          link
          router
          @click="navegar(item.to)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-divider />
    <v-list-item
      link
      tabindex="2"
      accesskey="s"
      title="Sair do Sistema"
      @click="logout"
    >
      <v-list-item-icon left>
        <v-icon> mdi-logout </v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title> Sair </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
import Menu from "../assets/json/menu.json";

export default {
  data: () => ({
    items: Menu,
    selecionado: 0,
    selectedItem: 0,
    items2: [
      { text: "My Files", icon: "mdi-folder" },
      { text: "Shared with me", icon: "mdi-account-multiple" },
      { text: "Starred", icon: "mdi-star" },
      { text: "Recent", icon: "mdi-history" },
      { text: "Offline", icon: "mdi-check-circle" },
      { text: "Uploads", icon: "mdi-upload" },
      { text: "Backups", icon: "mdi-cloud-upload" },
    ],
  }),

  methods: {
    logout() {
      this.$store.commit("LOGOUT");
      this.$router.push({ name: "login" });
    },

    navegar(to) {
     // console.log(to);
      this.$store.commit("SET_SIDEBAR_CUSTOM", false);
      this.$router.push(to);
    },
  },
};
</script>

<style lang="scss">
#main-sidebar {
  box-shadow: 1px 0 20px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 1px 0 20px rgba(0, 0, 0, 0.08);
  .v-navigation-drawer__border {
    display: none;
  }
  .v-list-group__items.v-application--is-ltr {
    padding-left: 10px !important;
  }

  .v-list-item {
    &__icon--text,
    &__icon:first-child {
      justify-content: center;
      text-align: center;
      width: 20px;
    }

    .v-list-item__icon {
      margin: 6px 5px 0px 0px;
    }
  }
}
</style>
