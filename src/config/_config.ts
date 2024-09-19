import axios from "axios";

export const API_URL = import.meta.env.VITE_API_URL;

console.log(API_URL);
export default function init() {
  axios.defaults.baseURL = API_URL;
  axios.defaults.withCredentials = false;
}
