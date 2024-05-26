import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
//import Box from '@mui/material/Box';
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import { LoadingBar } from "../loadingBar/LoadingBar";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/PoolsContext";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export default function PoolCard({ pool, edit }) {
  const navigate = useNavigate();

  const { pools, setPools, setAmount } = useContext(MyContext);
  const formattedPrice = parseFloat(pool.initial_price).toLocaleString("de-DE");
  const formattedSavedPrice = parseFloat(pool.saved_price).toLocaleString(
    "de-DE"
  );
  const carAvailability = pool.quantity - pool.goal_quantity;

  const goToDetails = () => {
    navigate(`/details/${pool.id}`);
  };
  const goToEditor = () => {
    navigate(`/editor/${pool.id}`);
  };

  const showButtons = () => {
    if (edit === true) {
      return (
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
              display: "none",
              height: "45px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
            onClick={goToDetails}
          >
            <Typography>Detalles</Typography>
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                color: "white",
                width: "48%",
                height: "45px",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
              onClick={goToEditor}
            >
              <ModeEditIcon
                sx={{
                  pr: 1,
                }}
              />
              <Typography>Editar Pool</Typography>
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "white",
                width: "48%",
                height: "45px",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
              onClick={goToDetails}
            >
              <Typography>Detalles</Typography>
            </Button>
          </Box>
        </Box>
      );
    } else {
      return (
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
              display: "flex",
              height: "45px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
            onClick={goToDetails}
          >
            <Typography>Detalles</Typography>
          </Button>
          <Box
            sx={{
              display: "none",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                color: "white",
                width: "48%",
                height: "45px",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
              onClick={goToDetails}
            >
              <ModeEditIcon
                sx={{
                  pr: 1,
                }}
              />
              <Typography>Editar Pool</Typography>
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "white",
                width: "48%",
                height: "45px",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
              onClick={goToDetails}
            >
              <Typography>Detalles</Typography>
            </Button>
          </Box>
        </Box>
      );
    }
  };

  return (
    <CardActionArea key={pool.id}>
      <Card
        sx={{
          maxWidth: "90vw",
          maxHeight: "100vh",
          overflow: "auto",
          border: "solid 0.5px #b0bec5",
          borderRadius: "15px",
        }}
      >
        {/* Seccion de la imagen */}

        <CardMedia
          component="img"
          src={`${pool.image}`}
          alt={`${pool.brand} ${pool.model} ${pool.year}`}
          sx={{
            mt: 1,
            maxHeight: { xs: "332px", md: "214px", lg: "216px" },
          }}
        />

        <CardContent sx={{ textAlign: "left" }}>
          <Typography variant="h5" sx={{ fontSize: "1.2rem" }}>
            {pool.brand} {pool.model} {pool.year}
          </Typography>
          <Typography variant="h5" sx={{ fontSize: "0.8rem" }}>
            {pool.version}
          </Typography>
        </CardContent>
        <Divider variant="middle" />

        {/* Seccion de precio */}
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

        <LoadingBar value={pool.quantity} goal={pool.goal_quantity} />

        {/* Seccion de boton */}
        <CardContent>{showButtons()}</CardContent>
      </Card>
    </CardActionArea>
  );
}
PoolCard;
