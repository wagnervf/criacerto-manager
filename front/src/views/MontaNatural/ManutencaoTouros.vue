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
                  v-model="form.exameAdrologico"
                  :rules="exameAdrologicoRules"
                  type="number"
                  label="Exame Andrológico"
                  required
                  class="mt-4 pa-2 teal--text"
                  suffix="R$/cab/ano"
                  outlined
                />

                <v-text-field
                  v-model="form.aluguelPasto"
                  :rules="aluguelPastoRules"
                  type="number"
                  label="Aluguel Pasto"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                  suffix="R$/cab/ano"
                />

                <v-text-field
                  v-model="form.salMineral"
                  :rules="salMineralRules"
                  type="number"
                  label="Sal Mineral"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                  suffix="R$/cab/ano"
                />

                <v-text-field
                  v-model="form.racoes"
                  :rules="racoesRules"
                  type="number"
                  label="Rações"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                  suffix="R$/cab/ano"
                />

                <v-text-field
                  v-model="form.produtosVeterinarios"
                  :rules="produtosVeterinariosRules"
                  type="number"
                  label="Produtos Veterinarios"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                  suffix="R$/cab/ano"
                />

                <v-text-field
                  v-model="form.jurosAnuais"
                  :rules="jurosAnuaisRules"
                  type="number"
                  label="Juros Anuais"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                  suffix="%"
                />

                <v-text-field
                  v-model="form.valorVendaTouro"
                  :rules="valorVendaTouroRules"
                  type="number"
                  label="Valor Venda Touros"
                  prefix="R$"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                />
              </v-col>
            </v-row>

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
          </v-form>
        </v-col>
      </v-container>
    </v-expansion-panel-content>
  </v-expansion-panel>
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
    title: "Manutenção Anual do Touro",
    icon: "mdi-currency-brl",
    subtitle: "Exame Andrológico, Aluguel de Pasto, Sal Mineral, Rações, Produtos Veterinários, Juros Anuais, Valor de Venda do Touro de Descarte",

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
