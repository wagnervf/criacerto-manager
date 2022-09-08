// import swal from "sweetalert";
import ApiAxios from "./ApiAxios";
// import { AuthStr } from "../Core/tokenConnectServices";
const URL_API = process.env.VUE_APP_URL_API;

export default {
  async getRacasTourosApi() {
    try {
      const response = await ApiAxios().get(URL_API.concat("/racastouro/find"));

      return response;
    } catch (err) {
      console.log(err);
      if (err.response) {
        return err.response;
      } else err.request;
      return err;
    }
  },

  async updateRacasTourosApi(dados) {
    try {
      const result = await ApiAxios()
        .put(URL_API.concat("/racastouro/update"), dados)
        .then((response) => response)
        .catch((error) => error.response.data);

      return result;
    } catch (err) {
      console.log(err);
      if (err.response) {
        return err.response;
      } else err.request;
      return err;
    }
  },

  async saveRacasTourosApi(dados) {
    try {
      const response = await ApiAxios()
        .post(URL_API.concat("/racastouro/save"), dados)
        .then((response) => response)
        .catch((error) => error.response.data);

      return response;
    } catch (err) {
      console.log(err);
      if (err.response) {
        return err.response;
      } else err.request;
      return err;
    }
  },

  async deleteRacasTourosApi(id) {
    try {
      const response = await ApiAxios()
        .delete(URL_API.concat("/racastouro/delete"), { params: { id } })
        .then((response) => response)
        .catch((error) => error.response.data);

      return response;
    } catch (err) {
      console.log(err);
      if (err.response) {
        return err.response;
      } else err.request;
      return err;
    }
  },
};
