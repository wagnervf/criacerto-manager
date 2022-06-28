import Vue from "vue";
import { mapState, mapActions, mapGetters } from "vuex";
import Swal from "sweetalert2";

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
  },
};
