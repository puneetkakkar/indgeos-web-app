import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#00A0FF",
    },
    secondary: {
      main: "#fff",
    },
    error: {
      main: red[400],
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#fff",
          boxShadow: "none",
          borderBottom: "1px solid #f5f5f5",
        },
      },
    },
  },
});
