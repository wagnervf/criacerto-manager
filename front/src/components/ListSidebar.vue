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
          v-for="(item, i) in menuFiltered"
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

    <div v-if="this.userLogado">
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
  </div>
</template>

<script>

import Menu from "../assets/json/menu.json";
import LoginService from "../services/LoginService";

export default {
  data: () => ({
    items: Menu,
    selecionado: 0,
    selectedItem: 0,
  }),

  mounted() {
    this.menuFiltered;
  },

  computed: {
    userLogado() {
      return LoginService.getUserStorage();
    },

    menuFiltered() {
      let menu = this.items.filter((word) => {
        if (!this.userLogado) {
          return word.permission == "public";
        }

        if (this.userLogado && this.userLogado.admin) {
          return word.permission;
        }

        if (this.userLogado && !this.userLogado.admin) {
          return word.permission != "admin";
        }
      });

      return menu;
    },
  },

  methods: {
    logout() {
      LoginService.logout();
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
