import { useCallback, useState } from "react";

import { Container } from "./style";
import Counter from "./Component/Counter";

const Home = () => {
  const [count, setCount] = useState<number>(0);

  const onClickButton = useCallback(() => {
    setCount((prevValue: number) => prevValue + 1);
  }, [setCount]);

  return (
    <Container>
      <Counter count={count} setCount={setCount} onClick={onClickButton} />
    </Container>
  );
};

export default Home;
