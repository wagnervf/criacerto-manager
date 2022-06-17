<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col
        cols="12"
        lg="12"
        justify-center
        flex
      >
        <v-card class="mx-auto">
          <v-toolbar
            color="grey lighten-3"
            elevation="0"
          >
            <v-toolbar-title> Meu Perfil </v-toolbar-title>
          </v-toolbar>

          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-row>
              <v-card-text>
                <v-col cols="12">
                  <v-text-field
                    v-model="formPerfil.nome"
                    label="Nome"
                    :rules="nameRules"
                    required
                    prepend-icon="mdi-account"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="formPerfil.email"
                    label="E-mail"
                    :rules="emailRules"
                    required
                    type="email"
                    prepend-icon="mdi-email"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="formPerfil.senha"
                    label="Senha"
                    :rules="passwordRules"
                    required
                    :counter="6"
                    type="password"
                    prepend-icon="mdi-lock"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="formPerfil.local"
                    label="Local"
                    prepend-icon="mdi-map-marker"
                  />
                </v-col>
                <v-col cols="12">
                  <v-select
                    v-model="formPerfil.perfil"
                    :items="perfis"
                    :rules="[(v) => !!v || 'Selecione um perfil']"
                    required
                    label="Perfil"
                    prepend-icon="mdi-badge-account-alert"
                  />
                </v-col>
              </v-card-text>

              <v-card-actions class="col-12 pr-6">
                <v-spacer />
                <v-btn
                  color="error"
                  depressed
                  @click="cancelar"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  color="success"
                  depressed
                  :disabled="!valid"
                  @click="validate"
                >
                  Salvar
                </v-btn>
              </v-card-actions>
            </v-row>
            <pre>valid : {{ valid }}</pre>
            <pre>{{ formPerfil }}</pre>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ViewProfile",
  components: {},

  data: () => ({
    ativo: true,
    perfis: ["Técnico", "Administrador"],
    desserts: [],
    editedIndex: -1,

    formPerfil: {
      nome: "",
      email: "",
      senha: "",
      local: "",
      perfil: "",
    },
    valid: false,

    nameRules: [
      (v) => !!v || "Nome é obrigatório",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "E-mail não é válido",
    ],

    passwordRules: [
      (v) => !!v || "A senha é obrigatória",
      (v) =>
        (v && v.length <= 6) || "A senha deve conter no mínimo 6 caracteres",
    ],

    snackbar: false,
    snackbarText: "",
    timeout: 2000,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      console.log(this.$refs.form);
      this.snackbarText = "Salvo com sucesso!";
      this.snackbar = true;
    },
    reset() {
      this.$refs.form.reset();
    },
    cancelar() {
      this.formPerfil = {};

      this.$refs.form.resetValidation();
    },
  },
};
</script>
