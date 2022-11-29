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
                  v-model="form.numero_de_vacas"
                  label="Número de Vacas a Cobrir"
                  required
                  class="mt-4 pa-2 teal--text"
                  suffix="Cabeças"
                  :rules="numero_de_vacasRules"
                  type="number"
                  outlined
                />

                <v-text-field
                  v-model="form.numero_de_touros"
                  label="Número de Touros"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                  suffix="Cabeças"
                  :rules="numero_de_tourosRules"
                  type="number"
                />

                <v-text-field
                  v-model="form.vida_util_touro"
                  label="Vida Últil do Touro"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                  suffix="Anos"
                  :rules="vida_util_touroRules"
                  type="number"
                />

                <v-text-field
                  v-model="form.taxa_prenhez"
                  label="Taxa de Prenhez"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                  suffix="%"
                  :rules="taxa_prenhezRules"
                  type="number"
                />

                <v-text-field
                  v-model="form.taxa_mortalidade"
                  label="Mortalidade do Nascimento à Desmama"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                  suffix="%"
                  :rules="taxa_mortalidadeRules"
                  type="number"
                />

                <v-text-field
                  v-model="form.preco_bezerro"
                  label="Preço kg do Bezerro"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                  prefix="R$"
                  :rules="preco_bezerroRules"
                  type="number"
                />

                <v-text-field
                  v-model="form.peso_comercial"
                  label="Peso à Desmana da Fazenda"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                  suffix="Kg"
                  :rules="peso_comercialRules"
                  type="number"
                />
              </v-col>
            </v-row>

            <v-row class="d-flex justify-end mt-6">
              <div class="form-group">
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
                  color="primary"
                  class="mr-4"
                  :disabled="!valid"
                  @click="validate"
                >
                  Salvar
                </v-btn>
              </div>
            </v-row>
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

  name: "ViewDadosTecnicosRebanhoMonta",
  data: () => ({
    valid: true,

    form: {
      _id: "",
      numero_de_vacas: "",
      numero_de_touros: "",
      vida_util_touro: "",
      taxa_prenhez: "",
      taxa_mortalidade: "",
      preco_bezerro: "",
      peso_comercial: "",
      user: "",
    },
    title: "Dados Técnicos do Rebanho Monta Natural",
    icon: "mdi-file-cog",
    subtitle:
      "Nº de vacas a cobrir, Nº de Touros, Vida ùtil touro, Taxa de Prenhez, Preço Bezerro, Raças de Touro...",

    numero_de_vacasRules: [(v) => !!v || "Campo Obrigatório!"],
    numero_de_tourosRules: [(v) => !!v || "Campo Obrigatório!"],
    vida_util_touroRules: [(v) => !!v || "Campo Obrigatório!"],
    taxa_prenhezRules: [(v) => !!v || "Campo Obrigatório!"],
    taxa_mortalidadeRules: [(v) => !!v || "Campo Obrigatório!"],
    preco_bezerroRules: [(v) => !!v || "Campo Obrigatório!"],
    peso_comercialRules: [(v) => !!v || "Campo Obrigatório!"],

    monta: {},
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
        numero_de_vacas: value.numero_de_vacas,
        numero_de_touros: value.numero_de_touros,
        vida_util_touro: value.vida_util_touro,
        taxa_prenhez: value.taxa_prenhez,
        taxa_mortalidade: value.taxa_mortalidade,
        preco_bezerro: value.preco_bezerro,
        peso_comercial: value.peso_comercial,
        //Mixins
        user: this.userLogado,
      };
    },
  },
};
</script>
