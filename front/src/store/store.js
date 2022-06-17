import Vue from "vue";
import Vuex from "vuex";

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
      state.ecow = { ...value };
      // window.dispatchEvent(new Event('resize'))
    },

    CLEAR_USER(state) {
      state.userLogado = {};
      state.loggedIn = false;
      localStorage.setItem("loggedIn", false);
    },

  },
  actions: {
    
  },
  modules: {},

  getters: {
    getUserLogged: (state) => state.userLogado,

    getDataEcow: (state) => state.ecow,
  },
});
