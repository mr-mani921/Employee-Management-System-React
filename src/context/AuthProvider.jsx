import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const { empData, adminData } = getLocalStorage();
    setUserData({ empData, adminData });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
