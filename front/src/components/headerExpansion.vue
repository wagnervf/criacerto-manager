<template>
  <div>
    <v-expansion-panel-header class="pl-3">
      <v-list-item
        link
        router
        :to="rota"
      >
        <v-list-item-avatar
          color="teal"
          size="56"
          class="d-none d-sm-flex"
        >
          <v-icon color="white">
            {{ icon }}
          </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="teal--text text-wrap">
            {{ title }}
          </v-list-item-title>

          <v-list-item-subtitle class="text-wrap">
            {{ subtitle }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-expansion-panel-header>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default() {
        return "";
      },
    },
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

    iconExpand: {
      type: String,
      default() {
        return "mdi-chevron-down";
      },
    },

    rota: {
      type: String,
      default() {
        return "";
      },
    },
  },
};
</script>
