import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Cart from "../Cart/Cart";
import Detail from "../Detail/Detail";
import Products from "../Products/Products";
import { useEffect, useReducer } from "react";
import Checkout from "../Checkout/Checkout";
import cartReducer from "./reducer/cartReducer";

let initialCart: any;
try {
  initialCart = JSON.parse(localStorage.getItem("cart") as any) ?? [];
} catch {
  console.error("The cart could not be parsed into JSON.");
  initialCart = [];
}

export default function App() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

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
              element={<Detail dispatch={dispatch} />} 
            />
            <Route 
              path="/cart" 
              element={<Cart cart={cart} dispatch={dispatch} />} 
            />
            <Route
              path="/checkout"
              element={<Checkout cart={cart} dispatch={dispatch} />}
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
