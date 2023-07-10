import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { styled } from "styled-components";

const Container = styled.div`
  padding: 16px;
  background-color: lightgreen;
`;

const H1Styled = styled.h1`
  color: red;
`;

const App = () => {
  return (
    <Container>
      <H1Styled>Hello World</H1Styled>
    </Container>
  );
};

export default App;
