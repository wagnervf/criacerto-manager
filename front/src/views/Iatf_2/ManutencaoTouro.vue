<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="pl-3">
      <v-list-item>
        <v-list-item-avatar
          color="teal"
          size="56"
        >
          <v-icon color="white">
            {{ manutencaoTouro.icon }}
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="teal--text">
            {{ manutencaoTouro.title }}
          </v-list-item-title>

          <v-list-item-subtitle class="text-wrap">
            {{ manutencaoTouro.subtitle }}
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
            <v-col justify="space-between">
              <v-text-field
                v-model="form.exame_andrologico_2"
                :rules="exame_andrologico_2Rules"
                type="number"
                label="Exame Andrológico"
                required
                class="mt-4 pa-2 teal--text"
                suffix="R$/cab/ano"
                outlined
              />

              <v-text-field
                v-model="form.aluguel_pasto_2"
                :rules="aluguel_pasto_2Rules"
                type="number"
                label="Aluguel Pasto"
                required
                class="pa-2 teal--text"
                suffix="R$/cab/ano"
                outlined
              />

              <v-text-field
                v-model="form.sal_mineral_2"
                :rules="sal_mineral_2Rules"
                type="number"
                label="Sal Mineral"
                required
                class="pa-2 teal--text"
                suffix="R$/cab/ano"
                outlined
              />

              <v-text-field
                v-model="form.racoes_2"
                :rules="racoes_2Rules"
                type="number"
                label="Rações"
                required
                class="pa-2 teal--text"
                suffix="R$/cab/ano"
                outlined
              />

              <v-text-field
                v-model="form.vacinas_vermifugos_2"
                :rules="vacinas_vermifugos_2Rules"
                type="number"
                label="Produtos Veterinarios"
                required
                class="pa-2 teal--text"
                suffix="R$/cab/ano"
                outlined
              />

              <v-text-field
                v-model="form.juros_anuais_2"
                :rules="juros_anuais_2Rules"
                type="number"
                label="Juros Anuais"
                required
                class="pa-2 teal--text"
                suffix="%"
                outlined
              />

              <v-text-field
                v-model="form.valor_venda_touro_2"
                :rules="valor_venda_touro_2Rules"
                type="number"
                label="Valor Venda Touros"
                prefix="R$"
                required
                class="pa-2 teal--text"
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
          </v-form>
        </v-col>
      </v-container>
    </v-expansion-panel-content>
  </v-expansion-panel><!-- Manutenção Touro -->
</template>

<script>
export default {
  name: "ManutencaoTouros",
  data: () => ({
    valid: true,
    form: {
      exame_andrologico_2: 100,
      aluguel_pasto_2: 336,
      sal_mineral_2: 35.4,
      racoes_2: 264.57,
      vacinas_vermifugos_2: 9.66,
      juros_anuais_2: 6,
      valor_venda_touro_2: 3000,
    },
    manutencaoTouro: {
      title: "Manutenção Anual do Touro",
      icon: "mdi-currency-brl",
      subtitle:
        "Exame Andrológico, Aluguel de Pasto, Sal Mineral, Rações, Produtos Veterinários, Juros Anuais, Valor de Venda do Touro de Descarte",
    },
    exame_andrologico_2Rules: [(v) => !!v || "Campo Obrigatório!"],
    aluguel_pasto_2Rules: [(v) => !!v || "Campo Obrigatório!"],
    sal_mineral_2Rules: [(v) => !!v || "Campo Obrigatório!"],
    racoes_2Rules: [(v) => !!v || "Campo Obrigatório!"],
    vacinas_vermifugos_2Rules: [(v) => !!v || "Campo Obrigatório!"],
    juros_anuais_2Rules: [(v) => !!v || "Campo Obrigatório!"],
    valor_venda_touro_2Rules: [(v) => !!v || "Campo Obrigatório!"],
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
