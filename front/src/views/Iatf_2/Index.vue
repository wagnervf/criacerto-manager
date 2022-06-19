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
            color="grey lighten-3"
            elevation="0"
          >
            <v-toolbar-title> IATF RT </v-toolbar-title>
          </v-toolbar>

          <v-list
            three-line
            active-class="primary--text"
          >
            <div
              v-for="(item, index) in items"
              :key="item.title"
            >
              <v-divider
                v-if="item.divider"
                :key="index"
                :inset="item.inset"
              />

              <v-list-item
                v-else
                :key="item.title"
                link
                :to="item.to"
              >
                <v-list-item-avatar
                  color="teal"
                  size="56"
                >
                  <v-icon color="white">
                    {{ item.icon }}
                  </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <div class="teal--text">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </div>

                  <v-list-item-subtitle>
                    {{
                      item.subtitle
                    }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon color="teal lighten-1">
                    mdi-menu-right
                  </v-icon>
                </v-list-item-action>
              </v-list-item>
            </div>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import VueJwtDecode from "vue-jwt-decode";

import Menu from "../../assets/json/listItens2_IATF.json";

export default {
  name: "ViewMOntaNatural",
  data: () => ({
    items: Menu,
    outer: [
      {
        id: 1,
        name: "Parâmentro do Cria Certo",
        children: [
          {
            id: 2,
            name: "Core team",
            children: [
              {
                id: 201,
                name: "John",
              },
              {
                id: 202,
                name: "Kael",
              },
              {
                id: 203,
                name: "Nekosaur",
              },
              {
                id: 204,
                name: "Jacek",
              },
              {
                id: 205,
                name: "Andrew",
              },
            ],
          },
          {
            id: 3,
            name: "Administrators",
            children: [
              {
                id: 301,
                name: "Mike",
              },
              {
                id: 302,
                name: "Hunt",
              },
            ],
          },
          {
            id: 4,
            name: "Contributors",
            children: [
              {
                id: 401,
                name: "Phlow",
              },
              {
                id: 402,
                name: "Brandon",
              },
              {
                id: 403,
                name: "Sean",
              },
            ],
          },
        ],
      },
    ],
    open: [1, 2],
    search: null,
    meta: null,
  }),

  computed: {
    currentRouteName() {
      console.log(this.$router);
      return this.$route.name;
    },

    // compareTitle(){
    //   //this.meta = breadCrumbs;
    //   if (typeof this.$route.meta.breadCrumb === "function") {
    //     this.meta = this.$route.meta.breadCrumb.call(this, this.$route);
    //   }
    //   console.log(this.meta);
    //   //return meta == this.$route.name
    // },

    breadCrumbs() {
      if (typeof this.$route.meta.breadCrumb === "function") {
        return this.$route.meta.breadCrumb.call(this, this.$route);
      }
      return this.$route.meta.breadCrumb;
    },
  },

  created() {
    this.getUser();
    console.log(this.$route.name);
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
