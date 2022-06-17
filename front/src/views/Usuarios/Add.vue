<template>
  <v-container>
    <v-card>
      <v-card-title class="grey lighten-3 col-12 pa-6">
        <v-icon>mdi-account-plus</v-icon>
        <span class="ml-4 text-h5">Novo usuário</span>
        <v-spacer />
      </v-card-title>

      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-col>
          <v-card-text class="col-8 pa-4 mx-auto">
            <v-col cols="12">
              <v-text-field
                v-model="formRegister.nome"
                label="Nome"
                :rules="nameRules"
                required
                prepend-icon="mdi-account"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="formRegister.email"
                label="E-mail"
                :rules="emailRules"
                required
                type="email"
                prepend-icon="mdi-email"
                :error="erros > 0 ? true : false"
                :error-messages="errosEmail"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-if="!isEdit"
                v-model="formRegister.senha"
                label="Senha"
                :rules="passwordRules"
                required
                :counter="6"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                prepend-icon="mdi-lock"
                @click:append="viewPassword"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="formRegister.local"
                label="Local"
                prepend-icon="mdi-map-marker"
              />
            </v-col>
            <!-- <v-col cols="12">
                <v-select
                  :items="perfis"
                  v-model="formRegister.perfil"
                  :rules="[(v) => !!v || 'Selecione um perfil']"
                  required
                  label="Perfil"
                  prepend-icon="mdi-badge-account-alert"
                ></v-select>
              </v-col> -->

            <v-col cols="12">
              <v-card elevation="0">
                <v-sheet>
                  <label class="text--title"><v-icon left>mdi-badge-account</v-icon> Perfil do
                    Usuário</label>
                  <div class="mx-4">
                    <v-switch
                      v-model="formRegister.tecnico"
                      inset
                      label="Técnico"
                      class="mx-2"
                    />
                    <v-switch
                      v-model="formRegister.admin"
                      inset
                      label="Administrador"
                      class="mx-2"
                    />
                  </div>
                </v-sheet>
              </v-card>
            </v-col>
          </v-card-text>
        </v-col>
      </v-form>

      <v-divider />

      <v-card-actions class="col-12 pa-6 grey lighten-5">
        <v-spacer />
        <v-btn
          color="error"
          depressed
          @click="close"
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
    </v-card>

    <pre>{{ isEdit }}</pre>

    <pre> {{ formRegister }} </pre>

    <v-snackbar
      v-model="snackbar"
      :vertical="true"
      :color="color"
    >
      {{ snackbarText }}
      <template #action="{ attrs }">
        <v-btn
          dark
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import UsuariosServices from "@/services/UsuariosServices";
// import bcrypt from 'bcryptjs';
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export default {
  name: "ViewUsuarios",
  components: {},
  props: {
    usuarioEditar: {},
  },

  data() {
    return {
      ativo: true,
      perfis: ["Técnico", "Administrador"],
      desserts: [],
      showPassword: false,
      formRegister: {
        nome: "",
        email: "",
        perfil: "",
        local: "",
        isAdmin: false,
        admin: false,
        tecnico: true,
      },
      idUser: "",
      errosEmail: [],
      valid: false,
      nameRules: [(v) => !!v || "Nome é obrigatório"],
      emailRules: [
        (v) => !!v || "E-mail é obrigatório",
        (v) => /.+@.+\..+/.test(v) || "E-mail não é válido",
      ],
      passwordRules: [
        (v) => !!v || "A senha é obrigatória",
        (v) =>
          (v && v.length >= 6) || "A senha deve conter no mínimo 6 caracteres",
      ],
      editar: false,
      switch1: true,
      switch2: false,
    };
  },

  computed: {
    erros() {
      return this.errosEmail.length;
    },

    isEdit() {
      return this.editar;
    },
  },

  watch: {
    "formRegister.email": function () {
      if (!this.valid) {
        this.errosEmail = [];
      }
    },

    usuarioEditar(value) {
      this.editar = true;

      this.formRegister = {
        _id: value._id,
        nome: value.nome,
        email: value.email,
        // senha: value.senha,
        // perfil: value.perfil,
        local: value.local,
        tecnico: value.tecnico,
        admin: value.admin,
      };
    },
  },

  created() {},

  mounted() {
    if (typeof this.$route.params._id !== "undefined") {
      this.editar = true;
      this.formRegister = { ...this.$route.params };
    }
    console.log(this.$route);
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        if (this.isEdit) {
          this.updateUsuario();
        } else {
          this.salvarUsuario();
        }
      }
    },

    reset() {
      this.$refs.form.reset();
      this.formRegister = {};
      this.errosEmail = [];
      this.editar = false;
    },

    close() {
      //   /// Envia false para compondente Pai fechar o modal.
      //   /// No componente Pai colocaria @fecharDialog
      //   //this.$emit("fecharDialog", false);

      //   // Atualizar o props e fechá-lo
      //   // Notificando o componente PAI que deve adicionar um false
      //   this.$emit("update", false);
      this.reset();
    },

    viewPassword() {
      this.showPassword = !this.showPassword;
    },

    async salvarUsuario() {
      try {
        const response = await UsuariosServices.storeUsuario(this.formRegister);

        if (response.status != 201) {
          if (response.data.type == "email") {
            return this.errosEmail.push(response.data.message);
          }
          return this.setMessage("error", "Erro", response.data.error);
        }

        this.setMessage("success", "Finalizado!", "Salvo com sucesso!");

        await pause(1000);
        this.$router.push({ name: "Lista de Usuarios" });
      } catch (error) {
        return this.setMessage("error", "Erro", error.data.message);
      }
    },

    async updateUsuario() {
      try {
        const response = await UsuariosServices.updateUsuario(
          this.formRegister
        );

        if (response.status != 200) {
          // Erro na atualização do usuário
          return this.setMessage(response.data.message, true, "error");
        }
        this.setMessage(
          "success",
          "Finalizado!",
          "Usuário atualizado sucesso!"
        );

        await pause(1000);
        this.$router.go();
      } catch (error) {
        return this.setMessage("error", "Erro", error.data.message);
      }
    },

    setMessage(type, title, message) {
      return this.$notify({
        group: "foo",
        type: type,
        title: title,
        text: message,
      });
    },

    // decodeSenha(){
    //    let v = bcrypt.getRounds('$2a$06$q2rKyAa5XvPxvDwftvqodegd7fbhT8JV3NumW80RXm0yNYrST6pti');
    //     console.log(v);
    //   },
  },
};
</script>
