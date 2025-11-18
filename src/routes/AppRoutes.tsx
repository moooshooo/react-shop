import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Shop from "../pages/Shop";
import ShippingInfo from "../pages/ShippingInfo";
import About from "../pages/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ShippingInfo" element={<ShippingInfo />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
};

export default AppRoutes;
