import ApiAxios from "./ApiAxios";
const URL_LOGIN = process.env.VUE_APP_URL_LOGIN;

export default {
  async enviarPin(email) {
    try {
      const response = await ApiAxios().post(URL_LOGIN + "/pin", email);

      return response;
    } catch (err) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
      if (err.response) {
        return err.response;
      } else err.request;
      return err;
    }
  },

  async authenticate(user) {
    try {
      const response = await ApiAxios().post(URL_LOGIN + "/authenticate", user);

      if (response) {
        let user = {
          email: response.data.data.email,
          name: response.data.data.name,
        };
        localStorage.setItem("userLogged", JSON.stringify(user));
        localStorage.setItem("token", response.data.data.token);
      }

      return response;
    } catch (err) {
      console.log(err.response);
      if (err.response) {
        console.log(err.response);

        return err.response;
      } else err.request;
      return err;
    }
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
