import axios from "axios";

// Configurar la instancia de Axios
const axiosInstance = axios.create({
  baseURL: "http://localhost:9080", // Base URL de tu API
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para añadir el token a cada solicitud
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Obtén el token de donde lo almacenes
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
