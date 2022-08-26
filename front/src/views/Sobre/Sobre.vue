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
            <v-divider />

            <p class="text-h6 my-3">
              Cria Certo Manager
            </p>
            <p class="ma-6">
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit
              amet. Mauris cursus commodo interdum. Praesent ut risus eget metus
              luctus accumsan id ultrices nunc. Sed at orci sed massa
              consectetur dignissim a sit amet dui.
            </p>
          </v-card-text>
          <v-card-text class="mx-6">
            <v-img
              height="100"
              width="100"
              style="margin: auto"
              alt="Logo Cria Certo"
              src="@/assets/img/criacerto.png"
            />
          </v-card-text>
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
