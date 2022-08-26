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
                  v-model="form.numero_de_touros"
                  :rules="numero_de_tourosRules"
                  type="number"
                  label="Número de Touros"
                  required
                  class="mt-2 pa-2 teal--text"
                  suffix="Cabeças"
                  outlined
                />

                <v-text-field
                  v-model="form.vida_util_touro"
                  :rules="vida_util_touroRules"
                  type="number"
                  label="Vida Útil do Touro"
                  required
                  class="mt-2 pa-2 teal--text"
                  suffix="Anos"
                  outlined
                />

                <v-text-field
                  v-model="form.taxa_prenhez"
                  :rules="taxa_prenhezRules"
                  type="number"
                  label="Prenhez Repasse"
                  required
                  class="mt-2 pa-2 teal--text"
                  suffix="%"
                  outlined
                />

                <v-text-field
                  v-model="form.peso_comercial_iatf"
                  :rules="peso_comercial_iatfRules"
                  type="number"
                  label="Peso à Desmama da Fazenda"
                  required
                  class="mt-2 pa-2 teal--text"
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
      </v-container>
    </v-expansion-panel-content>
  </v-expansion-panel><!-- Repasse com Touro -->
</template>

<script>
import mixinUtils from "../../mixins/mixin-utils";

export default {
  mixins: [mixinUtils],
  name: "RepasseComTouro2IATF",
  data: () => ({
    valid: true,
    form: {
      numero_de_touros: "",
      vida_util_touro: "",
      taxa_prenhez: "",
      peso_comercial_iatf: "",
    },
    title: "Repasse com Touro",
    icon: "mdi-cow-off",
    subtitle:
      "Nº de Touro, Vida Útil do Touro, Prenhez Repasse, Raça do Touro, Raça Touro Peso à Desmana da Fazenda",
    numero_de_tourosRules: [(v) => !!v || "Campo Obrigatório!"],
    vida_util_touroRules: [(v) => !!v || "Campo Obrigatório!"],
    taxa_prenhezRules: [(v) => !!v || "Campo Obrigatório!"],
    peso_comercial_iatfRules: [(v) => !!v || "Campo Obrigatório!"],
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
        numero_de_touros: value.numero_de_touros,
        vida_util_touro: value.vida_util_touro,
        taxa_prenhez: value.taxa_prenhez,
        peso_comercial_iatf: value.peso_comercial_iatf,

        //Mixins
        user: this.userLogado,
      };
    },
  },
};
</script>
