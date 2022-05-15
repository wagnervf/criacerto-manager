//import UsuariosServices from "@/services/ServicesCadastrarUsuaio";
export default {
  props: {
    dialog: {
      default: false,
    },
  },

  data() {
    return {
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
      snackbarText: '',
      timeout: 2000,
    };
  },

  // created() {},

  // computed: {},

  // watch: {},

  methods: {
    validate() {
      this.$refs.form.validate();
      console.log(this.$refs.form)
      this.snackbarText = 'Salvo com sucesso!';
      this.snackbar= true;
    },
    reset() {
      this.$refs.form.reset();
    },

    // editItem(item) {
    //   this.editedIndex = this.desserts.indexOf(item);
    //   this.editedItem = Object.assign({}, item);
    //   this.dialog = true;
    // },

    // deleteItem(item) {
    //   this.editedIndex = this.desserts.indexOf(item);
    //   this.editedItem = Object.assign({}, item);
    //   this.dialogDelete = true;
    // },

    // deleteItemConfirm() {
    //   this.desserts.splice(this.editedIndex, 1);
    //   this.closeDelete();
    // },

    close() {
      /// Envia false para compondente Pai fechar o modal.
      /// No componente Pai colocaria @fecharDialog
      //this.$emit("fecharDialog", false);
      
      // Atualizar o props e fechálo
      this.$emit('update:dialog', false);
      
      this.$refs.form.resetValidation();
    },
  

   async salvarUsuario() {
    try {
      this.isSubmitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        
        return;
      }

    //  await RegisterService.registerNewUser(this.registerForm);
      this.$router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

},
};
