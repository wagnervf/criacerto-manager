import UsuariosServices from "@/services/UsuariosServices";
import Snackbar from "../../components/Snackbar.vue";
export default {
  props: {
    dialog: {
      default: false,
    },
  },
  components: {
    Snackbar,
  },

  data() {
    return {
      ativo: true,
      perfis: ["Técnico", "Administrador"],
      desserts: [],
      editedIndex: -1,
      show1: false,
      formRegister: {
        nome: "wagner",
        email: "wagner@gmail.com",
        senha: "12345",
        perfil: "Técnico",
        local: "Ufms",
      },
      errosEmail:[],

      valid: false,

      nameRules: [
        (v) => !!v || "Nome é obrigatório",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail é obrigatório",
        (v) => /.+@.+\..+/.test(v) || "E-mail não é válido",
      ],

      passwordRules: [
        (v) => !!v || "A senha é obrigatória",
        (v) =>
          (v && v.length <= 6) || "A senha deve conter no mínimo 6 caracteres",
      ],

      snackbar: false,
      snackbarText: "",
      color: "",
    };
  },

  // created() {},

   computed: {
     erros(){
      return this.errosEmail.length;
     }

     

   },

  // watch: {},

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        // console.log(this.formRegister)
        this.salvarUsuario();
      }
    },

    reset() {
      this.$refs.form.reset();
      this.formRegister = {};
      this.errosEmail = [];
      this.snackbar = false;

    },

    close() {
      /// Envia false para compondente Pai fechar o modal.
      /// No componente Pai colocaria @fecharDialog
      //this.$emit("fecharDialog", false);

      // Atualizar o props e fechá-lo
      // Notificando o componente PAI que deve adicionar um false
      this.$emit("update", false);
      this.reset();
      

    },

    async salvarUsuario() {
      try {
        let response = await UsuariosServices.storeUsuario(this.formRegister);

        if (response.status != 201) {
          if(response.data.type == 'email'){
          return this.errosEmail.push(response.data.message)
          }
         
        }
        
        return this.setMessage("Salvo com sucesso!", true, "success");
        
      } catch (error) {
        return this.setMessage(error.data.message, true, "error");
      }
    },

    setMessage(message, snack, color) {
      this.snackbarText = message;
      this.snackbar = snack;
      this.color = color;
    },
  },
};
