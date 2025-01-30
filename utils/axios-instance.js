import axios from "axios";
// const runtimeConfig = useRuntimeConfig();

const axiosInstance = axios.create({
  // baseURL: runtimeConfig.public.apiBaseUrl ,
  baseURL: "http://localhost:81",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth:access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
