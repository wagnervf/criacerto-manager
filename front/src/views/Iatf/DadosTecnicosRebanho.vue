<template>
  <v-container
    fluid
    class="pb-0"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        lg="12"
        class="pa-0"
        justify-center
        flex
      >
        <v-form
          class="white ma-1 pa-0"
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-col justify="space-between">
            <v-text-field
              v-model="form.numero_de_vacas"
              label="Preço de Aquisição de Touro"
              required
              class="mt-4 pa-2"
              type="number"
              prefix="R$"
              :rules="numero_de_vacasRules"
              outlined
            />

            <v-text-field
              v-model="form.vacas_inseminadas"
              label="Despesas da Compra"
              required
              type="number"
              class="pa-2 h6"
              :rules="vacas_inseminadasRules"
              outlined
              suffix="%"
            />

            <v-text-field
              v-model="form.DepPeso"
              label="DEP no Peso à Desmana (240 dias)"
              required
              type="number"
              class="pa-2"
              suffix="Kg"
              :rules="DepPesoRules"
              outlined
            />
          </v-col>

          <div class="d-flex justify-end mt-6">
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
          <pre>
              {{ this.form }}
           </pre>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DadosTecnicosRebanhoIATF",
  data: () => ({
    valid: true,
    form: {
      numero_de_vacas: 4200,
      vacas_inseminadas: 10,
      DepPeso: 5,
    },

    title: "Dados Técnicos do Rebanho",
    icon: "mdi-file-cog",
    subtitle:
      "Nº de vacas a cobrir, Nº de Touros, Vida útil touro, Taxa de Prenhez, Preço Bezerro, Raças de Touro...",

    numero_de_vacasRules: [(v) => !!v || "Campo Obrigatório!"],
    vacas_inseminadasRules: [(v) => !!v || "Campo Obrigatório!"],
    DepPesoRules: [(v) => !!v || "Campo Obrigatório!"],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      console.log(this.$refs.form.validate());
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
