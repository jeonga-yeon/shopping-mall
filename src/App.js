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
        <Route path="/" element={<ProductsAll />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
