<template>
  <v-container
    fluid
    class="py-0"
  >
    <v-row justify="center">
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
                v-model="form.numeroTouros"
                :rules="numeroTourosRules"
                type="number"
                label="Número de Touros"
                required
                class="mt-4 pa-2 teal--text"
                suffix="Cabeças"
                outlined
              />

              <v-text-field
                v-model="form.vidaUtilTouro"
                :rules="vidaUtilTouroRules"
                type="number"
                label="Vida Útil do Touro"
                required
                class="mt-4 pa-2 teal--text"
                suffix="Anos"
                outlined
              />

              <v-text-field
                v-model="form.prenhezRepasse"
                :rules="prenhezRepasseRules"
                type="number"
                label="Prenhez Repasse"
                required
                class="mt-4 pa-2 teal--text"
                suffix="%"
                outlined
              />

              <v-text-field
                v-model="form.pesoDesmamaFazenda"
                :rules="pesoDesmamaFazendaRules"
                type="number"
                label="Peso à Desmama da Fazenda"
                required
                class="mt-4 pa-2 teal--text"
                suffix="Kg"
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
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ManutencaoTouros",
  data: () => ({
    valid: true,
    form: {
      numeroTouros: 50,
      vidaUtilTouro: 6,
      prenhezRepasse: 70,
      pesoDesmamaFazenda: 180,
    },
    numeroTourosRules: [(v) => !!v || "Campo Obrigatório!"],
    vidaUtilTouroRules: [(v) => !!v || "Campo Obrigatório!"],
    prenhezRepasseRules: [(v) => !!v || "Campo Obrigatório!"],
    pesoDesmamaFazendaRules: [(v) => !!v || "Campo Obrigatório!"],
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
