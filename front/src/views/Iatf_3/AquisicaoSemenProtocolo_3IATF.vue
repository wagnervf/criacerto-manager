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
                v-model="form.preco_semen_3"
                label="Preço Dose Sêmen"
                required
                class="mt-4 pa-2 teal--text"
                type="number"
                prefix="R$"
                :rules="preco_semen_3Rules"
                outlined
              />

              <v-text-field
                v-model="form.dep_iatf_3"
                label="DEP IATF"
                required
                type="number"
                class="mt-4 pa-2 teal--text"
                suffix="Kg"
                :rules="dep_iatf_3Rules"
                outlined
              />

              <v-text-field
                v-model="form.protocolo_3"
                label="Custo do Protocolo"
                required
                type="number"
                class="mt-4 pa-2 teal--text"
                :rules="protocolo_3Rules"
                outlined
                prefix="R$"
              />

              <v-text-field
                v-model="form.mao_de_obra_3"
                label="Custo Mão de Obra"
                required
                type="number"
                class="mt-4 pa-2 teal--text"
                prefix="R$"
                :rules="mao_de_obra_3Rules"
                outlined
              />

              <v-text-field
                v-model="form.material_consumo_3"
                label="Custo Material Consumo"
                required
                type="number"
                class="mt-4 pa-2 teal--text"
                prefix="R$"
                :rules="material_consumo_3Rules"
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
  </v-expansion-panel><!-- Aquisição Sêmen -->
</template>

<script>
import mixinUtils from "../../mixins/mixin-utils";

export default {
  mixins: [mixinUtils],
  name: "AquisicaoSemenProtocolo3IATF3",
  data: () => ({
    valid: true,
    form: {
      _id: "",
      preco_semen_3: "",
      dep_iatf_3: "",
      protocolo_3: "",
      mao_de_obra_3: "",
      material_consumo_3: "",
      user: "",
    },
    title: "Aquisição de Sêmen e Protocolo 3ª IATF",
    icon: "mdi-reproduction",
    subtitle:
      "Preço Dose Sêmen, DEP IATF, Custo do Protocolo, Custo Mão de Obra, Custo Material Consumo",

    preco_semen_3Rules: [(v) => !!v || "Campo Obrigatório!"],
    dep_iatf_3Rules: [(v) => !!v || "Campo Obrigatório!"],
    protocolo_3Rules: [(v) => !!v || "Campo Obrigatório!"],
    mao_de_obra_3Rules: [(v) => !!v || "Campo Obrigatório!"],
    material_consumo_3Rules: [(v) => !!v || "Campo Obrigatório!"],
  }),

  mounted() {
    setTimeout(() => {
      this.parserDataStore();
    }, 1000);
  },

  computed: {
    parametros() {
      return this.$store.getters.getDataIatf_3RT;
    },
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("updateDados_3IATF", this.form);
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      //Envia para componente Pai fechar Expand
      this.$emit("fechar");
      this.$refs.form.resetValidation();
    },

    parserDataStore() {
      const value = this.parametros;
      this.form = {
        _id: value._id,
        preco_semen_3: value.preco_semen_3,
        dep_iatf_3: value.dep_iatf_3,
        protocolo_3: value.protocolo_3,
        mao_de_obra_3: value.mao_de_obra_3,
        material_consumo_3: value.material_consumo_3,
        //Mixins
        user: this.userLogado,
      };
    },
  },
};
</script>
