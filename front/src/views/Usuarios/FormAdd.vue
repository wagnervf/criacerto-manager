<template>
  <v-container>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title class="col-12 teal">
          <v-icon dark>mdi-account-plus</v-icon>
          <span class="ml-4 text-h5 white--text">Novo usuário</span>
        </v-card-title>

        <v-container class="col-8 pa-4 mx-auto">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-card-text>
                <v-col cols="12">
                  <v-text-field
                    v-model="editedItem.nome"
                    label="Nome"
                    :rules="nameRules"
                    required
                    prepend-icon="mdi-account"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="editedItem.email"
                    label="E-mail"
                    :rules="emailRules"
                    required
                    type="email"
                    prepend-icon="mdi-email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="editedItem.senha"
                    label="Senha"
                    :rules="passwordRules"
                    required
                    :counter="6"
                    type="password"
                    prepend-icon="mdi-lock"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="editedItem.local"
                    label="Local"
                    prepend-icon="mdi-map-marker"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-select
                    :items="perfis"
                    v-model="editedItem.perfil"
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
            <pre>{{ this.editedItem }}</pre>
          </v-form>
        </v-container>
     

      <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        absolute
        color="success"
        
      >
        {{ snackbarText }}

        <template v-slot:action="{ attrs }">
          <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
            Fechar
          </v-btn>
        </template>
      </v-snackbar>
       </v-card>

    </v-dialog>
  </v-container>
</template>

<script src="./FormAdd.js"></script>
