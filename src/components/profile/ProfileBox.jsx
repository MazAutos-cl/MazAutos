import React, { useContext, useEffect } from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../context/UsersContext";

const ProfileBox = () => {
  const { makeRequest, userId, user, setUser } = useContext(UserContext);
  const { id } = useParams();
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    enterprise: "",
    address: "",
    district: "",
    city: "",
    country: "",
  });

  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [alert, setAlert] = useState({
    alert: false,
    status: "",
    message: "",
  });

  useEffect(() => {
    makeRequest("get", `users/${userId}`)
      .then((response) => {
        if (response.status === 200) {
          setUserData(response.data.data);
          console.log(response.data);
          console.table(userData);
        } else {
          throw new Error("Usuario no encontrado. Regístrate hoy.");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id, makeRequest]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [bgInput, setBgInput] = useState({
    edit: false,
    color: "#eceff1",
    changes: true,
  });

  const [passwordChange, setPasswordChange] = useState({
    show: false,
    display: "none",
  });

  const [showSaveButton, setShowSetButton] = useState({
    show: false,
    display: "none",
  });

  const [showEditButton, setShowEditButton] = useState({
    edite: false,
    display: "block",
  });

  const handleEdit = (e) => {
    setBgInput((prevState) => ({
      ...prevState,
      edit: !prevState.edit,
      color: prevState.edit ? "#eceff1" : "#fff",
      changes: !prevState.changes,
    }));

    setShowSetButton((prevState) => ({
      ...prevState,
      show: !prevState.show,
      display: prevState.show ? "none" : "block",
    }));
    setShowEditButton((prevState) => ({
      ...prevState,
      show: !prevState.show,
      display: prevState.show ? "block" : "none",
    }));
    return;
  };

  const handleEditPassword = (e) => {
    setPasswordChange((prevState) => ({
      ...prevState,
      show: !prevState.show,
      display: prevState.show ? "none" : "flex",
    }));
  };

  const [emailError, setEmailError] = useState({
    emailError: false,
    message: "",
  });
  const [phoneError, setPhoneError] = useState({
    phoneError: false,
    message: "",
  });
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const phoneValidation = (phone) => {
    const regex = /^9\d{8}$/;
    return regex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

    if (!phoneValidation(userData.phone)) {
      setPhoneError({
        phoneError: true,
        message: `Debe ser un formato válido, ej: "987546321"`,
      });
      hasError = true;
    } else {
      setPhoneError({
        phoneError: false,
        message: "",
      });
    }

    if (hasError) {
      setAlert({
        alert: true,
        status: "error",
        message: "Verifica los datos ingresados",
      });
      return;
    }

    try {
      const response = await makeRequest("patch", `/users/${id}`, userData);
      if (response.status === 200) {
        setAlert({
          alert: true,
          status: "success",
          message: "Se han guardado los cambios",
        });
      } else {
        throw new Error("Error al actualizar el usuario");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      setAlert({
        alert: true,
        status: "error",
        message: "No se pudo actualizar el usuario",
      });
    }
    handleEdit();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#eceff1",
        justifyContent: "center",
        my: 0,
        p: 2,
      }}
    >
      <Box
        sx={{
          my: 4,
          pt: 4,
          mx: 4,
          width: { xs: "90vw", md: "70vw", lg: "50vw" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "white",
          border: "solid 1px #CFD8DB",
          borderRadius: "15px",
        }}
      >
        <Typography variant="h4">Mi perfil</Typography>

        <Box
          onSubmit={handleSubmit}
          sx={{
            width: "90%",
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            className="field"
            InputProps={{
              readOnly: true,
              sx: {
                backgroundColor: "#eceff1",
              },
            }}
            id="name"
            label="Nombre"
            type="text"
            variant="outlined"
            fullWidth
            value={userData.name}
            onChange={handleChange}
            sx={{
              my: 1,
            }}
          />
          <TextField
            className="field"
            InputProps={{
              readOnly: true,
              sx: {
                backgroundColor: "#eceff1",
              },
            }}
            id="email"
            label="Correo electrónico"
            type="email"
            variant="outlined"
            fullWidth
            helperText={emailError.message}
            error={emailError.emailError}
            value={userData.email}
            onChange={handleChange}
            sx={{
              my: 1,
            }}
          />
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: "90%",
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={handleEdit}
            sx={{
              color: "white",
              display: showEditButton.display,
              my: 2,
              width: "100%",
              height: "45px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            Editar datos
          </Button>

          <TextField
            className="field"
            InputProps={{
              readOnly: bgInput.changes,
              sx: {
                backgroundColor: bgInput.color,
              },
            }}
            id="phone"
            label="Teléfono"
            name="phone"
            InputLabelProps={{ shrink: true }}
            type="number"
            variant="outlined"
            fullWidth
            // helperText={phoneError.message}
            // error={phoneError.phoneError}
            value={userData.phone}
            onChange={handleChange}
            sx={{
              my: 1,
            }}
          />

          <TextField
            className="field"
            InputProps={{
              readOnly: bgInput.changes,
              sx: {
                backgroundColor: bgInput.color,
              },
            }}
            id="lastname"
            label="Apellidos"
            name="lastname"
            InputLabelProps={{ shrink: true }}
            type="text"
            variant="outlined"
            fullWidth
            value={userData.lastname}
            onChange={handleChange}
            sx={{
              my: 1,
            }}
          />

          <TextField
            className="field"
            InputProps={{
              readOnly: bgInput.changes,
              sx: {
                backgroundColor: bgInput.color,
              },
            }}
            id="enterprise"
            label="Empresa"
            name="enterprise"
            InputLabelProps={{ shrink: true }}
            type="text"
            variant="outlined"
            fullWidth
            value={userData.enterprise}
            onChange={handleChange}
            sx={{
              my: 1,
            }}
          />

          <TextField
            className="field"
            InputProps={{
              readOnly: bgInput.changes,
              sx: {
                backgroundColor: bgInput.color,
              },
            }}
            id="address"
            label="Dirección"
            name="address"
            InputLabelProps={{ shrink: true }}
            type="text"
            variant="outlined"
            fullWidth
            value={userData.address}
            onChange={handleChange}
            sx={{
              my: 1,
            }}
          />

          <TextField
            className="field"
            InputProps={{
              readOnly: bgInput.changes,
              sx: {
                backgroundColor: bgInput.color,
              },
            }}
            id="country"
            label="País"
            name="country"
            InputLabelProps={{ shrink: true }}
            type="text"
            variant="outlined"
            fullWidth
            value={userData.country}
            onChange={handleChange}
            sx={{
              my: 1,
            }}
          />
          <Box
            sx={{
              mt: 2,
              width: "100%",
            }}
          >
            {alert && alert.status === "error" ? (
              <Alert
                severity={alert.status}
                sx={{ mb: 2, borderRadius: "10px" }}
              >
                {" "}
                {alert.message}{" "}
              </Alert>
            ) : null}
            {alert && alert.status === "success" ? (
              <Alert
                severity={alert.status}
                sx={{ mb: 2, borderRadius: "10px" }}
              >
                {" "}
                {alert.message}{" "}
              </Alert>
            ) : null}
          </Box>
          <Box
            id="password-changer"
            sx={{
              m: 0,
              p: 0,
              my: 1,
              py: 2,
              px: 2,
              width: "100%",
              border: "solid 1px #CFD8DB",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                m: 0,
                p: 0,
                width: "100%",
                display: passwordChange.display,
                justifyContent: "left",
              }}
            >
              <TextField
                id="password"
                label="Contraseña"
                InputLabelProps={{ shrink: true }}
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  my: 1,
                  mx: 1,
                }}
              />
              <TextField
                id="password-confirmation"
                label="Confirma contraseña"
                InputLabelProps={{ shrink: true }}
                type="password"
                variant="outlined"
                fullWidth
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                sx={{
                  my: 1,
                  mx: 1,
                }}
              />
            </Box>
            <Button
              variant="contained"
              onClick={handleEditPassword}
              sx={{
                color: "white",
                my: 2,
                width: "98%",
                height: "45px",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            >
              Cambiar contraseña
            </Button>
          </Box>

          <Box
            sx={{
              my: 2,
              width: "100%",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                display: showSaveButton.display,
                color: "white",
                my: 2,
                width: "100%",
                height: "45px",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            >
              Guardar cambios
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileBox;
