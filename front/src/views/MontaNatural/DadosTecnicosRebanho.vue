/* eslint-disable vue/no-v-text-v-html-on-component */
<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="pl-3">
      <v-list-item>
        <v-list-item-avatar
          color="teal"
          size="56"
        > 
          <v-icon color="white">
            {{ icon }}
          </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="teal--text">
            {{ title }}
          </v-list-item-title>
          <v-list-item-subtitle class="text-wrap">
            Monta Natural
          </v-list-item-subtitle>

          <v-list-item-subtitle class="text-wrap">
            {{ subtitle }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
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
            <v-row>
              <v-col justify="space-between">
                <v-text-field
                  v-model="form.vacasCobrir"
                  label="Número de Vacas a Cobrir"
                  required
                  class="mt-4 pa-2 teal--text"
                  suffix="Cabeças"
                  :rules="vacasCobrirRules"
                  type="number"
                  outlined
                />

                <v-text-field
                  v-model="form.numTouro"
                  label="Número de Touros"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                  suffix="Cabeças"
                  :rules="numTouroRules"
                  type="number"
                />

                <v-text-field
                  v-model="form.vidaTouro"
                  label="Vida Últil do Touro"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                  suffix="Anos"
                  :rules="vidaTouroRules"
                  type="number"
                />

                <v-text-field
                  v-model="form.taxaPrenhez"
                  label="Taxa de Prenhez"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                  suffix="%"
                  :rules="taxaPrenhezRules"
                  type="number"
                />

                <v-text-field
                  v-model="form.mortalidadeDesmama"
                  label="Mortalidade do Nascimento à Desmama"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                  suffix="%"
                  :rules="mortalidadeDesmamaRules"
                  type="number"
                />

                <v-text-field
                  v-model="form.precoKgBezerro"
                  label="Preço kg do Bezerro"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                  prefix="R$"
                  :rules="precoKgBezerroRules"
                  type="number"
                />

                <v-text-field
                  v-model="form.pesoDesmama"
                  label="Peso à Desmana da Fazenda"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                  suffix="Kg"
                  :rules="pesoDesmamaRules"
                  type="number"
                />
              </v-col>
            </v-row>

            <v-row class="d-flex justify-end mt-6">
              <div class="form-group">
                <v-btn
                  outlined
                  color="error"
                  class="mr-4"
                  @click="resetValidation"
                >
                  Cancelar
                </v-btn>

                <v-btn
                  outlined
                  color="success"
                  class="mr-4"
                  :disabled="!valid"
                  @click="validate"
                >
                  Salvar
                </v-btn>
              </div>
            </v-row>

            <pre>
              {{ this.form }}
            </pre>
          </v-form>
        </v-col>
      </v-container>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "ViewDadosTecnicosRebanho",
  data: () => ({
    valid: true,

    form: {
      vacasCobrir: 1,
      numTouro: 25,
      vidaTouro: 6,
      taxaPrenhez: "0",
      mortalidadeDesmama: 3,
      precoKgBezerro: 6,
      pesoDesmama: 180,
    },
    title: "Dados Técnicos do Rebanho",
    icon: "mdi-file-cog",
    subtitle:
      "Nº de vacas a cobrir, Nº de Touros, Vida ùtil touro, Taxa de Prenhez, Preço Bezerro, Raças de Touro...",

    vacasCobrirRules: [(v) => !!v || "Campo Obrigatório!"],
    numTouroRules: [(v) => !!v || "Campo Obrigatório!"],
    vidaTouroRules: [(v) => !!v || "Campo Obrigatório!"],
    taxaPrenhezRules: [(v) => !!v || "Campo Obrigatório!"],
    mortalidadeDesmamaRules: [(v) => !!v || "Campo Obrigatório!"],
    precoKgBezerroRules: [(v) => !!v || "Campo Obrigatório!"],
    pesoDesmamaRules: [(v) => !!v || "Campo Obrigatório!"],
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
    validate() {
      if(this.$refs.form.validate()){
      console.log(this.$refs.form.validate());
      console.log(this.form)

      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      //Envia para componente Pai fechar Expand
      this.$emit("fechar");
      this.$refs.form.resetValidation();
    },
  },
};
</script>
