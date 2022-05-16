<template>
  <v-container>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title class="col-12 teal">
          <v-icon dark>mdi-account-plus</v-icon>
          <span class="ml-4 text-h5 white--text">Novo usuário</span>
           <v-spacer></v-spacer>

          <v-btn dark text @click="close">
            <v-icon dark>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        

        <v-container class="col-6 pa-4 mx-auto">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-card-text>
                <v-col cols="12">
                  <v-text-field
                    v-model="formRegister.nome"
                    label="Nome"
                    :rules="nameRules"
                    required
                    prepend-icon="mdi-account"
                  ></v-text-field>
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
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="formRegister.senha"
                    label="Senha"
                    :rules="passwordRules"
                    required
                    :counter="6"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                    prepend-icon="mdi-lock"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="formRegister.local"
                    label="Local"
                    prepend-icon="mdi-map-marker"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-select
                    :items="perfis"
                    v-model="formRegister.perfil"
                    :rules="[(v) => !!v || 'Selecione um perfil']"
                    required
                    label="Perfil"
                    prepend-icon="mdi-badge-account-alert"
                  ></v-select>
                </v-col>
              </v-card-text>

              <v-card-actions class="col-12 pr-6">
                <v-spacer></v-spacer>
                <v-btn color="error" depressed @click="close"> Cancelar </v-btn>
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
            <pre>valid : {{ this.valid }}</pre>
            <pre>{{ this.formRegister }}</pre>
          </v-form>
        </v-container>

        <Snackbar
          :snackbar="snackbar"
          :color="color"
          :snackbarText="snackbarText"
        />

      
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script src="./FormAdd.js"></script>
