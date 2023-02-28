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
        <v-toolbar class="mb-2">
          <v-toolbar-title class="teal--text pa-4">
            {{ title }}
          </v-toolbar-title>

          <v-spacer />

          <v-btn icon>
            <v-icon>mdi-help</v-icon>
          </v-btn>
        </v-toolbar>

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
  components: { headerExpansionVue },
  name: "ParametrosAjuda",
  data: () => ({
    title: "Ajuda Parâmetros do Cria Certo",
    icon: "mdi-database",
    subtitle:
      "Tela de Gerenciamento e Visualização dos Parâmetros do Cria Certo",
  }),
};
</script>
