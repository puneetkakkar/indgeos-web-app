import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserDetails, loginUser } from "../services/authService";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useLocalStorage("user", userData);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data) => {
    try {
      const { data = null } = await loginUser();
      const userData = await getUserDetails(data?.type, data?.token);

      setUser(userData);
      navigate("/", { replace: true });
    } catch (error) {
      setError(
        error.response?.data?.message ??
          "Invalid email/password. Please try again."
      );

      setTimeout(() => setError(null), 5000);
    }
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      error,
    }),
    [user, error]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
