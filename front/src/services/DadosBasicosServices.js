// import swal from "sweetalert";
import ApiAxios from "./ApiAxios";
// import { AuthStr } from "../Core/tokenConnectServices";

const apiDadosBasicos = "/dadosbasicos/";

export default {
  async getRacasTourosApi() {
    try {
      const response = await ApiAxios().get(
        apiDadosBasicos.concat("racastouro/find")
      );

      return response;
    } catch (error) {
      //  console.log(error);

      console.error(error);
      return error.response.data;
    }
  },

  async updateRacasTourosApi(dados) {
    try {
      const result = await ApiAxios()
        .put(apiDadosBasicos.concat("racastouro/update"), dados)
        .then((response) => response)
        .catch((error) => error);

      return result;
    } catch (erro) {
      console.log(erro);
      return erro;
    }
  },

  async saveRacasTourosApi(dados) {
    try {
      const response = await ApiAxios()
        .post(apiDadosBasicos.concat("racastouro/save"), dados)
        .then((response) => response)
        .catch((error) => error);

      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  async deleteRacasTourosApi(id) {
    try {
      const result = await ApiAxios()
        .delete(apiDadosBasicos.concat("racastouro/delete"), { params: { id } })
        .then((response) => response)
        .catch((error) => error.response);

      console.log(result);

      return result;
    } catch (erro) {
      console.log(erro);
      return erro;
    }
  },
};
