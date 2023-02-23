<template>
  <div class="py-0 text-rigth">
    <v-menu
      v-if="this.userLogado"
      offset-y
      tabindex="1"
      transition="scale-transition"
      title="Menu de ações do usuário"
    >
      <template #activator="{ on }">
        <v-tooltip bottom>
          <template #activator="{ on: tooltip }">
            <v-list
              flat
              style="height: 60px; width: 150px"
              class="transparent mx-0"
            >
              <v-list-item
                link
                v-on="{ ...tooltip, ...on }"
                class="ma-0"
              >
                <v-list-item-content
                  accesskey="u"
                  class="inline-block mx-0"
                >
                  <v-list-item-subtitle class="text-right mx-0">
                    {{ user.name }}
                  </v-list-item-subtitle>
                  <!-- <v-list-item-subtitle>
                        {{ user.email }}
                      </v-list-item-subtitle> -->
                </v-list-item-content>
                <v-icon>mdi-menu-down</v-icon>
              </v-list-item>
            </v-list>
          </template>
          <span>Menu de ações do usuário</span>
        </v-tooltip>
      </template>

      <v-list dense>
        <v-list-item
          v-for="item in userprofile"
          :key="item.title"
          :active-class="`teal--text`"
          class="px-2"
          link
          router
          :to="item.to"
          dense
        >
          <v-list-item-content>
            <v-list-item-title>
              <v-icon class="px-2">
                {{ item.icon }}
              </v-icon>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item
          dense
          link
          class="px-2 teal--text"
          tabindex="2"
          @click="logout"
        >
          <v-list-item-content>
            <v-list-item-title>
              <v-icon class="px-2 teal--text">
                mdi-logout
              </v-icon>
              Sair
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-list-item
      v-else
      dense
      link
      class="px-2 pr-0 teal--text"
      tabindex="2"
      @click="login"
      title="Acessar"
    >
      <v-list-item-content class="pr-0 mr-0">
        <v-list-item-title>
          Login
          <v-icon class="px-2 teal--text">
            mdi-login
          </v-icon>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LoginService from "../services/LoginService";

export default {
  name: "LayoutHeader",

  components: {},

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    userprofile: [
      { title: "Perfil", to: "/usuarios/perfil", icon: "mdi-account" },
      { title: "Sobre", to: "/Sobre/sobre", icon: "mdi-information" },
    ],

    user: {
      name: "Fulano",
      email: "",
    },

    drawer: null,
  }),

  created() {},

  mounted() {
    this.getUserLocalStorage();
  },

  computed: {
    ...mapGetters([
      "getUserLogged",
      // ...
    ]),

    userLogado() {
      return LoginService.getUserStorage();
    },

    // emailUser() {
    //   return this.$store.getters.getUserLogged.email;
    // },
  },

  methods: {
    async getUserLocalStorage() {
      //const user = await this.$store.dispatch("getUserStorage");
      const user = this.userLogado;

      console.log(user);

      if (user) {
        this.user.name = user.name
          ? user.name.charAt(0).toUpperCase() + user.name.slice(1)
          : "";
        this.user.email = user.email.toLowerCase();
      }
    },

    logout() {
      //this.$store.commit("LOGOUT");
      LoginService.logout();
      this.$router.push({ name: "login" });
    },

    login() {
      this.$router.push({ name: "login" });
    },

    openMenu() {
      this.$store.commit("SET_SIDEBAR_CUSTOM", (this.drawer = !this.drawer));
    },
  },
};
</script>

<style scoped>
.v-application a {
  color: rgba(0, 0, 0, 0.54);
}

.v-list-item__content {
  display: inline-block;
  margin-right: 25px;
}

@media only screen and (max-width: 600px) {
  .v-toolbar__content {
    height: 1px !important;
  }
}

.v-breadcrumbs {
  padding: 4px !important;
}

.v-breadcrumbs li {
  font-size: 12px !important;
}
</style>
