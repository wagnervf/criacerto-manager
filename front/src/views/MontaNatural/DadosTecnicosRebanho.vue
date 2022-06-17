/* eslint-disable vue/no-v-text-v-html-on-component */
<template>
  <v-container
    fluid
    class=""
  >
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
            <v-toolbar-title>Dados Técnicos do Rebanho</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <form
            ref="form"
            class="pa-6 white ma-1"
          >
            <v-row>
              <v-col justify="space-between">
                <v-text-field
                  v-model="name"
                  label="Nº de Vacas a Cobrir"
                  required
                  class="pa-2"
                  suffix="Cabeças"
                  :error-messages="formVacasCobrir"

                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                />

                <v-text-field
                  v-model="form.numTouro"
                  label="Nº de Touros"
                  required
                  class="pa-2"
                  suffix="Cabeças"
                />

                <v-text-field
                  v-model="form.vidaTouro"
                  label="Vida Últil do Touro"
                  required
                  class="pa-2"
                  suffix="Anos"
                />

                <v-text-field
                  v-model="form.taxaPrenhez"
                  label="Taxa de Prenhez"
                  required
                  class="pa-2"
                  suffix="%"
                />

                <v-text-field
                  v-model="form.mortalidadeDesmama"
                  label="Mortalidade do Nascimento à Desmama"
                  required
                  class="pa-2"
                  suffix="%"
                />

                <v-text-field
                  v-model="form.precoKgBezerro"
                  label="Preço kg do Bezerro"
                  required
                  class="pa-2"
                  prefix="R$"
                />

                <v-text-field
                  v-model="form.pesoDesmama"
                  label="Peso à Desmana da Fazenda"
                  required
                  class="pa-2 my-4"
                  suffix="Kg"
                />

                <v-card class="my-2">
                  <v-card-title> Raças de Touro </v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col cols="10">
                        <v-autocomplete
                          v-model="form.touro"
                          :items="racasTouro"
                          label="Raça do Touro"
                          required
                          class="pa-2"
                          outlined
                        />
                      </v-col>
                      <v-col
                        cols="2"
                        class="mt-4"
                      >
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
                      </v-col>
                    </v-row>

                    <div v-if="tourosEdit">
                      <v-row cols="10">
                        <v-col cols="10">
                          <div ref="form">
                            <v-text-field
                              filled
                              ref="form.touro"
                              v-model="form.touro"
                              :rules="[
                                () => !!form.touro || 'Campo obrigatório!',
                              ]"
                              :error-messages="errorMessages"
                              placeholder="Inserir raça do touro"
                              required
                              class="mx-4"
                            />
                            <v-divider class="mx-4 my-0 pa-0" />
                            <v-card-actions>
                              <v-spacer />
                              <v-btn
                                color="error"
                                text
                              >
                                Cancelar
                              </v-btn>

                              <v-btn
                                color="primary"
                                text
                                @click="submit"
                              >
                                Salvar
                              </v-btn>
                            </v-card-actions>
                          </div>
                        </v-col>
                      </v-row>
                    </div>
                  </v-card-text>
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
              </v-col>
            </v-row>

            <v-row class="d-flex justify-end mt-6">
              <div class="form-group">
                <v-btn
                  color="error"
                  class="mr-4"
                >
                  Cancelar
                </v-btn>

                <v-btn
                  color="success"
                  class="mr-4"
                  @click="submit"
                >
                  Salvar
                </v-btn>
              </div>
            </v-row>

            <pre>
              {{ this.form }}
            </pre>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {

  name: "ViewDadosTecnicosRebanho",
  data: () => ({
    model: null,
    isEditing: false,
    tourosEdit: false,
    dialog: false,
    states: [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
    ],
    form: {
      touro: "",
      vacasCobrir: '',
      numTouro: 25,
      vidaTouro: 6,
      taxaPrenhez: 80,
      mortalidadeDesmama: 3,
      precoKgBezerro: 6,
      pesoDesmama: 180,
    },
    errorMessages: "",
    formHasErrors: false,
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
    valid: true,
    submitStatus: null,
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    name:''
   
  }),



  computed: {
    formVacasCobrir() {
      const errors = [];
    //  if (!this.$v.form.$dirty) return errors;
      !this.$v.form.required && errors.push("Name is required.");
      return errors;
    },
  },

  methods: {
    submit() {
      console.log("submit!");
      this.$v.$touch();

      // if (this.$v.$invalid) {
      //   this.submitStatus = "ERROR";
      // } else {
      //   // do your submit logic here
      //   this.submitStatus = "PENDING";
      //   setTimeout(() => {
      //     this.submitStatus = "OK";
      //   }, 500);
      // }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
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
