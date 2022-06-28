import ApiAxios from "./ApiAxios";
// import { AuthStr } from "../Core/tokenConnectServices";

const apiIATF = "/iatf/";

export default {
  async getIatfApi() {
    try {
      const response = await ApiAxios().get(apiIATF.concat("find"));

      return response;
    } catch (error) {
      return error.response.data;
    }
  },

  async updateIatfApi(dados) {
    try {
      const result = await ApiAxios()
        .put(apiIATF.concat("update"), dados)
        .then((response) => response)
        .catch((error) => error);

      return result;
    } catch (erro) {
      console.log(erro);
      return erro;
    }
  },
};
