import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

const ContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isActive, setIsActive] = useState(!!localStorage.getItem("token"));

  const [user, setUser] = useState({});

  const saveToken = (newToken, idUser, roleUser) => {
    setToken(newToken);
    setUserId(idUser);
    setRole(roleUser);
    localStorage.setItem("token", newToken);
    localStorage.setItem(userId, idUser);
    localStorage.setItem(role, roleUser);
    setIsActive(true);
  };

  const removeToken = () => {
    setToken(null);
    setUserId(null);
    setRole(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    setIsActive(false);
  };

  const makeRequest = async (method, endPoints, data = null) => {
    const axiosInstance = axios.create({
      baseURL: "https://orchestrator-wywq.onrender.com",
      headers: {
        "Content-Type": "application/json",
      },
    });

    axiosInstance.interceptors.request.use(
      (config) => {
        const currentToken = token;
        if (currentToken) {
          config.headers["Authorization"] = `Bearer ${currentToken}`;
        }
        if (role) {
          config.headers["Role"] = role;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    console.log("Método:", method); // Log para verificar el método
    console.log("URL:", endPoints); // Log para verificar la URL
    console.log("Datos:", data); // Log para verificar los datos enviados

    return axiosInstance[method](endPoints, data);
  };

  return (
    <UserContext.Provider
      value={{
        token,
        saveToken,
        removeToken,
        userId,
        setUserId,
        role,
        setRole,
        makeRequest,
        isActive,
        setIsActive,
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
