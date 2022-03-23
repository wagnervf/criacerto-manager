<template>
  <v-app-bar
    app
    max-height="60"
    height="60"
    color=" lighten-1"
    class="elevation-1 teal--text"
    style="border-bottom: solid 3px teal "
    light
    
  >
   <!-- clipped-left
    clipped-right -->

   

    <v-spacer />

       <v-list  style="background-color: whitesmoke;">
        <v-list-item-subtitle> {{user.name}} </v-list-item-subtitle>
        <!-- <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle> -->
      </v-list> 

       

    <v-menu  bottom left transition="scale-transition" >
      <template v-slot:activator="{ on }">
        <v-btn  icon v-on="on" class="mx-4 ">
          <v-icon>mdi-cog</v-icon>
          <v-icon>mdi-menu-down</v-icon>

        </v-btn>
      </template>

      <v-list>
        <!-- <v-list-item v-for="(item, i) in userprofile" :key="i" @click="href">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item> -->

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
              <v-list-item-title> <v-icon class="px-2">{{ item.icon }}</v-icon> {{item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
// Utilities
//import { mapState, mapMutations } from "vuex";
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
      { title: "Perfil", to: "", icon: "mdi-account"},
      { title: "Mensagens", to: "", icon: "mdi-email"},
     // { title: "Configurações" },
      { title: "Sobre", to:"/Sobre/sobre" , icon: "mdi-information"},
      { title: "Sair" , to:"/login", icon: "mdi-logout"},
    ],

    user: {
      name: "Não Logado",
    email: ""

    },

    href() {
      return undefined;
    },

    mounted() {
  this.getUserLocalStorage();
  // var u =  JSON.parse(localStorage.getItem("userLogged"))
   
   
  },

   methods: {

    getUserLocalStorage() {
      let user = JSON.parse(localStorage.getItem("userLogged"));
      console.log(user);

      if (user) {
        this.user.name = user.name;
        this.user.email = user.email;
      }
    }
  },

  
  }),

//      "icon": "mdi-cog-sync",


  // computed: {
  //   ...mapState(["Sidebar_drawer"]),
  // },

  // methods: {
  //   ...mapMutations({
  //     setSidebarDrawer: "SET_SIDEBAR_DRAWER",
  //   }),
  // },
};
</script>