<template>
  <v-expansion-panel
    elevation="1"
    class="pa-0"
  >
    <headerExpansionVue
      :title="title"
      :icon="icon"
      :subtitle="subtitle"
    />

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
                label="Número de Vacas à Inseminar"
                required
                class="mt-2 pa-2 teal--text"
                type="number"
                suffix="Cabeças"
                :rules="numero_de_vacasRules"
                outlined
              />

              <v-text-field
                v-model="form.vacas_inseminadas"
                label="Propoção de Vacas Inseminadas"
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

            <div class="d-flex justify-end mx-4">
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
  </v-expansion-panel><!-- Dados Técnicos -->
</template>

<script>
import mixinUtils from "../../mixins/mixin-utils";
import headerExpansionVue from "../../components/headerExpansion.vue";

export default {
  mixins: [mixinUtils],
  components: { headerExpansionVue },

  name: "DadosTecnicosRebanho1IATF",
  data: () => ({
    valid: true,
    form: {
      _id: "",
      numero_de_vacas: "",
      vacas_inseminadas: "",
      prenhez_iatf: "",
      taxa_mortalidade: "",
      preco_bezerro: "",
      peso_comercial: "",
      user: "",
    },

    title: "Dados Técnicos do Rebanho 1ª IATF",
    icon: "mdi-file-cog",
    subtitle:
      "Número de Vacas à Inseminar, Propoção de Vacas Inseminadas, Prenhez IATF Mortalidade do Nascimento à Desmama, Preço kg do Bezerro, Peso à Desmana da Fazenda",

    numero_de_vacasRules: [(v) => !!v || "Campo Obrigatório!"],
    vacas_inseminadasRules: [(v) => !!v || "Campo Obrigatório!"],
    prenhez_iatfRules: [(v) => !!v || "Campo Obrigatório!"],
    taxa_mortalidadeRules: [(v) => !!v || "Campo Obrigatório!"],
    preco_bezerroRules: [(v) => !!v || "Campo Obrigatório!"],
    peso_comercialRules: [(v) => !!v || "Campo Obrigatório!"],
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
        numero_de_vacas: value.numero_de_vacas,
        vacas_inseminadas: value.vacas_inseminadas,
        prenhez_iatf: value.prenhez_iatf,
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
