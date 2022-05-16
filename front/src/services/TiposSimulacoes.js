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

      if (response) {
        console.log(response.data);
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

  //  storeMenuApi: (dados) => {
  //   return httpAxios
  //     .post("menu/", dados, {
  //       headers: { Authorization: AuthStr },
  //     })
  //     .then(function(response) {
  //       console.log(response)
  //       return response;
  //     })
  //     .catch(function(error) {
  //       console.log(error.response);
  //       return error.response;
  //     });
  // },

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

  //TODO: fAZERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

  updateTiposSimulacoes: (id, dados) => {
    return ApiAxios().patch("/simulacao/update/".concat(id), dados)
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        swal({
          title: "Erro!",
          text: "A simulação não foi atualizada!",
          icon: "error",
        });
        return error.response;
      });
  },
};
