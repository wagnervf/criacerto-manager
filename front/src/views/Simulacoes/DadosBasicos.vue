<template>
  <v-container
    fluid
    class="py-0"
  >
    <v-col
      cols="12"
      lg="12"
      justify-center
      flex
    >
      <ListEstados />

      <v-row class="d-flex justify-end ma-6 pb-6">
        <v-btn
          outlined
          color="error"
          class="mr-4"
        >
          Cancelar
        </v-btn>

        <v-btn
          outlined
          color="success"
          class="mr-4"
        >
          Salvar
        </v-btn>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
// import FormCustom from "../../components/FormCustom.vue";
import ListEstados from "../../components/estados.vue";

export default {
  name: "ViewDadosBasicos",
  components: {
    // FormCustom ,
    ListEstados,
  },

  data: () => ({
    form: {
      nomeSimulacao: "",
      nomePropiedade: "",
      estado: "",
      cidade: "",
    },
    title: "Dados Básico",
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
