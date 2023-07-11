import { Button, Typography } from "@mui/material";

import { CounterProp } from "./type";
import { useMemo } from "react";

const Counter = (prop: CounterProp) => {
  const { count, setCount, ...resetProp } = prop;

  const countUI = useMemo(() => {
    const isEvent = count % 2 === 0;
    return (
      <Typography variant="h1" color={"red"}>
        Count: {count} is {isEvent ? "Event" : "Odd"}
      </Typography>
    );
  }, [count]);

  return (
    <>
      {countUI}
      <Button {...resetProp}>Click me</Button>;
    </>
  );
};

export default Counter;
