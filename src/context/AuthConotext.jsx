import axios from "axios";
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const isExist = localStorage.getItem("User");
  const [user, setUser] = useState(isExist ? isExist : null);

  const login = (username, password) => {
    axios
      .post("http://localhost:3000/login", { username, password })
      .then((res) => {
        localStorage.setItem("User", JSON.stringify(res.data));
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.removeItem("User");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
