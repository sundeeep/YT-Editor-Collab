import React, { useState, createContext, useContext } from "react";
import Toast from "./Toast";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type) => {
    setToasts([...toasts, { message, type }]);
    setTimeout(() => {
      setToasts((toasts) => toasts.slice(1));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      {toasts.map((toast, index) => (
        <Toast key={index} message={toast.message} type={toast.type} />
      ))}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
