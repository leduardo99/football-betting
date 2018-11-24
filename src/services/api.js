import Axios from "axios";

const api = Axios.create({ baseURL: "http://api-betting.herokuapp.com" });

export default api;