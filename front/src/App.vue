/* eslint-disable vue/attribute-hyphenation */
<template>
  <v-app>
    <v-main>
      <router-view />
      <notifications
        group="foo"
        position="top right"
        width="500px"
      />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<!-- Styles -->
<style>
@import "./assets/css/style_snackBar.css";
@import "./assets/css/variables.css";
</style>
