import { useEffect, useState } from "react";
import { useCart } from "../context/cartcontext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { cart, addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-4 sm:p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((p) => {
        const inCart = cart.some((item) => item.id === p.id);
        return (
          <div
            key={p.id}
            className="bg-white shadow rounded-lg p-4 flex flex-col h-full hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src={p.image}
                alt={p.title}
                className="h-40 object-contain mb-2"
              />
            </div>

            {/* Title */}
            <h2 className="font-semibold text-sm sm:text-base line-clamp-2 mt-2">
              {p.title}
            </h2>

            {/* Description (hidden on very small screens for cleaner layout) */}
            <p className="hidden sm:block text-sm text-gray-600 line-clamp-2 mt-1">
              {p.description}
            </p>

            {/* Price */}
            <p className="font-bold mt-2 text-base sm:text-lg">${p.price}</p>

            {/* Button */}
            <button
              onClick={() => addToCart(p)}
              className={`mt-auto p-2 rounded-lg font-semibold w-full text-center transition-colors ${
                inCart
                  ? "bg-red-500 text-black hover:bg-red-600"
                  : "bg-blue-600 text-black hover:bg-blue-700"
              }`}
            >
              {inCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
