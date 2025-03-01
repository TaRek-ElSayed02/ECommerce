import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://json-server-ten-gold.vercel.app", // Your deployed API
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
