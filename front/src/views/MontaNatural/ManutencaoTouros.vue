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
          <v-toolbar color="grey lighten-3" elevation="0">
            <v-toolbar-title>Dados Manutenção de Touros</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-form
            ref="form"
            v-model="valid"
            class="pa-6 white ma-1"
            lazy-validation
          >
            <v-alert class="pa-6" outlined color="grey lighten-3">
              <v-row>
                <v-col justify="space-between">
                  <v-text-field
                    v-model="form.exameAdrologico"
                    :rules="exameAdrologicoRules"
                    type="number"
                    label="Exame Andrológico"
                    required
                    class="pa-2"
                    suffix="R$/cab/ano"
                  ></v-text-field>

                  <v-text-field
                    v-model="form.aluguelPasto"
                    :rules="aluguelPastoRules"
                    type="number"
                    label="Aluguel Pasto"
                    required
                    class="pa-2"
                    suffix="R$/cab/ano"
                  ></v-text-field>

                  <v-text-field
                    v-model="form.salMineral"
                    :rules="salMineralRules"
                    type="number"
                    label="Sal Mineral"
                    required
                    class="pa-2"
                    suffix="R$/cab/ano"
                  ></v-text-field>

                  <v-text-field
                    v-model="form.racoes"
                    :rules="racoesRules"
                    type="number"
                    label="Rações"
                    required
                    class="pa-2"
                    suffix="R$/cab/ano"
                  ></v-text-field>

                  <v-text-field
                    v-model="form.produtosVeterinarios"
                    :rules="produtosVeterinariosRules"
                    type="number"
                    label="Produtos Veterinarios"
                    required
                    class="pa-2"
                    suffix="R$/cab/ano"
                  ></v-text-field>

                  <v-text-field
                    v-model="form.jurosAnuais"
                    :rules="jurosAnuaisRules"
                    type="number"
                    label="Juros Anuais"
                    required
                    class="pa-2"
                    suffix="%"
                  ></v-text-field>

                  <v-text-field
                    v-model="form.valorVendaTouro"
                    :rules="valorVendaTouroRules"
                    type="number"
                    label="Valor Venda Touros"
                    prefix="R$"
                    required
                    class="pa-2"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row class="d-flex justify-end mt-6">
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
              </v-row>
            </v-alert>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ManutencaoTouros",
  data: () => ({
    valid: true,
    form: {
      exameAdrologico: 100,
      aluguelPasto: 336,
      salMineral: 35.4,
      racoes: 264.57,
      produtosVeterinarios: 9.66,
      jurosAnuais: 6,
      valorVendaTouro: 3000,
    },
    exameAdrologicoRules: [(v) => !!v || "Campo Obrigatório!"],
    aluguelPastoRules: [(v) => !!v || "Campo Obrigatório!"],
    salMineralRules: [(v) => !!v || "Campo Obrigatório!"],
    racoesRules: [(v) => !!v || "Campo Obrigatório!"],
    produtosVeterinariosRules: [(v) => !!v || "Campo Obrigatório!"],
    jurosAnuaisRules: [(v) => !!v || "Campo Obrigatório!"],
    valorVendaTouroRules: [(v) => !!v || "Campo Obrigatório!"],
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
