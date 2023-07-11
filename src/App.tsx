import { createTheme, ThemeProvider } from "@mui/material/styles";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

const Theme = createTheme({
  typography: {
    fontFamily: "Kanit, Inter",
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
