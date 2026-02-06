import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (product) => {
    setCartItems((prev) => {
      const itemFound = prev.find((item) => item.id === product.id);

      if (itemFound) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

 
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

 
  const updateQty = (id, action) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        if (action === "inc") {
          return { ...item, qty: item.qty + 1 };
        }

        if (action === "dec") {
          return { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 };
        }

        return item;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
