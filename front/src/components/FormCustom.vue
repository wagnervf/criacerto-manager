<template>
  <div>
    <v-row class="justify-space-between ma-6">
      <v-text-field
        label="Estados"
        single-line
        filled
        required
        class="mx-1"
        @input="setEstado"
      />

      <v-text-field
        label="Cidades"
        single-line
        filled
        required
        class="mx-1"
        @input="setEstado"
      />
    </v-row>
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
