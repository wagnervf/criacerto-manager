<template>
  <v-container>
    <v-card class="mx-auto" tile>
      <v-toolbar class="teal px-4" >
          <v-toolbar-title class="white--text pa-2" dark>
            Gerenciar Usuários
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn
            color="white"
            outlined
            dark
            title="Adicionar um usuário"
            @click="formAddUser"
          >
            <span>Novo Usuário</span>
            <v-icon>mdi-plus</v-icon>
          </v-btn>

          <!-- <FormAdd
            :dialog="dialog"
            @update="dialog = $event"
            :usuarioEditar="usuarioEditado"
          /> -->
      </v-toolbar>

      <v-toolbar class="elevation-0 grey lighten-4">
        <v-toolbar-title>Lista dos Usuários</v-toolbar-title>
      </v-toolbar>

      <v-row class="px-4 text-left" tag="v-card-text">
        <v-col cols="5" class="text-left">
          <v-list two-line width="100%">
            <v-list-item v-if="usuarios.length < 1">
              <v-btn
                :loading="loading"
                :disabled="loading"
                color="success"
                class="ma-2 white--text"
                @click="getUsuarios"
                text
              >
                <v-icon left dark> mdi-reload </v-icon>
                Carregar Usuários
              </v-btn>
            </v-list-item>

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
          </v-list> </v-col
        ><!-- Lista de usuários -->

        <v-divider vertical></v-divider>

        <v-col cols="7" class="d-flex text-center" v-if="foiSelecionado">
          <v-scroll-y-transition mode="out-in">
            <v-card class="py-6 mx-auto" flat max-width="70%">
              <v-card-text>
                <h3 class="text-h5 mb-2">
                  {{ selecionado.nome }}
                </h3>
                <div class="blue--text mb-2">
                  {{ selecionado.email }}
                </div>
              </v-card-text>

              <v-divider></v-divider>

              <v-row class="text-center py-4 my-4">
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Perfil</v-list-item-title>
                    <v-list-item-subtitle>
                      <strong v-if="selecionado.admin"> Administrador </strong>
                      <strong v-if="selecionado.tecnico"> Técnico </strong>
                    </v-list-item-subtitle>
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
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Criado</v-list-item-title>
                    <v-list-item-subtitle>
                      {{ selecionado.createdAt }}</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Atualizado</v-list-item-title>
                    <v-list-item-subtitle>
                      {{ selecionado.updatedAt }}</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-row>

              <pre>{{selecionado}}</pre>

              <v-divider></v-divider>

              <v-card-text class="my-2">
                <v-row align="center" class="my-2" justify="space-around">
                  <v-btn
                    outlined
                    class="ma-2"
                    color="primary"
                    @click="editarUsuario()"
                  >
                    <v-icon left> mdi-pencil </v-icon> Editar
                  </v-btn>
                  <v-btn
                    outlined
                    class="ma-2"
                    color="error"
                    @click="dialogDelete = true"
                  >
                    <v-icon left> mdi-delete </v-icon> Excluir
                  </v-btn>
                  <v-btn outlined class="ma-2" color="warning">
                    <v-icon left> mdi-lock </v-icon> Alterar Senha
                  </v-btn>
                </v-row>
              </v-card-text>
            </v-card>
          </v-scroll-y-transition> </v-col
        ><!-- Usuário selecionado -->

        <v-row justify="center">
          <v-dialog v-model="dialogDelete" persistent max-width="500px">
            <v-card>
              <v-card-title class="text-h5">
                Tem certeza que deseja exlcuir o usuário?
              </v-card-title>
              <v-card-text
                >Os dados do usuário não poderão ser restaurados!</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="teal darken-1"
                  outlined
                  @click="dialogDelete = false"
                >
                  Fechar
                </v-btn>
                <v-btn color="red darken-2" outlined @click="removerUsuario">
                  Confirmar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
        <!-- Dialog confirma excluir usuário -->
      </v-row>

      <Snackbar
        :snackbar="snackbar"
        :color="color"
        :snackbarText="snackbarText"
      />

    </v-card>
  </v-container>
</template>

<script>
import UsuariosServices from "@/services/UsuariosServices";
//import FormAdd from "./FormAdd.vue";
import Snackbar from "../../components/Snackbar.vue";
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default {
  components: {
    // FormAdd,
    Snackbar,
  },

  props: {},

  data: () => ({
    active: [],
    open: [],
    users: [],
    usuarios: [],
    selecionado: {},
    usuarioEditado: {},
    perfis: ["Técnico", "Administrador"],
   // dialog: false,

    snackbarText: "",
    snackbar: "",
    color: "",
    loading: false,
    loader: null,
    dialogDelete: false,
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
    setLoader() {
      this.loader = "loading";
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 1000);
      this.loader = null;
    },

    userSelecionado(value) {
      this.selecionado = Object.assign({}, value);
    },

    async getUsuarios() {
      try {
        let response = await UsuariosServices.getListaUsuarios();

        if (response.status != 200) {
          return this.setMessage(response.data.message, true, "error");
        }

        this.setLoader();
        await pause(1000);
        this.usuarios = response.data.dados;
      } catch (error) {
        return this.setMessage(error, true, "error");
      }
    },

    async formAddUser() {
      this.$router.push({ name: "Novo Usuario" });
    },

    async removerUsuario() {
      try {
        let id = this.selecionado._id;
        let response = await UsuariosServices.removerUsuario(id);

        if (response.status == 404) {
          //Erro na atualização do usuário
          return this.setMessage(response.data.error, true, "error");
        }

        this.dialogDelete = false;
        this.setMessage("Usuário removido com sucesso!", true, "success");
        await pause(1000);

        //Reload da página
        this.$router.go();
      } catch (error) {
        return this.setMessage(error.data.message, true, "error");
      }
    },

    editarUsuario() {
      this.usuarioEditado = Object.assign({}, this.selecionado);
      let link =  {name: "Novo Usuario"  , params: this.usuarioEditado};
      this.$router.push(link);     
    },

  

    atualizaLista() {
      this.selecionado = [];
    },

    setMessage(message, snack, color) {
      this.snackbarText = message;
      this.snackbar = snack;
      this.color = color;
    },
  },
};
</script>

<style>
.v-treeview-node__label {
  color: #1867c0 !important;
}
</style>
