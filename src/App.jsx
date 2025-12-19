import { Routes, Route } from "react-router-dom";
import Products from "./pages/products";
import Cart from "./pages/addtocart";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
