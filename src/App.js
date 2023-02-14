import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Heart from "./pages/Heart";
import Join from "./pages/Join";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import ProductsAll from "./pages/ProductsAll";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/shopping-mall/" element={<ProductsAll />} />
        <Route path="/shopping-mall/join" element={<Join />} />
        <Route path="/shopping-mall/login" element={<Login />} />
        <Route path="/shopping-mall/heart" element={<Heart />} />
        <Route path="/shopping-mall/cart" element={<Cart />} />
        <Route path="/shopping-mall/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
