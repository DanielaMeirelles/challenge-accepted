import React, { useState } from 'react';
import './styles.css'; // Estilo dos cards

const Card = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`card ${expanded ? 'expanded' : ''}`} onClick={handleCardClick}>
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default Card;
