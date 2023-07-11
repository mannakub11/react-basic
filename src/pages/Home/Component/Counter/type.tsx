export type CounterProp = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  onClick: () => void;
};
