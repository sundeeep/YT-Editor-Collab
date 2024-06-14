import React from "react";

const Button = ({ children, onClick, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-medium text-white bg-primary rounded hover:bg-pink-600 shadow-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
