<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-app>
      <nav>
        <v-app-bar
          app
          clipped-left
          fixed
          color="blue lighten-3"
        >
          <v-btn
            icon
            @click.native="cancel"
            class="ma-2"
            color="black darken-2"
            dark
          >
            <v-icon
              dark
              left
            >
              mdi-arrow-left
            </v-icon>
          </v-btn>
          <v-app-bar-title />
          <v-spacer />
        </v-app-bar>
      </nav>

      <v-main>
        <v-container fluid>
          <v-layout
            row
            wrap
          >
            <v-flex
              xs12
              sm12
              md10
              offset-md1
              lg8
              offset-lg2
              xl6
              offset-xl3
              class="my-3"
            >
              <v-card class="px-3 py-2">
                <v-card-title primary-title>
                  <div class="headline">
                    {{ "$root.$data.text.autentique" }}
                  </div>
                </v-card-title>

                <v-card-text />
                <v-window v-model="step">
                  <v-divider v-if="step > 0 && !error" />

                  <v-window-item>
                    <v-card-title> Informe seu e-Mail </v-card-title>

                    <v-form
                      ref="form"
                      lazy-validation
                    >
                      <v-row
                        wrap
                        class="px-5"
                      >
                        <v-col
                          xs="12"
                          sm="12"
                          md="8"
                          offset-md="2"
                          lg="6"
                          offset-lg="3"
                          xl="6"
                          offset-xl="3"
                          cols="12"
                          class="px-1 pb-0"
                          style="text-align: center"
                        >
                          <v-text-field
                            v-model="email"
                            append-icon="mdi-email"
                            outlined
                            clearable
                            label="e-Mail"
                            type="text"
                            :rules="rules"
                          />
                        </v-col>
                      </v-row>
                    </v-form>
                    <v-card-actions>
                      <v-btn
                        color="error"
                        text
                        @click="cancel()"
                      >
                        Cancelar
                      </v-btn>

                      <v-spacer />

                      <v-btn
                        color="success"
                        depressed
                        :disabled="!validate()"
                        large
                        @click="sendPin()"
                        :loading="loading"
                      >
                        Prosseguir
                        <v-icon class="ml-1">
                          mdi-arrow-right
                        </v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-window-item>

                  <v-window-item>
                    <v-card-title> Insira o PIN </v-card-title>
                    <v-card-text>
                      Um número de 6 dígitos foi enviado para o e-mail
                      <strong>{{ email }}</strong>. Por favor, insira-o abaixo para continuar:
                    </v-card-text>
                    <div
                      class="input-wrapper my-5"
                      style="width: 280px; margin: 0 auto"
                    >
                      <pincode
                        v-model="pin"
                        :length="6"
                      />
                    </div>
                    <v-card-actions>
                      <v-btn
                        color="error"
                        text
                        @click="cancel()"
                      >
                        Cancelar
                      </v-btn>

                      <v-spacer />

                      <v-btn
                        color="success"
                        depressed
                        :disabled="pin.length !== 6"
                        large
                        @click="authenticate()"
                        :loading="loading"
                      >
                        Autenticar
                        <v-icon class="ml-1">
                          mdi-check
                        </v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-window-item>
                </v-window>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <p class="text-center my-4">
                <img
                  src="@/assets/img/embrapa.png"
                  style="width: 150px"
                  alt="Logo da Embrapa"
                >
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-main>
      <!-- <dialog-wrapper
        @consent="agree = true"
        @dissent="agree = false"
        ref="dPrivacy"
      />
      <dialog-wrapper ref="dReliable" />
      <progress-wrapper
        message="Autenticando... por favor, aguarde!"
        :size="70"
        color="purple lighten-2"
        ref="progress"
      /> -->

      <!-- <beta></beta> -->
    </v-app>
  </div>
</template>

<script>
import axios from "axios";
//import DialogWrapper from '@/components/Dialog.vue'
// import ProgressWrapper from '@/components/Progress.vue'
import Pincode from "vue-pincode-input";
//import md5 from "crypto-js/md5";
// import Beta from '../components/Beta'
//import base64 from "image-to-base64";
//import ErrorHelper from '@/helpers/error'

export default {
  mixins: [
    // ErrorHelper
  ],
  components: {
    //  Beta,
    // DialogWrapper,
    //  ProgressWrapper,
    Pincode,
  },
  data() {
    return {
      step: 0,
      agree: false,
      wait: false,
      error: false,
      email: "",
      pin: "",
      loading: false,
      reliable: null,
      rules: [
        (v) =>
          !v ||
          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
            v
          ) ||
          "O e-mail precisa ser válido!",
      ],
      dialog: false,
      policy: null,
      message: "",
    };
  },
  created() {
    // var p;
    // var self = this;
    // if (localStorage.language === "pt") {
    //   p = "privacy-policy/privacy-policy-pt.html";
    // }
    // if (localStorage.language === "es") {
    //   p = "privacy-policy/privacy-policy-es.html";
    // }
    // if (localStorage.language === "en") {
    //   p = "privacy-policy/privacy-policy-us.html";
    // }
    // axios.get(p).then(function (r) {
    //   self.policy = r.data;
    // });
  },
  mounted() {
    if (this.$localStorage.get("user").authenticated) {
      this.$router.push({ path: "/" });
    }
  },
  methods: {
    validate() {
      return (
        this.$refs.form && this.$refs.form.validate() && this.reliable !== null
      );
    },
    
    sendPin() {
      this.loading = true;

      const api = "localhost:3017/manager";

      axios
        .post(api + "/users/pin", { email: this.email })
        // eslint-disable-next-line no-unused-vars
        .then((response) => {
          if (this.reliable) this.$localStorage.set("email", this.email);

          this.loading = false;

          this.step++;
        });
    },
    authenticate() {
      this.error = false;
      this.loading = true;

      const api = "localhost:3017/manager";

      axios
        .post(api + "/users/authenticate", {
          email: this.email,
          pin: this.pin,
        })
        .then((response) => {
          const token = response.data.token;

          axios
            .get(api + "/users/list", {
              headers: { Authorization: "Bearer " + token },
            })
            .then((response) => {
              var user = {
                authenticated: true,
                name: response.data.name,
                email: response.data.email,
                picture: "",
                token: token,
              };

              this.$localStorage.set("user", user);
              this.$localStorage.set("reliable", this.reliable);

              this.$localStorage.set("email", "");

              this.$router.push({ path: "/" });
              // });
            });
        });
    },
    cancel() {
      this.$router.push({ path: "/" });
      this.$localStorage.set("email", "");

      this.error = false;
      this.agree = false;

      this.email = "";
      this.reliable = null;

      this.pin = "";

      this.loading = false;

      this.step = 0;
    },
  },
};
</script>
