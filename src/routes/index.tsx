import { Route, Routes as RoutesLib } from "react-router-dom";

import Home from "../pages/Home";

export const Routes = () => {
  return (
    <RoutesLib>
      <Route element={<Home />} path={"/home"} />
    </RoutesLib>
  );
};

export default Routes;
