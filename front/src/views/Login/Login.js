
//import swal from 'sweetalert';
import LoginService from '@/services/LoginService';
//import Snackbar from "../../components/Snackbar.vue";

export default {
  name: 'LoginComponent',
  components: {
   
  },

  data() {    
    return {
      props: {
        source: String,
      },
      step: 1,
      valid: true,
      passRules: [
        v => !!v || 'A senha é obrigatória',
        v => (v && v.length > 4) || 'A senha deve ter no mínimo 4 caracteres',
      ],
      emailRules: [
        v => !!v || 'O e-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'O e-mail é inválido',
      ],
      loginForm: {
        email: null,
        senha: null,
      },
      isSubmitted: false,
      snackbar: false,
      snackbarText: "",
      color: "",
      errorColor: "red accent-2"
    };
  },

  methods: {
    // validate () {
    //   return this.$refs.form.validate()
    // },



    loginSubmitUserForm() {},

    async submitLoginUser() {
      if(this.$refs.form.validate()){
        try {
          this.isSubmitted = true;          
          await LoginService.loginUser(this.loginForm);          
          this.$router.push('/');


        } catch (error) {
        this.setMessage(
          'O endereço de e-mail ou a senha que você inseriu não é válido!',
           true, 
           this.errorColor,
        );
      
        }
      }
    },

    recuperarSenha(){
      //https://www.youtube.com/watch?v=Zwdv9RllPqU&list=PL85ITvJ7FLoiXVwHXeOsOuVppGbBzo2dp&index=3
       console.log('Ver esse vídeo');
       console.log('https://www.youtube.com/watch?v=Zwdv9RllPqU&list=PL85ITvJ7FLoiXVwHXeOsOuVppGbBzo2dp&index=3');
    },


    setMessage(message, snack, color) {
      this.snackbarText = message;
      this.snackbar = snack;
      this.color = color;      
    },
  },
};
