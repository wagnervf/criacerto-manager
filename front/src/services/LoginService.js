import ApiAxios from "./ApiAxios";
const URL_LOGIN = process.env.VUE_APP_URL_LOGIN;

export default {
  async enviarPin(email) {
    try {
      const response = await ApiAxios().post(URL_LOGIN + "/pin", email);

      return response;
    } catch (err) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
      if (err.response) {
        return err.response;
      } else err.request;
      return err;
    }
  },

  async authenticate(user) {
    try {
      const response = await ApiAxios().post(URL_LOGIN + "/authenticate", user);

      //Salvar no Storage
      this.setUserStorage(response.data.data);

      return response;
    } catch (err) {
      console.log(err.response);
      if (err.response) {
        console.log(err.response);

        return err.response;
      } else err.request;
      return err;
    }
  },

  setUserStorage(dados) {
    let user = this.mapedUser(dados);
    return localStorage.setItem("user", JSON.stringify(user));
  },

  getUserStorage() {
    const dados = JSON.parse(localStorage.getItem("user"));
    if (dados == null) return false;

    let user = this.mapedUser(dados);
    return user;
  },

  // Limpar Storage
  logout() {
    localStorage.removeItem("user");
    return localStorage.clear();
  },

  mapedUser(payload) {
    let user = {
      _id: payload._id,
      email: payload.email,
      name: payload.name,
      token: payload.token,
      admin: payload.admin,
      logado: true,
      changed: payload.changed,
      dateExpired: this.expiredStorage(),
    };

    return user;
  },

  expiredStorage() {
    const now = new Date();

    // 1 dia para expirar o token
    let expiry = now.getTime() + 86400000;

    return expiry;
  },
};
