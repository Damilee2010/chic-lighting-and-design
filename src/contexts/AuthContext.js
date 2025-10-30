'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

// localStorage keys
const USER_KEY = 'clad_user';
const TOKEN_KEY = 'clad_token';

export function AuthProvider({ children }) {
  // initialize from localStorage if present
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  });

  useEffect(() => {
    // keep localStorage in sync for non-sensitive public user info
    try {
      if (user) localStorage.setItem(USER_KEY, JSON.stringify(user));
      else localStorage.removeItem(USER_KEY);
    } catch (e) {
      // ignore storage errors
    }
  }, [user]);

  const register = ({ fullname, email, password }) => {
    // persist credentials locally for this simple demo
    // NOTE: In production do NOT store plain passwords in localStorage.
    try {
      const stored = { fullname, email, password };
      localStorage.setItem(USER_KEY, JSON.stringify(stored));
      // set a simple token to indicate logged in
      localStorage.setItem(TOKEN_KEY, '1');
      setUser({ fullname, email });
      return { success: true };
    } catch (e) {
      return { success: false, message: 'Storage error' };
    }
  };

  const login = (email, password) => {
    try {
      const raw = localStorage.getItem(USER_KEY);
      const stored = raw ? JSON.parse(raw) : null;
      if (stored && stored.email === email && stored.password === password) {
        localStorage.setItem(TOKEN_KEY, '1');
        setUser({ fullname: stored.fullname, email: stored.email });
        return { success: true };
      }
      return { success: false, message: 'Invalid credentials' };
    } catch (e) {
      return { success: false, message: 'Storage error' };
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem(TOKEN_KEY);
      // keep user info or remove it depending on app needs; here remove
      localStorage.removeItem(USER_KEY);
    } catch (e) {
      // ignore
    }
    setUser(null);
  };

  const isAuthenticated = !!(user && localStorage.getItem(TOKEN_KEY));

  return (
    <AuthContext.Provider value={{ user, register, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);