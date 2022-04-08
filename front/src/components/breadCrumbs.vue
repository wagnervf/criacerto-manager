<template>
  <v-breadcrumbs :items="breadCrumbs" class="pa-0">
    <template v-slot:item="{ item }">
        <!-- :class="item.disabled ? 'text-h5 teal--text' : 'text-subtitle-2 crumb-item'" -->
      <v-breadcrumbs-item
        :to="item.to"
        class="text-subtitle-2 crumb-item teal--text"
        :disabled="item.disabled"
        exact
      >
       <v-icon class="text-h5 pr-2 teal--text" >{{ item.icon }}</v-icon> {{ item.text }}
      </v-breadcrumbs-item>
    </template>
    <template v-slot:divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {},

  computed: {
    breadCrumbs() {
      if (typeof this.$route.meta.breadCrumb === "function") {
        return this.$route.meta.breadCrumb.call(this, this.$route);
      }
      console.log(this.$route.meta.breadCrumb);
      return this.$route.meta.breadCrumb;
    },
  },
};
</script>

<style>
</style>