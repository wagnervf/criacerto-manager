<template>
  <v-container class="full-heigth">
    <v-row justify="center">
      <v-col
        class="px-1 py-0"
        cols="12"
        lg="12"
        justify-center
        flex
      >
        <v-card class="mx-auto">
          <v-toolbar
            class="pl-6 my-1"
            color="teal"
            elevation="0"
            prominent
            shrink-on-scroll
            dark
          >
            <v-app-bar-title class="ma-6 text-h4 font-weight-black">
              Simulações
              <p class="white--text caption">
                Listagem de todas as Simulações do Cria Certo
              </p>
            </v-app-bar-title>

            <v-spacer />

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>
        </v-card>

        <v-list
          v-for="item in items"
          :key="item.title"
          class="py-0 transparent"
          three-line
          active-class="primary--text"
        >
          <v-card
            class="mx-auto my-1 py-2"
            v-if="item.id != 100"
          >
            <v-list-item
              :key="item.title"
              link
              :to="item.to"
            >
              <v-list-item-avatar
                color="teal"
                size="65"
              >
                <v-icon
                  color="white"
                  style="
                    font-size: 18px;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri,
                      'Trebuchet MS', sans-serif;
                  "
                >
                  {{ item.icon }}
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <div
                  class="teal--text text-h6"
                  v-html="item.title"
                />
                <v-list-item-title />

                <div v-html="item.subtitle" />

                <v-list-item-subtitle />
              </v-list-item-content>
              <v-list-item-action>
                <v-icon color="teal lighten-1">
                  mdi-menu-right
                </v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-card>

          <v-card
            v-else
            class="mx-auto mt-6"
            elevation="1"
          >
            <v-list-item
              :key="item.title"
              link
              :to="item.to"
            >
              <v-list-item-avatar
                color="blue-grey"
                size="65"
              >
                <v-icon
                  color="white"
                  style="
                    font-size: 18px;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri,
                      'Trebuchet MS', sans-serif;
                  "
                >
                  {{ item.icon }}
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <div
                  class="blue-grey--text text-h6"
                  v-html="item.title"
                />
                <v-list-item-title />

                <div v-html="item.subtitle" />

                <v-list-item-subtitle />
              </v-list-item-content>
              <v-list-item-action>
                <v-icon color="teal lighten-1">
                  mdi-menu-right
                </v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-card>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import VueJwtDecode from "vue-jwt-decode";

import Menu from "../../assets/json/listSimulacoes.json";

export default {
  name: "ViewSimulacoes",
  components: {},
  data: () => ({
    items: Menu,
    open: [1, 2],
    search: null,
  }),
  computed: {},

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
    },
  },
};
</script>
