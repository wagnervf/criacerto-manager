<template>
  <v-container>
    <v-card class="mx-auto">
      <v-toolbar flat class="grey lighten-4 pa-4 my-4">
        <v-row justify="space-between">
          <v-toolbar-title class="teal--text pa-2">
            <h4>Gerenciar Usuários</h4>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn color="teal" dark class="mb-2" @click="dialog = !dialog">
            <span>Novo Usuário</span>
            <v-icon>mdi-plus</v-icon>
          </v-btn>

          <FormAdd :dialog.sync="dialog" />


        </v-row>
      </v-toolbar>

      <v-row class="pa-4" justify="space-between">
        <v-treeview
          :active.sync="active"
          :items="items"
          :load-children="fetchUsers"
          :open.sync="open"
          activatable
          color="warning"
          open-on-click
          transition
          class="pa-4 mx-4"
        >
          <template v-slot:prepend="{ item }">
            <v-icon v-if="!item.children"> mdi-account </v-icon>
          </template>
        </v-treeview>

        <v-divider vertical></v-divider>

        <v-col class="d-flex text-center">
          <v-scroll-y-transition mode="out-in">
            <div
              v-if="!selected"
              class="text-h6 grey--text text--lighten-1 font-weight-light"
              style="align-self: center"
            >
              Usuário selecionado
            </div>
            <v-card
              v-else
              :key="selected.id"
              class="pt-6 mx-auto"
              flat
              max-width="400"
            >
              <v-card-text>
                <h3 class="text-h5 mb-2">
                  {{ selected.name }}
                </h3>
                <div class="blue--text mb-2">
                  {{ selected.email }}
                </div>
                <div class="blue--text subheading font-weight-bold">
                  {{ selected.username }}
                </div>
              </v-card-text>
              <v-divider></v-divider>
              <v-row class="text-left" tag="v-card-text">
                <pre>{{ selected }}</pre>
                <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                  Perfil:
                </v-col>
                <!-- <v-col>{{ selected.company.name }}</v-col> -->
                <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                  Setor:
                </v-col>
                <v-col>
                  <!-- <a
                  :href="`//${selected.website}`"
                  target="_blank"
                >{{ selected.website }}</a> -->
                </v-col>
                <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                  _ID:
                </v-col>
                <v-col>{{ selected._id }}</v-col>
              </v-row>

              <v-card-footer>
                <v-row align="center" justify="space-around">
                  <v-btn outlined class="ma-2" color="primary">
                    <v-icon left> mdi-pencil </v-icon> Editar
                  </v-btn>
                  <v-btn outlined class="ma-2" color="error">
                    <v-icon left> mdi-delete </v-icon> Excluir
                  </v-btn>
                </v-row>
              </v-card-footer>
            </v-card>
          </v-scroll-y-transition>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import UsuariosServices from "@/services/UsuariosServices";
import FormAdd from "./FormAdd.vue";

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default {
  components: { FormAdd },

  props: {},

  data: () => ({
    active: [],
    open: [],
    users: [],
    usuarios: [],
    selecionado: [],
    perfis: ["Técnico", "Administrador"],
    dialog: false,
  }),

  created() {},

  computed: {
    items() {
      return [
        {
          name: "Carregar Usuários",
          children: this.users,
        },
      ];
    },

    selected() {
      if (!this.active.length) return undefined;

      const id = this.active[0];
      console.log(this.active);

      return this.users.find((user) => user.id === id);
    },
  },

  watch: {},

  methods: {
    async fetchUsers(item) {
      await pause(1500);

      return UsuariosServices.getListaUsuarios()
        .then((resposta) => item.children.push(...resposta.dados))
        .catch((err) => console.warn(err));
    },
  },
};
</script>

<style>
.v-treeview-node__label {
  color: #1867c0 !important;
}
</style>
