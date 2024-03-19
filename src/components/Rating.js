import React from 'react';

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((star, index) => (
        <span key={index} style={{ color: star <= rating ? 'gold' : 'grey' }}>★</span> 
      ))}
    </div>
  );
};

export default Rating;
