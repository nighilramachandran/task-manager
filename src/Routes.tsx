import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./widgets/layouts/Layout";
import Page404 from "./pages/Page404";
import { ROUTES } from "./utils/config";
import AddTask from "./pages/AddTask";

const PrivateRoutes = () => {
  const { AUTH } = ROUTES;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.ROOT} element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path={AUTH.ADD_TASK} element={<AddTask />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
