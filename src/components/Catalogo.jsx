/* eslint-disable react/prop-types */
import ProductsData from "../data/products.mock.json";
import { useState, useEffect } from "react";
import Product from "./Product";

const Catalogo = ({ onAddToCart }) => {
  return (
    <div>
      <h1 className="text-3xl mb-7">Catalogo de produtos</h1>
      <div className="flex gap-3 flex-wrap">
        {ProductsData.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
