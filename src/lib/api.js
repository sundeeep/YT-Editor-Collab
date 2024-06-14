import axios from "axios";
import { DEV_API_URL, PROD_API_URL } from "./urls";

const axiosInstance = axios.create({
  baseURL: DEV_API_URL,
  withCredentials: true,
});

export default axiosInstance;
