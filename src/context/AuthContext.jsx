import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(() => {
    const savedState = localStorage.getItem('isLoggedIn');
    return savedState ? JSON.parse(savedState) : false;
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(loggedIn));
  }, [loggedIn]);

  const toggleAuth = () => {
    setLoggedIn(prev => !prev);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
}; 