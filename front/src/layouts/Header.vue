<template>
  <v-app-bar
    app
    max-height="60"
    height="60"
    color="grey lighten-4"
    class="elevation-0 teal--text"
    light
  >
    <v-breadcrumbs :items="rotas">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          v-if="item.text == 'Início'"
          :href="item.href"
          class="teal--text"
        >
          <v-icon class="mx-0">mdi-home</v-icon>
          <!-- {{ item.text }} -->
        </v-breadcrumbs-item>

        <v-breadcrumbs-item v-else :href="item.href" :disabled="item.disabled">
          {{ item.text }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>

    <v-spacer />

    <v-menu
      offset-y
      tabindex="1"
      transition="scale-transition"
      title="Menu de ações do usuário"
    >
      <template v-slot:activator="{ on }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-list
              two-line
              flat
              color="grey lighten-4"
              class="ma-0 pa-0"              
            >
              <v-list-item link v-on="{ ...tooltip, ...on }">
                <v-list-item-avatar>
                  <v-avatar color="grey">
                    <v-icon dark> mdi-account-circle </v-icon>
                  </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content accesskey="u">
                  <v-list-item-title>{{ user.nome }}</v-list-item-title>
                  <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-icon>mdi-menu-down</v-icon>
              </v-list-item>
            </v-list>
          </template>
          <span>Menu de ações do usuário</span>
        </v-tooltip>
      </template>

      <v-list>
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
              <v-icon class="px-2">{{ item.icon }}</v-icon>
              {{ item.title }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          dense
          link
          class="px-2 teal--text"
          @click="logout"
          tabindex="2"        
        >
          <v-list-item-content>
            <v-list-item-title>
              <v-icon class="px-2 teal--text">mdi-logout</v-icon>
              Sair
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",

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
      { title: "Mensagens", to: "", icon: "mdi-email" },
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
    //this.breadcrumbs = this.rotas();
    //console.log(this.$route.meta.breadCrumb);
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
      return this.$store.getters.getUserLogged.nome;
    },

    emailUser() {
      return this.$store.getters.getUserLogged.email;
    },
  },

  methods: {
    getUserLocalStorage() {
      let user = JSON.parse(localStorage.getItem("userLogged"));
      if (user) {
        this.user.nome = user.nome.charAt(0).toUpperCase() + user.nome.slice(1);
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

<style>
.v-application a {
  color: rgba(0, 0, 0, 0.54);
}
</style>
