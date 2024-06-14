import React from 'react';

const Card = ({ children, className, ...props }) => {
  return (
    <div className={`p-4 bg-white dark:bg-gray-800 rounded shadow-md ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
