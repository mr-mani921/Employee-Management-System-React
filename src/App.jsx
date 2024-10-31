import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/dashBoard/EmployeeDashboard";
import AdminDashboard from "./components/dashBoard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.admin.email === email &&
      authData.admin.password === password
    ) {
      const adminData = { role: "admin", data: authData.admin };
      setUser(adminData);
      localStorage.setItem("loggedInUser", JSON.stringify(adminData));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        const employeeData = { role: "employee", data: employee };
        setUser(employeeData);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeData));
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === "admin" ? (
        <AdminDashboard userData={user.data} />
      ) : (
        user.role === "employee" && <EmployeeDashboard userData={user.data} />
      )}
    </>
  );
};

export default App;
