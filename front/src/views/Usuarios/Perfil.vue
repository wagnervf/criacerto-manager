<template>
  <v-card
    min-height="90vh"
    class="mx-auto"
  >
    <v-toolbar
      color="primary"
      elevation="0"
      dark
    >
      <v-toolbar-title class="mx-4">
        <h2 class="font-weight-regular">
          Meu Perfil
        </h2>
      </v-toolbar-title>
    </v-toolbar>

    <v-col class="d-flex text-center">
      <v-scroll-y-transition mode="out-in">
        <v-card
          class="py-6 mx-auto"
          flat
          max-width="70%"
        >
          <v-card-text>
            <h3 class="text-h5 mb-2">
              {{ usuario.name }}
            </h3>
            <div class="blue--text mb-2">
              {{ usuario.email }}
            </div>
          </v-card-text>

          <v-divider class="my-2" />

          <v-col class="text-center">
            <div class="my-6">
              <v-icon left>
                mdi-badge-account
              </v-icon>
              Perfil :
              <span class="text--title">{{
                usuario.admin ? " ADMINISTRADOR" : " TÉCNICO"
              }}</span>
            </div>

            <v-divider />

            <v-list-item
              two-line
              class="my-6"
            >
              <v-list-item-content>
                <v-list-item-title class="subtitle-1">
                  Atualizado
                </v-list-item-title>
                <v-list-item-subtitle class="subtitle-2">
                  {{ usuario.changed }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-card>
      </v-scroll-y-transition>
    </v-col><!-- Usuário selecionado -->
  </v-card>
</template>

<script>
import mixinUtils from "../../mixins/mixin-utils";
export default {
  mixins: [mixinUtils],
  name: "ViewProfile",
  components: {},

  data: () => ({
    ativo: true,

    usuario: {},
  }),

  created() {
    console.log(this.userLogado);
    this.usuario = this.userLogado;
  },

  methods: {},
};
</script>
