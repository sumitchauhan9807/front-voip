// api.js
import axios from "axios";
import {production} from 'src/env'
export const baseURL = production ? 'https://backend.724voip.net/api' : "http://localhost:1337/api" 
export const assetsURL = production ? 'https://backend.724voip.net' : "http://localhost:1337"
export const api = axios.create({
  baseURL: baseURL
});