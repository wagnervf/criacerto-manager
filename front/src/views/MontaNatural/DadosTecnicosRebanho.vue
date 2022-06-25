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
            Monta Natural
          </v-list-item-subtitle>

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
                  color="success"
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
import MontaNaturaServices from "@/services/MontaNaturaServices";
export default {
  name: "ViewDadosTecnicosRebanho",
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
    },
    title: "Dados Técnicos do Rebanho",
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

  computed: {},

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.updateMontaNatural();
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
      const value = this.$store.getters.getDataMontaNatural;

      this.form = {
        _id: value._id,
        numero_de_vacas: Number(value.numero_de_vacas),
        numero_de_touros: value.numero_de_touros,
        vida_util_touro: value.vida_util_touro,
        taxa_prenhez: value.taxa_prenhez,
        taxa_mortalidade: value.taxa_mortalidade,
        preco_bezerro: value.preco_bezerro,
        peso_comercial: value.peso_comercial,
      };
    },

    async updateMontaNatural() {
      try {
        const response = await MontaNaturaServices.updateMontaNaturalApi(
          this.form
        );

        if (response.status != 200) {
          return this.updateError(response.response.data);
        }

        return this.updateSuccess();
      } catch (error) {
        return this.updateError(error.response.data);
      }
    },

    updateSuccess() {
      this.$store.commit("SET_DATA_MONTANATURAL", this.form);
      this.setMessage("success", "Atualizado!", "Dados atualizados sucesso!");
      this.parserDataStore();
    },

    updateError(response) {
      let path = response.error.path;
      let message = response.error.message;
      let title = response.mensagem;
      console.log(path);
      return this.setMessage("error", title, message + path);
    },

    setMessage(type, title, message) {
      return this.$notify({
        group: "foo",
        type: type,
        title: title,
        text: message,
      });
    },
  },
};
</script>
