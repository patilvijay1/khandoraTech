import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const value = {
    isLoading,
    setIsLoading,
    mobileMenuOpen,
    setMobileMenuOpen,
    toggleMobileMenu,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
