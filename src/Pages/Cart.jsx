import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQty } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cartItems.length === 0) {
    return <h2 className="text-center mt-20">Cart is empty 🛒</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-24 p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center mb-4 border-b pb-4"
        >
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p>₹ {item.price}</p>

            <div className="flex gap-2 mt-2 items-center">
           
              <button
                onClick={() => updateQty(item.id, "dec")}
                disabled={item.qty === 1}
                className={`px-2 ${
                  item.qty === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                ➖
              </button>

              <span>{item.qty}</span>

              <button
                onClick={() => updateQty(item.id, "inc")}
                className="px-2 cursor-pointer"
              >
                ➕
              </button>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <h2 className="text-xl font-bold mt-6">
        Total: ₹ {total.toFixed(2)}
      </h2>
    </div>
  );
}

export default Cart;
