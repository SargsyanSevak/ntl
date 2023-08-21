import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "http://localhost:4000/",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = Cookies.get("Bearer");
  return config;
});

export default instance;
