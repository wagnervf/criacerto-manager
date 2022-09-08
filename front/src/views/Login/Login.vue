<template>
  <v-container>
    <v-row
      class="mx-auto my-5 pa-0 elevation-10 col-xl-6 col-lg-10 col-md-10 col-sm-10 col-xs-10"
      justify="center"
    >
      <v-col class="grey lighten-5 pa-0">
        <v-card-text class="teal darken-1 white--text">
          <p class="text-left mx-6 text-h4 white--text">
            Cria Certo Manager
          </p>
          <p class="text-caption text-left mx-6 text--grey">
            Acesse com seu usuário e pin
          </p>
        </v-card-text>

        <v-form
          ref="form"
          v-model="valid"
          class="pa-4 ma-2"
          lazy-validation
        >
          <v-stepper
            v-model="step"
            flat
            rounded
          >
            <v-stepper-items class="mt-6">
              <v-stepper-content
                step="1"
                class="my-6"
              >
                <label class="grey--text"> Informe seu email</label>

                <v-text-field
                  v-model="loginForm.email"
                  label="E-mail"
                  name="email"
                  prepend-inner-icon="mdi-email"
                  :rules="emailRules"
                  required
                  type="email"
                  outlined
                  class="mt-2"
                />

                <div class="pt-6 justify-end text-right">
                  <v-btn
                    color="primary"
                    @click="enviarEmailComPin"
                    class="mr-4"
                    :disabled="!valid"
                  >
                    Continuar
                  </v-btn>
                </div>
              </v-stepper-content>
              <v-stepper-content
                step="2"
                class="my-6"
              >
                <label class="grey--text">
                  Informe o número do Pin recebido em seu email</label>
                <v-text-field
                  id="pin"
                  v-model="loginForm.pin"
                  :rules="passRules"
                  required
                  label="Pin"
                  name="Pin"
                  prepend-inner-icon="mdi-lock"
                  counter
                  outlined
                  class="mt-2"
                  :append-icon="iconPin ? 'mdi-eye-off' : 'mdi-eye'"
                  @click:append="() => (iconPin = !iconPin)"
                  :type="iconPin ? 'password' : 'text'"
                />

                <div class="pt-6">
                  <v-btn
                    :disabled="!valid"
                    large
                    block
                    color="teal dark-1"
                    dark
                    class="mr-4"
                    @click="authenticateUser"
                  >
                    Acessar
                  </v-btn>

                  <v-btn
                    outlined
                    @click="step = 1"
                    block
                    dark
                    class="mr-4 mt-2"
                    color="indigo"
                  >
                    Voltar
                  </v-btn>
                </div>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-form>
      </v-col>
    </v-row>
    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        <p class="text-center my-2">
          <img
            src="@/assets/img/embrapa.png"
            style="width: 150px"
            alt="Logo da Embrapa"
          >
        </p>
      </v-col>

      <v-col
        class="text-center"
        cols="12"
      >
        <div class="text-center grey--text mt-4">
          <p>Sistema Gerenciador da Plataforma Cria Certo</p>
          {{ new Date().getFullYear() }}
          <p />
        </div>
      </v-col>
    </v-footer>
  </v-container>
</template>

<script>
import mixinUtils from "../../mixins/mixin-utils";
import LoginService from "@/services/LoginService";
// import Snackbar from "../../components/Snackbar.vue";
import { mapState } from "vuex";
// import { mapActions } from 'vuex';

export default {
  mixins: [mixinUtils],
  name: "LoginComponent",
  components: {},

  data() {
    return {
      props: {
        source: String,
      },
      step: 1,
      iconPin: String,
      valid: true,
      passRules: [
        (v) => !!v || "O pin é obrigatória",
        (v) => (v && v.length > 5) || "O pin deve ter no mínimo 6 caracteres",
      ],
      emailRules: [
        (v) => !!v || "O e-mail é obrigatório",
        (v) => /.+@.+\..+/.test(v) || "O e-mail é inválido",
      ],
      loginForm: {
        email: "wagnerfreiria@gmail.com",
        pin: "",
      },
      snackbar: false,
      snackbarText: "",
      color: "",
      errorColor: "red accent-2",
    };
  },

  computed: {},

  methods: {
    ...mapState(["SetLoggedIn"]),

    async enviarEmailComPin() {
      try {
        if (this.loginForm.email != "") {
          const response = await LoginService.enviarPin(this.loginForm);
          console.log(response);

          if (response.status == 201) {
            this.step = 2;
            return mixinUtils.methods.messageSwalToast(
              "success",
              "PIN enviado para o email: " + this.loginForm.email
            );
          } else {
            this.step = 1;
            return mixinUtils.methods.messageSwalToast(
              "error",
              "Erro no Login. " + response
            );
          }
        }
      } catch (error) {
        console.log(error);
        return mixinUtils.methods.messageSwalToast(
          "error",
          "O endereço de email ou o PIN que você inseriu não é válido! " +
            error.response
        );
      }
    },

    async authenticateUser() {
      try {
        const response = await LoginService.authenticate(this.loginForm);
        console.log(response);
        if (response.status == 200) {
          this.$store.commit("SET_USER_LOGADO", response.data.data);
          this.$router.push("/");
          return mixinUtils.methods.messageSwalToast(
            "success",
            "Acesso autorizado " + response.data.data.email
          );
        } else {
          return mixinUtils.methods.messageSwalToast(
            "error",
            "Erro no Login " + response.data.message
          );
        }
      } catch (error) {
        console.log(error);
        return mixinUtils.methods.messageSwalToast(
          "error",
          "Tente novamentemais tarde! " + error.code
        );
      }
    },
  },

  watch: {},
};
</script>
