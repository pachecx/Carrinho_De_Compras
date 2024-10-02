/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import CartItem from "./CartItem";
import CheckOutButton from "./CheckOutButton";

const Cart = ({ cartItems, onUpdateCart, onRemoveFromCart, setCartItems }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Carrinho</h1>

      {cartItems.length === 0 ? (
        <p>Não há itens no carrinho</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateCart={onUpdateCart}
              onRemoveFromCart={onRemoveFromCart}
            />
          ))}

          <div>
            <p>Total: ${totalPrice.toFixed(2)}</p>
          </div>

          <CheckOutButton cartItems={cartItems} setCartItems={setCartItems} />
        </>
      )}
    </div>
  );
};

export default Cart;
