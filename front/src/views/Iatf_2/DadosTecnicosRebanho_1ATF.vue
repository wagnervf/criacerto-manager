<template>
  <v-expansion-panel
    elevation="1"
    class="pa-0"
  >
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
        class="pb-0"
      >
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
                label="Número Vacas à Inseminar"
                required
                class="mt-2 pa-2 teal--text"
                type="number"
                suffix="Cabeças"
                :rules="numero_de_vacasRules"
                outlined
              />

              <v-text-field
                v-model="form.vacas_inseminadas"
                label="Proporção de Vacas Inseminadas"
                required
                type="number"
                class="mt-2 pa-2 teal--text"
                :rules="vacas_inseminadasRules"
                outlined
                suffix="%"
              />

              <v-text-field
                v-model="form.prenhez_iatf"
                label="Prenhez 1ª IATF"
                required
                type="number"
                class="mt-2 pa-2 teal--text"
                suffix="%"
                :rules="prenhez_iatfRules"
                outlined
              />

              <v-text-field
                v-model="form.taxa_mortalidade"
                label="Mortalidade do Nascimento à Desmana"
                required
                class="mt-2 pa-2 teal--text"
                type="number"
                suffix="%"
                :rules="taxa_mortalidadeRules"
                outlined
              />

              <v-text-field
                v-model="form.preco_bezerro"
                label="Preço Kg do Bezerro"
                required
                type="number"
                class="mt-2 pa-2 teal--text"
                :rules="preco_bezerroRules"
                outlined
                suffix="R$"
              />

              <v-text-field
                v-model="form.peso_comercial_iatf"
                label="Peso à Desmana da Fazenda"
                required
                type="number"
                class="mt-2 pa-2 teal--text"
                suffix="Kg"
                :rules="peso_comercial_iatfRules"
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
      </v-container>
    </v-expansion-panel-content>
  </v-expansion-panel><!-- Dados Técnicos -->
</template>

<script>
export default {
  name: "DadosTecnicosRebanhoIATF",
  data: () => ({
    valid: true,
    form: {
      numero_de_vacas: 4200,
      vacas_inseminadas: 10,
      prenhez_iatf: 50,
      taxa_mortalidade: 3,
      preco_bezerro: 6,
      peso_comercial_iatf: 180,
    },
    title: "Dados Técnicos do Rebanho 1ª IATF",
    icon: "mdi-file-cog",
    subtitle:
      "Número Vacas à Inseminar, Proporção de Vacas Inseminadas, Prenhez 1ª IATF,Mortalidade do Nascimento à Desmana, Preço Kg do Bezerro, Peso à Desmana da Fazenda",

    numero_de_vacasRules: [(v) => !!v || "Campo Obrigatório!"],
    vacas_inseminadasRules: [(v) => !!v || "Campo Obrigatório!"],
    prenhez_iatfRules: [(v) => !!v || "Campo Obrigatório!"],
    taxa_mortalidadeRules: [(v) => !!v || "Campo Obrigatório!"],
    preco_bezerroRules: [(v) => !!v || "Campo Obrigatório!"],
    peso_comercial_iatfRules: [(v) => !!v || "Campo Obrigatório!"],
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
