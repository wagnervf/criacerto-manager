// import swal from "sweetalert";
import ApiAxios from "./ApiAxios";
// import { AuthStr } from "../Core/tokenConnectServices";

const apiMonta = "/montanatural/";

export default {
  async getMontaNaturalApi() {
    try {
      const response = await ApiAxios().get(apiMonta.concat("find"));

      return response;
    } catch (error) {
      //  console.log(error);

      console.error(error);
      return error.response.data;
    }
  },

  async updateMontaNaturalApi(dados) {
    try {
      const result = await ApiAxios()
        .put(apiMonta.concat("update"), dados)
        .then((response) => response)
        .catch((error) => error);

      return result;
    } catch (erro) {
      console.log(erro);
      return erro;
    }
  },
};
