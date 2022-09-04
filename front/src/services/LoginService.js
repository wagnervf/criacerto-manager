import ApiAxios from "./ApiAxios";
const URL_LOGIN = process.env.VUE_APP_URL_LOGIN;

export default {
  async enviarPin(email) {
    try {
      // const response = await ApiAxios().post('/login', user);
      const response = await ApiAxios().post(URL_LOGIN + "/pin", email);

      return response;
    } catch (error) {
      console.log(error);
      // this.$router.push("/");
      return error;
    }
  },

  async authenticate(user) {
    // try {
    // const response = await ApiAxios().post(URL_LOGIN + "/authenticate", user);
    // console.log(response);

    // if (response) {
    //   localStorage.setItem("userLogged", JSON.stringify(response.data.data));
    //   localStorage.setItem("token", response.data.data.token);
    // }

    // return response;
    await ApiAxios()
      .post(URL_LOGIN + "/authenticate", user)
      .then((response) => {
        return response.data;
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          return error.response.data;
        } else if (error.request) {
          console.log(error.request);
          return error.request;
        } else {
          return "Error", error.message;
        }
        //console.log(error.config);
      });
  },

  // async getListaUsuarios() {
  //   try {
  //     const response = await ApiAxios().get(URL_USERS + "/list");
  //     if (response.status == "200") {
  //       return response;
  //     }
  //     return response;
  //   } catch (error) {
  //     return error.response;
  //   };]
  // },

  // async updateUsuario(dados) {
  //   try {
  //     return await ApiAxios()
  //       .put(URL_USERS + "/update", dados)
  //       .then((response) => response)
  //       .catch((error) => error.response);
  //   } catch (erro) {
  //     console.log(erro);
  //     return erro;
  //   }
  // },
};
