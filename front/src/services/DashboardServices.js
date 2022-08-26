import ApiAxios from "./ApiAxios";
// import { AuthStr } from "../Core/tokenConnectServices";
const URL_SIMULACOES = process.env.VUE_APP_URL_SIMULACOES;
export default {
  async getDadosAllSimulacoes() {
    try {
      const response = await ApiAxios().get(URL_SIMULACOES + "/find");
      if (response.status == "200") {
        return response;
      }
      return response;
    } catch (error) {
      console.log(error);
      return error.response;
    }
  },
};
