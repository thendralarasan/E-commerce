import { useCart } from "../../context/CartContext";

function CartSidebar() {
  const { cartItems, incrementQty, decrementQty, removeFromCart } = useCart();

 const total = cartItems.reduce((sum, item) => {
  const price = Number(item.price) || 0;
  const qty = Number(item.quantity) || 1;
  return sum + price * qty;
}, 0);


  return (
    <div className="bg-white shadow-lg rounded-lg p-4 sticky top-28 h-fit">
      <h2 className="text-xl font-bold mb-4">🛒 Cart</h2>

      {cartItems.length === 0 && (
        <p className="text-gray-500 text-sm">No items in cart</p>
      )}

      {cartItems.map((item) => (
        <div key={item.id} className="border-b pb-3 mb-3">
          <h4 className="text-sm font-semibold">{item.title}</h4>
          <p className="text-green-600 font-bold">₹ {item.price}</p>

          <div className="flex items-center gap-3 mt-2">
            <button onClick={() => decrementQty(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => incrementQty(item.id)}>+</button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 text-xs mt-2"
          >
            Remove
          </button>
        </div>
      ))}

      {cartItems.length > 0 && (
        <div className="mt-4 font-bold text-lg">
          Total: ₹ {total.toFixed(2)}
        </div>
      )}
    </div>
  );
}

export default CartSidebar;
