<template>
  <v-responsive class="mx-auto">
    <v-card
      color="teal"
      dark
      class="pb-4"
    >
      <v-row>
        <v-col
          cols="12"
          class="mx-0"
        >
          <v-card-title class="ml-4 text-h5 font-weight-black">
            {{ title }}
          </v-card-title>

          <v-card-subtitle class="mx-4 pb-0">
            {{ subtitle }}
          </v-card-subtitle>
        </v-col>

        <v-col
          cols="6"
          class="pa-0 justify-star text-left"
        >
          <v-btn
            text
            @click="voltar"
            class="mx-4 pa-0"
          >
            <v-icon> mdi-arrow-left-drop-circle-outline </v-icon>
          </v-btn>
        </v-col>
        <v-col
          cols="6"
          class="pa-0 justify-end text-right"
        >
          <v-btn
            text
            @click="help"
            class="pa-0 mx-4"
          >
            <v-icon> mdi-help </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-responsive>
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
    help() {
      switch (this.$route.name) {
        case "Gerenciar Parâmetros":
          this.$router.push("ajuda/parametros");
          break;

        case "Gerenciar Usuarios":
          this.$router.push("ajuda/usuarios");
          break;

        default:
          break;
      }
      console.log(this.$route.name);
    },
  },
};
</script>
