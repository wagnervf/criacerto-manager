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
                v-model="form.preco_semen"
                label="Preço Do Sêmen e Protocolo"
                required
                class="mt-4 pa-2 teal--text"
                type="number"
                prefix="R$"
                :rules="preco_semenRules"
                outlined
              />

              <v-text-field
                v-model="form.dep_iatf"
                label="DEP IATF"
                required
                type="number"
                class="mt-4 pa-2 teal--text"
                suffix="Kg"
                :rules="dep_iatfRules"
                outlined
              />

              <v-text-field
                v-model="form.protocolo"
                label="Custo do Protocolo"
                required
                type="number"
                class="mt-4 pa-2 teal--text"
                :rules="protocoloRules"
                outlined
                prefix="R$"
              />

              <v-text-field
                v-model="form.mao_de_obra"
                label="Custo Mão de Obra"
                required
                type="number"
                class="mt-4 pa-2 teal--text"
                prefix="R$"
                :rules="mao_de_obraRules"
                outlined
              />

              <v-text-field
                v-model="form.material_consumo"
                label="Custo Material Consumo"
                required
                type="number"
                class="mt-4 pa-2 teal--text"
                prefix="R$"
                :rules="material_consumoRules"
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
  name: "AquisicaoSemenProtocolo1IATF2",
  data: () => ({
    valid: true,
    form: {
      preco_semen: "",
      dep_iatf: "",
      protocolo: "",
      mao_de_obra: "",
      material_consumo: "",
    },
    title: "Aquisição de Sêmen e Protocolo 1ª IATF",
    icon: "mdi-reproduction",
    subtitle:
      "Preço Dose Sêmen, DEP IATF, Custo do Protocolo, Custo Mão de Obra, Custo Material Consumo",

    preco_semenRules: [(v) => !!v || "Campo Obrigatório!"],
    dep_iatfRules: [(v) => !!v || "Campo Obrigatório!"],
    protocoloRules: [(v) => !!v || "Campo Obrigatório!"],
    mao_de_obraRules: [(v) => !!v || "Campo Obrigatório!"],
    material_consumoRules: [(v) => !!v || "Campo Obrigatório!"],
  }),

  mounted() {
    setTimeout(() => {
      this.parserDataStore();
    }, 1000);
  },

  computed: {
    parametros() {
      return this.$store.getters.getDataIatf_2RT;
    },
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("updateDados_2IATF", this.form);
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
        preco_semen: value.preco_semen,
        dep_iatf: value.dep_iatf,
        protocolo: value.protocolo,
        mao_de_obra: value.mao_de_obra,
        material_consumo: value.material_consumo,
        //Mixins
        user: this.userLogado,
      };
    },
  },
};
</script>
