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
                v-model="form.exame_andrologico"
                :rules="exame_andrologicoRules"
                type="number"
                label="Exame Andrológico"
                required
                class="mt-4 pa-2 teal--text"
                suffix="R$/cab/ano"
                outlined
              />

              <v-text-field
                v-model="form.aluguel_pasto"
                :rules="aluguel_pastoRules"
                type="number"
                label="Aluguel Pasto"
                required
                class="pa-2 teal--text"
                suffix="R$/cab/ano"
                outlined
              />

              <v-text-field
                v-model="form.sal_mineral"
                :rules="sal_mineralRules"
                type="number"
                label="Sal Mineral"
                required
                class="pa-2 teal--text"
                suffix="R$/cab/ano"
                outlined
              />

              <v-text-field
                v-model="form.racoes"
                :rules="racoesRules"
                type="number"
                label="Rações"
                required
                class="pa-2 teal--text"
                suffix="R$/cab/ano"
                outlined
              />

              <v-text-field
                v-model="form.vacinas_vermifugos"
                :rules="vacinas_vermifugosRules"
                type="number"
                label="Produtos Veterinarios"
                required
                class="pa-2 teal--text"
                suffix="R$/cab/ano"
                outlined
              />

              <v-text-field
                v-model="form.juros_anuais"
                :rules="juros_anuaisRules"
                type="number"
                label="Juros Anuais"
                required
                class="pa-2 teal--text"
                suffix="%"
                outlined
              />

              <v-text-field
                v-model="form.valor_venda"
                :rules="valor_vendaRules"
                type="number"
                label="Valor Venda Touros"
                prefix="R$"
                required
                class="pa-2 teal--text"
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
  </v-expansion-panel><!-- Manutenção Touro IATF-->
</template>

<script>
import mixinUtils from "../../mixins/mixin-utils";
import headerExpansionVue from "../../components/headerExpansion.vue";

export default {
  mixins: [mixinUtils],
  components: { headerExpansionVue },
  name: "ManutencaoTourosIATF",
  data: () => ({
    valid: true,
    form: {
      _id: "",
      exame_andrologico: "",
      aluguel_pasto: "",
      sal_mineral: "",
      racoes: "",
      vacinas_vermifugos: "",
      juros_anuais: "",
      valor_venda: "",
      user: "",
    },
    title: "Manutenção Anual do Touro",
    icon: "mdi-currency-brl",
    subtitle:
      "Exame Andrológico, Aluguel de Pasto, Sal Mineral, Rações, Produtos Veterinários, Juros Anuais, Valor de Venda do Touro de Descarte",

    exame_andrologicoRules: [(v) => !!v || "Campo Obrigatório!"],
    aluguel_pastoRules: [(v) => !!v || "Campo Obrigatório!"],
    sal_mineralRules: [(v) => !!v || "Campo Obrigatório!"],
    racoesRules: [(v) => !!v || "Campo Obrigatório!"],
    vacinas_vermifugosRules: [(v) => !!v || "Campo Obrigatório!"],
    juros_anuaisRules: [(v) => !!v || "Campo Obrigatório!"],
    valor_vendaRules: [(v) => !!v || "Campo Obrigatório!"],
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
        //this.updateMontaNatural();
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
        exame_andrologico: value.exame_andrologico,
        aluguel_pasto: value.aluguel_pasto,
        sal_mineral: value.sal_mineral,
        racoes: value.racoes,
        vacinas_vermifugos: value.vacinas_vermifugos,
        juros_anuais: value.juros_anuais,
        valor_venda: value.valor_venda,
        //Mixins
        user: this.userLogado,
      };
    },
  },
};
</script>
