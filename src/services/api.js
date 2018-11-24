import Axios from "axios";

const api = Axios.create({ baseURL: "https://api-football-mjyulbtsgj.now.sh" });

export default api;