import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Inter",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
