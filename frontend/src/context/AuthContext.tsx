import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { authService, type User } from '../services/api';
import { jwtDecode } from 'jwt-decode';

interface AuthContextType {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && token !== 'undefined' && token !== 'null') {
      try {
        const decoded = jwtDecode<User>(token);
        setUser(decoded);
      } catch (e) {
        console.error('Invalid token on load', e);
        localStorage.removeItem('token');
      }
    } else {
      localStorage.removeItem('token');
    }
    setIsLoading(false);
  }, []);

  const login = (token: string) => {
    if (!token || token === 'undefined' || token === 'null') return;
    try {
      localStorage.setItem('token', token);
      const decoded = jwtDecode<User>(token);
      setUser(decoded);
    } catch (e) {
      console.error('Login failed: Invalid token', e);
      localStorage.removeItem('token');
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
