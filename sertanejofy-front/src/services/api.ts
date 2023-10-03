import axios from "axios";

export const api = axios.create({
  baseURL: "http://back:3001",
  timeout: 5000,
});
