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
                  class="mt-2 pa-2 teal--text"
                  outlined
                  suffix="R$/cab/ano"
                />

                <v-text-field
                  v-model="form.sal_mineral"
                  :rules="sal_mineralRules"
                  type="number"
                  label="Sal Mineral"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                  suffix="R$/cab/ano"
                />

                <v-text-field
                  v-model="form.racoes"
                  :rules="racoesRules"
                  type="number"
                  label="Rações"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                  suffix="R$/cab/ano"
                />

                <v-text-field
                  v-model="form.vacinas_vermifugos"
                  :rules="vacinas_vermifugosRules"
                  type="number"
                  label="Produtos Veterinarios"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                  suffix="R$/cab/ano"
                />

                <v-text-field
                  v-model="form.juros_anuais"
                  :rules="juros_anuaisRules"
                  type="number"
                  label="Juros Anuais"
                  required
                  class="mt-2 pa-2 teal--text"
                  outlined
                  suffix="%"
                />

                <v-text-field
                  v-model="form.valor_venda"
                  :rules="valor_vendaRules"
                  label="Valor Venda Touros"
                  type="number"
                  prefix="R$"
                  required
                  class="mt-2 pa-2 teal--text"
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
  </v-expansion-panel>
</template>

<script>
import mixinUtils from "../../mixins/mixin-utils";

export default {
  mixins: [mixinUtils],
  name: "ManutencaoTourosMontaNatural",
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
