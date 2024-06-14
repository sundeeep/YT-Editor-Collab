import React from "react";

const Label = ({ children, htmlFor, className, ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
