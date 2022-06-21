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
                v-model="form.preco_semen_2"
                label="Preço Dose Sêmen"
                required
                class="mt-4 pa-2 teal--text"
                type="number"
                prefix="R$"
                :rules="preco_semen_2Rules"
                outlined
              />

              <v-text-field
                v-model="form.dep_iatf_2"
                label="DEP IATF"
                required
                type="number"
                class="mt-4 pa-2 teal--text"
                suffix="Kg"
                :rules="dep_iatf_2Rules"
                outlined
              />

              <v-text-field
                v-model="form.protocolo_2"
                label="Custo do Protocolo"
                required
                type="number"
                class="mt-4 pa-2 teal--text"
                :rules="protocolo_2Rules"
                outlined
                prefix="R$"
              />

              <v-text-field
                v-model="form.mao_de_obra_2"
                label="Custo Mão de Obra"
                required
                type="number"
                class="mt-4 pa-2 teal--text"
                prefix="R$"
                :rules="mao_de_obra_2Rules"
                outlined
              />

              <v-text-field
                v-model="form.material_consumo_2"
                label="Custo Material Consumo"
                required
                type="number"
                class="mt-4 pa-2 teal--text"
                prefix="R$"
                :rules="material_consumo_2Rules"
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
  </v-expansion-panel><!-- Aquisição Sêmen -->
</template>

<script>
export default {
  name: "AquisicaoSemenProtocolo2IATF",
  data: () => ({
    valid: true,
    form: {
      preco_semen_2: 20,
      dep_iatf_2: 7,
      protocolo_2: 17,
      mao_de_obra_2: 15,
      material_consumo_2: "",
    },
    title: "Aquisição de Sêmen e Protocolo 2ª IATF",
    icon: "mdi-reproduction",
    subtitle:
      "Preço Dose Sêmen, DEP IATF, Custo do Protocolo, Custo Mão de Obra, Custo Material Consumo",

    preco_semen_2Rules: [(v) => !!v || "Campo Obrigatório!"],
    dep_iatf_2Rules: [(v) => !!v || "Campo Obrigatório!"],
    protocolo_2Rules: [(v) => !!v || "Campo Obrigatório!"],
    mao_de_obra_2Rules: [(v) => !!v || "Campo Obrigatório!"],
    material_consumo_2Rules: [(v) => !!v || "Campo Obrigatório!"],
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
