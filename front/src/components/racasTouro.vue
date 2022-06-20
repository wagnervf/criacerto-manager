<template>
  <div>
    <v-card
      class="my-2"
      elevation="2"
    >
      <v-toolbar
        
        elevation="0"
        color="blue grey lighten-2"
        light
      >
        <v-toolbar-title>Raças de Touros</v-toolbar-title>

        <v-spacer />

        <v-btn
          class="mx-1"
          fab
          dark
          small
          color="success"
          title="Adicionar Raça de Touro"
          @click="inserirTouro"
        >
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>

        <v-btn
          class="mx-1"
          fab
          dark
          small
          color="primary"
          title="Editar Raça de Touro"
          :disabled="this.form.touro == ''"
          @click="editTouro"
        >
          <v-icon dark>
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-1"
          fab
          dark
          small
          color="error"
          title="Remover Raça de Touro"
          :disabled="this.form.touro == ''"
          @click="deleteTouro"
        >
          <v-icon dark>
            mdi-delete
          </v-icon>
        </v-btn>
      </v-toolbar>

      <v-container
        fluid
        class="py-0"
      >
        <v-col
          cols="12"
          lg="12"
          justify-center
          flex
        >
          <v-form
            ref="form"
            v-model="valid"
            class="pa-0 white ma-1"
            lazy-validation
          >
            <v-autocomplete
              v-model="form.touro"
              :items="racasTouro"
              label="Raça do Touro"
              required
              class="mt-4 pa-2 teal--text"
              outlined
            />

            <div v-if="tourosEdit">
              <v-text-field
                filled
                ref="form.touro"
                v-model="form.touro"
                :rules="touroRules"
                placeholder="Inserir raça do touro"
                required
                class="mt-4 pa-2 teal--text"
              />
              <v-divider class="mx-4 my-0 pa-0" />
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="error"
                  text
                  @click="inserirTouro"
                >
                  Cancelar
                </v-btn>

                <v-btn
                  color="primary"
                  text
                  :disabled="!valid"
                  @click="validate"
                >
                  Salvar
                </v-btn>
              </v-card-actions>
            </div>
          </v-form>
        </v-col>
      </v-container>
    </v-card>

    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        max-width="350"
      >
        <v-card>
          <v-card-text class="text-body-1 py-2">
            Tem certeza que deseja deletar a Raça de Touro?
          </v-card-text>

          <v-card-title class="text-h5">
            {{ this.form.touro }}
          </v-card-title>
          <v-divider />
          <v-card-actions>
            <v-spacer />

            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              Cancelar
            </v-btn>

            <v-btn
              color="error"
              text
            >
              Deletar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ComponentRacasTouro",
  data: () => ({
    valid: true,
    
    racasTouro: [
      "Aberdeen Angus",
      "Bonsmara",
      "Braford",
      "Brahman",
      "Brangus",
      "Canchim",
      "Caracu",
      "Charolês",
      "Devon",
      "Guzerá",
      "Hereford",
      "Limousin",
      "Nelore",
      "Red Angus",
      "Red Brahman",
      "Red Brangus",
      "Senepol",
      "Shorthorn",
      "Simental",
      "Tabapuã",
      "Wagyu",
      "Outras",
    ],
    isEditing: false,
    tourosEdit: false,
    dialog: false,
    form: {
      touro: "",
    },

    errorMessages: "",
    formHasErrors: false,

    touroRules: [(v) => !!v || "Campo Obrigatório!"],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      console.log(this.$refs.form.validate());
    },
    inserirTouro() {
      this.tourosEdit = !this.tourosEdit;
    },
    editTouro() {
      this.tourosEdit = !this.tourosEdit;
    },

    deleteTouro() {
      this.dialog = !this.dialog;
    },
  },
};
</script>

<style></style>
