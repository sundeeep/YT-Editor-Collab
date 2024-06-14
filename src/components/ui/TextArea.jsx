import React from "react";

const Textarea = ({ value, onChange, className, ...props }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-primary shadow-sm ${className}`}
      {...props}
    />
  );
};

export default Textarea;
