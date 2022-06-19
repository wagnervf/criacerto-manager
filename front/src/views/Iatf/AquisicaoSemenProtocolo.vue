<template>
  <v-container
    fluid
    class="py-0"
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
          ref="form"
          v-model="valid"
          class="pa-0 white ma-1"
          lazy-validation
        >
          <v-col justify="space-between">
            <v-text-field
              v-model="form.precoDoseSemen"
              label="Preço Do Sêmen e Protocolo"
              required
              class="mt-4 pa-2 teal--text"
              type="number"
              prefix="R$"
              :rules="precoDoseSemenRules"
              outlined
            />

            <v-text-field
              v-model="form.depIATF"
              label="DEP IATF"
              required
              type="number"
              class="mt-4 pa-2 teal--text"
              suffix="Kg"
              :rules="depIATFRules"
              outlined
            />

            <v-text-field
              v-model="form.custoProtocolo"
              label="Custo do Protocolo"
              required
              type="number"
              class="mt-4 pa-2 teal--text"
              :rules="custoProtocoloRules"
              outlined
              prefix="R$"
            />

            <v-text-field
              v-model="form.custoMaoObra"
              label="Custo Mão de Obra"
              required
              type="number"
              class="mt-4 pa-2 teal--text"
              prefix="R$"
              :rules="custoMaoObraRules"
              outlined
            />

            <v-text-field
              v-model="form.custoMaterialConsumo"
              label="Custo Material Consumo"
              required
              type="number"
              class="mt-4 pa-2 teal--text"
              prefix="R$"
              :rules="custoMaterialConsumoRules"
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
  name: "AquisicaoSemenProtocolo",
  data: () => ({
    valid: true,
    form: {
      precoDoseSemen: 50,
      depIATF: 7,
      custoProtocolo: 17,
      custoMaoObra: 15,
      custoMaterialConsumo: "",
    },

    precoDoseSemenRules: [(v) => !!v || "Campo Obrigatório!"],
    depIATFRules: [(v) => !!v || "Campo Obrigatório!"],
    custoProtocoloRules: [(v) => !!v || "Campo Obrigatório!"],
    custoMaoObraRules: [(v) => !!v || "Campo Obrigatório!"],
    custoMaterialConsumoRules: [(v) => !!v || "Campo Obrigatório!"],
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
