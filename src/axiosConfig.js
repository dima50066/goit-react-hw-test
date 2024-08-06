import axios from "axios";

const API_KEY = "w0mE9NpcWepXiBZvkX3sa-Sb3sikS-W_Opsw8y0CjkQ";
const BASE_URL = "https://api.unsplash.com";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});

export default axiosInstance;
