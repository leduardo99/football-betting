import Axios from "axios";
import config from "../config/config"

const api = Axios.create({ baseURL: config.host });

export default api;