import Vue from "vue";
import Vuex from "vuex";
import MontaNaturaServices from "@/services/MontaNaturaServices";
import IatfServices from "@/services/IatfServices";
import mixinUtils from "../mixins/mixin-utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Sidebar_drawer: null,
    Customizer_drawer: false,
    SidebarColor: "white",
    SidebarBg: "",
    loggedIn: false,
    userLogado: {
      _id: "",
      nome: "",
      email: "",
      // perfil: "",
      token: "",
      emailVerified: false,
      created: null,
      ultimoLogin: null,
      isAdmin: false,
      logado: "",
    },
    ecow: {},
    montaNaturalState: {},
    IATFState: {},
  },
  mutations: {
    SET_SIDEBAR_DRAWER(state, payload) {
      state.Sidebar_drawer = payload;
    },
    SET_CUSTOMIZER_DRAWER(state, payload) {
      state.Customizer_drawer = payload;
    },
    SET_SIDEBAR_COLOR(state, payload) {
      state.SidebarColor = payload;
    },

    SET_LOGGED_IN(state, value) {
      state.userLogado.logado = value;
      state.loggedIn = value;
    },

    // Set variáveis do Login
    SET_USER_LOGADO(state, payload) {
      if (payload) {
        console.log(payload);
        state.userLogado._id = payload.user._id;
        state.userLogado.nome = payload.user.nome;
        state.userLogado.email = payload.user.email;
        //   state.userLogado.perfil = payload.user.perfil;
        state.userLogado.token = payload.token;
        state.userLogado.emailVerified = false;
        state.userLogado.created = payload.user.createdAt;
        state.userLogado.ultimoLogin = payload.user.updatedAt;
        state.userLogado.logado = true;
        state.userLogado.isAdmin = payload.isAdmin;
        state.userLogado.tecnico = payload.tecnico;
        state.userLogado.admin = payload.admin;

        state.loggedIn = true;
        localStorage.setItem("loggedIn", true);
      }
    },

    SET_DATA_ECOW(state, value) {
      Object.assign(state.ecow, value);
    },

    SET_DATA_MONTANATURAL(state, value) {
      Object.assign(state.montaNaturalState, value);
    },

    SET_DATA_IATF(state, value) {
      Object.assign(state.IATFState, value);
    },

    CLEAR_USER(state) {
      state.userLogado = {};
      state.loggedIn = false;
      localStorage.setItem("loggedIn", false);
    },
  },
  actions: {
    async getDadosMontaNatural({ commit }) {
      try {
        const response = await MontaNaturaServices.getMontaNaturalApi();
        if (response.status == 200) {
          const result = response.data[0];

          return commit("SET_DATA_MONTANATURAL", result);
        }
        return mixinUtils.methods.messageSwalToast(
          "error",
          "Erro ao carregar os parâmetros do Banco de Dados."
        );
      } catch (error) {
        console.log(error);
        return mixinUtils.methods.messageSwalToast(
          "error",
          "Erro ao carregar os parâmetros do Banco de Dados."
        );
      }
    },

    async updateMontaNatural({ commit }, value) {
      try {
        const response = await MontaNaturaServices.updateMontaNaturalApi(value);

        if (response.status != 200) {
          let path = response.error.path;
          let message = response.error.message;
          let title = response.mensagem;
          //Função de Mixins
          return this.messageSwalToast("error", title + message + path);
        }

        commit("SET_DATA_MONTANATURAL", value);
        return mixinUtils.methods.messageSwalToast(
          "success",
          "Dados atualizados sucesso!"
        );
      } catch (error) {
        return this.updateError(error.response.data);
      }
    },

    async getDadosIATF({ commit }) {
      try {
        const response = await IatfServices.getIatfApi();
        if (response.status == 200) {
          const result = response.data[0];

          return commit("SET_DATA_IATF", result);
        }
        return mixinUtils.methods.messageSwalToast(
          "error",
          "Erro ao carregar os parâmetros do Banco de Dados."
        );
      } catch (error) {
        console.log(error);
        return mixinUtils.methods.messageSwalToast(
          "error",
          "Erro ao carregar os parâmetros do Banco de Dados."
        );
      }
    },
  },

  getters: {
    getUserLogged: (state) => state.userLogado,

    getDataEcow: (state) => state.ecow,

    getDataMontaNatural: (state) => state.montaNaturalState,

    getDataIatfRT: (state) => state.IATFState,
  },
});
