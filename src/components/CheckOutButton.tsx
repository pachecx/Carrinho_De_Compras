import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckOutButton = ({ cartItems, setCartItems }) => {

  const navigate = useNavigate()

  const handleCheckout = () => {
    if(cartItems.length > 0){
      toast.success("Compra finalizada com sucesso!")
     
      navigate("/thankyou", {state: { cartItems }})

      setCartItems([])
    }else{
      toast.error("Seu carrinho esta vazio!")
    }
  }

  return (
    <button
      onClick={handleCheckout}
      className="bg-green-400 p-1 rounded mt-4 text-white"
    >
      Finalizar compra
    </button>
  );
};

export default CheckOutButton;
