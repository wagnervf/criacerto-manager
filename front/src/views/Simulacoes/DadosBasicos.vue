<template>
  <v-container auto-height>
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
            color="blue-grey"
            elevation="0"
            prominent
            shrink-on-scroll
            dark
          >
            <v-app-bar-title class="ma-6 text-h4 font-weight-black">
              Monta Natural
              <p class="white--text caption">
                Subtítulo da Monta Natural
              </p>
            </v-app-bar-title>

            <v-spacer />

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>
          <v-col
            class="pa-4"
            cols="12"
            lg="12"
            justify-center
            flex
          >
            <v-col>
              <RacasTouro />
            </v-col>

            <div class="my-4" />

            <v-col>
              <ListEstados />
            </v-col>
          </v-col>
          <v-col />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import FormCustom from "../../components/FormCustom.vue";
import ListEstados from "../../components/estados.vue";
import RacasTouro from "../../components/racasTouro.vue";
export default {
  name: "ViewDadosBasicos",
  components: {
    // FormCustom ,
    ListEstados,
    RacasTouro,
  },

  data: () => ({
    form: {
      nomeSimulacao: "",
      nomePropiedade: "",
      estado: "",
      cidade: "",
    },
    title: "Dados Básicos das Simulações",
    icon: "mdi-database-edit",
    subtitle: "Nomes das Simulações, Dados da Propriedade, Estado e Município",
  }),

  computed: {},

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },

    createUser(userForm) {
      console.log(userForm);
      // call an API to create a new user
    },

    SetEstado(e) {
      this.form.estado = e;
    },

    SetCidade(e) {
      this.form.cidade = e;
    },

    // updateUser(userForm) {
    //   console.log("updating", userForm);
    //   // call an API to update the existing user
    // },
  },
};
</script>
