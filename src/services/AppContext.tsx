// services/AppContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface AppState {
  user: string | null;
}

interface AppContextProps {
  state: AppState;
  updateUser: (user: string | null) => void;
  isAuthenticated: () => boolean;
}

const initialState: AppState = {
  user: null,
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(initialState);

  const updateUser = (user: string | null) => {
    setState((prevState) => ({ ...prevState, user }));
  };

  const isAuthenticated = () => {
    return state.user !== null;
  };

  return (
    <AppContext.Provider value={{ state, updateUser, isAuthenticated }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
