import { useCallback, useState } from "react";
import { clearSession, getStoredUser, getToken } from "../auth";

function useAuth() {
  const [user, setUser] = useState(getStoredUser);
  const token = getToken();

  const logout = useCallback(() => {
    clearSession();
    setUser(null);
  }, []);

  return {
    user,
    token,
    isAuthenticated: Boolean(token),
    logout,
  };
}

export default useAuth;
