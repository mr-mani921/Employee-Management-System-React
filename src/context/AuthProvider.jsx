import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const { employees = [], admin = null } = getLocalStorage() || {};
    return { employees, admin };
  });

  useEffect(() => {
    // Initialize local storage if not already set
    if (!localStorage.getItem("employees")) {
      setLocalStorage(); // Assuming it initializes default data
    }
    // Sync state with latest local storage data
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
