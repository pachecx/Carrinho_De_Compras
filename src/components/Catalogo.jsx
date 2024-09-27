import ProductsData from "../data/products.mock.json";
import { useState, useEffect } from "react";
import Product from "./Product";

const Catalogo = () => {
  return (
    <div>
      <h1 className="text-3xl mb-5">Catalogo de produtos</h1>
        <div className="flex gap-3 flex-wrap">      
        {ProductsData.map((product) => (
        <Product key={product.id} product={product}/>
      ))}
      </div>

    </div>
  );
};

export default Catalogo;
