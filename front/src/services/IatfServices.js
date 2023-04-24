import ApiAxios from "./ApiAxios";

const URL_API = process.env.VUE_APP_URL_API;
const URL_IATF = process.env.VUE_APP_URL_IATF;

const URL = URL_API + URL_IATF;

export default {
  async getIatfApi() {
    try {
      const response = await ApiAxios().get(URL.concat("/find"));

      return response;
    } catch (err) {
      console.log(err);
      if (err.response) {
        return err.response;
      } else err.request;
      return err;
    }
  },

  async updateIatfApi(dados) {
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
