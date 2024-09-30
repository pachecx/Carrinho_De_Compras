/* eslint-disable react/prop-types */
const Cart = ({ cartItems }) => {
  return (
    <div>
      <h1>Carrinho</h1>

      {cartItems.length === 0 ? (
        <p>Não há itens no carrinho</p>
      ) : (
        <>
          {cartItems.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <p>{item.name}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
