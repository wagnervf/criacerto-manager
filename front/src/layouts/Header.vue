<template>
  <v-container
    fluid
    class="pa-0"
  >
    <v-row
      no-gutters
      class="grey lighten-4 ma-0"
    >
      <v-col
        md="8"
        xs="12"
        sm="12"
        class="col-xs-12 py-0"
      >
        <v-breadcrumbs :items="rotas">
          <template #item="{ item }">
            <v-breadcrumbs-item
              v-if="item.text == 'Início'"
              :href="item.href"
              class="teal--text"
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
              class="text-wrap text-sm-caption"
            >
              {{ item.text }}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </v-col>

      <v-col
        class="py-0 text-sm-center text-xs-center text-md-rigth col-xs-12"
        md="4"
        xs="12"
        sm="12"
      >
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
                  color="grey lighten-4"
                  style="height: 60px"
                >
                  <v-list-item
                    link
                    v-on="{ ...tooltip, ...on }"
                  >
                    <v-list-item-content
                      accesskey="u"
                      class="inline-block"
                    >
                      <v-list-item-subtitle class="text-right">
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

    breadcrumbs: [],

    // href() {
    //   return undefined;
    // },
  }),

  created() {
    // this.breadcrumbs = this.rotas();
    // console.log(this.$route.meta.breadCrumb);
  },

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
</style>
