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
                v-model="form.vacas_inseminadas_3"
                label="Proporção de Vacas Inseminadas"
                required
                type="number"
                class="mt-2 pa-2 teal--text"
                :rules="vacas_inseminadas_3Rules"
                outlined
                suffix="%"
              />

              <v-text-field
                v-model="form.prenhez_iatf_3"
                label="Prenhez 3ª IATF"
                required
                class="mt-2 pa-2 teal--text"
                type="number"
                suffix="%"
                :rules="prenhez_iatf_3Rules"
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
  name: "DadosTecnicosRebanho3IATF3",
  data: () => ({
    valid: true,
    form: {
      _id: "",
      vacas_inseminadas_3: "",
      prenhez_iatf_3: "",
      user: "",
    },
    title: "Dados Técnicos do Rebanho 3ª IATF",
    icon: "mdi-file-cog",
    subtitle: "Proporção de Vacas Inseminadas, Prenhez 3ª IATF",

    prenhez_iatf_3Rules: [(v) => !!v || "Campo Obrigatório!"],
    vacas_inseminadas_3Rules: [(v) => !!v || "Campo Obrigatório!"],
  }),

  mounted() {
    setTimeout(() => {
      this.parserDataStore();
    }, 1000);
  },

  computed: {
    parametros() {
      return this.$store.getters.getDataIatf_3RT;
    },
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("updateDados_3IATF", this.form);
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
        vacas_inseminadas_3: value.vacas_inseminadas_3,
        prenhez_iatf_3: value.prenhez_iatf_3,
        //Mixins
        user: this.userLogado,
      };
    },
  },
};
</script>
