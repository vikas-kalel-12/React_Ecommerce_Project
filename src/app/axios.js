import axios from "axios";
import { TOKEN } from "../utilities/CONSTANTS";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_DUMMY, // Ensure you have the correct environment variable
  timeout: 10000, // Set timeout for requests
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    if (config) {
      const token = localStorage.getItem(TOKEN);
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    // Handle request errors
    console.error("Request Error:", error.message);
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Return the response data
    return response.data;
  },
  (error) => {
    // Just propagate the error, do not handle it here
    return Promise.reject(error);
  }
);

export default axiosInstance;
