import { useCallback, useMemo, useState } from "react";
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

const App = () => {
  const [count, setCount] = useState<number>(0);

  const countUI = useMemo(() => {
    const isEvent = count % 2 === 0;
    return (
      <Typography variant="h1" color={"red"}>
        Count: {count} is {isEvent ? "Event" : "Odd"}
      </Typography>
    );
  }, [count]);

  const onClickButton = useCallback(() => {
    setCount((prevValue: number) => prevValue + 1);
  }, [setCount]);

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        {countUI}
        <Button onClick={onClickButton}>Click me</Button>
      </Container>
    </ThemeProvider>
  );
};

export default App;
