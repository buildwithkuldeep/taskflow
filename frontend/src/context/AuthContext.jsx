import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const stored = typeof window !== "undefined" && localStorage.getItem("taskflow_user");
  const storedUser = stored ? JSON.parse(stored) : null;

  const [user, setUser] = useState(storedUser);

  const login = (userData) => {
    localStorage.setItem("taskflow_user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("taskflow_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
