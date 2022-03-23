<template>
  <v-navigation-drawer
    v-model="Sidebar_drawer"
    mobile-breakpoint="960"
    :mini-variant.sync="mini"
    width="250"
    app
    permanent
    elevation-4
    id="main-sidebar"
  >
    <v-sheet color="grey lighten-4" class="pa-2  d-flex align-center">
      <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>

      <p class="py-0 px-3">
        Cria Certo
        <span class="font-weight-bold teal--text">Manager</span>
        <v-icon class="teal--text px-1"> mdi-cogs</v-icon>
      </p>
    </v-sheet>

    <v-divider class="pb-2"></v-divider>

    <ListSidebar />

    <v-footer justify-end absolute end>
      <v-list-item class="px-0">
        <v-spacer></v-spacer>
        <v-divider></v-divider>
        <v-list-item-title>
          <span style="font-size: 10px" class="text-center wrap">
            Cria Certo Manager&copy; {{ new Date().getFullYear() }}
          </span>
        </v-list-item-title>
      </v-list-item>
    </v-footer>
  </v-navigation-drawer>
</template>

<script src="./sidebar.js"></script>

<style>
.v-application p{
  margin-bottom : 0px;
}

</style>