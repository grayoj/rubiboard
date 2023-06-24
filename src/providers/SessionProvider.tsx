import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SessionProviderProps } from '../types/SessionProvider';
import { SESSION_TIMEOUT_DURATION } from '../utils/SessionTime';

const SessionContext = createContext<boolean>(false);

const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  let sessionTimeout: number;

  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      setIsLoggedIn(true);
      resetSessionTimeout();
    } else {
      setIsLoggedIn(false);
      navigate('/login');
    }
  }, [navigate]);

  const resetSessionTimeout = () => {
    if (sessionTimeout) {
      clearTimeout(sessionTimeout);
    }
    sessionTimeout = setTimeout(() => {
      logout();
    }, SESSION_TIMEOUT_DURATION);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleUserActivity = () => {
    resetSessionTimeout();
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);
    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
    };
  }, []);

  return (
    <SessionContext.Provider value={isLoggedIn}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
