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
                 v-if="!isEdit"
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
                <v-card  elevation="0">
                 <v-sheet>                   
                   <label class="text--title"><v-icon left>mdi-badge-account</v-icon> Perfil do Usuário</label>
                  <div class="mx-4 ">

                  <v-switch                                                         
                    v-model="formRegister.tecnico"
                    inset
                    label="Técnico"
                    class="mx-2"
                  ></v-switch>
                  <v-switch
                    v-model="formRegister.admin"
                    inset
                    label="Administrador"
                    class="mx-2"
                  ></v-switch>
                  </div>

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

      <pre>{{this.isEdit}}</pre>

      <pre> {{this.formRegister}} </pre>

       <v-snackbar
      v-model="snackbar"
      :vertical="true"
      :color="color"
    >
      {{ snackbarText }}
      <template v-slot:action="{ attrs }">
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

<script src="./Add.js"></script>


