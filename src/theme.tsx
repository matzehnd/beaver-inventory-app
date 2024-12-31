import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgb(204, 185, 169)",
    },
    secondary: {
      main: "rgb(170, 214, 170)",
    },
    background: {
      default: "#FAF5F0",
      paper: "#FFFFFF",
    },
    error: {
      main: "rgb(240, 128, 128)",
    },
    warning: {
      main: "rgb(255, 239, 173)",
    },
    text: {
      primary: "#4B3832",
      secondary: "#6D4C41",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    h1: { fontSize: "2.5rem", fontWeight: 600 },
    h2: { fontSize: "2rem", fontWeight: 500 },
    h3: { fontSize: "1.75rem", fontWeight: 500 },
    body1: { fontSize: "1rem", color: "#4B3832" },
    body2: { fontSize: "0.875rem", color: "#6D4C41" },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
