import axios from "axios";
const API_KEY = "w0mE9NpcWepXiBZvkX3saSb3sikSWOpsw8y0CjkQ";

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = API_KEY;

axios.defaults.params = {
  client_id: API_KEY,
  orientation: "landscape",
  per_page: 10,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);

  return data;
};
