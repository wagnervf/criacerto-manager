import ApiAxios from "./ApiAxios";
// import { AuthStr } from "../Core/tokenConnectServices";

const URL_API = process.env.VUE_APP_URL_API;
const URL_IATF2 = process.env.VUE_APP_URL_IATF2;

const URL = URL_API + URL_IATF2;

export default {
  async getIatf_2Api() {
    try {
      const response = await ApiAxios().get(URL.concat("/find"));

      return response;
    } catch (error) {
      return error.response.data;
    }
  },

  async updateIatf_2Api(dados) {
    try {
      const result = await ApiAxios()
        .put(URL.concat("/update"), dados)
        .then((response) => response)
        .catch((error) => error);

      return result;
    } catch (erro) {
      console.log(erro);
      return erro;
    }
  },
};
