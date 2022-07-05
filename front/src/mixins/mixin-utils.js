import Vue from "vue";
import { mapState, mapActions, mapGetters } from "vuex";
import Swal from "sweetalert2";
import moment from "moment";

export default {
  computed: {
    ...mapState("store_auth", ["loggedIn"]),
    ...mapState("store_plataform", ["mobile", "desktop"]),
    ...mapGetters("store", ["getUserLogged"]),
    // userEstaLogado() {
    //   return this.loggedIn;
    // },

    userLogado() {
      return this.$store.getters.getUserLogged;
    },
  },

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

  methods: {
    ...mapActions("store_auth", ["logoutUser"]),

    messageSwalToast(type, message) {
      return Vue.prototype.$Toast.fire({
        icon: type,
        title: message,
      });
    },

    messageErrorRequestApi() {
      return this.messageSwalToast(
        "error",
        "Erro ao carregar os parâmetros do Banco de Dados."
      );
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

    getMediaAluguelPasto() {
      let value = 0;
      for (let index = 0; index < this.aluguelPasto.length; index++) {
        value += this.aluguelPasto[index];
      }
      this.mediaAluguelPasto = value / this.aluguelPasto.length;
    },

    getMediaValorVenda() {
      let value = 0;
      for (let index = 0; index < this.valorVenda.length; index++) {
        value += this.valorVenda[index];
      }
      this.mediaValorVenda = value / this.valorVenda.length;
    },

    getMediaTaxaMortalidade() {
      let value = 0;
      for (let index = 0; index < this.taxaMortalidade.length; index++) {
        value += this.taxaMortalidade[index];
      }
      this.mediaTaxaMortalidade = value / this.taxaMortalidade.length;
    },
  },
};
