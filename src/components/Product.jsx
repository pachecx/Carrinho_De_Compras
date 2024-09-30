/* eslint-disable react/prop-types */

import { useState } from "react"

const Product = ({product, onAddToCart}) => {

  const [quantity, setQuantity] = useState(1)

  return (
    <div className='flex flex-col gap-1 mb-7 bg-slate-200 p-2 rounded' >
        <img className="mb-2 max-h-60 max-w-72" src={product.image} alt={product.name}/> 
        <h3>{product.title}</h3>
        <p className="text-green-400 font-bold">${product.price}</p>
        <div className="card-buttons">
            <select className=" ">
                <option value="">1</option>
            </select>
            <button onClick={() => onAddToCart(product, quantity)} className="border border-solid border-gray-400 rounded-md px-2 bg-slate-300 hover:bg-slate-400">
                Adicionar ao carrinho
            </button>
        </div>
    </div>
  )
}

export default Product