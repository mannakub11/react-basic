import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { styled } from "styled-components";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";

const Theme = createTheme({
  typography: {
    fontFamily: "Kanit, Inter",
  },
});

const Container = styled.div`
  padding: 16px;
  background-color: lightgreen;

  & .MuiButtonBase-root {
    background-color: white;
    width: 300px;
    height: 50px;
    border-radius: 15px;
  }
`;

const H1Styled = styled.h1`
  color: red;
`;

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Typography variant="h1" color={"red"}>
          Hello World
        </Typography>
        <Button> Click me</Button>
      </Container>
    </ThemeProvider>
  );
};

export default App;
