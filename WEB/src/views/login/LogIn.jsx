import React from "react";
import { useState, useContext } from "react";
import { useEffect } from "react";
import {
  TextField,
  Box,
  Button,
  Alert,
  Typography,
  Divider,
} from "@mui/material";
import { UserContext } from "../../context/UsersContext";
import { useNavigate } from "react-router-dom";
import BGImage from "../../assets/mazautos-un-chico-comprando-un-auto-nuevo.jpg";

export default function LogIn() {
  const navigate = useNavigate();
  const goToPools = () => {
    navigate("/");
  };

  const goToSignUp = () => {
    navigate("/signup");
  };
  const { setUserId, setRole, saveToken, makeRequest } =
    useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    try {
      const response = await makeRequest("post", "login", user);

      if (response.status === 200) {
        const data = response.data; // Obtener los datos de la respuesta
        const token = data.token;
        const user_Id = data.userId;
        const userRole = data.userRole;
        saveToken(token);
        setUserId(user_Id);
        setRole(userRole);
        setAlert({
          status: true,
          type: "success",
          message: "Inicio de sesión exitoso.",
        });

        goToPools();
      } else {
        console.error("Error al iniciar sesión:", response.status);
      }
    } catch (error) {
      setAlert({
        status: true,
        type: "error",
        message: "Error al iniciar sesión.",
      });
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <Box
      sx={{
        minWidth: "90vw",
        minHeight: "70vh",
        display: { xs: "auto", md: "flex", lg: "flex" },
      }}
    >
      <Box
        sx={{
          width: { xs: "auto", md: "55vw", lg: "50vw" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          px: "10vw",
        }}
      >
        <Box
          sx={{
            pb: "10vh",
            px: "5vw",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "1.6rem",
              fontWeight: "600",
            }}
          >
            MazAutos
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "auto", md: "50vw", lg: "40vw" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "1.4rem",
              fontWeight: "600",
            }}
          >
            Te damos la bienvenida de nuevo
          </Typography>
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            py: 2,
          }}
        >
          <TextField
            id="email"
            label="Correo electrónico"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              my: 1,
              mx: 1,
              width: "90%",
            }}
          />
          <TextField
            id="password"
            label="Contraseña"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              my: 1,
              mx: 1,
              width: "90%",
            }}
          />
          <Button
            variant="text"
            sx={{
              textTransform: "capitalize",
              fontSize: "1rem",
              py: 2,
            }}
          >
            ¿Olvidaste tu contraseña?
          </Button>
          <Button
            variant="contained"
            type="submit"
            sx={{
              color: "white",
              width: "90%",
              height: "45px",
              borderRadius: "10px",
              marginBottom: "20px",
              py: 2,
            }}
          >
            Continuar
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {alert.status && (
              <Alert
                sx={{ width: "90%", borderRadius: "15px" }}
                severity={alert.type}
              >
                {alert.message}
              </Alert>
            )}
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              py: 3,
            }}
          >
            <Divider sx={{ width: "90%" }}>O</Divider>
          </Box>
          <Typography
            sx={{
              fontSize: "1.1rem",
            }}
          >
            ¿Aún no tienes cuenta?
            <Button
              variant="text"
              sx={{
                textTransform: "capitalize",
                fontWeight: 600,
                fontSize: "1.1rem",
              }}
              onClick={goToSignUp}
            >
              Regístrate
            </Button>
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: "100vh",
          width: { xs: "0", md: "50vw", lg: "50vw" },
          bgcolor: "blue",
          backgroundImage: `url(${BGImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          p: 0,
          m: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: { xs: "0", md: "50vw", lg: "50vw" },
            background:
              "linear-gradient(to bottom, rgba(0,145,223,0.2), rgba(0,145,223,0.9))",
          }}
        ></Box>
      </Box>
    </Box>
  );
}
LogIn;
