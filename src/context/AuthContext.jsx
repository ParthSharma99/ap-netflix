import { createContext, useContext, useState } from "react";
import { AUTH } from "../config";

const AuthContext = createContext(null);

const SESSION_KEY = "ap_netflix_auth";

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(() => {
    return sessionStorage.getItem(SESSION_KEY) === "true";
  });

  const login = (username, password) => {
    if (username === AUTH.username && password === AUTH.password) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
