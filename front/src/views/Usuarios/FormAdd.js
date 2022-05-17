import UsuariosServices from "@/services/UsuariosServices";
import Snackbar from "../../components/Snackbar.vue";
//import bcrypt from 'bcryptjs';

export default {
  props: {
    dialog: {
      default: false,
    },
    usuarioEditar:{
      default: {}
    }
  },
  components: {
    Snackbar,
  },

  data() {
    return {
      ativo: true,
      perfis: ["Técnico", "Administrador"],
      desserts: [],
      show1: false,
      formRegister: {
        nome: "wagner",
        email: "wagner@gmail.com",        
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
          (v && v.length >= 6) || "A senha deve conter no mínimo 6 caracteres",
      ],

      snackbar: false,
      snackbarText: "",
      color: "",
      editar:false
    };
  },

  // created() {},

   computed: {
     erros(){
      return this.errosEmail.length;
     },

     isEdit(){
       return this.editar;
     },


   },

   watch: {
    'formRegister.email'(){
      if(!this.valid){
        this.errosEmail = [];
      }      
    },

    usuarioEditar(value){
     this.editar = true;

      this.formRegister = {
        nome: value.nome,
        email: value.email,
       // senha: value.senha,
        perfil: value.perfil,
        local: value.local,
      };
      
    }
   },

  methods: {
    
    validate() {
      if (this.$refs.form.validate()) {
        
        if(this.isEdit){
          this.updateUsuario();
        } else {
          this.salvarUsuario();
        }
        
      }
    },

    reset() {
      this.$refs.form.reset();
      this.formRegister = {};
      this.errosEmail = [];
      this.snackbar = false;
      this.editar = false;
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

    updateUsuario(){
      console.log(this.formRegister)
    },

    setMessage(message, snack, color) {
      this.snackbarText = message;
      this.snackbar = snack;
      this.color = color;      
    },


   // decodeSenha(){
  //    let v = bcrypt.getRounds('$2a$06$q2rKyAa5XvPxvDwftvqodegd7fbhT8JV3NumW80RXm0yNYrST6pti');
 //     console.log(v);
 //   },

    
  
  },
};
