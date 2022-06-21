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
          class="pa-0"
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
                v-model="form.preco_touro_iatf_2"
                :rules="preco_touro_iatf_2Rules"
                type="number"
                label="Preço de Aquisição do Touro"
                required
                class="mt-4 pa-2 teal--text"
                prefix="R$"
                outlined
              />

              <v-text-field
                v-model="form.despesas_compra_iatf_2"
                :rules="despesas_compra_iatf_2Rules"
                type="number"
                label="Despesas da Compra"
                required
                class="pa-2 teal--text"
                suffix="%"
                outlined
              />

              <v-text-field
                v-model="form.dep_iatf_2"
                :rules="dep_iatf_2Rules"
                type="number"
                label="DEP no Peso à Desmama"
                required
                class="pa-2 teal--text"
                suffix="Kg"
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
  </v-expansion-panel><!-- Aquisição Touro -->
</template>

<script>
export default {
  name: "ManutencaoTouros",
  data: () => ({
    valid: true,
    form: {
      preco_touro_iatf_2: 4200,
      despesas_compra_iatf_2: 10,
      dep_iatf_2: 2,
    },
    title: "Aquisição do Touro",
    icon: "mdi-cow",
    subtitle:
      "Preço de Aquisição do Touro, Despensas da Compra, DEP no Peso à Desmama",
    preco_touro_iatf_2Rules: [(v) => !!v || "Campo Obrigatório!"],
    despesas_compra_iatf_2Rules: [(v) => !!v || "Campo Obrigatório!"],
    dep_iatf_2Rules: [(v) => !!v || "Campo Obrigatório!"],
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
