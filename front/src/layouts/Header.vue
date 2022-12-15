<template>
  <v-container
    fluid
    class="pa-0 white"
  >
    <v-card
      class="pa-0 white"
      elevation="1"
      style="border-radius: 0px"
    >
      <v-row
        no-gutters
        class="ma-0 white"
      >
        <v-col class="py-0 text-left col-6">
          <v-list-item class="pa-2 d-flex d-sm-none">
            <v-btn
              icon
              @click.stop="openMenu()"
            >
              <v-icon class="px-2 teal--text">
                mdi-menu
              </v-icon>
            </v-btn>
            <v-list-item-title>
              Cria Certo
              <span class="font-weight-bold teal--text">Manager</span>
            </v-list-item-title>
          </v-list-item>
        </v-col>

        <v-col class="py-0 text-rigth col-6">
          <v-menu
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
                    style="height: 60px"
                    class="white mx-0"
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
        </v-col>
      </v-row>
    </v-card>

    <v-row class="ma-0 grey lighten-4">
      <v-col class="col-12 py-0 grey lighten-4 t">
        <v-breadcrumbs
          :items="rotas"
          divider=">"
          class="justify-end text-righ mr-2"
        >
          <template #item="{ item }">
            <v-breadcrumbs-item
              v-if="item.text == 'Início'"
              :href="item.href"
              class="teal--text px-0 text-sm-caption"
            >
              <v-icon class="mx-0">
                mdi-home
              </v-icon>

              <!-- {{ item.text }} -->
            </v-breadcrumbs-item>

            <v-breadcrumbs-item
              v-else
              :href="item.href"
              :disabled="item.disabled"
              class="text-wrap text-xs-caption ma-0 pa-0"
            >
              {{ item.text }}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

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
      name: "",
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

    rotas() {
      return this.$route.meta.breadCrumb;
    },

    nomeUser() {
      return this.$store.getters.getUserLogged.name;
    },

    emailUser() {
      return this.$store.getters.getUserLogged.email;
    },
  },

  methods: {
    getUserLocalStorage() {
      const user = JSON.parse(localStorage.getItem("userLogged"));
      if (user) {
        this.user.name = user.name
          ? user.name.charAt(0).toUpperCase() + user.name.slice(1)
          : "";
        this.user.email = user.email.toLowerCase();
      }
    },

    logout() {
      localStorage.removeItem("userLogged");
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
