/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const CartItem = ({ item, onUpdateCart, onRemoveFromCart }) => {
  return (
    <div className="border rounded mt-6">
      <h3 className="font-bold mb-2">{item.name}</h3>
      <p className="text-green-600">$ {item.price}</p>

      <div>
        <input
          className="border"
          type="text"
          value={item.quantity}
          onChange={(e) => onUpdateCart(item, parseInt(e.target.value))}
        />
        <button
          onClick={(e) => onRemoveFromCart(item)}
          className="bg-green-500 rounded p-1 text-white hover:bg-green-700"
        >
          Remover
        </button>
      </div>
    </div>
  );
};

export default CartItem;
