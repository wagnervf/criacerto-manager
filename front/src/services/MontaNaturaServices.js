// import swal from "sweetalert";
import ApiAxios from "./ApiAxios";
// import { AuthStr } from "../Core/tokenConnectServices";

const URL_API = process.env.VUE_APP_URL_API;
const URL_MONTANATURAL = process.env.VUE_APP_URL_MONTANATURAL;

const URL = URL_API + URL_MONTANATURAL;

export default {
  async getMontaNaturalApi() {
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

  async updateMontaNaturalApi(dados) {
    try {
      const response = await ApiAxios()
        .put(URL.concat("/update"), dados)
        .then((response) => response)
        .catch((error) => error);
      console.log(response);

      return response;
    } catch (err) {
      if (err.response) {
        return err.response;
      } else err.request;
      return err;
    }
  },
};
