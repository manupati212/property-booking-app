import React, { useState } from 'react';
import PropertyCard from './components/PropertyCard';
import Filter from './components/Filter';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import propertiesData from './data/properties.json'; // Importing the properties data
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    price: '',
    bedrooms: '',
    amenities: []
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prevFilters) => {
      if (type === 'checkbox') {
        const amenities = checked
          ? [...prevFilters.amenities, value]
          : prevFilters.amenities.filter((amenity) => amenity !== value);
        return { ...prevFilters, amenities };
      }
      return { ...prevFilters, [name]: value };
    });
  };

  const handleAddToCart = (property) => {
    setCart([...cart, property]);
  };

  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const filteredProperties = propertiesData.filter((property) => {
    // Apply filtering logic
    // Example: return property.location.includes(filters.location) && property.price <= filters.price;
    return true; // Simplified for brevity
  });

  return (
    <div className="App">
      <Filter filters={filters} handleFilterChange={handleFilterChange} />
      <div className="property-list">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <Cart cartItems={cart} handleRemoveFromCart={handleRemoveFromCart} />
      <CheckoutForm />
    </div>
  );
};

export default App;
