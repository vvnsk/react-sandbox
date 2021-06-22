import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Cart from "../Cart/Cart";
import Detail from "../Detail/Detail";
import Products from "../Products/Products";
import { useEffect, useState } from "react";
import Checkout from "../Checkout/Checkout";

export default function App() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart") as any) ?? [];
    } catch {
      console.error("The cart could not be parsed into JSON.");
      return [];
    }
  });

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  function addToCart(id: any, sku: any) {
    setCart((items: any) => {
      const itemInCart = items.find((i: any) => i.sku === sku);
      if (itemInCart) {
        // Return new array with the matching item replaced
        return items.map((i: any) =>
          i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Return new array with the new item appended
        return [...items, { id, sku, quantity: 1 }];
      }
    });
  }

  function updateQuantity(sku: any, quantity: any) {
    setCart((items: any) => {
      return quantity === 0
        ? items.filter((i: any) => i.sku !== sku)
        : items.map((i: any) => (i.sku === sku ? { ...i, quantity } : i));
    });
  }

  function emptyCart() {
    setCart([]);
  }
  
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to Carved Rock Fitness</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route 
              path="/:category/:id" 
              element={<Detail addToCart={addToCart} />} 
            />
            <Route 
              path="/cart" 
              element={<Cart cart={cart} updateQuantity={updateQuantity} />} 
            />
          </Routes>
            <Route
              path="/checkout"
              element={<Checkout cart={cart} emptyCart={emptyCart} />}
            />
        </main>
      </div>
      <Footer />
    </>
  );
}
