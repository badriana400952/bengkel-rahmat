"use client";

import React, { createContext, useContext, useState } from "react";

type GlobalContextType = {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <GlobalContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used inside GlobalProvider");
  }
  return context;
}
