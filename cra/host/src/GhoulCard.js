import React from 'react';

const GhoulCard = ({ image, name, type, description }) => (
  <div className="ghoul-card">
    <img src={image} alt={`${name}`}/>
    <h3>{name}</h3>
    <p>Type: {type}</p>
    <p>Description: {description}</p>
  </div>
);

export default GhoulCard;
