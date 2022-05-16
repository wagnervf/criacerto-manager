<template>
  <v-container>
    <v-card class="mx-auto">
      <v-toolbar flat class="grey lighten-4 pa-4 my-4">
        <v-row justify="space-between">
          <v-toolbar-title class="teal--text pa-2">
            <h4>Gerenciar Usuários</h4>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn color="teal" dark class="mb-2" @click="openModel">
            <span>Novo Usuário</span>
            <v-icon>mdi-plus</v-icon>
          </v-btn>

          <FormAdd :dialog="dialog" @update="dialog = $event" />
        </v-row>
      </v-toolbar>
      <v-row class="pa-4 text-left" tag="v-card-text">
        <v-toolbar color="teal" dark>
          <v-toolbar-title>Lista dos Usuários</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>
      </v-row>

      <v-row class="pa-4 text-left" tag="v-card-text">
        <v-col class="text-left">
          <v-list two-line width="100%">
            <v-subheader>REPORTS</v-subheader>
            <v-list-item-group color="primary">
              <v-list-item
                v-for="(item, i) in usuarios"
                :key="i"
                @click="userSelecionado(item)"
                selectable
                exact-active-class="primary"
                link
              >
                <v-list-item-avatar>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.nome"></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.perfil"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>

        <v-divider vertical></v-divider>

        <v-col class="d-flex text-center" v-if="foiSelecionado">
          <v-scroll-y-transition mode="out-in">
            <v-card class="pt-6 mx-auto" flat max-width="600">
              <v-card-text>
                <h3 class="text-h5 mb-2">
                  {{ selecionado.nome }}
                </h3>
                <div class="blue--text mb-2">
                  {{ selecionado.email }}
                </div>
                <div class="blue--text subheading font-weight-bold">
                  {{ selecionado.perfil }}
                </div>
              </v-card-text>

              <v-divider></v-divider>

              <v-row class="text-center my-4">
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Perfil</v-list-item-title>
                    <v-list-item-subtitle>
                      {{ selecionado.perfil }}</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Local</v-list-item-title>
                    <v-list-item-subtitle>
                      {{ selecionado.local }}</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>ID</v-list-item-title>
                    <v-list-item-subtitle>
                      {{ selecionado._id }}</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-row>

              <v-row class="text-left">
                <pre>{{ selecionado }}</pre>
              </v-row>

              <v-card-text>
                <v-row align="center" justify="space-around">
                  <v-btn outlined class="ma-2" color="primary">
                    <v-icon left> mdi-pencil </v-icon> Editar
                  </v-btn>
                  <v-btn outlined class="ma-2" color="error">
                    <v-icon left> mdi-delete </v-icon> Excluir
                  </v-btn>
                </v-row>
              </v-card-text>
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
    selecionado: {},
    perfis: ["Técnico", "Administrador"],
    dialog: false,
  }),

  created() {
    this.getUsuarios();
  },

  computed: {
    foiSelecionado() {
      console.log(Object.keys(this.selecionado).length === 0);

      return Object.keys(this.selecionado).length > 0;
    },
  },

  watch: {},

  methods: {
    userSelecionado(value) {
      this.selecionado = Object.assign({}, value);
      console.log(value);
    },

    getUsuarios() {
      return UsuariosServices.getListaUsuarios()
        .then((resposta) => (this.usuarios = resposta.dados))
        .catch((err) => console.warn(err));
    },

    async fetchUsers(item) {
      await pause(1500);

      return UsuariosServices.getListaUsuarios()
        .then((resposta) => item.children.push(...resposta.dados))
        .catch((err) => console.warn(err));
    },

    openModel() {
      this.dialog = true;
    },
  },
};
</script>

<style>
.v-treeview-node__label {
  color: #1867c0 !important;
}
</style>
