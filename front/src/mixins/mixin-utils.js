import Vue from "vue";
import { mapState, mapActions, mapGetters } from "vuex";
import Swal from "sweetalert2";
import moment from "moment";
import LoginService from "../services/LoginService";

export default {
  created() {
    // Salva a Função de Mensagem em uma variável global
    Vue.prototype.$Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 4000,
      iconColor: "white",
      customClass: {
        popup: "colored-toast",
      },
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  },
  computed: {
    ...mapState("store_auth", ["loggedIn"]),
    ...mapState("store_plataform", ["mobile", "desktop"]),
    ...mapGetters("store", ["getUserLogged"]),
    // userEstaLogado() {
    //   return this.loggedIn;
    // },

    userLogado() {
      return LoginService.getUserStorage();
    },

    totalSimulacoesDataFiltered() {
      let total = [];
      let filtered = this.$store.getters.getSimulacoesFilteredPeriodo;
      Object.assign(total, filtered);
      return total.length;
    },

    dadosFiltroStore() {
      return this.$store.getters.getDadosFiltro;
    },

    objectComDadosFiltrados() {
      let filter = {};
      filter = {
        qtdeFilter: this.totalSimulacoesDataFiltered,
        estado: this.dadosFiltroStore.estado,
        start: this.MetFormatDateBR(this.dadosFiltroStore.start),
        end: this.MetFormatDateBR(this.dadosFiltroStore.end),
      };
      return filter;
    },

    totalTodasSimulacoes() {
      return this.$store.getters.getTotalSimulacoes;
    },
  },

  filters: {
    formatDateString(date) {
      moment.locale("pt-br");
      return date ? moment(date).format("ll") : "";
    },
    formatDateBR(date) {
      moment.locale("pt-br");
      return date ? moment(date).format("l") : "";
    },
  },

  methods: {
    ...mapActions("store_auth", ["logoutUser"]),

    messageSwalToast(type, message) {
      return Vue.prototype.$Toast.fire({
        icon: type,
        title: message,
      });
    },

    messageErrorRequestApi() {
      return this.messageSwalToast("error", "Erro ao carregar os parâmetros do Banco de Dados.");
    },

    messageSucessUpdateApi() {
      return this.messageSwalToast("success", "Dados atualizados sucesso!");
    },

    messageSaveRacaTouroApi(message) {
      return this.messageSwalToast("success", message);
    },

    messageRacaTouroApi(message) {
      return this.messageSwalToast("success", message);
    },

    orderBy(string) {
      return string.sort(function (a, b) {
        if (a.descricao > b.descricao) {
          return 1;
        }
        if (a.descricao < b.descricao) {
          return -1;
        }
        return 0;
      });
    },

    formatDate(date) {
      return date ? moment(date).format("L") : "";
    },

    formatDateTime(date) {
      moment.locale();
      return date ? moment(date).format("DD/MM/YY - h:mm a") : "";
    },

    getMediaAluguelPasto() {
      let value = 0;
      for (let index = 0; index < this.aluguelPasto.length; index++) {
        value += this.aluguelPasto[index];
      }
      this.mediaAluguelPasto = value / this.aluguelPasto.length;
    },

    getMediaTaxaMortalidade() {
      let value = 0;
      for (let index = 0; index < this.taxaMortalidade.length; index++) {
        value += this.taxaMortalidade[index];
      }
      this.mediaTaxaMortalidade = value / this.taxaMortalidade.length;
    },

    firstDayMonth() {
      const now = new Date();
      const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().slice(0, 10);
      return firstDay;
    },

    lastDayMonth() {
      const now = new Date();
      const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().slice(0, 10);
      return lastDay;
    },

    formatarMoedaReal(value) {
      let val = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      return val != "R$ NaN" ? val : 0;
    },

    ordenaPorQntdeEstados(estados) {
      return Object.entries(estados)
        .sort(([, a], [, b]) => b - a)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    },

    MetFormatDateBR(date) {
      moment.locale("pt-br");
      return date ? moment(date).format("l") : "";
    },

    separaObjetos(value) {
      let obj = {};
      value.forEach((x) => {
        obj[x] = (obj[x] || 0) + 1;
      });
      return obj;
    },

    separaSimulacaoPorMes(simulacoes) {
      let meses = {
        jan: 0,
        fev: 0,
        mar: 0,
        abr: 0,
        mai: 0,
        jun: 0,
        jul: 0,
        ago: 0,
        set: 0,
        out: 0,
        nov: 0,
        dez: 0,
      };

      simulacoes.forEach((value) => {
        let mes = moment(value.created).format("M");
        if (mes == "1") meses.jan += 1;
        if (mes == "2") meses.fev += 1;
        if (mes == "3") meses.mar += 1;
        if (mes == "4") meses.abr += 1;
        if (mes == "5") meses.mai += 1;
        if (mes == "6") meses.jun += 1;
        if (mes == "7") meses.jul += 1;
        if (mes == "8") meses.ago += 1;
        if (mes == "9") meses.set += 1;
        if (mes == "10") meses.out += 1;
        if (mes == "11") meses.nov += 1;
        if (mes == "12") meses.dez += 1;
      });

      return Object.values(meses);
    },

    tratarDadosResponse(response, commit) {
      if (response.status == 200) {
        const result = response.data.data;
        this.$store.commit(commit, result);

        this.messageSwalToast("success", response.data.message);

        return result;
      }

      return this.messageSwalToast("error", response.data.message);
    },
  },
};
