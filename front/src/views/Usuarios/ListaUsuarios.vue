<template>
  <v-container>
    <v-card class="mx-auto">
      <v-toolbar flat>
        <v-toolbar-title class="grey--text">
          Gerenciar Usuários
        </v-toolbar-title>

        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>

        <v-dialog v-model="dialog">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="teal" dark class="mb-2" v-bind="attrs" v-on="on">
              <span>Novo Usuário</span>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="col-12 teal">
              <v-icon dark>mdi-account-plus</v-icon>
              <span class="ml-4 text-h5 white--text">{{ formTitle }}</span>
            </v-card-title>

            <v-container class="col-8 pa-4 mx-auto">
              <v-row>
                <v-card-text>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.nome"
                      label="Nome"
                      prepend-icon="mdi-account"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.email"
                      label="E-mail"
                      type="email"
                      prepend-icon="mdi-email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.senha"
                      label="Senha"
                      type="password"
                      prepend-icon="mdi-lock"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.local"
                      label="Local"
                      prepend-icon="mdi-map-marker"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      :items="perfis"
                      v-model="editedItem.perfil"
                      label="Perfil"
                      prepend-icon="mdi-badge-account-alert"
                    ></v-select>
                  </v-col>
                </v-card-text>

                <v-card-actions class="col-12 pr-6">
                  <v-spacer></v-spacer>
                  <v-btn color="error" depressed @click="close">
                    Cancelar
                  </v-btn>
                  <v-btn color="success" depressed @click="save">
                    Salvar
                  </v-btn>
                </v-card-actions>
              </v-row>
              <pre>{{ this.editedItem }}</pre>
            </v-container>
          </v-card>
        </v-dialog>
      </v-toolbar>

      <v-row class="pa-4" justify="space-between">
        <v-col cols="12"> </v-col>

        <v-col cols="5">
          <v-treeview
            :active.sync="active"
            :items="items"
            :load-children="fetchUsers"
            :open.sync="open"
            activatable
            color="warning"
            open-on-click
            transition
          >
            <template v-slot:prepend="{ item }">
              <v-icon v-if="!item.children"> mdi-account </v-icon>
            </template>
          </v-treeview>
        </v-col>

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
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default {
  data: () => ({
    active: [],
    open: [],
    users: [],
    search: null,
    caseSensitive: false,
    usuarios: [],
    selecionado: [],
    value: 1,
    ativo: true,
    perfis: ["Técnico", "Administrador"],

    desserts: [],
    editedIndex: -1,
    editedItem: {
      nome: "",
      email: "",
      senha: "",
      local: "",
      perfil: "",
    },
    defaultItem: {
      nome: "",
      email: "",
      senha: "",
      local: "",
      perfil: "",
    },
    dialog: false,
    dialogDelete: false,
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

    formTitle() {
      return this.editedIndex === -1 ? "Novo Usuário" : "Editar Usuário";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  methods: {
    async fetchUsers(item) {
      await pause(1500);

      return UsuariosServices.getListaUsuarios()
        .then((resposta) => item.children.push(...resposta.dados))
        .catch((err) => console.warn(err));
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
