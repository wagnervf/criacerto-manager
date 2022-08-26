<template>
  <v-expansion-panel
    elevation="1"
    class="pa-0"
  >
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
                v-model="form.vacas_inseminadas_2"
                label="Proporção de Vacas Inseminadas"
                required
                type="number"
                class="mt-2 pa-2 teal--text"
                :rules="vacas_inseminadas_2Rules"
                outlined
                suffix="%"
              />

              <v-text-field
                v-model="form.prenhez_iatf_2"
                label="Prenhez 2ª IATF"
                required
                class="mt-2 pa-2 teal--text"
                type="number"
                suffix="%"
                :rules="prenhez_iatf_2Rules"
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
  </v-expansion-panel><!-- Dados Técnicos -->
</template>

<script>
import mixinUtils from "../../mixins/mixin-utils";

export default {
  mixins: [mixinUtils],
  name: "DadosTecnicosRebanho2IATF2",
  data: () => ({
    valid: true,
    form: {
      _id: "",
      vacas_inseminadas_2: "",
      prenhez_iatf_2: "",
      user: "",
    },
    title: "Dados Técnicos do Rebanho 2ª IATF",
    icon: "mdi-file-cog",
    subtitle: "Proporção de Vacas Inseminadas, Prenhez 2ª IATF",

    prenhez_iatf_2Rules: [(v) => !!v || "Campo Obrigatório!"],
    vacas_inseminadas_2Rules: [(v) => !!v || "Campo Obrigatório!"],
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
        vacas_inseminadas_2: value.vacas_inseminadas_2,
        prenhez_iatf_2: value.prenhez_iatf_2,
        //Mixins
        user: this.userLogado,
      };
    },
  },
};
</script>
