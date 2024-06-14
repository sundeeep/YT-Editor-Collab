import React from "react";

const Input = ({ type, value, onChange, className, ...props }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-primary shadow-sm ${className}`}
      {...props}
    />
  );
};

export default Input;
