import React, { createContext, useContext, useState, ReactNode } from "react";

interface NavigationContextType {
  activeNavItem: string;
  setActiveNavItem: (item: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

interface NavigationProviderProps {
  children: ReactNode;
}

const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const [activeNavItem, setActiveNavItem] = useState<string>("Home");

  const contextValue: NavigationContextType = {
    activeNavItem,
    setActiveNavItem,
  };

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
};

const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};

export { NavigationProvider, useNavigation };
