import React, { useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/dashBoard/EmployeeDashboard";
import AdminDashboard from "./components/dashBoard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "danger@me.com" && password == 123) {
      console.log("This is Admin");
      setUser("admin");
    } else if (email == "masoom@me.com" && password == 123) {
      console.log("This is Employee");
      setUser("employee");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "employee" ? <EmployeeDashboard /> : <AdminDashboard />}
    </>
  );
};

export default App;
