import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UsersContextProvider from "./context/UsersContext.jsx";
import PoolsContextProvider from "./context/PoolsContext.jsx";
import { createTheme, ThemeProvider } from "@mui/material/";
import CssBaseline from "@mui/material/CssBaseline";

console.log(createTheme);
const theme = createTheme({
  palette: {
    primary: {
      light: "#00b3ff",
      main: "#0091df",
      dark: "#025fa9",
      contrastText: "#062638",
    },
    secondary: {
      light: "#00deb5",
      main: "#00ad71",
      dark: "##008e54",
      contrastText: "#062F21",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsersContextProvider>
      <PoolsContextProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PoolsContextProvider>
    </UsersContextProvider>
  </React.StrictMode>
);
