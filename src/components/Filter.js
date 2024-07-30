import React from 'react';
import './Filter.css';

const Filter = ({ filters, handleFilterChange }) => {
  return (
    <div className="filter-container">
      <h4>Filters</h4>
      <label>
        Location:
        <select name="location" onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="city1">City 1</option>
          <option value="city2">City 2</option>
        </select>
      </label>
      <label>
        Price:
        <input type="number" name="price" onChange={handleFilterChange} />
      </label>
      <label>
        Bedrooms:
        <select name="bedrooms" onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>
      <label>
        Amenities:
        <input type="checkbox" name="amenities" value="wifi" onChange={handleFilterChange} /> WiFi
        <input type="checkbox" name="amenities" value="parking" onChange={handleFilterChange} /> Parking
      </label>
    </div>
  );
};

export default Filter;
