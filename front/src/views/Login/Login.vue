<template>
  <v-container>
    <v-row
      class="mx-auto my-12 pa-0 elevation-10 col-xl-6 col-lg-10 col-md-10 col-sm-10 col-xs-10"
      justify="center"
    >
      <v-col class="grey lighten-5 py-12">
        <div class="px-6 mt-4 mx-4">
          <p class="text-left mx-6 text-h4 teal--text">
            Cria Certo Manager
          </p>
          <p class="text-caption text-left mx-6 text--grey">
            Acesse com seu usuário e senha
          </p>
        </div>

        <v-form
          ref="form"
          v-model="valid"
          class="pa-6 ma-6"
          lazy-validation
        >
          <v-text-field
            v-model="loginForm.email"
            label="E-mail"
            name="email"
            prepend-inner-icon="mdi-email"
            :rules="emailRules"
            required
            type="email"
            outlined
          />

          <v-text-field
            id="password"
            v-model="loginForm.senha"
            :rules="passRules"
            required
            label="Password"
            name="password"
            prepend-inner-icon="mdi-lock"
            type="password"
            counter
            outlined
          />

          <section class="my-4">
            <v-btn
              :disabled="!valid"
              large
              block
              color="teal dark-1"
              dark
              class="mr-4"
              @click="submitLoginUser"
            >
              Acessar
            </v-btn>
          </section>
        </v-form>

        <div class="text-right px-6 mx-6">
          <v-btn
            text
            color="teal "
            class="text-subtitle-2"
            @click="recuperarSenha"
          >
            Esqueceu a senha?
          </v-btn>
        </div>
      </v-col>

      <v-col class="teal darken-1 ma-0 pa-0">
        <v-card-text class="white--text mt-12">
          <h1 class="text-center display-1">
            Seja bem-vindo!
          </h1>
          <div class="text-center mt-4">
            <p>Sistema Gerenciador da Plataforma Cria Certo</p>
          </div>
        </v-card-text>
        <div class="text-center">
          <v-btn
            rounded
            outlined
            dark
            @click="step++"
          >
            Criar Conta
          </v-btn>
        </div>

        <div class="text-center mt-14">
          <v-btn
            to="/dashboard/basic-dashboard"
            text
            color="white"
          >
            Criar Conta
          </v-btn>

          <v-btn
            to="/Home/home"
            text
            color="white"
          >
            Início
          </v-btn>
        </div>
      </v-col>
    </v-row>

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
// import swal from 'sweetalert';
import LoginService from "@/services/LoginService";
// import Snackbar from "../../components/Snackbar.vue";
import { mapState } from "vuex";
// import { mapActions } from 'vuex';

export default {
  name: "LoginComponent",
  components: {},

  data() {
    return {
      props: {
        source: String,
      },
      step: 1,
      valid: true,
      passRules: [
        (v) => !!v || "A senha é obrigatória",
        (v) => (v && v.length > 4) || "A senha deve ter no mínimo 4 caracteres",
      ],
      emailRules: [
        (v) => !!v || "O e-mail é obrigatório",
        (v) => /.+@.+\..+/.test(v) || "O e-mail é inválido",
      ],
      loginForm: {
        email: null,
        senha: null,
      },
      isSubmitted: false,
      snackbar: false,
      snackbarText: "",
      color: "",
      errorColor: "red accent-2",
    };
  },

  // computed: {
  //   ...mapState(["SidebarColor", "SidebarBg"]),
  //   Sidebar_drawer: {
  //     get() {
  //       return this.$store.state.Sidebar_drawer;
  //     },
  //     set(val) {
  //       this.$store.commit("SET_SIDEBAR_DRAWER", val);
  //     },
  //   },

  // },

  methods: {
    ...mapState(["SetLoggedIn"]),

    async submitLoginUser() {
      if (this.$refs.form.validate()) {
        try {
          const response = await LoginService.loginUser(this.loginForm);
          if (response.status == 200) {
            this.isSubmitted = true;

            this.$store.commit("SET_USER_LOGADO", response.data);
            this.setMessage("Logado com sucesso!", true, "");
            this.$router.push("/");
          } else {
            this.setMessage("Erro no Login. Tente novamentemais tarde!", true, "error");
          }
        } catch (error) {
          this.setMessage(
            "O endereço de e-mail ou a senha que você inseriu não é válido!",
            true,
            this.errorColor
          );
        }
      }
    },

    recuperarSenha() {
      // https://www.youtube.com/watch?v=Zwdv9RllPqU&list=PL85ITvJ7FLoiXVwHXeOsOuVppGbBzo2dp&index=3
      console.log("Ver esse vídeo");
      console.log(
        "https://www.youtube.com/watch?v=Zwdv9RllPqU&list=PL85ITvJ7FLoiXVwHXeOsOuVppGbBzo2dp&index=3"
      );
    },

    setMessage(message, snack, color) {
      this.snackbarText = message;
      this.snackbar = snack;
      this.color = color;
    },
  },
};

</script>
