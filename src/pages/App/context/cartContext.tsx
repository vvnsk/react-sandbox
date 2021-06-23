import { useReducer, useEffect, useContext, createContext } from "react";
import cartReducer from "../reducer/cartReducer";

const CartContext: any = createContext(null);

let initialCart: any;
try {
  initialCart = JSON.parse(localStorage.getItem("cart") as any) ?? [];
} catch {
  console.error("The cart could not be parsed into JSON.");
  initialCart = [];
}

export function CartProvider(props: any) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);
  const contextValue = {
    cart,
    dispatch,
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "useCart must be used within a CartProvider. Wrap a parent component in <CartProvider> to fix this error."
    );
  }
  return context as any;
}
