import Axios from "axios";

const api = Axios.create({ baseURL: "https://api-betting.herokuapp.com" });

export default api;