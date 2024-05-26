import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  TextField,
  Select,
  InputLabel,
  Divider,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useParams } from "react-router-dom";
import { MyContext } from "../../context/PoolsContext";
import { UserContext } from "../../context/UsersContext";

const PaymentBox = () => {
  const { makeRequest } = useContext(UserContext);
  const { pools, quantity, amount } = useContext(MyContext);
  const { id } = useParams();
  const [banks, setBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState("");
  const [payment, setPayment] = useState("");
  const [voucher, setVoucher] = useState("");
  const [booking, setBooking] = useState({});

  useEffect(() => {
    const dataBooking = {
      date: "",
      amount: amount,
      payment: payment,
      condition: "Pending",
      bank: selectedBank,
      voucher: voucher,
      status: true,
    };
    setBooking(dataBooking);
  }, [quantity, amount, payment, selectedBank, voucher]);

  console.table(booking);

  const poolIdsAsString = pools.map((pool) => String(pool.id));
  const index = poolIdsAsString.findIndex((poolId) => poolId === id);
  const poolDetails = pools[index];

  const createBookingId = async () => {
    await makeRequest("post", `booking/${poolDetails.id}`, booking);
  };

  const updaTePools = async () => {
    await makeRequest("patch", `pools/update/${poolDetails.id}`, {
      quantity: poolDetails.quantity,
    });
  };

  const url = "/accounts.json";

  const [expandedTransferAccordion, setExpandedTransferAccordion] =
    useState(false);
  const [expandedCardAccordion, setExpandedCardAccordion] = useState(false);

  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setBanks(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const bankInfo = (bank) => {
    return (
      <Box
        fullWidth
        sx={{
          border: "solid 1px #B4BFC2",
          borderRadius: "5px",
          bgcolor: "#F1F1F1",
          my: 2,
          pb: 1,
          pt: 2,
        }}
      >
        <Box
          id="bankInfo"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: 400,
              my: 0.2,
            }}
          >
            Datos Bancarios
          </Typography>
          <Box
            key={bank.id}
            sx={{
              textAlign: "left",
              width: { xs: "90%", md: "60%" },
              border: "solid 1px #B4BFC2",
              borderRadius: "5px",
              bgcolor: "#fff",
              px: 2,
            }}
          >
            <Typography
              sx={{
                py: 0.5,
                fontWeight: 500,
              }}
            >
              {bank.bank}
            </Typography>
            <Divider />
            <Typography
              sx={{
                py: 0.5,
              }}
            >
              {bank.name}
            </Typography>
            <Divider />
            <Typography
              sx={{
                py: 0.5,
              }}
            >
              {bank.rut}
            </Typography>
            <Divider />
            <Typography
              sx={{
                py: 0.5,
              }}
            >
              {bank.account}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  const handleTransferAccordionChange = () => {
    setExpandedTransferAccordion((prevExpanded) => !prevExpanded);
  };

  const handleCardAccordionChange = () => {
    setExpandedCardAccordion((prevExpanded) => !prevExpanded);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Box
      fullWidth
      sx={{
        bgcolor: "#ECEFF1",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          width: { xs: "90vw", md: "60vh", lg: "60vh" },
          px: "10vw",
        }}
      >
        <Box
          sx={{
            py: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.4rem",
              fontWeight: 600,
              py: 2,
            }}
          >
            Completa el pago de tu reserva
          </Typography>
        </Box>

        <Box
          fullWidth
          sx={{
            border: "solid 1px #B4BFC2",
            borderRadius: "15px",
            bgcolor: "#fff",
            height: { xs: "150px", md: "200px" },
            my: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: "10%",
          }}
        >
          <Grid container sx={{}}>
            <Grid item xs={8}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "1rem", md: "1.4rem" },
                  py: 1,
                  textAlign: "left",
                }}
              >
                Tu pagas:
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "1rem", md: "1.4rem" },
                  py: 1,
                  fontWeight: 600,
                  textAlign: "left",
                }}
              >
                $ {parseFloat(amount).toLocaleString("de-DE")}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "1rem", md: "1.4rem" },
                  py: 1,
                  textAlign: "left",
                }}
              >
                Estás reservando:
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "1rem", md: "1.4rem" },
                  py: 1,
                  fontWeight: 600,
                  textAlign: "left",
                }}
              >
                {parseFloat(quantity).toLocaleString("de-DE")} autos
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Typography
          variant="h5"
          sx={{
            fontSize: "1.2rem",
            fontWeight: 600,
            py: 2,
          }}
        >
          ¿Cómo deseas realizar el pago?
        </Typography>

        <Box
          sx={{
            py: 2,
          }}
        >
          <Accordion
            square={true}
            expanded={expandedTransferAccordion}
            onChange={handleTransferAccordionChange}
            sx={{
              py: 4,
              px: 4,
              border: "solid 1px #CFD8DB",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <AccordionSummary aria-controls="panel1-content" id="panel1-header">
              <Grid container>
                <Grid item xs={10} sx={{ textAlign: "left" }}>
                  <Typography>Pago por transferencia</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography sx={{ fontWeight: "600" }}>
                    {expandedTransferAccordion ? "Cerrar" : "Elegir"}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Box component="form">
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ textAlign: "left", py: 0.5 }}
                >
                  Banco
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedBank}
                  onChange={(e) => {
                    setSelectedBank(e.target.value), setPayment("Transfer");
                  }}
                  fullWidth
                >
                  {banks.map((bank) => (
                    <MenuItem key={bank.id} value={bank.id}>
                      {bank.bank}
                    </MenuItem>
                  ))}
                </Select>
                {banks.map((bank) => {
                  if (bank.id === selectedBank) {
                    return bankInfo(bank);
                  }
                  return null;
                })}
                <TextField
                  className="field"
                  id="vaucher-id"
                  label="Código de transferencia"
                  type="text"
                  variant="outlined"
                  fullWidth
                  sx={{ my: 1 }}
                  value={voucher}
                  onChange={(e) => {
                    setVoucher(e.target.value), updaTePools();
                  }}
                />
                <Button
                  component="label"
                  fullWidth
                  role={undefined}
                  variant="outlined"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                  sx={{
                    my: 1,
                    height: "6.5vh",
                  }}
                >
                  Upload file
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Box>
              {/* Seccion de boton */}
              <Box
                sx={{
                  textAlign: "left",
                  py: 1,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    width: "100%",
                    height: "55px",
                    borderRadius: "15px",
                    marginBottom: "20px",
                  }}
                  href="/success"
                  onClick={() => {
                    createBookingId();
                    updaTePools();
                  }}
                >
                  <Typography>Iniciar reserva</Typography>
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box
          sx={{
            py: 2,
          }}
        >
          <Accordion
            square={true}
            expanded={expandedCardAccordion}
            onChange={handleCardAccordionChange}
            sx={{
              py: 4,
              px: 4,
              border: "solid 1px #CFD8DB",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <AccordionSummary aria-controls="panel1-content" id="panel1-header">
              <Grid container>
                <Grid item xs={10} sx={{ textAlign: "left" }}>
                  <Typography>Pago por tarjeta</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography sx={{ fontWeight: "600" }}>
                    {expandedCardAccordion ? "Cerrar" : "Elegir"}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                  }}
                >
                  Este medio de pago todavía no está disponible
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
};

export default PaymentBox;
