import ApiAxios from "./ApiAxios";
// import { AuthStr } from "../Core/tokenConnectServices";

const URL_USERS = process.env.VUE_APP_URL_USERS;

export default {
  async getListaUsuarios() {
    try {
      const response = await ApiAxios().get(URL_USERS + "/list");
      if (response.status == "200") {
        return response;
      }
      return response;
    } catch (err) {
      console.log(err);
      if (err.response) {
        return err.response;
      } else err.request;
      return err;
    }
  },

  async updateUsuario(dados) {
    try {
      const result = await ApiAxios()
        .put(URL_USERS + "/update", dados)
        .then((response) => response)
        .catch((error) => error.response);
      return result;
    } catch (err) {
      console.log(err);
      if (err.response) {
        return err.response;
      } else err.request;
      console.log(err);
      return err;
    }
  },
};
