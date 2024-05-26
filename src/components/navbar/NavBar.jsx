import * as React from "react";
import { useState, useEffect, useContext } from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
  CardMedia,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/mazautos.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UsersContext";

function NavBar() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const { token, isActive, removeToken, userId, makeRequest, setUser } =
    useContext(UserContext);

  const handleLogout = () => {
    removeToken();
  };

  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "white",
        width: "100vw",
        boxShadow: "none",
        borderBottom: "0.5px solid",
        borderColor: "#0090DF",
        minHeight: "60px",
        maxHeight: "80px",
      }}
    >
      <Container
        sx={{
          width: "100vw",
          p: 0,
          m: 0,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            p: 0,
            m: 0,
          }}
        >
          <Box
            sx={{
              justifyContent: "space-between",
              width: "100%",
              display: { xs: "none", md: "flex" },
            }}
          >
            {/* Titulo de la web para desktop */}
            <Box
              component="a"
              onClick={goToHome}
              sx={{
                display: "flex",
              }}
            >
              <img
                src={Logo}
                alt="MazAutos | Donde comprar Maz Autos a Menoz Precio"
                style={{
                  width: "50%",
                  maxHeight: "50px",
                  margin: "auto 0",
                  padding: "0",
                }}
              />
            </Box>
            {/* Menu desktop */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
              }}
            >
              <Button sx={{ my: 2, color: "primary", display: "block" }}>
                <NavLink to="/pools">Ofertas</NavLink>
              </Button>
              {isActive ? (
                <Button sx={{ my: 2, color: "primary", display: "block" }}>
                  <NavLink to="/bookings">Reservas</NavLink>
                </Button>
              ) : null}
              {isActive ? (
                <Button sx={{ my: 2, color: "primary", display: "block" }}>
                  <NavLink
                    to={`/profile/${userId}`}
                    activeClassName="active-link"
                    onClick={async () => {
                      const response = await makeRequest(
                        "get",
                        `/users/${userId}`
                      );
                      setUser(response.data.data);
                    }}
                  >
                    Perfil
                  </NavLink>
                </Button>
              ) : null}
              <Button sx={{ my: 2, color: "primary", display: "block" }}>
                <NavLink to="/login" onClick={isActive ? handleLogout : null}>
                  {isActive ? "Cerrar Sesion" : "Iniciar Sesion"}
                </NavLink>
              </Button>
            </Box>
          </Box>

          {/* Titulo de la web para mobile */}
          <Box
            sx={{
              justifyContent: "space-between",
              width: "90%",
              m: "0 auto",
              display: { xs: "flex", md: "none" },
            }}
          >
            <Box
              component="a"
              onClick={goToHome}
              href="#app-bar-with-responsive-menu"
              sx={{
                display: "flex",
              }}
            >
              <img
                src={Logo}
                alt="MazAutos | Donde comprar Maz Autos a Menoz Precio"
                style={{
                  width: "50%",
                  maxHeight: "50px",
                  margin: "auto 0",
                  padding: "0",
                }}
              />
            </Box>

            {/* Menu mobile */}

            <Box sx={{ flexGrow: 0 }}>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              <Tooltip title="Open settings">
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="primary"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "flex", md: "none", lg: "none" },
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <NavLink to="/pools">
                        <Typography textAlign="center">Ofertas</Typography>
                      </NavLink>
                    </MenuItem>
                    <MenuItem>
                      {isActive ? (
                        <NavLink to="/bookings">
                          <Typography textAlign="center">Reservas</Typography>
                        </NavLink>
                      ) : null}
                    </MenuItem>
                    {isActive ? (
                      <MenuItem>
                        <NavLink
                          to={`/profile/${userId}`}
                          activeClassName="active-link"
                        >
                          <Typography textAlign="center">Perfil</Typography>
                        </NavLink>
                      </MenuItem>
                    ) : null}
                    <MenuItem>
                      <NavLink
                        to="/login"
                        onClick={token ? handleLogout : null}
                      >
                        <Typography textAlign="center">
                          {isActive ? "Cerrar Sesion" : "Iniciar Sesion"}
                        </Typography>
                      </NavLink>
                    </MenuItem>
                  </Menu>
                </Box>
              </Tooltip>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
