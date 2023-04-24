<template>
  <div>
    <v-col
      class="mt-4"
      cols="12"
      justify-center
    >
      <v-toolbar
        color="blue-grey"
        dark
        dense
        flat
      >
        <v-toolbar-title class="pt-2">
          Informações
        </v-toolbar-title>
      </v-toolbar>

      <v-banner
        elevation="1"
        icon="mdi-update"
        outlined
        rounded
        shaped
        single-line
      >
        <p class="pa-2 teal--text">
          Última atualização
        </p>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>{{ user }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ update }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-banner>
    </v-col>
  </div>
</template>

<script>

export default {
  name: "UpdateCard",
  props: {
    user: {
      type: String,
      default() {
        return "";
      },
    },
    update: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data: () => ({
    search: null,
  }),
  computed: {},
  methods: {},
};
</script>
