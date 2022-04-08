<template>
  <v-container class="full-heigth">
    <v-row justify="center">
      <v-col class="px-1 py-0" cols="12" lg="12" justify-center flex>
        <v-card class="mx-auto">
          <v-toolbar color="grey lighten-3" elevation="0">
            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

            <v-toolbar-title>
              <v-breadcrumbs :items="breadCrumbs">
                <template v-slot:item="{ item }">
                  <v-breadcrumbs-item
                    :to="item.to"
                   :class="item.disabled ? 'text-h5 teal--text' : 'text-caption crumb-item' "
                    :disabled="item.disabled"
                    exact
                  >
                    {{ item.text }}
                  </v-breadcrumbs-item>
                </template>
              </v-breadcrumbs>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list three-line active-class="primary--text">
            <div v-for="(item, index) in items" :key="item.title">
              <v-divider
                v-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>

              <v-list-item v-else link :key="item.title" :to="item.to">
                <v-list-item-avatar color="teal" size="56">
                  <v-icon color="white">{{ item.icon }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title
                    class="teal--text"
                    v-html="item.title"
                  ></v-list-item-title>

                  <v-list-item-subtitle
                    v-html="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon color="teal lighten-1">mdi-menu-right</v-icon>
                </v-list-item-action>
              </v-list-item>
            </div>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./Index.js"></script>

<style lang="scss"></style>
