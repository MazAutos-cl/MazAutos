import { useContext, useState, useEffect } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  Grid,
  Container,
  CardMedia,
  CardContent,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CarColor from "../carcolor/CarColor";
import { LoadingBar } from "../loadingBar/LoadingBar";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../../context/PoolsContext";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import CarIcon from "../icons/CarIcon";
import EngineIcon from "../icons/EngineIcon";
import TransmissionIcon from "../icons/TransmissionIcon";
import RangeIcon from "../icons/RangeIcon";
import CapacityIcon from "../icons/CapacityIcon";
import FuelIcon from "../icons/FuelIcon";
import SeatingsIcon from "../icons/SeatingsIcon";
import ColorIcon from "../icons/ColorIcon";

export default function PoolDetails() {
  const navigate = useNavigate();
  const { pools, setPools, amount, setAmount } = useContext(MyContext);
  const { id } = useParams();
  const poolIdsAsString = pools.map((pool) => String(pool.id));
  const index = poolIdsAsString.findIndex((poolId) => poolId === id);
  const poolDetails = pools[index];
  const color = "red";

  const [colorName, setColorName] = useState("");

  useEffect(() => {
    if (color) {
      //cambiar despues a poolDetails
      handleColorName();
    }
  }, [color]); //cambiar despues a poolDetails

  const handleColorName = () => {
    switch (
      color // cambiar luego a poolDetails.color
    ) {
      case "red":
        setColorName("Rojo");
        break;
      case "blue":
        setColorName("Azul");
        break;
      case "white":
        setColorName("Blanco");
        break;
      case "grey":
        setColorName("Gris");
        break;
      case "black":
        setColorName("Negro");
        break;
      case "green":
        setColorName("Verde");
        break;
      default:
        setColorName("En espera de confirmación");
    }
  };

  if (!poolDetails) {
    return <div>No se encontró el pool</div>;
  }

  const goToCheckout = () => {
    navigate(`/checkout/${poolDetails.id}`);
  };
  const formattedPrice = parseFloat(poolDetails.initial_price).toLocaleString(
    "de-DE"
  );
  const formattedSavedPrice = parseFloat(
    poolDetails.saved_price
  ).toLocaleString("de-DE");

  return (
    <>
      <Box
        sx={{
          maxWidth: "100vw",
          maxHeight: "100vh",
          overflow: "auto",
          py:2,
          px:4,
          display: { xs: "auto", md: "auto", lg: "none" },
        }}
      >
        {/* Seccion de la imagen */}
        <Box
          sx={{
            bgcolor: "#cfd8dc",
            borderRadius:'15px',
            border: "solid 1px #CFD8DB",
            py: 2,
          }}
        >
          <CardMedia
            component="img"
            height="60%"
            src={`${poolDetails.image}`}
            alt={`${poolDetails.brand} ${poolDetails.model} ${poolDetails.year}`}
          />
        </Box>

        {/* Title */}

        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{
              fontSize: "1.2rem",
              my: 0,
            }}
          >
            {poolDetails.brand} {poolDetails.model} {poolDetails.year}
          </Typography>
        </CardContent>

        {/* Highlights mobile */}

        <CardContent>
          <Box
            className="highlights"
            sx={{
              bgcolor: "#cfd8dc",
              height: "6vh",
              my: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "space-around" },
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                width: { xs: "30%", md: "20%", lg: "30%" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#37474f",
                m: "0 auto",
              }}
            >
              <FuelIcon
                sx={{
                  height: "50px",
                  width: "50px",
                  pr: 2,
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontSize: "0.8rem",
                }}
              >
                {poolDetails.fuel}
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "30%", md: "20%", lg: "40%" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#37474f",
                m: "0 auto",
              }}
            >
              <TransmissionIcon
                sx={{
                  height: "45px",
                  width: "45px",
                  pr: 1,
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontSize: "0.8rem",
                }}
              >
                {poolDetails.transmission}
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "30%", md: "20%", lg: "30%" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#37474f",
                m: "0 auto",
              }}
            >
              <CarIcon
                sx={{
                  height: "50px",
                  width: "50px",
                  pr: 2,
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontSize: "0.8rem",
                }}
              >
                {poolDetails.type}
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <Divider variant="middle" />

        {/* Price Section */}

        <CardContent>
          <Box
            sx={{
              textAlign: "left",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: "1.2rem",
              }}
            >
              Precio
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: "1.6rem",
                fontWeight: "500",
                pt: 1,
                pb: 1,
              }}
            >
              $ {formattedPrice}
            </Typography>
            <Box
              sx={{
                pt: 1,
                pb: 2,
                display: "flex",
                alignItems: "end",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  mr: "0.8rem",
                }}
              >
                Ahorro
              </Typography>
              <Typography
                sx={{
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  mr: "0.2rem",
                }}
              >
                $
              </Typography>
              <Typography
                variant="p"
                sx={{
                  textDecoration: "line-through",
                }}
              >
                {formattedSavedPrice}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton color="primary" sx={{ p: 0, m: 0 }}>
                <InfoIcon sx={{ paddingRight: "10px" }} />
              </IconButton>
              <Typography
                variant="p"
                sx={{
                  fontSize: "0.8rem",
                }}
              >
                Al unirte al pool obtienes el precio de flota.
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <Divider variant="middle" />

        {/* Details */}

        {/* Characteristics */}

        <CardContent>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid
              item
              xs={5.4}
              md={6}
              sx={{
                py: 1,
                px: 1,
                textAlign: "left",
                height: "10vh",
                display: "flex",
                alignItems: "start",
                justifyContent: "left",
              }}
            >
              <EngineIcon
                sx={{
                  m: "auto 8px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                  }}
                >
                  Motor
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "0.8rem",
                  }}
                >
                  {poolDetails.engine}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={5.4}
              md={6}
              sx={{
                py: 1,
                px: 1,
                textAlign: "left",
                height: "6.5vh",
                display: "flex",
                alignItems: "start",
                justifyContent: "left",
              }}
            >
              <CapacityIcon
                sx={{
                  m: "auto 8px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                  }}
                >
                  Capacidad de carga
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "0.8rem",
                  }}
                >
                  {poolDetails.capacity} Kg
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={5.4}
              md={6}
              sx={{
                py: 1,
                px: 1,
                textAlign: "left",
                height: "6.5vh",
                display: "flex",
                alignItems: "start",
                justifyContent: "left",
              }}
            >
              <SeatingsIcon
                sx={{
                  m: "auto 8px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                  }}
                >
                  Asientos
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "0.8rem",
                  }}
                >
                  {poolDetails.seatings} Asientos
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={5.4}
              md={6}
              sx={{
                py: 1,
                px: 1,
                textAlign: "left",
                height: "6.5vh",
                display: "flex",
                alignItems: "start",
                justifyContent: "left",
              }}
            >
              <RangeIcon
                sx={{
                  m: "auto 8px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                  }}
                >
                  Autonomía
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "0.8rem",
                  }}
                >
                  {poolDetails.range} Km
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        <Divider variant="middle" />

        {/* ColorSection */}

        <CardContent>
          <Grid
            container
            sx={{
              height: "8vh",
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
            }}
          >
            <Grid
              item
              xs={5.4}
              md={6}
              sx={{
                py: 1,
                px: 1,
                textAlign: "left",
                height: "6.5vh",
                display: "flex",
                alignItems:'center',
                justifyContent: "left",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: "500",
                }}
              >
              </Typography>
                <ColorIcon sx={{
                  m:'auto 8px',
                }}/>
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems:'start',
                    justifyContent: "space-between",
                  }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "0.8rem",
                        fontWeight: "500",
                      }}
                    >
                      Color
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "0.8rem",
                      }}
                    >
                      {colorName}
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={5.4}
                  md={6}
                  sx={{
                    py: 1,
                    px: 1,
                    textAlign: "left",
                    height: "6.5vh",
                    display: "flex",
                    alignItems:'start',
                    justifyContent: "left",
                  }}
                >
                <CarIcon sx={{
                  m:'auto 8px',
                }}/>
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems:'start',
                    justifyContent: "space-between",
                  }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "0.8rem",
                        fontWeight: "500",
                      }}
                    >
                      Versión
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "0.8rem",
                      }}
                    >
                      {poolDetails.version}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

        </CardContent>
        <Divider variant="middle" />

        {/* Loading bar */}

        <CardContent
          sx={{
            mx: 0,
            px: 0,
          }}
        >
          <LoadingBar
            value={poolDetails.quantity}
            goal={poolDetails.goal_quantity}
          />
        </CardContent>

        {/* Seccion de boton */}

        <CardContent>
          <Box
            sx={{
              textAlign: "left",
            }}
          >
            <Button
              variant="contained"
              sx={{
                color: "white",
                width: "100%",
                height: "45px",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
              onClick={goToCheckout}
            >
              <Typography>Iniciar reserva</Typography>
            </Button>
          </Box>
        </CardContent>
      </Box>

      {/* ////////////////////////////////////////////////////////// */}

      {/* desktop devices */}

      <Container
        maxWidth=""
        xs={{ width: "100vw" }}
        md={{ width: "90vw" }}
        sx={{
          justifyContent: "center",
          overflow: "auto",
          display: { xs: "none", md: "none", lg: "flex" },
        }}
      >
        <Grid
          container
          gap={4}
          sx={{
            my: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            className="item desktop detailes"
            item
            xs={7.5}
            sx={{
              height: "86vh",

              border: "solid 1px #CFD8DB",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                bgcolor: "#cfd8dc",
                borderRadius:'15px',
                pt: 2,
                mb:3,
              }}
            >
              <CardMedia
                component="img"
                height="60%"
                src={`${poolDetails.image}`}
                alt={`${poolDetails.brand} ${poolDetails.model} ${poolDetails.year}`}
              />
            </Box>

            {/* Loading bar */}

            <CardContent
              sx={{
                mx: 0,
                px: 0,
              }}
            >
              <LoadingBar
                value={poolDetails.quantity}
                goal={poolDetails.goal_quantity}
              />
            </CardContent>
            <Divider variant="middle" />
            <Box
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton color="primary" sx={{ p: 0, m: 0 }}>
                <InfoIcon sx={{ paddingRight: "10px" }} />
              </IconButton>
              <Typography
                variant="p"
                sx={{
                  fontSize: "0.8rem",
                }}
              >
                Al unirte al pool obtienes el precio de flota.
              </Typography>
            </Box>
          </Grid>

          <Grid
            className="item desktop detailes"
            item
            xs={4}
            sx={{
              height: "86vh",

              border: "solid 1px #CFD8DB",
              borderRadius: "15px",
            }}
          >
            {/* Title */}

            <CardContent sx={{ textAlign: "center" }}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "1.2rem",
                  my: 0,
                }}
              >
                {poolDetails.brand} {poolDetails.model} {poolDetails.year}
              </Typography>
            </CardContent>

            {/* Price Section */}

            <CardContent>
              <Box
                sx={{
                  textAlign: "left",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1.2rem",
                  }}
                >
                  Precio
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "1.6rem",
                    fontWeight: "500",
                    pt: 1,
                    pb: 1,
                  }}
                >
                  $ {formattedPrice}
                </Typography>
                <Box
                  sx={{
                    pt: 1,
                    pb: 2,
                    display: "flex",
                    alignItems: "end",
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{
                      mr: "0.8rem",
                    }}
                  >
                    Ahorro
                  </Typography>
                  <Typography
                    sx={{
                      textDecoration: "none",
                      fontSize: "0.8rem",
                      mr: "0.2rem",
                    }}
                  >
                    $
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      textDecoration: "line-through",
                    }}
                  >
                    {formattedSavedPrice}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <Divider variant="middle" />

            {/* Details */}

            {/* Highlights */}

            <CardContent>
              <Box
                className="highlights"
                sx={{
                  bgcolor: "#cfd8dc",
                  height: "6vh",
                  py:5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "space-around" },
                  borderRadius: "15px",
                }}
              >
                <Box
                  sx={{
                    width: "30%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#37474f",
                  }}
                >
                  <FuelIcon
                    sx={{
                      height: "50px",
                      width: "50px",
                      pr: 2,
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "0.8rem",
                    }}
                  >
                    {poolDetails.fuel}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "30%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#37474f",
                  }}
                >
                  <TransmissionIcon
                    sx={{
                      height: "45px",
                      width: "45px",
                      pr: 1,
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "0.8rem",
                    }}
                  >
                    {poolDetails.transmission}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "30%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#37474f",
                  }}
                >
                  <CarIcon
                    sx={{
                      height: "55px",
                      width: "55px",
                      pr: 2,
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "0.8rem",
                    }}
                  >
                    {poolDetails.type}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <Divider variant="middle" />

            {/* Characteristics */}


        {/* Characteristics */}

        <CardContent>
          <Grid
            container
            sx={{
              height: "14vh",
              display: "flex",
              alignItems:'center',
              justifyContent: "space-between",
            }}
          >
            <Grid
              item
              xs={5.4}
              md={6}
              sx={{
                py: 1,
                px: 1,
                textAlign: "left",
                height: "6.5vh",
                display: "flex",
                alignItems:'start',
                justifyContent: "left",
              }}
            > 
              <EngineIcon sx={{
                m:'auto 8px',
              }}/>
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                  }}
                >
                  Motor
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "0.8rem",
                  }}
                >
                  {poolDetails.engine}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={5.4}
              md={6}
              sx={{
                py: 1,
                px: 1,
                textAlign: "left",
                height: "6.5vh",
                display: "flex",
                alignItems:'start',
                justifyContent: "left",
              }}
            > 
              <CapacityIcon sx={{
                m:'auto 8px',
              }}/>
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                  }}
                >
                  Capacidad de carga
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "0.8rem",
                  }}
                >
                  {poolDetails.capacity} Kg
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={5.4}
              md={6}
              sx={{
                py: 1,
                px: 1,
                textAlign: "left",
                height: "6.5vh",
                display: "flex",
                alignItems:'start',
                justifyContent: "left",
              }}
            > 
              <SeatingsIcon sx={{
                m:'auto 8px',
              }}/>
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                  }}
                >
                  Asientos
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "0.8rem",
                  }}
                >
                  {poolDetails.seatings} Asientos
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={5.4}
              md={6}
              sx={{
                py: 1,
                px: 1,
                textAlign: "left",
                height: "6.5vh",
                display: "flex",
                alignItems:'start',
                justifyContent: "left",
              }}
            > 
              <RangeIcon sx={{
                m:'auto 8px',
              }}/>
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                  }}
                >
                  Autonomía
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "0.8rem",
                  }}
                >
                  {poolDetails.range} Km
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        <Divider variant="middle" />

        {/* ColorSection */}


        <CardContent>
        <Grid
                container
                sx={{
                  height: "7vh",
                  display: "flex",
                  alignItems:'center',
                  justifyContent: "space-between",
                }}
              >
                <Grid
                  item
                  xs={5.4}
                  md={6}
                  sx={{
                    py: 1,
                    px: 1,
                    textAlign: "left",
                    display: "flex",
                    height:'6.5vh',
                    alignItems:'center',
                    justifyContent: "left",
                  }}
                >
                <ColorIcon sx={{
                  m:'auto 8px',
                }}/>
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems:'start',
                    justifyContent: "space-between",
                  }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "0.8rem",
                        fontWeight: "500",
                      }}
                    >
                      Color
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "0.8rem",
                      }}
                    >
                      {colorName}
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={5.4}
                  md={6}
                  sx={{
                    py: 1,
                    px: 1,
                    textAlign: "left",
                    display: "flex",
                    height:'6.5vh',
                    alignItems:'center',
                    justifyContent: "left",
                  }}
                >
                <CarIcon sx={{
                  m:'auto 8px',
                }}/>
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems:'start',
                    justifyContent: "space-between",
                  }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "0.8rem",
                        fontWeight: "500",
                      }}
                    >
                      Versión
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "0.8rem",
                      }}
                    >
                      {poolDetails.version}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
        </CardContent>
        <Divider variant="middle" />

            {/* Seccion de boton */}

            <CardContent>
              <Box
                sx={{
                  textAlign: "left",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    color: "white",

                    width: "100%",

                    height: "45px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                  }}
                  onClick={goToCheckout}
                >
                  <Typography>Iniciar reserva</Typography>
                </Button>
              </Box>
              <Box
                sx={{
                  textAlign: "left",
                }}
              >
                <Button
                  variant="plain"
                  sx={{
                    width: "100%",
                    height: "15px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                    }}
                  >
                    Contactar a un asesor
                  </Typography>
                </Button>
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
PoolDetails;
