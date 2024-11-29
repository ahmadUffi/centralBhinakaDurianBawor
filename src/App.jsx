import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Home from "./page/Home";
import Mitra from "./page/Mitra";
import Product from "./page/Product";
import MitraPage from "./page/MitraPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="mitra/" element={<Mitra />} />
        {/* <Route path="mitra/:id" element={<MitraPage />} /> */}
        <Route path="testMitra" element={<MitraPage />} />
        <Route path="product" element={<Product />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
