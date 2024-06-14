import React from "react";

const Toast = ({ message, type }) => {
  return (
    <div
      className={`fixed bottom-4 right-4 px-4 py-2 text-white rounded shadow-lg ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {message}
    </div>
  );
};

export default Toast;
