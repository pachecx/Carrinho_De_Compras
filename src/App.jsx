import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Catalogo from "./components/Catalogo";
import Cart from "./components/Cart";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <BrowserRouter>
      <nav className="p-2 bg-slate-700 text-white">
        <Link className="mr-3" to={"/"}>Catálogo</Link>
        <Link to={"/cart"}>Carrinho</Link>
      </nav>

      <div className="p-5">
        <Routes>
          <Route path="/" element={<Catalogo />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/thankyou" element={<ThankYou />}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
