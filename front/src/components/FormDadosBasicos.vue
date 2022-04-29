<template>
  <v-form class="pa-6 white ma-1" ref="form" v-model="valid" lazy-validation>
    <v-alert class="pa-6" outlined color="grey lighten-3">
      <v-row justify="space-between">
        <!-- <v-text-field
          class="pa-2"
          placeholder="label"
          :value="nomeSimulacao"
          @input="$emit('update:nomeSimulacao', $event.target.value)"


        > </v-text-field> -->
        <form @submit.prevent="$emit('on-submit', form)">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" v-model="form.email" />
          </div>

          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" name="name" v-model="form.name" />
          </div>

          <button type="submit">Submit</button>
        </form>

        <!-- <input
          type="text"
          :name="name"
          :value="value"
          @input="$emit('input', $event.target.value)"
        />
        <input
          type="text"
          :name="name"
          :value="form.nomeSimulacao"
          @input="onInput"
          @change="onChange"
        />  -->
      </v-row>
      <!-- 
                <v-text-field
                  v-model="form.nomePropiedade"
                  label="Nome da Propriedade"
                  required
                  class="pa-2"
                  outlined
                ></v-text-field>
              </v-row>
</v-row>
              <v-row class="d-flex justify-space-between my-6">
                <v-select
                  v-model="form.estado"
                  :items="items"
                  label="Estados"
                  required
                  class="pa-2"
                ></v-select>
                <v-select
                  v-model="form.cidade"
                  :items="items"
                  label="Cidades"
                  required
                  class="pa-2"
                ></v-select>
              </v-row> -->

      <v-row class="d-flex justify-end mt-6">
        <v-btn outlined color="error" class="mr-4"> Cancelar </v-btn>

        <v-btn outlined color="success" class="mr-4"> Salvar </v-btn>
      </v-row>
    </v-alert>
  </v-form>
</template>

<script>
export default {
  name: "Form Dados Basicos",

  props: {
    nomeSimulacao: {
      type: [String, Number],
      default: "",
    },

    user: {
      type: Object,
    },
  },

  data: () => ({
    valid: true,

    form: {
      email: this.user?.email || "",
      name: this.user?.name || "",
    },
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],

  }),

  computed: {},

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },

    // onInput(event) {
    //   // Can add validation here
    //   this.$emit("input", event.target.value);
    //   console.log(event.target.value);
    //   this.form.nomeSimulacao = event.target.value;
    // },
    //  onChange(event) {
    // Supports .lazy
    // Can add validation here
    // this.$emit("change", event.target.value);

    //   console.log(event.target.value);
    // },
  },
};
</script>
