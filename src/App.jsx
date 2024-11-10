import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Mitra from "./page/Mitra";
import Product from "./page/Product";
import MitraPage from "./page/MitraPage";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="mitra/" element={<Mitra />} />
      <Route path="mitra/:id" element={<MitraPage />} />
      <Route path="product" element={<Product />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
