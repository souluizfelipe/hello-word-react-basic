import React from 'react';

import './Card.css';

const Card = ( {image, title, text} ) => {
  return(
    <div className="card">
      <img src={image} alt={image} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Card;