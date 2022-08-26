<template>
  <v-container
    fluid
    class="pa-0"
  >
    <!-- Mixins -->
    <v-footer
      padless
      color="transparent"
    >
      <v-row
        no-gutter
        class="text-center pa-2 text--grey"
      >
        <v-col
          xl="4"
          md="4"
          xs="12"
          sm="12"
        >
          <p>Simulações Filtradas:</p>

          <v-chip class="text-caption">
            {{ objectComDadosFiltrados.qtdeFilter }}
          </v-chip>
        </v-col>
        <v-col
          xl="4"
          md="4"
          xs="12"
          sm="12"
        >
          <p>Estado:</p>
          <v-chip class="text-caption">
            {{ objectComDadosFiltrados.estado }}
          </v-chip>
        </v-col>
        <v-col
          xl="4"
          md="4"
          xs="12"
          sm="12"
        >
          <p>Período:</p>
          <v-chip
            class="text-caption text-wrap"
            style="height: 60%"
          >
            {{ objectComDadosFiltrados.start }} -
            {{ objectComDadosFiltrados.end }}
          </v-chip>
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script>
import mixinUtils from "../mixins/mixin-utils";

export default {
  mixins: [mixinUtils],
  data() {
    return {};
  },
};
</script>
