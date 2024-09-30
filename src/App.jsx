import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Catalogo from "./components/Catalogo";
import Cart from "./components/Cart";
import ThankYou from "./components/ThankYou";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);

      if (itemExists) {
        toast.info(`Quantidade do item ${product.name} atualizada!`);

        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        toast.success(`${product.name} adicionado com sucesso!`);
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  return (
    <BrowserRouter>
      <nav className="p-2 bg-slate-700 text-white">
        <Link className="mr-3" to={"/"}>
          Catálogo
        </Link>
        <Link to={"/cart"}>Carrinho</Link>
      </nav>

      <div className="p-5">
        <Routes>
          <Route path="/" element={<Catalogo onAddToCart={handleAddCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
