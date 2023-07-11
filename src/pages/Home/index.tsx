import { useCallback, useMemo, useState } from "react";
import { Button, Typography } from "@mui/material";

import { Container } from "./style";

const Home = () => {
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
    <Container>
      {countUI}
      <Button onClick={onClickButton}>Click me</Button>
    </Container>
  );
};

export default Home;
