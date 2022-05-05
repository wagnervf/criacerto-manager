<template>
  <div>
    <v-row class=" justify-space-between ma-6">
      <v-text-field
        label="Estados"
        single-line
        filled
        required
        @input="setEstado"
        class="mx-1"
      >
      </v-text-field>

      <v-text-field
        label="Cidades"
        single-line
        filled
        required
        @input="setEstado"
        class="mx-1"
      ></v-text-field>
    </v-row>

    <!-- <v-row class="d-flex justify-space-between ma-6">
      <v-select
        label="Estado"
        :items="estados"
        required
        outlined
        class="pa-2"
      ></v-select>
      <v-select
        :items="cidade"
        label="Cidades"
        required
        outlined
        class="pa-2"
      ></v-select>
    </v-row> -->
  </div>
</template>

<script>
export default {
  name: "FormCustom",

  props: {
    label: {
      type: String,
      default: "",
    },
  },

  data: () => ({
    // valid: true,
    // form: {
    //   email: this.user?.email || "",
    //   name: this.user?.name || "",
    // },
    // select: null,
    estados: ["Item 1", "Item 2", "Item 3", "Item 4"],
    cidade: ["Item 1", "Item 2", "Item 3", "Item 4"],
  }),

  computed: {},

  methods: {
    setEstado(value) {
      return this.$emit("EmitEstado", value);
    },
    setCidade(value) {
      return this.$emit("EmitCidade", value);
    },

    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
