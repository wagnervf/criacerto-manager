import ApiAxios from "./ApiAxios";
// import { AuthStr } from "../Core/tokenConnectServices";

const URL_USERS = process.env.VUE_APP_URL_USERS;

export default {
  async getListaUsuarios() {
    try {
      const response = await ApiAxios().get(URL_USERS + "/list");
      if (response.status == "200") {
        return response;
      }
      return response;
    } catch (error) {
      return error.response;
    }
  },

  async updateUsuario(dados) {
    try {
      return await ApiAxios()
        .put(URL_USERS + "/update", dados)
        .then((response) => response)
        .catch((error) => error.response);
    } catch (erro) {
      console.log(erro);
      return erro;
    }
  },

  // deleteMenuApi: (id) => {
  //   return httpAxios
  //     .delete("menu/".concat(id), {
  //       headers: { Authorization: AuthStr },
  //     })
  //     .then(function(response) {
  //       return response;
  //     })
  //     .catch(function(error) {
  //       return error.response;
  //     });
  // },

  // async getContractsMontaNatural() {
  //   try {
  //     const response = await Api().get("/contracts/find");

  //     if (response) {
  //       console.log(response.data);
  //     }

  //     return response.data;
  //   } catch (error) {
  //     swal({
  //       title: "Oops!",
  //       text: "Alguma coisa deu errado aqui!",
  //       icon: "error",
  //     });
  //     this.$router.push("/");
  //   }
  // },

  // //  storeMenuApi: (dados) => {
  // //   return httpAxios
  // //     .post("menu/", dados, {
  // //       headers: { Authorization: AuthStr },
  // //     })
  // //     .then(function(response) {
  // //       console.log(response)
  // //       return response;
  // //     })
  // //     .catch(function(error) {
  // //       console.log(error.response);
  // //       return error.response;
  // //     });
  // // },

  //  async saveTiposSimulacoes(dados) {
  //   try {
  //     const response = await Api().post("/simulacao/save", dados);
  //     if (response) {
  //       console.log(response.data);
  //     }

  //     return response;
  //   } catch (error) {
  //     swal({
  //       title: "Oops!",
  //       text: "Alguma coisa deu errado aqui!",
  //       icon: "error",
  //     });
  //    // this.$router.push("/");
  //   }
  // },

  // //TODO: fAZERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

  // updateTiposSimulacoes: (id, dados) => {
  //   return Api().patch("/simulacao/update/".concat(id), dados)
  //     .then(function(response) {
  //       return response;
  //     })
  //     .catch(function(error) {
  //       swal({
  //         title: "Erro!",
  //         text: "A simulação não foi atualizada!",
  //         icon: "error",
  //       });
  //       return error.response;
  //     });
  // },
};
