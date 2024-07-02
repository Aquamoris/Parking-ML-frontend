// services/AppContext.tsx
import React, { createContext, useState, ReactNode, useEffect } from 'react';

type UserRole = 'user' | 'editor' | 'superadmin';

interface User {
  name: string;
  username: string;
  role: UserRole;
}

interface AppState {
  user: User | null;
}

interface AppContextProps {
  state: AppState;
  updateUser: (user: User | null) => void;
  isAuthenticated: () => boolean;
}

const initialState: AppState = {
  user: null,
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(initialState);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setState({
        user: JSON.parse(storedUser),
      });
    }
  }, []);

  const updateUser = (user: User | null) => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
    setState({ user });
  };

  const isAuthenticated = () => {
    return localStorage.getItem('user') !== null;
  };

  return (
    <AppContext.Provider value={{ state, updateUser, isAuthenticated }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
