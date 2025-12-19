import { useCart } from "../context/cartcontext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = total * 0.1;
  const finalTotal = total - discount;

  if (cart.length === 0)
    return <div className="p-6 text-center text-lg">Your cart is empty 🛒</div>;

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Your Cart</h1>

      {/* Cart Items */}
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white shadow-md p-4 rounded-lg gap-4 hover:shadow-lg transition"
          >
            {/* Product Info */}
            <div className="flex-1 w-full">
              <h2 className="font-semibold text-base sm:text-lg line-clamp-2">
                {item.title}
              </h2>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">
                ${item.price} × {item.quantity} ={" "}
                <span className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-2 font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm sm:text-base"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Totals Section */}
      <div className="mt-6 bg-white shadow-md p-4 rounded-lg text-right">
        <p className="text-lg sm:text-xl">Total: ${total.toFixed(2)}</p>
        <p className="text-green-600 text-sm sm:text-base">
          Discount (10%): -${discount.toFixed(2)}
        </p>
        <h2 className="text-xl sm:text-2xl font-bold mt-2">
          Final Price: ${finalTotal.toFixed(2)}
        </h2>
      </div>
    </div>
  );
}
