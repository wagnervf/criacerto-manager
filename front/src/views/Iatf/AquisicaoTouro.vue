<template>
  <v-expansion-panel>
    <headerExpansionVue
      :title="title"
      :icon="icon"
      :subtitle="subtitle"
    />
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
                v-model="form.preco_touro"
                :rules="preco_touroRules"
                type="number"
                label="Preço de Aquisição do Touro"
                required
                class="mt-4 pa-2 teal--text"
                prefix="R$"
                outlined
              />

              <v-text-field
                v-model="form.despesas_compra"
                :rules="despesas_compraRules"
                type="number"
                label="Despesas da Compra"
                required
                class="pa-2 teal--text"
                suffix="%"
                outlined
              />

              <v-text-field
                v-model="form.dep"
                :rules="depRules"
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
import mixinUtils from "../../mixins/mixin-utils";
import headerExpansionVue from "../../components/headerExpansion.vue";

export default {
  mixins: [mixinUtils],
  components: { headerExpansionVue },
  name: "AquisicaoTourosIATF",
  data: () => ({
    valid: true,
    form: {
      _id: "",
      preco_touro: "",
      despesas_compra: "",
      dep: "",
      user: "",
    },
    title: "Aquisição do Touro",
    icon: "mdi-cow",
    subtitle:
      "Preço aquisisção de Touro, Despesas da Compra, DEP no Peso à Demanda (240 dias)",
    preco_touroRules: [(v) => !!v || "Campo Obrigatório!"],
    despesas_compraRules: [(v) => !!v || "Campo Obrigatório!"],
    depRules: [(v) => !!v || "Campo Obrigatório!"],
  }),

  mounted() {
    setTimeout(() => {
      this.parserDataStore();
    }, 1000);
  },

  computed: {
    parametros() {
      return this.$store.getters.getDataIatfRT;
    },
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("updateDadosIATF", this.form);
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
        preco_touro: value.preco_touro,
        despesas_compra: value.despesas_compra,
        dep: value.dep,
        //Mixins
        user: this.userLogado,
      };
    },
  },
};
</script>
