// import swal from "sweetalert";
import ApiAxios from "./ApiAxios";
// import { AuthStr } from "../Core/tokenConnectServices";

export default {
  async getDadosEcow() {
    try {
      const response = await ApiAxios().get("/ecow/find");
      console.log(response);
      if (response.status == "200") {
        return response;
      }
      return response;
    } catch (error) {
      //  console.log(error);
      return error.response;
    }
  },
};
