//import swal from 'sweetalert';
import ApiAxios from "./ApiAxios";

export default {
  async loginUser(user) {
    try {
      // const response = await ApiAxios().post('/login', user);
      const response = await ApiAxios().post("/user/authenticate", user);

      if (response) {
        localStorage.setItem('userLogged', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
        return response;
      }
   
 

    } catch (error) {
      console.log(error);
      this.$router.push("/");
      return error;
    }
  },
};
