import axios from "axios";

const instance = axios.create({
  baseURL: "https://abdu-tiktok.herokuapp.com",
});

export default instance;
