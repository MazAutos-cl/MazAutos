import React from 'react'
import { Box, Typography, Grid, CardMedia, Button } from "@mui/material";
import BuyACar from "../../assets/ver-las-ofertas-de-carros.png";
import ContactSeller from "../../assets/servicio-al-cliente-mazautos.png";
 
const PaymentSuccess = () => {

  return (
    <Box sx={{
        height:'90vh'
    }}>
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
                    ¡Todo listo! Gracias por confiar en MazAutos
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
          </Box>
          </Box>
  )
}

export default PaymentSuccess