import ApiAxios from "./ApiAxios";
// import { AuthStr } from "../Core/tokenConnectServices";

const URL_API = process.env.VUE_APP_URL_API;
const URL_IATF3 = process.env.VUE_APP_URL_IATF3;

const URL = URL_API + URL_IATF3;

export default {
  async getIatf_3Api() {
    try {
      const response = await ApiAxios().get(URL.concat("/find"));

      return response;
    } catch (error) {
      return error.response.data;
    }
  },

  async updateIatf_3Api(dados) {
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
