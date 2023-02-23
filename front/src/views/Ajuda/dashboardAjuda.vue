<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-expansion-panel>
    <headerExpansionVue
      :title="title"
      :icon="icon"
      :subtitle="subtitle"
    />
    <v-expansion-panel-content class="pa-0">
      <v-container
        fluid
        class="pa-0"
      >
        <v-card-title class="d-block">
          <h3 class="text-subtitle-1 py-2">
            Atalhos
          </h3>
          <ul />
        </v-card-title>

        <v-divider class="mx-4" />

        <v-card>
          <pre>
          -Firefox:
            * Menu: Alt + Shift + m
            * Ações do usuário : Alt + Shift + u
            * Sair: Alt + Shift + s

          -Chrome:
            * Menu: Alt + m
            * Ações do usuário : Alt + u
            * Sair: Alt + s

          </pre>
        </v-card>
      </v-container>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import headerExpansionVue from "../../components/headerExpansion.vue";

export default {
  name: "DashboardAjuda",
  components: { headerExpansionVue },
  data: () => ({
    title: "Dashboard",
    icon: "mdi-chart-box",
    subtitle: "Tela de Dashboard",
  }),
};
</script>
