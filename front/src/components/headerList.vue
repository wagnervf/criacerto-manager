<template>
  <div>
    <v-list-item
      link
      router
      @click="goTo(rota)"
      class="white pa-4 my-2"
      rounded
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

      <v-list-item-action>
        <v-btn icon>
          <v-icon color="primary">
            {{ iconExpand }}
          </v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: "HeaderList",

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

  methods: {
    goTo(rota) {
      this.$router.push({ name: rota });
    },
  },
};
</script>
