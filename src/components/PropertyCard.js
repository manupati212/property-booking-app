import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} className="property-image" />
      <div className="property-details">
        <h3>{property.title}</h3>
        <p>{property.description}</p>
        <p>Price: ${property.price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
