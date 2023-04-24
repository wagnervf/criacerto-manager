<template>
  <v-card>
    <v-list-item
      :key="title"
      link
      :to="to"
      class="pa-2 px-4 transparent"
    >
      <v-list-item-avatar
        color="teal"
        size="65"
        class="d-none d-sm-flex"
      >
        <v-icon
          color="white"
          style="
            font-size: 18px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
              sans-serif;
          "
        >
          {{ icon }}
        </v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <div
          class="teal--text text-h6"
          v-html="title2"
        />
        <v-list-item-title />

        <div v-html="subtitle2" />

        <v-list-item-subtitle />
      </v-list-item-content>
      <v-list-item-action>
        <v-icon color="teal lighten-1">
          mdi-menu-right
        </v-icon>
      </v-list-item-action>
    </v-list-item>
  </v-card>
</template>

<script>

export default {
  name: "CardListToolbar",
  props: {
    title: {
      type: String,
      default() {
        return "";
      },
    },
    subtitle: {
      type: String,
      default() {
        return "";
      },
    },
    icon: {
      type: String,
      default() {
        return "";
      },
    },
    to: {
      type: String,
      default() {
        return "";
      },
    },
    title2: {
      type: String,
      default() {
        return "";
      },
    },
    subtitle2: {
      type: String,
      default() {
        return "";
      },
    },
    color: {
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
};
</script>
