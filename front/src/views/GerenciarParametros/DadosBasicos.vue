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
        <titleToolbarListTeal
          :title="title"
          :subtitle="subtitle"
        />

        <v-card class="mx-auto">
          <v-col>
            <RacasTouro />
          </v-col>

          <v-col />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import FormCustom from "../../components/FormCustom.vue";
//import ListEstados from "../../components/estados.vue";
import RacasTouro from "../../components/racasTouro.vue";
import titleToolbarListTeal from "../../components/titleToolbarListTeal.vue";
export default {
  name: "ViewDadosBasicos",
  components: {
    // FormCustom ,
    // ListEstados,
    titleToolbarListTeal,
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
    subtitle: "Raças de Touros....",
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
