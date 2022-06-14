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
          <v-form
            ref="form"
            v-model="valid"
            class="pa-6 white ma-1"
            lazy-validation
          >
            <v-row>
              <v-col justify="space-between">
                <v-text-field
                  v-model="form.vacasCobrir"
                  label="Nº de Vacas a Cobrir"
                  required
                  class="pa-2"
                  suffix="Cabeças"
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

                <v-card class="my-2">
                  <v-app-bar
                    flat
                    dense
                  >
                    <v-toolbar-title class="text-h6 pl-0">
                      Raças de Touros
                    </v-toolbar-title>

                    <v-spacer />

                    <v-menu
                      bottom
                      left
                    >
                      <template #activator="{ on, attrs }">
                        <v-btn
                          icon
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                      </template>

                      <v-list>
                        <v-list-item
                          v-for="(item, i) in menu"
                          :key="i"
                        >
                          <v-list-item-title>
                            {{ item.title }}
                          </v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-app-bar>

                  <v-card-text>
                    <v-row>
                      <v-select
                        v-model="form.touro"
                        :items="racasTouro"
                        label="Raça do Touro"
                        required
                        class="pa-2"
                        outlined
                      />
                    </v-row>

                    <v-row justify="center">
                      <v-col
                        cols="12"
                        sm="10"
                        md="8"
                        lg="6"
                      >
                        <v-card ref="form">
                          <v-card-text>
                            <v-text-field
                              ref="name"
                              v-model="name"
                              :rules="[
                                () => !!name || 'This field is required',
                              ]"
                              :error-messages="errorMessages"
                              label="Full Name"
                              placeholder="John Doe"
                              required
                            />
                          </v-card-text>
                          <v-divider class="mt-12" />
                          <v-card-actions>
                            <v-btn text>
                              Cancel
                            </v-btn>
                            <v-spacer />
                            <v-slide-x-reverse-transition>
                              <v-tooltip
                                v-if="formHasErrors"
                                left
                              >
                                <template #activator="{ on, attrs }">
                                  <v-btn
                                    icon
                                    class="my-0"
                                    v-bind="attrs"
                                    @click="resetForm"
                                    v-on="on"
                                  >
                                    <v-icon>mdi-refresh</v-icon>
                                  </v-btn>
                                </template>
                                <span>Refresh form</span>
                              </v-tooltip>
                            </v-slide-x-reverse-transition>
                            <v-btn
                              color="primary"
                              text
                              @click="submit"
                            >
                              Submit
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>

                <v-text-field
                  v-model="form.pesoDesmama"
                  label="Peso à Desmana da Fazenda"
                  required
                  class="pa-2 my-4"
                  suffix="Kg"
                />
              </v-col>
            </v-row>

            <v-row class="d-flex justify-end mt-6">
              <v-btn
                color="error"
                class="mr-4"
              >
                Cancelar
              </v-btn>

              <v-btn
                color="success"
                class="mr-4"
              >
                Salvar
              </v-btn>
            </v-row>

            <pre>
              {{ this.form }}
            </pre>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ViewDadosTecnicosRebanho",
  data: () => ({
    isEditing: false,
    model: null,
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
      vacasCobrir: 1000,
      numTouro: 25,
      vidaTouro: 6,
      taxaPrenhez: 80,
      mortalidadeDesmama: 3,
      precoKgBezerro: 6,
      pesoDesmama: 180,
    },
    errorMessages: "",
    name: null,
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

    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    menu: [
      { title: "Incluir Item" },
      { title: "Editar Item" },
      { title: "Remover Item" },
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
