import axios from "axios";
const customFetch = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  method: ["get", "patch"],
  headers: { "Content-Type": "application/json" },
});
export default customFetch;
