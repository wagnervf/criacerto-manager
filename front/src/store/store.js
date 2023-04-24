import Vue from "vue";
import Vuex from "vuex";
import MontaNaturaServices from "@/services/MontaNaturaServices";
import IatfServices from "@/services/IatfServices";
import Iatf_2Services from "@/services/Iatf_2Services";
import Iatf_3Services from "@/services/Iatf_3Services";
import mixinUtils from "../mixins/mixin-utils";
import DashboardService from "@/services/DashboardServices";

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
      name: "",
      email: "",
      token: "",
      changed: "",
      admin: false,
      logado: "",
      manager: false,
    },
    simulacoes: {},
    totalSimulacoes: {},
    montaNaturalState: {},
    IATFState: {},
    IATF_2State: {},
    IATF_3State: {},
    racasTouros: [],
    filtroSelecionado: {},
    simulacoeFilteredPeriodo: [],
    estadosExistentes: {},
    tiposSimuacoesSeparadas: {},
    openSideBar: null,
  },
  mutations: {
    SET_SIDEBAR_CUSTOM(state, payload) {
      state.openSideBar = payload;
    },

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

    SET_DATA_SIMULACOES(state, value) {
      Object.assign(state.simulacoes, value);

      let total = [];
      let filtered = value;
      Object.assign(total, filtered);
      state.totalSimulacoes = total.length;
    },

    SET_DATA_MONTANATURAL(state, value) {
      Object.assign(state.montaNaturalState, value);
    },

    SET_DATA_IATF(state, value) {
      Object.assign(state.IATFState, value);
    },
    SET_DATA_IATF_2(state, value) {
      Object.assign(state.IATF_2State, value);
    },
    SET_DATA_IATF_3(state, value) {
      Object.assign(state.IATF_3State, value);
    },
    SET_DATA_RACAS_TOURO(state, value) {
      Object.assign(state.racasTouros, value);
    },

    SET_DADOS_FILTRADOS_PERIODO(state, value) {
      state.simulacoeFilteredPeriodo = {};
      Object.assign(state.simulacoeFilteredPeriodo, value);
    },

    SET_ESTADO_EXISTENTES(state, value) {
      state.estadosExistentes = [];
      Object.assign(state.estadosExistentes, value);
    },

    SET_DADOS_DO_FILTRADO(state, value) {
      state.filtroSelecionado = {};
      Object.assign(state.filtroSelecionado, value);
    },

    SET_TIPOS_SIMULACOES_SEPARADAS(state, value) {
      state.tiposSimuacoesSeparadas = {};
      Object.assign(state.tiposSimuacoesSeparadas, value);
    },
  },
  actions: {
    async getAllDataSimulacoesApi({ commit }) {
      try {
        const response = await DashboardService.getDadosAllSimulacoes();
        if (response.status == 200) {
          if (response.data[0]._id) {
            delete response.data[0]._id;
          }
          const result = response.data;

          return commit("SET_DATA_SIMULACOES", result);
        } else {
          return mixinUtils.methods.messageErrorRequestApi();
        }
      } catch (error) {
        console.log(error);
      }
    },

    async updateMontaNatural({ commit }, value) {
      try {
        const response = await MontaNaturaServices.updateMontaNaturalApi(value);

        if (response.status != 200) {
          //Função de Mixins
          return mixinUtils.methods.messageSwalToast("error", response.data.message);
        }

        commit("SET_DATA_MONTANATURAL", value);
        return mixinUtils.methods.messageSucessUpdateApi();
      } catch (error) {
        return mixinUtils.methods.updateError(error.data.message);
      }
    },

    async updateDadosIATF({ commit }, value) {
      try {
        const response = await IatfServices.updateIatfApi(value);

        if (response.status != 200) {
          let path = response.error.path;
          let message = response.error.message;
          let title = response.mensagem;
          //Função de Mixins
          return mixinUtils.methods.messageSwalToast("error", title + message + path);
        }

        console.log("updateDadosIATF");

        commit("SET_DATA_IATF", value);
        return mixinUtils.methods.messageSucessUpdateApi();
      } catch (error) {
        return mixinUtils.methods.updateError(error.response.data);
      }
    },

    async updateDados_2IATF({ commit }, value) {
      try {
        const response = await Iatf_2Services.updateIatf_2Api(value);

        if (response.status != 200) {
          let path = response.error.path;
          let message = response.error.message;
          let title = response.mensagem;
          //Função de Mixins
          return mixinUtils.methods.messageSwalToast("error", title + message + path);
        }

        commit("SET_DATA_IATF_2", value);
        return mixinUtils.methods.messageSucessUpdateApi();
      } catch (error) {
        return mixinUtils.methods.updateError(error.response.data);
      }
    },

    async updateDados_3IATF({ commit }, value) {
      try {
        const response = await Iatf_3Services.updateIatf_3Api(value);

        if (response.status != 200) {
          let message = response.mensagem;
          //Função de Mixins
          return mixinUtils.methods.messageSwalToast("error", message);
        }

        commit("SET_DATA_IATF_3", value);
        return mixinUtils.methods.messageSucessUpdateApi();
      } catch (error) {
        return mixinUtils.methods.updateError(error.response.data);
      }
    },
  },

  getters: {
    getUserLogged: (state) => state.userLogado,

    getDataSimulacoes: (state) => state.simulacoes,

    getTotalSimulacoes: (state) => state.totalSimulacoes,

    getDataMontaNatural: (state) => state.montaNaturalState,

    getDataIatfRT: (state) => state.IATFState,

    getDataIatf_2RT: (state) => state.IATF_2State,

    getDataIatf_3RT: (state) => state.IATF_3State,

    getRacasTouro: (state) => state.racasTouros,

    getSimulacoesFilteredPeriodo: (state) => state.simulacoeFilteredPeriodo,

    getEstadosExistentes: (state) => state.estadosExistentes,

    // getEstadoFiltrado: (state) => state.estadoFiltrado,

    getDadosFiltro: (state) => state.filtroSelecionado,

    getTiposSimulacoesSeparadas: (state) => state.tiposSimuacoesSeparadas,
  },
});
