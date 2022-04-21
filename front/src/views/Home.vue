<template>
  <v-container class="full-heigth">
    <v-row justify="center">
      <v-col class="px-1 py-0" cols="12" lg="12" justify-center flex>
        <v-card class="mx-auto">
          <v-toolbar color="grey lighten-3" elevation="0">
            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

            <v-toolbar-title>Lista de Parâmetros</v-toolbar-title>

            <v-spacer></v-spacer>

        
          </v-toolbar>

          <v-list three-line active-class="primary--text">
            <div v-for="(item, index) in items" :key="item.title">
              <v-divider
                v-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>

              <v-list-item v-else link :key="item.title" :to="item.to">
                <v-list-item-avatar color="teal" size="60">
                  <v-icon color="white" style="font-size: 18px; font-family: monospace;">{{
                    item.icon
                  }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title
                    class="teal--text"
                    v-html="item.title"
                  ></v-list-item-title>

                  <v-list-item-subtitle
                    v-html="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon color="teal lighten-1">mdi-menu-right</v-icon>
                </v-list-item-action>
              </v-list-item>
            </div>
          </v-list>
        </v-card>

      <!-- Trasformar estas listas repetidas em Componentes -->
        <div class="my-8"></div>
        <!-- <v-card>
          <v-list three-line active-class="primary--text">
            <div v-for="(item, index) in config" :key="item.title">
              <v-divider
                v-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>

              <v-list-item v-else link :key="item.title" :to="item.to">
                <v-list-item-avatar size="60">
                  <v-icon color="teal" style="font-size: 26px">{{
                    item.icon
                  }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title
                    class="teal--text"
                    v-html="item.title"
                  ></v-list-item-title>

                  <v-list-item-subtitle
                    v-html="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon color="teal lighten-1">mdi-menu-right</v-icon>
                </v-list-item-action>
              </v-list-item>
            </div>
          </v-list>
        </v-card> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


//import VueJwtDecode from "vue-jwt-decode";

import Menu from "../assets/json/listSimulacoes.json";
//import Config from " ../assets/json/listConfiguracao.json";

  export default {
    data: () => ({
      items: Menu,
   //   config: Config,
      outer: [
        {
          id: 1,
          name: 'Parâmentro do Cria Certo',
          children: [
            {
              id: 2,
              name: 'Core team',
              children: [
                {
                  id: 201,
                  name: 'John',
                },
                {
                  id: 202,
                  name: 'Kael',
                },
                {
                  id: 203,
                  name: 'Nekosaur',
                },
                {
                  id: 204,
                  name: 'Jacek',
                },
                {
                  id: 205,
                  name: 'Andrew',
                },
              ],
            },
            {
              id: 3,
              name: 'Administrators',
              children: [
                {
                  id: 301,
                  name: 'Mike',
                },
                {
                  id: 302,
                  name: 'Hunt',
                },
              ],
            },
            {
              id: 4,
              name: 'Contributors',
              children: [
                {
                  id: 401,
                  name: 'Phlow',
                },
                {
                  id: 402,
                  name: 'Brandon',
                },
                {
                  id: 403,
                  name: 'Sean',
                },
              ],
            },
          ],
        },
      ],
      open: [1, 2],
      search: null,
     
     
    }),
    computed: {
     
    },
    
    created() {
      this.getUser();
    },
  
    methods: {
      getUser() {
      //  let token = localStorage.getItem("jwt");
      //  let tokenDecoded = VueJwtDecode.decode(token);
       // this.user = tokenDecoded;
      },
      logOutUser() {
        localStorage.removeItem("jwt");
        this.$router.push("/");
      }
    },
  }




</script>


