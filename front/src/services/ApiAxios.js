import axios from "axios";

const URL_API = process.env.VUE_APP_URL_API;

export default () =>
  axios.create({
    // 'baseURL' do Back-End -> fará a comunicação do Front com o Back
    baseURL: URL_API,
  });
