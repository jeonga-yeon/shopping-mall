import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Heart from "./pages/Heart";
import Join from "./pages/Join";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import ProductsAll from "./pages/ProductsAll";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsAll />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
