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
            <v-col justify="space-between">
              <v-text-field
                v-model="form.precoAquisao"
                label="Preço de Aquisição de Touro"
                required
                class="mt-2 pa-2 teal--text"
                outlined
                type="number"
                prefix="R$"
                :rules="precoAquisaoRules"
              />

              <v-text-field
                v-model="form.despesaCompra"
                label="Despesas da Compra"
                required
                type="number"
                class="mt-2 pa-2 teal--text"
                outlined
                :rules="despesaCompraRules"
                suffix="%"
              />

              <v-text-field
                v-model="form.DepPeso"
                label="DEP no Peso à Desmana (240 dias)"
                required
                type="number"
                class="mt-2 pa-2 teal--text"
                outlined
                suffix="Kg"
                :rules="DepPesoRules"
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
      </v-container>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "AquisicaoTouros",
  data: () => ({
    valid: true,
    form: {
      precoAquisao: 4200,
      despesaCompra: 10,
      DepPeso: 5,
    },
    title: "Aquisição do Touro",
    icon: "mdi-cow",
    subtitle: "Preço aquisisção de Touro, Despesas da Compra, DEP no Peso à Demanda (240 dias)",
    precoAquisaoRules: [(v) => !!v || "Campo Obrigatório!"],
    despesaCompraRules: [(v) => !!v || "Campo Obrigatório!"],
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
