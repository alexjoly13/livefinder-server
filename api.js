import axios from "axios";

const backendApi = axios.create({
  baseURL: "http://localhost:5555",
  withCredentials: true
});

export function getTopArtist() {
  return backendApi.get("/api/userInfo").catch(errorHandler);
}
