import Axios from "axios";
import config from "../config/config"

const api = Axios.create({ baseURL: config.openode });

export default api;