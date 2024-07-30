import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data:', formData);
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h4>Checkout</h4>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </label>
      <label>
        Payment Method:
        <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </label>
      <button type="submit">Place Order</button>
    </form>
  );
};

export default CheckoutForm;
