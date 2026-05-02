// api.js
import axios from "axios";
const production = false
export const api = axios.create({
  baseURL: production ? 'https://backend.724voip.net/api/' : "http://localhost:1337/api/"
});