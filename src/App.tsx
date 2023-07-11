import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Home } from "./pages/Home";

const Theme = createTheme({
  typography: {
    fontFamily: "Kanit, Inter",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
