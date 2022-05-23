<template>
  <v-container>
      <v-card>
        <v-card-title class="grey lighten-3 col-12 pa-6 ">
          <v-icon >mdi-account-plus</v-icon>
          <span  class="ml-4 text-h5">Novo usuário</span>          
          <v-spacer></v-spacer>
        </v-card-title>

        <v-form ref="form" v-model="valid" lazy-validation>
          <v-col>
            <v-card-text class="col-8 pa-4 mx-auto">
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
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="viewPassword"
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

              <v-col cols="12" fluid>
                <v-card  elevation="2">
                 <v-sheet class="pa-5">
                   <label>Selecione as permissões do usuário</label>
                  <v-switch
                    
                    v-model="switch1"
                    inset
                    :label="`Switch 1: ${switch1.toString()}`"
                  ></v-switch>
                  <v-switch
                    v-model="switch2"
                    inset
                    :label="`Switch 2: ${switch2.toString()}`"
                  ></v-switch>
                </v-sheet>
                </v-card>
                
                  </v-col>
                </v-card-text>
             </v-col>
        </v-form>

        <v-divider></v-divider>

        <v-card-actions class="col-12 pa-6 grey lighten-5">
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
      </v-card>

      <Snackbar
        :snackbar="snackbar"
        :color="color"
        :snackbarText="snackbarText"
      />
  </v-container>
</template>

<script src="./Add.js"></script>


