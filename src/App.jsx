import { Route } from "react-router-dom";
import Home from "./page/Home";
import Mitra from "./page/Mitra";
import Product from "./page/Product";

const App = () => {
  return (
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="mitra" element={<Mitra />}>
        <Route path=":id" element={<Product />} />
      </Route>
      <Route path="product" element={<Product />} />
      <Route path="*" element={<Home />} />
    </Route>
  );
};

export default App;
