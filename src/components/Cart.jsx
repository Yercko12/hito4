import React, { useState } from "react";
import { pizzaCart } from "../assets/pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const updateQuantity = (id, increment) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              count: Math.max(0, item.count + (increment ? 1 : -1)),
            }
          : item
      )
    );
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.count, 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.img} alt={item.name} style={{ width: "150px", height: "100px"}}/>
          <h4>{item.name}</h4>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.count}</p>
          <button onClick={() => updateQuantity(item.id, true)}>+</button>
          <button onClick={() => updateQuantity(item.id, false)}>-</button>
        </div>
      ))}
      <h3>Total: ${calculateTotal()}</h3>
      <button>Pagar</button>
    </div>
  );
};

export default Cart;
