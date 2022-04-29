<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" lg="12" justify-center flex>
        <v-card class="mx-auto">
          <v-toolbar color="grey lighten-3" elevation="0">
            <v-toolbar-title> Dados Básicos </v-toolbar-title>
          </v-toolbar>

          <!-- <FormDadosBasico v-model="form.nomeSimulacao"  /> -->

          <h3>Create user form</h3>
          <FormDadosBasico @on-submit="createUser" />

          <h3>Edit User form</h3>
          <FormDadosBasico :user="user" @on-submit="updateUser" />

          {{ form }}

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FormDadosBasico from "../../components/FormDadosBasicos.vue";

export default {
  name: "Monta Natural DadosBasicos",
  components: { FormDadosBasico },

  data: () => ({
    valid: true,
    form: {
      nomeSimulacao: "",
      nomePropiedade: "",
      estado: "",
      cidade: "",
    },

    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],


    user: {
      email: "john@example.com",
      name: "John",
    },
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
      console.log("creating", userForm);
      // call an API to create a new user
    },
    
    updateUser(userForm) {
      console.log("updating", userForm);
      // call an API to update the existing user
    },
  },
};
</script>
