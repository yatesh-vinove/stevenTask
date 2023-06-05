import { Routes, Route } from "react-router-dom";
import routeNames from "./routeNames";
import Layout from "../components/layouts";

const Router = () => {
  return (
    <Routes>
      <Route path={routeNames.ROOT} element={<Layout />} />
    </Routes>
  );
};
export default Router;
