import { useLocation, useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = location.state.cartItems;
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: {totalPrice}</p>
      <button
        className="bg-green-400 p-1 rounded mt-4 text-white"
        onClick={() => navigate("/")}
      >
        Voltar
      </button>
    </div>
  );
};

export default ThankYou;
