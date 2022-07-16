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

          <v-chip class="text-subtitle-2">
            {{ objectFilter.qtdeFilter }}
          </v-chip>
        </v-col>
        <v-col cols="4">
          <p>Estado:</p>
          <v-chip class="text-subtitle-2">
            {{ objectFilter.estado }}
          </v-chip>
        </v-col>
        <v-col cols="4">
          <p>Período:</p>
          <v-chip class="text-subtitle-2">
            {{ objectFilter.start }} - {{ objectFilter.end }}
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

<style></style>
