<template>
  <v-container
    fluid
    class="down-top-padding white elevation-2"
  >
    <v-row>
      <v-col
        cols="12"
        lg="12"
      >
        <v-card
          flat
          tile
          class="text-center"
        >
          <v-card-text>
            <p class="text-h4">
              Seja bem-vindo!
            </p>
            <p class="text-center text-subtitle2">
              ao
            </p>
            <v-divider />

            <p class="text-h6 my-3">
              Cria Certo Manager
            </p>
            <p class="ma-6">
              O Cria Certo Manager é um sistema que permite a visualização de
              indicadores e métricas dos principais métodos de reprodução bovina
              , além de, um sistema de controle de conteúdo (CMS), que
              possibilite o gerenciamento dos parâmetros do Aplicativo Cria
              Certo.
            </p>
          </v-card-text>
          <v-row>
            <v-col>
              <v-card-text class="mx-6">
                <v-img
                  height="100"
                  width="200"
                  style="margin: auto"
                  alt="Logo Cria Certo Manager"
                  src="@/assets/img/cria-certo-manager2.png"
                />
              </v-card-text>
            </v-col>
            <v-col>
              <v-card-text class="mx-6">
                <v-img
                  height="100"
                  width="100"
                  style="margin: auto"
                  alt="Logo Cria Certo"
                  src="@/assets/img/criacerto.png"
                />
              </v-card-text>
            </v-col>
          </v-row>
          <v-divider />
          <v-row>
            <v-col
              cols="12"
              class="text-center grey--text mt-4"
            >
              <span>© {{ new Date().getFullYear() }} — Cria Certo Manager</span>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ViewSobre",
  data: () => ({}),
};
</script>
