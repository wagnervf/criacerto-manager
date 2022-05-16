<template>
  <v-snackbar v-model="snackbar" :timeout="timeout" absolute :color="color">
    {{ snackbarText }}

    <template v-slot:action="{ attrs }">
      <v-btn color="white" text v-bind="attrs" @click="fechar"> Fechar </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    snackbar: {
      default: false,
    },
    snackbarText: {
      default: "",
    },
    color: {
      default: "",
    },
  },

  data() {
    return {
      timeout: 2000,
    };
  },

  methods: {
    fechar() {
      this.snackbar = false;
    },
  },
};
</script>

<style></style>
