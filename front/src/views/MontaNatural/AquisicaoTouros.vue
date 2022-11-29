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
                label="Preço de Aquisição de Touro"
                required
                class="mt-2 pa-2 teal--text"
                outlined
                type="number"
                prefix="R$"
                :rules="preco_touroRules"
              />

              <v-text-field
                v-model="form.vacinas_vermifugos"
                label="Despesas da Compra"
                required
                type="number"
                class="mt-2 pa-2 teal--text"
                outlined
                :rules="vacinas_vermifugosRules"
                suffix="%"
              />

              <v-text-field
                v-model="form.dep"
                label="DEP no Peso à Desmana (240 dias)"
                required
                type="number"
                class="mt-2 pa-2 teal--text"
                outlined
                suffix="Kg"
                :rules="depRules"
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
  </v-expansion-panel>
</template>

<script>
import mixinUtils from "../../mixins/mixin-utils";
import headerExpansionVue from "../../components/headerExpansion.vue";

export default {
  mixins: [mixinUtils],
  components: { headerExpansionVue },
  name: "AquisicaoTourosMontaNatural",
  data: () => ({
    valid: true,
    form: {
      _id: "",
      preco_touro: "",
      vacinas_vermifugos: "",
      dep: "",
      user: "",
    },
    title: "Aquisição do Touro",
    icon: "mdi-cow",
    subtitle:
      "Preço aquisisção de Touro, Despesas da Compra, DEP no Peso à Demanda (240 dias)",
    preco_touroRules: [(v) => !!v || "Campo Obrigatório!"],
    vacinas_vermifugosRules: [(v) => !!v || "Campo Obrigatório!"],
    depRules: [(v) => !!v || "Campo Obrigatório!"],
  }),

  mounted() {
    setTimeout(() => {
      this.parserDataStore();
    }, 1000);
  },

  computed: {
    parametros() {
      return this.$store.getters.getDataMontaNatural;
    },
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("updateMontaNatural", this.form);
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
        vacinas_vermifugos: value.vacinas_vermifugos,
        dep: value.dep,
        //Mixins
        user: this.userLogado,
      };
    },
  },
};
</script>
