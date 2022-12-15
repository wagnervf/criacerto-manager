<template>
  <v-row dense>
    <v-col cols="12">
      <v-card
        color="teal"
        dark
        class="pb-4"
      >
        <v-card-title class="mx-4 text-h4 font-weight-black">
          {{ title }}
        </v-card-title>

        <v-card-subtitle class="ml-4">
          {{ subtitle }}
        </v-card-subtitle>

        <v-card-actions class="justify-end text-right">
          <v-btn
            text
            @click="voltar"
          >
            <v-icon> mdi-arrow-left-drop-circle-outline </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TitleToolbarListTeal",
  props: {
    title: {
      type: String,
      default() {
        return "";
      },
    },
    subtitle: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data: () => ({
    search: null,
  }),
  computed: {},
  methods: {
    voltar() {
      return window.history.back();
    },
  },
};
</script>

<style>
.v-app-bar-title__content {
}
</style>
