import React from 'react';

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-md border border-gray-200 p-4 ${className}`}>
    {children}
  </div>
);

export default Card;
