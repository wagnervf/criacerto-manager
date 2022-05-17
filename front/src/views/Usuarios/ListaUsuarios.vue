<template>
  <v-container>
    <v-card class="mx-auto">
      <v-toolbar flat class="teal pa-4">
        <v-row justify="space-between">
          <v-toolbar-title class="white--text pa-2" dark>
            <h4>Gerenciar Usuários</h4>
          </v-toolbar-title>

          <FormAdd :dialog="dialog" @update="dialog = $event" :usuarioEditar="usuarioEditado" />
        </v-row>
      </v-toolbar>

      <v-toolbar class="elevation-0 grey lighten-4">
        <v-toolbar-title>Lista dos Usuários</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn color="teal" dark @click="openModel">
          <span>Novo Usuário</span>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-toolbar>

      <v-row class="px-4 text-left" tag="v-card-text">
        <v-col class="text-left">
          <v-list two-line width="100%">
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
                  <v-btn
                    outlined
                    class="ma-2"
                    color="primary"
                    @click="editarUsuario()"
                  >
                    <v-icon left> mdi-pencil </v-icon> Editar
                  </v-btn>
                  <v-btn outlined class="ma-2" color="error">
                    <v-icon left> mdi-delete </v-icon> Excluir
                  </v-btn>
                  <v-btn outlined class="ma-2" color="warning">
                    <v-icon left> mdi-lock </v-icon> Alterar Senha
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


export default {
  components: { FormAdd },

  props: {},

  data: () => ({
    active: [],
    open: [],
    users: [],
    usuarios: [],
    selecionado: {},
    usuarioEditado: {},
    perfis: ["Técnico", "Administrador"],
    dialog: false,
  }),

  // Carrega usuários ao criar a página
  // TODO: Analisar se ficará assim
  created() {
    this.getUsuarios();
  },

  computed: {
    foiSelecionado() {
      return Object.keys(this.selecionado).length > 0;
    },
  },

  watch: {},

  methods: {
    userSelecionado(value) {
      this.selecionado = Object.assign({}, value);
    //  console.log(value);
    },

    getUsuarios() {
      return UsuariosServices.getListaUsuarios()
        .then((resposta) => (this.usuarios = resposta.dados))
        .catch((err) => console.warn(err));
    },

    editarUsuario() {
      this.usuarioEditado = Object.assign({}, this.selecionado);
      this.openModel();
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
