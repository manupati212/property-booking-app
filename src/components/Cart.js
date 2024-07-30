import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, handleRemoveFromCart }) => {
  const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h4>Cart</h4>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price}
              <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        Total: ${totalCost}
      </div>
    </div>
  );
};

export default Cart;
