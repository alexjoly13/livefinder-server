import axios from "axios";

const backendApi = axios.create({
  baseURL: "http://localhost:5555",
  withCredentials: true
});
