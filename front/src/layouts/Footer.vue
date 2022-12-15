<template>
  <v-card>
    <v-footer
      app
      color="white"
      class="footerpart"
      inset
    >
      <v-col
        cols="12"
        class="text-center grey--text"
      >
        <span>© {{ new Date().getFullYear() }} — Cria Certo Manager</span>
      </v-col>
    </v-footer>
  </v-card>
</template>
<script>
export default {
  name: "LayoutFooter",
};
</script>
<style lang="scss">
.v-application .footerpart {
  border-top: 1px solid rgba(0, 0, 0, 0.1) !important;
}
</style>
