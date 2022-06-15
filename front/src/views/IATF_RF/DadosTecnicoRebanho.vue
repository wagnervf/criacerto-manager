<template>
  <v-container fluid class="">
    <v-row justify="center">
      <v-col cols="12" lg="12" justify-center flex>
        <v-card class="mx-auto">
          <v-toolbar color="grey lighten-3" elevation="0">
            <v-toolbar-title>Dados Técnicos do Rebanho</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-form
            class="pa-6 white ma-1"
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-alert class="pa-6" outlined color="grey lighten-3">
              <v-col justify="space-between">
                <v-text-field
                  v-model="form.numero_de_vacas"
                  label="Preço de Aquisição de Touro"
                  required
                  class="mt-4 pa-2"
                   type="number"
                  prefix="R$"
                  :rules="numero_de_vacasRules"
                ></v-text-field>

                <v-text-field
                  v-model="form.vacas_inseminadas"
                  label="Despesas da Compra"
                  required
                   type="number"
                  class="mt-4 pa-2 h6"
                  :rules="vacas_inseminadasRules"
                  suffix="%"
                ></v-text-field>

                <v-text-field
                  v-model="form.DepPeso"
                  label="DEP no Peso à Desmana (240 dias)"
                  required
                  type="number"
                  class="mt-4 pa-2"
                  suffix="Kg"
                  :rules="DepPesoRules"
                ></v-text-field>
              </v-col>

              <v-row class="d-flex justify-end mt-6">
                <v-btn outlined color="error" class="mr-4" @click="resetValidation"> Cancelar </v-btn>

                <v-btn outlined color="success" class="mr-4" :disabled="!valid" @click="validate">
                  Salvar
                </v-btn>
              </v-row>
            </v-alert>
           <pre>
              {{this.form}}
           </pre>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AquisicaoTouros",
  data: () => ({
    valid: true,
    form: {
      numero_de_vacas: 4200,
      vacas_inseminadas: 10,
      DepPeso: 5,
    },
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
