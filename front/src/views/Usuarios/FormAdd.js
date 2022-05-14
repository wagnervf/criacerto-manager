//import UsuariosServices from "@/services/ServicesCadastrarUsuaio";
export default {
  data: () => ({
    props: {
      
    },

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
    valid: true,

    nameRules: [
      v => !!v || 'Nome é obrigatório',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    emailRules: [
      v => !!v || 'E-mail é obrigatório',
      v => /.+@.+\..+/.test(v) || 'E-mail não é válido',
    ],

   passwordRules: [
      v => !!v || 'A senha é obrigatória',
      v => (v && v.length <= 6) || 'A senha deve conter no mínimo 6 caracteres',
    ],
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

    formTitle() {
      return this.editedIndex === -1 ? "Novo Usuário" : "Editar Usuário";
    },
  },

  watch: {
   
  },

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
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
      /// Envia false para compondente Pai fechar o modal.
      this.$emit("fecharDialog", false);
      this.$refs.form.resetValidation()
    },

   


    //  async submitRegisterUser() {
    //   try {
    //     this.isSubmitted = true;

    //     this.$v.$touch();
    //     if (this.$v.$invalid) {
    //       swal({
    //         title: "Oops!",
    //         text: "Você precisa incluir todos os campos obrigatórios",
    //         icon: "error"
    //       });
    //       return;
    //     }

    //     await RegisterService.registerNewUser(this.registerForm);
    //     this.$router.push("/");
    //   } catch (error) {
    //     swal({
    //       title: "Oops!",
    //       text: "Alguma coisa deu errado aqui!",
    //       icon: "error"
    //     });
    //   }
    // }
  },
};
