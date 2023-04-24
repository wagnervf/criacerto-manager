import swal from "sweetalert";
import ApiAxios from "./ApiAxios";

export default {
  async getTiposSimulacoes() {
    try {
      const response = await ApiAxios().get("/simulacao/find");

      if (response) {
        //  console.log(response.data);
      }

      return response.data;
    } catch (error) {
      swal({
        title: "Oops!",
        text: "Alguma coisa deu errado aqui!",
        icon: "error",
      });
      this.$router.push("/");
    }
  },

  async getContractsMontaNatural() {
    try {
      const response = await ApiAxios().get("/contracts/find");

      return response.data;
    } catch (error) {
      swal({
        title: "Oops!",
        text: "Alguma coisa deu errado aqui!",
        icon: "error",
      });
      this.$router.push("/");
    }
  },

  async saveTiposSimulacoes(dados) {
    try {
      const response = await ApiAxios().post("/simulacao/save", dados);
      if (response) {
        console.log(response.data);
      }

      return response;
    } catch (error) {
      swal({
        title: "Oops!",
        text: "Alguma coisa deu errado aqui!",
        icon: "error",
      });
      // this.$router.push("/");
    }
  },

  updateTiposSimulacoes: (id, dados) =>
    ApiAxios()
      .patch("/simulacao/update/".concat(id), dados)
      .then((response) => response)
      .catch((error) => {
        swal({
          title: "Erro!",
          text: "A simulação não foi atualizada!",
          icon: "error",
        });
        return error.response;
      }),
};
