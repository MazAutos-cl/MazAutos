import * as React from "react";
import { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  TextField,
  StepLabel,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Alert,
  Grid,
  CardMedia,
} from "@mui/material";
import BuyACar from "../../assets/ver-las-ofertas-de-carros.png";
import ContactSeller from "../../assets/servicio-al-cliente-mazautos.png";
import { UserContext } from "../../context/UsersContext";
import { useContext } from "react";

const steps = ["Paso 1", "Paso 2"];
// const navigate = useNavigate();
// const goToPools = () => {
//     navigate('/pools');
//   };

export default function HorizontalLinearStepper() {
  const { makeRequest, role } = useContext(UserContext);
  const [newUser, setnewUser] = useState({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [enterprise, setEnterprise] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("Chile");
  const [district, setDistrict] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [alert, setAlert] = useState({
    alert: false,
    status: "",
    message: "",
  });

  const dataUser = {
    name,
    lastName,
    email,
    password,
    phone,
    address,
    district,
    city,
    country,
    enterprise,
    status: true,
  };

  const handleSubmit = () => {
    makeRequest("post", "/users", dataUser);
  };

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const [nameError, setNameError] = useState({
    emailError: false,
    message: "",
  });
  const [passwordError, setPasswordError] = useState({
    emailError: false,
    message: "",
  });
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

  const [accept, setAccept] = useState(false);
  const [acceptError, setAcceptError] = useState({
    status: false,
    bgcolor: "",
    radius: "",
    px: "",
    m: "",
  });

  const emailValidation = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const phoneValidation = (phone) => {
    const regex = /^9\d{8}$/;
    return regex.test(phone);
  };

  const handleCheckboxChange = (event) => {
    setAccept(event.target.checked);
  };

  const validateStep0 = () => {
    let hasError = false;

    if (name.trim() === "") {
      setNameError({
        nameError: true,
        message: "El nombre no puede estar vacío",
      });
      hasError = true;
    } else {
      setNameError({
        nameError: false,
        message: "",
      });
    }

    if (!emailValidation(email)) {
      setEmailError({
        emailError: true,
        message: "Ingresa un correo válido",
      });
      hasError = true;
    } else {
      setEmailError({
        emailError: false,
        message: "",
      });
    }

    if (!phoneValidation(phone)) {
      setPhoneError({
        phoneError: true,
        message: 'Debe ser un formato válido, ej: "987546321"',
      });
      hasError = true;
    } else {
      setPhoneError({
        phoneError: false,
        message: "",
      });
    }

    if (password.trim() === "") {
      setPasswordError({
        passwordError: true,
        message: "La contraseña no puede estar vacía",
      });
      hasError = true;
    } else {
      setPasswordError({
        passwordError: false,
        message: "",
      });
    }

    if (accept === false) {
      setAcceptError({
        status: true,
        weight: "600",
      });
      hasError = true;
    } else {
      setAcceptError({
        status: false,
        bgcolor: "",
        radius: "",
        px: "",
      });
    }

    if (hasError) {
      setAlert({
        alert: true,
        status: "error",
        message: "Verifica los datos ingresados",
      });
      return false;
    }

    setAlert({
      alert: false,
      status: "",
      message: "",
    });

    return true;
  };

  const handleNext = () => {
    if (activeStep === 0 && !validateStep0()) {
      return;
    }

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);

    if (activeStep === steps.length - 1) {
      handleSubmit();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("No puedes saltarte esta etapa.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    handleSubmit();
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: 6,
        px: 6,
        bgcolor: "#eceff1",
      }}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Opcional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "70vh",
            }}
          >
            <Box
              sx={{
                minHeight: "30vh",
                minWidth: "45vw",
                borderRadius: "15px",
                bgcolor: "white",
              }}
            >
              <Grid
                container
                gap={2}
                sx={{
                  justifyContent: "center",
                  height: { xs: "60vh", md: "18vh", lg: "18vh" },
                }}
              >
                <Grid item xs={12} md={12} lg={12}>
                  <Typography
                    sx={{
                      mt: 2,
                      mb: 1,
                      px: { xs: 2, md: "0" },
                      fontSize: "1.4rem",
                      fontWeight: 600,
                    }}
                  >
                    ¡Todo listo! Ya puedes ver las ofertas
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={8}
                  md={4}
                  lg={4}
                  component="a"
                  href="/pools"
                  sx={{
                    height: { xs: "25%", md: "100%", lg: "100%" },
                    borderRadius: "15px",
                    border: "solid 1px #0091DFA8",
                    boxShadow: "6px 6px 11px -7px rgba(19,23,69,0.3)",
                    bgcolor: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    py: 1,
                  }}
                >
                  <CardMedia
                    component="img"
                    src={BuyACar}
                    sx={{
                      maxHeight: "75%",
                      objectFit: "contain",
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "500",
                    }}
                  >
                    Ver pools
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={8}
                  md={4}
                  lg={4}
                  component="a"
                  href="https://wa.link/c1zf3q"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    height: { xs: "25%", md: "100%", lg: "100%" },
                    borderRadius: "15px",
                    border: "solid 1px #0091DFA8",
                    bgcolor: "white",
                    boxShadow: "6px 6px 11px -7px rgba(19,23,69,0.3)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    py: 1,
                  }}
                >
                  <CardMedia
                    component="img"
                    src={ContactSeller}
                    sx={{
                      maxHeight: "50%",
                      my: { xs: "2%", md: "10%", lg: "10%" },
                      objectFit: "contain",
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "500",
                    }}
                  >
                    Contactar a un asesor
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Button
              variant="contained"
              type="submit"
              sx={{
                color: "white",
                width: "46vw",
                height: "45px",
                borderRadius: "10px",
                marginBottom: "20px",
                py: 2,
                my: 6,
              }}
            >
              Continuar
            </Button>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box
            sx={{
              width: "100%",
              p: 0,
              m: 0,
              minHeight: "60vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              sx={{
                width: { xs: "80vw", md: "60vw", lg: "50vw" },
                border: "solid 1px #CFD8DB",
                bgcolor: "white",
                borderRadius: "15px",
                py: 4,
              }}
            >
              {activeStep === 0 && (
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    pb: 4,
                  }}
                >
                  Completa los datos para crear tu cuenta
                </Typography>
              )}
              {activeStep === 1 && (
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    pb: 4,
                  }}
                >
                  Ingresa los datos de empresa
                </Typography>
              )}
              {activeStep === 0 && (
                <Box component="form">
                  <TextField
                    id="name"
                    label="Nombre"
                    type="text"
                    variant="outlined"
                    helperText={nameError.message}
                    error={nameError.nameError}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ my: 1, mx: 1, width: "90%" }}
                  />
                  <TextField
                    id="lastname"
                    label="Apellidos (Opcional)"
                    type="text"
                    variant="outlined"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    sx={{ my: 1, mx: 1, width: "90%" }}
                  />
                  <TextField
                    id="phone"
                    label="Teléfono"
                    type="phone"
                    variant="outlined"
                    helperText={phoneError.message}
                    error={phoneError.phoneError}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    sx={{ my: 1, mx: 1, width: "90%" }}
                  />
                  <TextField
                    id="email"
                    label="Correo electrónico"
                    type="email"
                    variant="outlined"
                    helperText={emailError.message}
                    error={emailError.emailError}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ my: 1, mx: 1, width: "90%" }}
                  />
                  <TextField
                    id="password"
                    label="Contraseña"
                    type="password"
                    variant="outlined"
                    helperText={passwordError.message}
                    error={passwordError.passwordError}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ my: 1, mx: 1, width: "90%" }}
                  />
                  <FormGroup
                    sx={{
                      width: "90%",
                      m: "8px auto",
                    }}
                  >
                    <FormControlLabel
                      required
                      control={
                        <Checkbox
                          checked={accept}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="Acepto los términos y condiciones"
                      sx={{ fontWeight: acceptError.weight }}
                    />
                  </FormGroup>
                  {alert && alert.status === "error" ? (
                    <Alert
                      sx={{ width: "90%", m: "8px auto", borderRadius: "10px" }}
                      severity={alert.status}
                    >
                      {" "}
                      {alert.message}{" "}
                    </Alert>
                  ) : null}
                  {alert && alert.status === "success" ? (
                    <Alert severity={alert.status}> {alert.message} </Alert>
                  ) : null}
                </Box>
              )}
              {activeStep === 1 && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    id="enterprise"
                    label="Empresa"
                    type="text"
                    variant="outlined"
                    value={enterprise}
                    onChange={(e) => setEnterprise(e.target.value)}
                    sx={{ my: 1, mx: 1, width: "90%" }}
                  />
                  <TextField
                    id="address"
                    label="Dirección de la compañía"
                    type="text"
                    variant="outlined"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    sx={{ my: 1, mx: 1, width: "90%" }}
                  />
                  <TextField
                    id="district"
                    label="Comuna"
                    type="text"
                    variant="outlined"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    sx={{ my: 1, mx: 1, width: "90%" }}
                  />
                  <TextField
                    id="city"
                    label="Ciudad"
                    type="text"
                    variant="outlined"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    sx={{ my: 1, mx: 1, width: "90%" }}
                  />
                </Box>
              )}
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Atrás
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Saltar
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
