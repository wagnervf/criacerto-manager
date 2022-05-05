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
      <v-icon class="mx-0" >mdi-home</v-icon>
        <!-- {{ item.text }} -->
      </v-breadcrumbs-item>

      <v-breadcrumbs-item
        v-else
        :href="item.href"
        :disabled="item.disabled"
      >
        {{ item.text }}
      </v-breadcrumbs-item>


    </template>
  </v-breadcrumbs>

    <v-spacer />

    <v-list style="background-color: whitesmoke">
      <v-list-item-subtitle> {{ user.name }} </v-list-item-subtitle>
    </v-list>
    

    <v-menu bottom left transition="scale-transition">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" class="mx-4">
          <v-icon>mdi-account</v-icon>
          <v-icon>mdi-menu-down</v-icon>
        </v-btn>
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
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
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
      { title: "Sair", to: "/login", icon: "mdi-logout" },
    ],

    user: {
      name: "",
      email: "",
    },

   breadcrumbs: []

    // href() {
    //   return undefined;
    // },
  }),

  created() {
  //this.breadcrumbs = this.rotas();
   console.log(this.$route.meta.breadCrumb);
  },

  mounted() {
    this.getUserLocalStorage();
    // var u =  JSON.parse(localStorage.getItem("userLogged"))

  //  console.log(this.$route.name);
    
  },

  computed: {
    rotas() {
     
      return this.$route.meta.breadCrumb;
    },
  },

  methods: {

    

    getUserLocalStorage() {
      let user = JSON.parse(localStorage.getItem("userLogged"));
      console.log(user);

      if (user) {
        this.user.name = user.name;
        this.user.email = user.email;
      }
    },
  },
};
</script>



<style>
.v-application a {
  color: rgba(0, 0, 0, 0.54);
}
</style>