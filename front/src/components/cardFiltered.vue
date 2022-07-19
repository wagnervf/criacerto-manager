<template>
  <div>
    <!-- Mixins -->
    <v-footer
      padless
      color="transparent"
    >
      <v-row class="text-center pa-2 text--grey">
        <v-col cols="4">
          <p>Simulações Filtradas:</p>

          <v-chip class="text-caption">
            {{ objectComDadosFiltrados.qtdeFilter }}
          </v-chip>
        </v-col>
        <v-col cols="4">
          <p>Estado:</p>
          <v-chip class="text-caption">
            {{ objectComDadosFiltrados.estado }}
          </v-chip>
        </v-col>
        <v-col cols="4">
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
  </div>
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
