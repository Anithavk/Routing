import { Link } from "react-router-dom";
import { useCart } from "../context/cartcontext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-blue shadow p-4 flex flex-col sm:flex-row justify-between items-center gap-2">
      <Link to="/" className="text-xl font-bold text-blue-600">
        MyStore
      </Link>
      <Link to="/cart" className="relative flex items-center">
        🛒 Cart
        <span className="ml-1 bg-red-500 text-white px-2 py-0.5 rounded-full text-sm">
          {cart.length}
        </span>
      </Link>
    </nav>
  );
}
