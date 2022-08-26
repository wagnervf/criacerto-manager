<template>
  <v-card>
    <v-toolbar
      color="teal"
      dark
      flat
    >
      <v-toolbar-title>Ajuda</v-toolbar-title>
      <v-spacer />

      <v-text-field
        append-icon="mdi-microphone"
        class="mx-4"
        flat
        hide-details
        label="Pesquisar"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
      />

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-tabs
      vertical
      left
      light
      active-class
      style="min-height: 600px"
    >
      <v-tab>
        <v-icon left>
          mdi-chart-box
        </v-icon>
        Dashboard
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-database
        </v-icon>
        Simulações
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-keyboard
        </v-icon>
        Atalhos
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <pre>
          Atalhos:
          -Firefox:
            * Menu: Alt + Shift + m
            * Ações do usuário : Alt + Shift + u
            * Sair: Alt + Shift + s

          -Chrome:
            * Menu: Alt + m
            * Ações do usuário : Alt + u
            * Sair: Alt + s

          </pre>

            <p>
              {{ this.text }}
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu.
              Pellentesque libero tortor, tincidunt et, tincidunt eget, semper
              nec, quam. Phasellus blandit leo ut odio.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque
              egestas, lacus ante convallis tellus, vitae iaculis lacus elit id
              tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam
              libero, non adipiscing dolor urna a orci. Curabitur ligula sapien,
              tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed
              turpis.
            </p>

            <p>
              {{ this.text }}
            </p>

            <p>
              Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
              quis gravida magna mi a libero. Nam commodo suscipit quam. In
              consectetuer turpis ut velit. Sed cursus turpis vitae tortor.
              Aliquam eu nunc.
            </p>

            <p>
              Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt
              libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum
              odio nec arcu.
            </p>

            <p class="mb-0">
              {{ this.text }}
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <!-- Teclas de atalho -->
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <teclas-atalho />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script>
import teclasAtalho from "./teclasAtalho.vue";
export default {
  name: "AjudaView",
  components: {
    teclasAtalho,
  },
  data() {
    return {
      tabs: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
<style scope>
.v-slide-group__wrapper {
  border-right: 1px solid #eee !important;
}
</style>
